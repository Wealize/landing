import styled from 'styled-components'


import { DEFAULT_RADIUS } from '../../../theme/border'
import { media } from '../../../theme/media'
import { singlePx, singleAndHalfPx } from '../../../theme/space'

export const Anchor = styled.a<{
  color: string
  textColor: string
  isFeatured: boolean
}>`
  width: 100%;
  background-color: ${({ color, textColor, isFeatured }) => (isFeatured ? textColor : color)};
  z-index: 1;
  color: ${({ color, textColor, isFeatured }) => (isFeatured ? color : textColor)};
  text-decoration: none;
  display: inline-block;
  border-radius: ${DEFAULT_RADIUS}px;
  border: 2px solid ${({ textColor }) => textColor};
  min-height: 15rem;
  overflow: hidden;
  cursor: pointer;

  ${media.greaterThan('md')`
    min-height: 17rem;
  `};

  ${media.greaterThan('lg')`
    min-height: 18rem;
  `};
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Header = styled.header``

export const CardImage = styled.div<{isVisible: boolean}>`
  position: relative;
  width: 100%;
  min-height: 15rem;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};

  & img, .rect-shape {
    display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  }
`

export const CardHeadline = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  padding: ${singlePx()} ${singlePx()} 0 ${singlePx()};
  line-height: 1.4;
`

export const EntryContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  line-height: 1.5;
  flex-direction: column;
  justify-content: space-between;
  padding: ${singlePx()};

  & p {
    font-size: 1.1rem;
  }
`

export const CardPublishedAt = styled.span<{isShowDate: boolean}>`
  font-size: 0.9rem;
  padding-top: ${singleAndHalfPx()};
  font-style: italic;
  display: ${({ isShowDate }) => (isShowDate ? 'block' : 'none')};
`
