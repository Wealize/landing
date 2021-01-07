/* eslint-disable camelcase */
export interface CardRounded {
  trans_key?: string
  imageUrl: string
  title: string
  description: string
  link: CardRoundedLink | null
  tags: string[]
  hasPrimary: boolean
}
