import styled from 'styled-components'

import {
  singlePx,
  doublePx
} from '../../../theme/space'
import { media } from '../../../theme/media'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'

export const Container = styled.div`
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
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
    font-size: 3.7rem;
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
`
