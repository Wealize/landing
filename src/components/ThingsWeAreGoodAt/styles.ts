import styled from 'styled-components'

import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import {
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  triple,
  quadruple
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'

export const Container = styled.div`
  width: 100%;
  background-color: ${ACCENT_COLOR};
  padding-top: ${singlePx()};
  border-top-right-radius: ${DEFAULT_RADIUS}px;

  ${media.greaterThan('md')`
    padding-top: ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    position: relative;
    width: 90%;
    border-top-right-radius: initial;
    border-top-left-radius: ${DEFAULT_RADIUS}px;
    margin: ${triplePx()} 0 ${triple() * 7}px 10%;
  `};

  ${media.greaterThan('xl')`
    margin: ${quadruplePx()} 0 ${quadruple() * 6}px 10%;
  `};

  ${media.greaterThan('xxl')`
    margin: ${quadruplePx()} 0 ${quadruple() * 8}px 10%;
  `};
`

export const Title = styled.h3`
  width: 100%;
  background-color: ${ACCENT_COLOR};
  padding: 0 ${singlePx()} ${quadruplePx()};
  color: ${WHITE_COLOR};
  line-height: 1.33;
  font-weight: bold;
  text-transform: uppercase;

  ${media.greaterThan('md')`
    font-size: 1.3rem;
    padding-left: ${doublePx()};
    padding-bottom: ${triplePx()};
  `};

  ${media.greaterThan('lg')`
    padding: ${doublePx()} ${doublePx()} ${quadruplePx()};
    font-size: 1.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2rem;
  `};
`

export const CardsContainer = styled.div`
  width: 100%;
  background-color: ${ACCENT_COLOR};
  transition: all 0.3s;

  ${media.greaterThan('lg')`
    display: flex;
    flex-direction: row;
    min-height: 500px;
  `};

  ${media.greaterThan('xl')`
    display: flex;
    flex-direction: row;
  `};
`

export const FirstCard = styled.article<{
  isVisible: boolean
}>`
  ${({ isVisible }) => media.greaterThan('lg')`
    transition: all 1s;
    position: absolute;
    transform: ${isVisible ? 'translateY(-5%)' : 'translateY(20%)'} ;
    left: -5%;
    height: 100%;
    max-width: 33.3%;
  `};

  ${media.greaterThan('xl')`
    position: absolute;
    left: -5%;
    height: 100%;
    max-width: 33.3%;
  `};
`
export const SecondCard = styled.article<{
  isVisible: boolean
}>`
  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.5s;
      position: absolute;
      left: 29%;
      transform: ${isVisible ? 'translateY(5%)' : 'translateY(20%)'} ;
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xl')`
      position: absolute;
      left: 29%;
      height: 100%;
      max-width: 33.3%;
  `};
`
export const ThirdCard = styled.article<{
  isVisible: boolean
}>`
  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.7s;
      position: absolute;
      left: 63.4%;
      transform: ${isVisible ? 'translateY(15%)' : 'translateY(25%)'} ;
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xl')`
      position: absolute;
      left: 63.4%;
      height: 100%;
      max-width: 33.3%;
  `};
`
