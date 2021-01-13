import styled from 'styled-components'

import { WHITE_COLOR, DARK_GRAY_COLOR } from '../../../theme/color'
import { media } from '../../../theme/media'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'

export const Container = styled.div`
  width: 100%;
  background: ${WHITE_COLOR};
  z-index: 1;
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

export const Text = styled.h3`
  color: ${DARK_GRAY_COLOR};
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
    line-height: 75px;
  `};

  ${media.greaterThan('xxl')`
    font-size: 3.5rem;
    max-width: 85%;
  `};
`
