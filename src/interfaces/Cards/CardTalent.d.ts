/* eslint-disable camelcase */
import { SocialNetwork } from '../SocialNetwork'

export interface CardTalent {
  trans_key?: string
  imageUrl: string
  name: string
  role: string
  socialNetworks: SocialNetwork[]
}
