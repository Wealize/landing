import styled from 'styled-components'

import { halfPx, singlePx, singleAndHalfPx, doublePx, doubleAndHalfPx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'
import { WHITE_COLOR, GRAY_300_COLOR } from '../../theme/color'


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  background-color: ${WHITE_COLOR};
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

export const Title = styled.h3`
  font-size: 1.8rem;
  line-height: 1.40;
  padding: 0;
  z-index: 1;

  ${media.greaterThan('md')`
    width: 70%;
  `};

  ${media.greaterThan('lg')`
    width: 60%;
  `};

  ${media.greaterThan('xl')`
    width: 55%;
  `};
`

export const ContentContainer = styled.div`
  padding: ${singlePx()} 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    grid-gap: ${doubleAndHalfPx()};
  `};

  ${media.greaterThan('xl')`
    grid-gap: ${triplePx()};
  `};

  ${media.greaterThan('xxl')`
    grid-gap: ${quadruplePx()};
  `};
`

export const SectionContainer = styled.div`
  z-index: 1;
`

export const SectionTitle = styled.h4`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  padding-top: ${doubleAndHalfPx()};
  letter-spacing: 1.44px;
  z-index: 1;
`

export const CardContainer = styled.div`
  padding-top: ${singleAndHalfPx()};
`

export const CardHeadline = styled.div`
  font-size: 1.6rem;
  line-height: 1.52;
  padding: ${halfPx()} 0;
  z-index: 1;

  ${media.greaterThan('lg')`
    font-size: 1.8rem;
  `};
`

export const CardDescription = styled.h5`
  font-size: 1.1rem;
  line-height: 1.52;
  color: ${GRAY_300_COLOR};
  z-index: 1;

  ${media.greaterThan('xl')`
    font-size: 1.1rem;
  `};
`
