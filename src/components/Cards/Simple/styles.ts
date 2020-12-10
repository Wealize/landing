import styled from 'styled-components'

import { WHITE, DARK_GRAY } from '../../../theme/color'
import {
  singlePx,
  doublePx,
  doubleAndHalfPx,
  quadruplePx
} from '../../../theme/space'
import { media } from '../../../theme/media'

export const Container = styled.div`
  width: 100%;
  background: ${WHITE};
  padding: ${doubleAndHalfPx()} 0;

  ${media.greaterThan('md')`
    padding: ${singlePx()} ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    padding: ${doubleAndHalfPx()} ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${doubleAndHalfPx()} ${quadruplePx()};
  `};
`

export const Text = styled.h3`
  color: ${DARK_GRAY};
  font-size: 2rem;
  line-height: 45px;
  word-wrap: break-word;

  ${media.greaterThan('md')`
    font-size: 3rem;
    line-height: 60px;
  `};

  ${media.greaterThan('lg')`
    max-width: 65%;
  `};

  ${media.greaterThan('xl')`
    max-width: 70%;
    font-size: 4rem;
    line-height: 75px;
  `};
`
