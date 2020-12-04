import styled from 'styled-components'

import { PRIMARY, WHITE, LIGHT_GRAY, ACCENT } from '../../theme/color'
import {
  twoThirdPx,
  singlePx,
  doublePx,
  doubleAndHalfPx
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'

export const Container = styled.div`
  width: 100%;
  min-height: 91vh;
  background: ${LIGHT_GRAY};
  padding: ${doubleAndHalfPx()} 0;
  position: relative;

  ${media.greaterThan('md')`
    min-height: 94vh;
  `};

  ${media.greaterThan('lg')`
    min-height: 80vh;
  `};
`

export const Background = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  right: 0%;

  ${media.greaterThan('lg')`
    height: 100%;
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

  ${media.greaterThan('md')`
    bottom: 85%;
    width: 115px;
    height: 115px;
  `};

  ${media.greaterThan('lg')`
    bottom: -10%;
    right: -30%;
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
  `};

  ${media.greaterThan('lg')`
    min-height: 430px;
    width: 65%;
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
`

export const SubHeadline = styled.h2`
  color: ${WHITE};
  font-size: 2rem;
  line-height: 1.29;

  ${media.greaterThan('md')`
    font-size: 3rem;
    width: 90%;
  `};

  ${media.greaterThan('lg')`
    font-size: 4rem;
    width: 75%;
  `};
`
