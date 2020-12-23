/* eslint-disable camelcase */

export interface CardExpandable {
  headline: string
  subheadline: string
  description: string
  image: React.ReactElement
  backgroundColor: string
  textColor: string
  isExpanded: boolean = false
}
