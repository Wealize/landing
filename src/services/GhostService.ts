import { PostOrPage } from '@tryghost/content-api'

import GhostPostResponse from '../interfaces/Ghost/GhostPostResponse'

import ApiClient from './ApiClient'

const CONTENT_API_BASE_URL = `${process.env.GHOST_API_BASE_URL}/ghost/api/v3/content/`
const PAGE_SIZE = 3

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
  public static async getPostBySlug (slug: string): Promise<GhostPostResponse> {
    const url = `${CONTENT_API_BASE_URL}posts/slug/${slug}/?key=${process.env.GHOST_CONTENT_API_KEY}`
    return await ApiClient.get(url)
  }

  public static async getPostsByPaginationPage (page: string): Promise<GhostPostResponse> {
    const url = `${CONTENT_API_BASE_URL}posts/?page=${page}&limit=${PAGE_SIZE}&key=${process.env.GHOST_CONTENT_API_KEY}`
    const { posts, meta } = await ApiClient.get(url)

    if (!posts.length) return { posts: null, meta: null }

    const postsDateFormatted: PostOrPage[] = formatPostsDate(posts)

    return { posts: postsDateFormatted, meta }
  }
}

export default GhostService
