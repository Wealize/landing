/* eslint-disable camelcase */

export interface RoundedCardProps {
  imageUrl: string
  title: string
  description: string
  link: {
    text: string
    url: string
    color: string
  } | null
  tags: string[]
  hasPrimary: boolean
}
