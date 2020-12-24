import styled from 'styled-components'

import {
  WHITE_COLOR,
  ACCENT_COLOR,
  DARK_GRAY_COLOR,
  LIGHT_GRAY_COLOR
} from '../../theme/color'
import {
  singlePx,
  singleAndHalfPx,
  doublePx,
  doubleAndHalfPx,
  triplePx,
  quadruplePx
} from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${LIGHT_GRAY_COLOR};
  padding: 0 ${singlePx()} ${singlePx()};
  z-index: 1;

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};
  `};
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: ${doublePx()} 0;

  ${media.greaterThan('md')`
    font-size: 1.1rem;
  `};

  ${media.greaterThan('lg')`
    width: 30%;
    padding-top: 0;
    line-height: 2;
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.5rem;
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

  ${media.greaterThan('md')`
    max-height: 45vh;
  `};

  ${media.greaterThan('lg')`
    width: 70%;
    padding-left: ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    max-height: 45vh;
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

  ${media.greaterThan('lg')`
    font-size: 2rem;
    width: 100%;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.3rem;
  `};
`
