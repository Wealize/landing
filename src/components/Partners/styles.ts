import styled from 'styled-components'

import { DARK_GRAY_COLOR, LIGHT_GRAY_COLOR } from '../../theme/color'
import { singlePx, doublePx, triplePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.div`
  background-color: ${LIGHT_GRAY_COLOR};
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${singlePx()} 0;

  ${media.greaterThan('md')`
    margin-bottom:${singlePx()};
  `};

  ${media.greaterThan('lg')`
    align-items: flex-start;
    padding: ${singlePx()} 0;
    margin-bottom:${doublePx()};
  `};

  ${media.greaterThan('xl')`

    margin-bottom:${doublePx()};
  `};
`
export const TextContent = styled.h5`
  font-size: 1.8rem;
  line-height: 1.32;
  color: ${DARK_GRAY_COLOR};

  ${media.greaterThan('md')`
    line-height: 1.35;
  `};

  ${media.greaterThan('lg')`
  `};

  ${media.greaterThan('xl')`
    width: 60%;
  `};
`

export const ContainerPartners = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${media.greaterThan('xl')`
    padding: ${singlePx()} 0;
  `};

  ${media.greaterThan('xl')`
    padding: ${triplePx()} 0;
  `};
`

export const Partner = styled.div`
  width: 32%;

  ${media.greaterThan('md')`
    width: 25%;
  `};

  ${media.greaterThan('lg')`
    width: 16.6%;
  `};

  ${media.greaterThan('xl')`
    width: 14.2%;
  `};

  ${media.greaterThan('xxl')`
    width: 12%;
  `};
`
