import { PostOrPage } from '@tryghost/content-api'

import GhostMetaPagination from './GhostMetaPagination'

export default interface GhostResponse {
  posts: PostOrPage[]
  meta: GhostMetaPagination
}
