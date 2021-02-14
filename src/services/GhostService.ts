import { PostOrPage } from '@tryghost/content-api'

import GhostPostResponse from '../interfaces/Ghost/GhostPostResponse'

import ApiClient from './ApiClient'

const CONTENT_API_BASE_URL = `${process.env.GHOST_API_BASE_URL}/ghost/api/v3/content/`
const PAGE_SIZE = 4

const formatPostsDate = (posts: PostOrPage[]): PostOrPage[] => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return posts?.map((post: PostOrPage) => {
    post.published_at = new Intl.DateTimeFormat('en-US', options)
      .format(new Date(post.published_at))

    return post
  })
}

class GhostService {
  public static async getPostBySlug (slug: string): Promise<PostOrPage> {
    const includeQuery = '?include=tags,read_time,authors'
    const url = `${CONTENT_API_BASE_URL}posts/slug/${slug}/${includeQuery}&key=${process.env.GHOST_CONTENT_API_KEY}`

    const { posts } = await ApiClient.get(url)

    return posts?.length ? posts[0] : null
  }

  public static async getPostsByTagsAndPaginationPage (
    page: string, tags: string[], pageSize:number = PAGE_SIZE): Promise<GhostPostResponse> {
    const pageQuery = `?page=${page}`
    const limitQuery = `&limit=${pageSize}`
    const includeQuery = '&include=tags'
    const fieldsQuery = '&fields=title,feature_image,published_at,html,featured,custom_excerpt,slug'
    const filterQuery = tags?.length ? `&filter=tags:[${tags.join()}]` : ''
    const url = `${CONTENT_API_BASE_URL}posts/${pageQuery}${fieldsQuery}${limitQuery}${includeQuery}${filterQuery}&key=${process.env.GHOST_CONTENT_API_KEY}`

    const { posts, meta } = await ApiClient.get(url)

    if (!posts.length || (Array.isArray(tags) && !tags?.length)) return { posts: null, meta: null }

    const postsDateFormatted: PostOrPage[] = formatPostsDate(posts)

    return { posts: postsDateFormatted, meta }
  }
}

export default GhostService
