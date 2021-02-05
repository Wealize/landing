import { PostOrPage } from '@tryghost/content-api'

export default interface GhostResponse {
  posts: PostOrPage[]
  meta: Ghost
}
