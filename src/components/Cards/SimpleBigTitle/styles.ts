import styled from 'styled-components'

import { ACCENT_COLOR, WHITE_COLOR } from '../../../theme/color'
import {
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  triple,
  quadruple
} from '../../../theme/space'
import { media } from '../../../theme/media'

export const Container = styled.div`
  padding: ${doublePx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    padding: ${triplePx()};
  `};
`

export const Headline = styled.span`
  font-size: 3rem;
  line-height: 1.09;
  text-align: left;

  ${media.greaterThan('md')`
    padding: ${doublePx()} 0;
  `};

  ${media.greaterThan('lg')`
    font-size: 3.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 4rem;
  `};
`

export const SubHeadline = styled.h5`
  padding-top: ${singlePx()};
  line-height: 1.46;
  text-align: left;
  font-size: 1.7rem;

  ${media.greaterThan('md')`
    padding: ${doublePx()} 0;
    font-size: 1.8rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.3rem;
  `};
`
