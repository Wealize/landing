export interface CardRounded {
  imageUrl: string
  title: string
  description: string
  link: CardRoundedLink | null
  tags: string[]
  hasPrimary: boolean
}
