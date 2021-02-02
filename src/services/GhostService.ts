import GhostContentAPI from '@tryghost/content-api'

import { API_URL } from '../constants/ghost'

// Create API instance
const api = new GhostContentAPI({
  url: `${API_URL}`,
  key: `${process.env.GHOST_CONTENT_API_KEY}`,
  version: 'v3'
})

class GhostService {
  public static async getPostById (id: string) {
    return await api.posts
      .browse({
        filter: `id:${id}`
      })
      .catch(err => {
        console.error(err)
      })
  }

  public static async getPostBySlug (slug: string) {
    return await api.posts
      .browse({
        filter: `slug:${slug}`
      })
      .catch(err => {
        console.error(err)
      })
  }

  public static async getAllPosts () {
    return await api.posts
      .browse({
        limit: 'all',
        fields: ['title', 'slug', 'url', 'excerpt']
      })
      .catch(err => {
        console.error(err)
      })
  }

  public static async getFilteredPostsByTitle (title: string) {
    return await api.posts
      .browse({
        filter: `title:'${title}'`,
        order: ''
      })
      .catch(err => {
        console.error(err)
      })
  }
}

export default GhostService
