import styled from 'styled-components'

import { ACCENT, WHITE } from '../../theme/color'
import { singlePx, doublePx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${WHITE};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.greaterThan('lg')`
    /* FIXME: for test Intersection observer functionality*/
    margin-top: 110vh;
    /* FIXME: for test Intersection observer functionality*/
    min-height: 170vh;
  `};

  ${media.greaterThan('xl')`
    min-height: 170vh;
  `};
`

export const ThingsWeAreGoodAtContainer = styled.div`
  width: 100%;
  background-color: ${ACCENT};
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
  `};
`

export const ThingsWeAreGoodAtTitle = styled.h3`
  width: 100%;
  background-color: ${ACCENT};
  padding: 0 ${doublePx()} ${quadruplePx()};
  color: ${WHITE};
  width: 50%;
  line-height: 1.33;
  font-weight: bold;
  text-transform: uppercase;

  ${media.greaterThan('md')`
    font-size: 1.3rem;
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

export const ThingsWeAreGoodAtCardsContainer = styled.div`
  width: 100%;
  background-color: ${ACCENT};
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

export const ThingsWeAreGoodAtFirstCard = styled.div<{
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
    left: -2%;
    height: 100%;
    max-width: 33.3%;
  `};
`
export const ThingsWeAreGoodAtSecondCard = styled.div<{
  isVisible: boolean
}>`
  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.5s;
      position: absolute;
      left: 30%;
      transform: ${isVisible ? 'translateY(5%)' : 'translateY(20%)'} ;
      *transform: translateY(0%);
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xl')`
      position: absolute;
      left: 32%;
      height: 100%;
      max-width: 33.3%;
  `};
`
export const ThingsWeAreGoodAtThirdCard = styled.div<{
  isVisible: boolean
}>`
  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.7s;
      position: absolute;
      left: 65%;
      transform: ${isVisible ? 'translateY(15%)' : 'translateY(25%)'} ;
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xl')`
      position: absolute;
      left: 66%;
      height: 100%;
      max-width: 33.3%;
  `};
`
