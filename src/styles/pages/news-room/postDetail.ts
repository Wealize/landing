import styled from 'styled-components'

import {
  singlePx,
  singleAndHalfPx,
  quadruple
} from '../../../theme/space'
import { media } from '../../../theme/media'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'

export const Container = styled.div`
  ${CONTAINER_SPACING.MOBILE}
  min-height: 100vh;

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    padding-right: ${quadruple() * 5}px;
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    padding-right: ${quadruple() * 7}px;
  `};

  & ul, ol {
    list-style-position: inside;
    margin: initial;
  }

  & strong, h2 {
    font-weight: bold;
  }

  & h2 {
    padding: ${singleAndHalfPx()} 0;
  }
`

export const PostHeadline = styled.h3`
  font-size: 2rem;
  font-weight: bold;
`

export const PostBody = styled.div`
  font-size: 1.2rem;
  line-height: 1.3;
  padding: ${singlePx()} 0;
`
