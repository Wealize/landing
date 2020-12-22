import styled from 'styled-components'

import {
  singlePx,
  singleAndHalfPx,
  doublePx,
  triplePx,
  quadruplePx,
  quadruple
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
    padding: ${singleAndHalfPx()} ${quadruple() * 2}px;
  `};

  ${media.greaterThan('lg')`
    padding: ${quadruplePx()} ${doublePx()};
    min-height: 900px;
    min-width: 110%;
    justify-content: space-between;
  `};

  ${media.greaterThan('xl')`
    min-height: 980px;
  `};

  ${media.greaterThan('xxl')`
    padding: ${quadruplePx()};
    min-height: 1100px;
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
    max-height: 1000px;
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

  & svg {
    width: 40%;

    ${media.greaterThan('md')`
      width: 55%;
    `};

    ${media.greaterThan('lg')`
      width: 65%;
    `};
  }
  ${media.greaterThan('md')`
    padding: ${triplePx()} 0;
  `};

  ${media.greaterThan('lg')`
    padding: ${quadruplePx()} 0;
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
