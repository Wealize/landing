import styled from 'styled-components'

import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import {
  singlePx,
  doublePx,
  triplePx,
  quadruplePx
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const BgContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${WHITE_COLOR};

  ${CONTAINER_SPACING.MOBILE}
  padding-left: 0;
  padding-right: 0;

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
    padding-left: 0;
    padding-right: 0;
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
    padding-left: 0;
    padding-right: 0;
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    padding-left: 0;
    padding-right: 0;
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    padding-left: 0;
    padding-right: 0;
  `};

  ${media.greaterThan('xxxl')`

  `};
`

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
    margin: 0 0 0 10%;
  `};

  ${media.greaterThan('xxl')`
    margin: 0 0 0 10%;
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
    font-size: 1.2rem;
    padding-left: ${doublePx()};
    padding-bottom: ${triplePx()};
  `};

  ${media.greaterThan('lg')`
    padding: ${doublePx()} ${doublePx()} ${quadruplePx()};
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
    margin-bottom: 20.3rem;
  `};

  ${media.greaterThan('xl')`
    min-height: 500px;
  `};

  ${media.greaterThan('xxl')`
    min-height: 550px;
  `};
`

export const FirstCard = styled.article<{
  isVisible: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ isVisible }) => media.greaterThan('lg')`
    transition: all 1s;
    position: absolute;
    transform: ${isVisible ? 'translateY(-5%)' : 'translateY(20%)'} ;
    left: -11.5%;
    height: 100%;
    max-width: 33.3%;
  `};

  ${media.greaterThan('xxl')`
    left: 12%;
    max-width: 23%;
  `};
`
export const SecondCard = styled.article<{
  isVisible: boolean
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.5s;
      position: absolute;
      left: 23%;
      transform: ${isVisible ? 'translateY(5%)' : 'translateY(20%)'} ;
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xxl')`
    left: 36%;
    max-width: 23%;
  `};
`
export const ThirdCard = styled.article<{
  isVisible: boolean
}>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  ${({ isVisible }) => media.greaterThan('lg')`
      transition: all 1s;
      transition-delay: 0.7s;
      position: absolute;
      left: 58%;
      transform: ${isVisible ? 'translateY(15%)' : 'translateY(25%)'} ;
      height: 100%;
      max-width: 33.3%;
  `};

  ${media.greaterThan('xxl')`
    left: 60%;
    max-width: 23%;
  `};
`
