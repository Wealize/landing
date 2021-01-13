import styled from 'styled-components'

import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  LIGHT_GRAY_COLOR,
  ACCENT_COLOR
} from '../../theme/color'
import {
  twoThirdPx,
  doubleAndHalfPx,
  triplePx
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  background: ${LIGHT_GRAY_COLOR};
  padding: ${doubleAndHalfPx()} 0;
  position: relative;

  ${media.greaterThan('md')`
    min-height: 90vh;
  `};

  ${media.greaterThan('lg')`
    min-height: 80vh;
  `};
`

export const Background = styled.div`
  width: 100%;
  height: 70%;
  position: absolute;
  bottom: 0%;
  height: 100%;

  background-image: url('/img/w-static.svg');
  background-repeat: no-repeat;
  background-position: -25% 100%;
  background-size: 800px;

  ${media.greaterThan('md')`
    background-position: -100% 120%;
    background-size: 140%;
  `};

  ${media.greaterThan('lg')`
    background-position: -100% -20%;
    background-size: 120%;
  `};

  ${media.greaterThan('xl')`
    background-position: 230% -15%;
    background-size: 85%;
  `};

  ${media.greaterThan('xxl')`
    background-position: 180% -15%;
    background-size: 80%;
  `};
`

export const Button = styled.button`
  background-color: ${ACCENT_COLOR};
  color: ${WHITE_COLOR};
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: 82%;
  right: 10%;
  cursor: pointer;
  z-index: 2;

  ${media.greaterThan('md')`
    bottom: 85%;
    width: 115px;
    height: 115px;
  `};

  ${media.greaterThan('lg')`
    bottom: -10%;
    right: -20%;
  `};

  ${media.greaterThan('xl')`
    right: -25%;
  `};
`

export const Slogan = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${PRIMARY_COLOR};
  position: absolute;
  bottom: 0;
  left: 0;
  ${CONTAINER_SPACING.MOBILE}
  width: 85%;
  border-top-right-radius: ${DEFAULT_RADIUS}px;
  min-height: 250px;

  ${media.greaterThan('md')`
    min-height: 350px;
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    min-height: 450px;
    width: 80%;
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    min-height: 550px;
    width: 70%;
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    min-height: 550px;
    width: 70%;
    ${CONTAINER_SPACING.WIDE};
    padding-right: ${triplePx()};
  `};
`

export const Headline = styled.h1`
  color: ${WHITE_COLOR};
  font-size: 1rem;
  padding: ${twoThirdPx()} 0;

  ${media.greaterThan('md')`
    font-size: 1.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.7rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 2rem;
  `};
`

export const SubHeadline = styled.h2`
  color: ${WHITE_COLOR};
  font-size: 2rem;
  line-height: 1.29;
  width: 95%;

  ${media.greaterThan('md')`
    font-size: 3rem;
    width: 92%;
  `};

  ${media.greaterThan('lg')`
    font-size: 3.5rem;
    width: 90%;
  `};

  ${media.greaterThan('xl')`
    width: 85%;
  `};

  ${media.greaterThan('xxl')`
    width: 100%;
    font-size: 4.5rem;
  `};
`
