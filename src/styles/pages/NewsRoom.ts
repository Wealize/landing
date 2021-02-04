import styled from 'styled-components'

import { WHITE_COLOR, GRAY_300_COLOR } from '../../theme/color'
import { media } from '../../theme/media'
import { singlePx, singleAndHalfPx, doublePx } from '../../theme/space'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'


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
`

export const PageHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    width: 70%;
    padding-bottom: ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    width: 50%;
  `};
`

export const PageTitle = styled.h2`
  font-size: 1.7rem;
  font-weight: 400;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('lg')`
    font-size: 2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.5rem;
  `};
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

export const PostsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .post-card {
    margin-top: ${singleAndHalfPx()};
  }

  ${media.greaterThan('md')`
    display: block;
    columns: 2;
    column-gap: 2rem;
    padding: ${singlePx()} 0;
  `};

   ${media.greaterThan('lg')`
    columns: 3;
  `};

  ${media.greaterThan('xl')`
    columns: 4;
  `};
`
