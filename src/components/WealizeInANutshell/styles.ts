import styled from 'styled-components'

import { ACCENT_COLOR, LIGHT_GRAY_COLOR } from '../../theme/color'
import { doublePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${LIGHT_GRAY_COLOR};
  ${CONTAINER_SPACING.MOBILE}
  z-index: 1;

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
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
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding:  0 0 ${doublePx()};

  ${media.greaterThan('md')`
    font-size: 1.5rem;
    padding:  0 0 ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    width: 40%;
    padding-top: 0;
    line-height: 2;
  `};

  ${media.greaterThan('xl')`
    width: 50%;
    font-size: 1.8rem;
  `};
`

export const Content = styled.div`
  max-height: 55vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  scroll-snap-type: y mandatory;
  scroll-snap-points-y: repeat(50px);

  &::-webkit-scrollbar {
    display: none;
  }

  > .wealize-nutshell-paragraph:last-child {
    padding-bottom: 0;
  }

  ${media.greaterThan('md')`
    max-height: 45vh;
  `};

  ${media.greaterThan('lg')`
    width: 60%;
    padding-left: ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    max-height: 45vh;
    width: 50%;
  `};

  ${media.greaterThan('xxl')`
    max-height: 60vh;
  `};
`

export const Paragraph = styled.h3<{
  highlightColor: string
  isIntersecting: boolean
}>`
  font-size: 1.8rem;
  padding-bottom: ${doublePx()};
  line-height: 1.46;
  scroll-snap-align: start;

  &.intersecting {
    color: ${ACCENT_COLOR};
  }

  ${media.greaterThan('md')`
    width: 80%;
    text-align: left;
  `};
`
