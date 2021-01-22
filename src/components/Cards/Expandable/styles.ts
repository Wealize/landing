import styled from 'styled-components'

import {
  singlePx,
  singleAndHalfPx,
  doublePx,
  triplePx,
  doubleAndHalf
} from '../../../theme/space'
import { media } from '../../../theme/media'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'

export const Container = styled.div<{
  backgroundColor: string
  textColor: string
  isExpanded: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  transition: all 0.5s ease-out;
  ${CONTAINER_SPACING.MOBILE};

  ${media.greaterThan('md')`
    padding: ${singleAndHalfPx()} ${doubleAndHalf() * 2}px;
  `};

  ${media.greaterThan('lg')`
    padding: ${singleAndHalfPx()} ${doublePx()};
    min-height: 100%;
    min-width: 110%;
    flex-wrap:wrap;
    justify-content: flex-start;
    align-items: flex-start;
  `};

  ${media.greaterThan('xxl')`
    min-height: 100%;
  `};

  ${media.greaterThan('xxxl')`
    min-height: 100%;
  `};
`

export const Header = styled.div<{
  isExpanded: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ isExpanded }) => (isExpanded ? singlePx() : 0)}px;
`

export const Content = styled.div<{
  isExpanded: boolean
}>`
  flex-direction: column;
  justify-content: center;
  transition: max-height 0.5s ease-out;
  overflow: hidden;
  height: auto;
  max-height: ${({ isExpanded }) => (isExpanded ? 1000 : 0)}px;

  ${media.greaterThan('lg')`
    max-height: 100%;
  `};
`

export const Headline = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`

export const Toggle = styled.button<{
  textColor: string
  isExpanded: boolean
}>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 0.5s ease-out;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'};

  & svg > g > path:last-child {
    fill: ${({ textColor }) => textColor};
  }

  & svg > path {
    fill: ${({ textColor }) => textColor};
  }

  ${media.greaterThan('md')`
      width: 50px;
      height: 50px;
  `};

  ${media.greaterThan('lg')`
    display: none;
  `};
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${doublePx()} 0;

  & svg {
    width: 60%;

    ${media.greaterThan('lg')`
      width: 80%;
    `};

    ${media.greaterThan('xl')`
      width: 70%;
    `};
  }

  ${media.greaterThan('md')`
    padding: ${triplePx()} 0;
  `};
`

export const Subheadline = styled.h4`
  display: flex;
  line-height: 1.2;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 1.8rem;
  text-align: left;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    font-size: 1.7rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.75rem;
  `};
`

export const Description = styled.h5`
  font-size: 1.1rem;
  text-align: left;
  line-height: 1.43;

  ${media.greaterThan('md')`
    font-size: 1.1rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.1rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.2rem;
  `};
`
