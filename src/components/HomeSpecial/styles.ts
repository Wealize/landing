import styled from 'styled-components'

import { PRIMARY, WHITE, LIGHT_GRAY, ACCENT } from '../../theme/color'
import {
  twoThirdPx,
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  doubleAndHalfPx
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'

export const Container = styled.div`
  width: 100%;
  min-height: 85vh;
  background: ${LIGHT_GRAY};
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
  width: 200%;
  height: 70%;
  position: absolute;
  bottom: 0%;
  right: -110%;

  ${media.greaterThan('md')`
    height: 75%;
  `};

  ${media.greaterThan('lg')`
    height: 100%;
    right: -100%;
    top: 10%;
  `};

  ${media.greaterThan('xl')`
    right: -80%;
  `};

  ${media.greaterThan('xxl')`
    right: -85%;
  `};
`

export const Button = styled.button`
  background-color: ${ACCENT};
  color: ${WHITE};
  width: 90px;
  height: 90px;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: 80%;
  right: 10%;
  outline: none;
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
  background-color: ${PRIMARY};
  position: absolute;
  bottom: 0;
  left: 0;
  padding: ${doublePx()} ${singlePx()};
  width: 90%;
  border-top-right-radius: ${DEFAULT_RADIUS}px;
  min-height: 250px;

  ${media.greaterThan('md')`
    min-height: 350px;
    padding: ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    min-height: 450px;
    width: 80%;
    padding: ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    min-height: 550px;
    width: 70%;
    padding: ${triplePx()} ${quadruplePx()};
  `};
`

export const Headline = styled.h1`
  color: ${WHITE};
  font-size: 1rem;
  padding: ${twoThirdPx()} 0;

  ${media.greaterThan('md')`
    font-size: 1.5rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.5rem;
  `};
`

export const SubHeadline = styled.h2`
  color: ${WHITE};
  font-size: 2rem;
  line-height: 1.29;

  ${media.greaterThan('md')`
    font-size: 3rem;
    width: 92%;
  `};

  ${media.greaterThan('lg')`
    font-size: 3.5rem;
    width: 90%;
  `};

  ${media.greaterThan('xl')`
    width: 80%;
    font-size: 4rem;
  `};
`
