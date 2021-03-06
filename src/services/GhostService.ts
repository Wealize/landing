import { PostOrPage } from '@tryghost/content-api'

import GhostPostResponse from '../interfaces/Ghost/GhostPostResponse'

import ApiClient from './ApiClient'

const CONTENT_API_BASE_URL = `${process.env.GHOST_API_BASE_URL}/ghost/api/v3/content/`
const PAGE_SIZE = 4

class GhostService {
  public static async getPostBySlug (slug: string, formatDateLang = 'en'): Promise<PostOrPage | null> {
    const includeQuery = '?include=tags,read_time,authors'
    const url = `${CONTENT_API_BASE_URL}posts/slug/${slug}/${includeQuery}&key=${process.env.GHOST_CONTENT_API_KEY}`

    const { posts } = await ApiClient.get(url)
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    const post = posts?.length ? posts[0] : null
    if (!post) return null

    post.published_at = new Intl
      .DateTimeFormat(formatDateLang, options)
      .format(new Date(post?.published_at)).replace('.', '')

    return post
  }

  public static async getPostsByTagsAndPaginationPage (
    page: string,
    tags: string[],
    pageSize: number = PAGE_SIZE
  ): Promise<GhostPostResponse> {
    const pageQuery = `?page=${page}`
    const limitQuery = `&limit=${pageSize}`
    const includeQuery = '&include=tags'
    const fieldsQuery = '&fields=uuid,title,feature_image,published_at,html,featured,custom_excerpt,slug'
    const filterQuery = tags?.length ? `&filter=tags:[${tags.join()}]` : ''
    const url = `${CONTENT_API_BASE_URL}posts/${pageQuery}${fieldsQuery}${limitQuery}${includeQuery}${filterQuery}&key=${process.env.GHOST_CONTENT_API_KEY}`

    const tagsIsEmptyArray = (Array.isArray(tags) && !tags?.length)

    const { posts, meta } = await ApiClient.get(url)

    if (!posts.length || tagsIsEmptyArray) return { posts: null, meta: null }

    return { posts, meta }
  }
}

export default GhostService
