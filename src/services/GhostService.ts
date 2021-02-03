import GhostContentAPI from '@tryghost/content-api'

import { API_URL } from '../constants/ghost'
import GhostPost from '../interfaces/Ghost/GhostPost'

// Create API instance
const api = new GhostContentAPI({
  url: `${API_URL}`,
  key: `${process.env.GHOST_CONTENT_API_KEY}`,
  version: 'v3'
})

class GhostService {
  public static async getPostById (id: string):Promise<GhostPost[]> {
    return await api.posts
      .browse({
        filter: `id:${id}`
      })
  }

  public static async getPostBySlug (slug: string):Promise<GhostPost[]> {
    return await api.posts
      .browse({
        filter: `slug:${slug}`
      })
  }

  public static async getAllPosts ():Promise<GhostPost[]> {
    return await api.posts
      .browse({
        limit: 'all',
        fields: ['title', 'slug', 'url', 'excerpt']
      })
  }

  public static async getFilteredPostsByTitle (title: string):Promise<GhostPost[]> {
    return await api.posts
      .browse({
        filter: `title:'${title}'`,
        order: ''
      })
  }
}

export default GhostService
