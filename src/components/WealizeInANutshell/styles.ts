import styled from 'styled-components'

import { LIGHT_GRAY_COLOR, GRAY_300_COLOR } from '../../theme/color'
import { singlePx, singleAndHalfPx, doublePx } from '../../theme/space'
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

export const Title = styled.h3<{isNavbarVisible: boolean}>`
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  padding:  ${singleAndHalfPx()} ${singlePx()} ${singleAndHalfPx()} 0;
  background-color: ${LIGHT_GRAY_COLOR};
  position: sticky;
  left: 0px;
  max-height: 100px;
  transition: all 0.4s;
  text-align: left;

  top: ${({ isNavbarVisible }) => isNavbarVisible ? '9.5%' : '0'};

  ${({ isNavbarVisible }) => media.greaterThan('md')`
    padding-left: 0;
    top: ${isNavbarVisible ? '5%' : '-1px'};
  `};

  ${({ isNavbarVisible }) => media.greaterThan('lg')`
    width: 40%;
    line-height: 2;
    margin-left: initial;
    margin-right: initial;
    top: ${isNavbarVisible ? '10%' : '-1px'};
    padding-left: 0;
    padding-top: ${isNavbarVisible ? '0' : singleAndHalfPx()};
  `};

  ${media.greaterThan('xl')`
    width: 50%;
  `};
`

export const Content = styled.div`
  -ms-overflow-style: none;
  scrollbar-width: none;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-top: ${doublePx()};

  > .wealize-nutshell-paragraph:last-child {
    padding-bottom: 0;
  }

  ${media.greaterThan('lg')`
    width: 60%;
    padding-left: ${doublePx()};
    padding-top: 0;
  `};

  ${media.greaterThan('xl')`
    width: 50%;
  `};
`

export const Paragraph = styled.h3<{
  highlightColor: string
  isIntersecting: boolean
}>`
  font-size: 1.5rem;
  padding-bottom: ${doublePx()};
  line-height: 1.46;
  scroll-snap-align: start;
  color: ${GRAY_300_COLOR};

  &.intersecting {
    color: ${({ highlightColor }) => highlightColor};
  }

  ${media.greaterThan('md')`
    width: 80%;
    text-align: left;
    font-size: 1.8rem;
  `};
`
