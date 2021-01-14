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
  width: 70%;
  position: absolute;
  bottom: -5%;
  right: 0;
  height: 70%;

  background-image: url('/img/w-static.svg');
  background-repeat: no-repeat;
  background-size: cover;

  ${media.greaterThan('md')`
    width: 70%;
    bottom: -15%;
    height: 80%;
  `};

  ${media.greaterThan('lg')`
    width: 55%;
    bottom: -25%;
    height: 90%;
  `};

  ${media.greaterThan('xl')`
    width: 50%;
    bottom: -20%;
    height: 90%;
  `};

  ${media.greaterThan('xxxl')`
    width: 45%;
    bottom: -35%;
    height: 100%;
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
  bottom: 85%;
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
    width: 120px;
    height: 120px;

    > svg {
      width: 7em;
      height: 7em;
    }
  `};

  ${media.greaterThan('xxl')`
    right: -35%;
    width: 135px;
    height: 135px;

    > svg {
      width: 9em;
      height: 9em;
    }
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
    min-height: 400px;
    width: 80%;
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    min-height: 400px;
    width: 70%;
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    min-height: 400px;
    width: 60%;
    ${CONTAINER_SPACING.WIDE};
    padding-right: ${triplePx()};
    padding-top: ${triplePx()};
    padding-bottom: ${triplePx()};
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
`

export const SubHeadline = styled.h2`
  color: ${WHITE_COLOR};
  font-size: 2rem;
  line-height: 1.29;
  width: 95%;

  ${media.greaterThan('md')`
    font-size: 2.5rem;
    width: 92%;
  `};

  ${media.greaterThan('lg')`
    font-size: 3rem;
    width: 90%;
  `};

  ${media.greaterThan('xl')`
    font-size: 3.5rem;
  `};
`
