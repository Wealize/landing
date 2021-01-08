import styled from 'styled-components'

import {
  singlePx,
  singleAndHalfPx,
  doublePx,
  triplePx,
  doubleAndHalf,
  quadruplePx
} from '../../../theme/space'
import { media } from '../../../theme/media'

export const Container = styled.div<{
  backgroundColor: string
  textColor: string
  isExpanded: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${singleAndHalfPx()} ${singlePx()};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  transition: all 0.5s ease-out;

  ${media.greaterThan('md')`
    padding: ${singleAndHalfPx()} ${doubleAndHalf() * 2}px;
  `};

  ${media.greaterThan('lg')`
    padding: ${singleAndHalfPx()} ${doublePx()};
    min-height: 115%;
    min-width: 110%;
    flex-wrap:wrap;
    justify-content: space-between;
  `};

  ${media.greaterThan('xl')`
    padding: ${doublePx()} ${triplePx()};
    min-height: 125%;
  `};

  ${media.greaterThan('xxl')`
    padding: ${quadruplePx()};
    min-height: 145%;
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
  flex: 1 1 auto;
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
  flex: 1 1 auto;

  ${media.greaterThan('lg')`
    max-height: 100%;
  `};
`

export const Headline = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;

  ${media.greaterThan('md')`
    font-size: 1.2rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.5rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 2rem;
  `};
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
  flex: 1 1 auto;

  & svg {
    width: 50%;

    ${media.greaterThan('lg')`
      width: 75%;
    `};

    ${media.greaterThan('xl')`
      width: 60%;
    `};

    ${media.greaterThan('xxl')`
      width: 55%;
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
    font-size: 1.8rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.2rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 2.5rem;
  `};
`

export const Description = styled.h5`
  font-size: 1.1rem;
  text-align: left;
  line-height: 1.43;

  ${media.greaterThan('md')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.7rem;
  `};
`
