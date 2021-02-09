import styled from 'styled-components'

import { WHITE_COLOR, GRAY_300_COLOR } from '../../../theme/color'
import { media } from '../../../theme/media'
import { singlePx, singleAndHalfPx } from '../../../theme/space'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'


export const Container = styled.div`
  background-color: ${WHITE_COLOR};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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

  > #section-back-button {
    margin-bottom: ${singleAndHalfPx()};
    min-width: 12rem;

    ${media.greaterThan('md')`
      min-width: 15rem;
    `};
  }
`

export const PageHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  ${media.greaterThan('md')`
    width: 70%;
  `};

  ${media.greaterThan('lg')`
    width: 50%;
  `};
`

export const PageTitle = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('lg')`
    font-size: 2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.5rem;
  `};

  &.page-section-title {
    padding-bottom: 0;
    text-transform: capitalize;
  }
`

export const PageDescription = styled.h3`
  font-size: 1rem;
  font-weight: lighter;
  line-height: 1.3;
  color: ${GRAY_300_COLOR};

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.5rem;
  `};
`
