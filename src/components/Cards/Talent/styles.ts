import styled from 'styled-components'

import { WHITE_COLOR, ACCENT_COLOR, GRAY_300_COLOR } from '../../../theme/color'
import { thirdPx, singlePx, doublePx, triplePx } from '../../../theme/space'
import { media } from '../../../theme/media'

export const Container = styled.div`
  width: 100%;
  background: ${WHITE_COLOR};
  padding: ${singlePx()};
  z-index: 1;
  min-width: 300px;
  min-height: 300px;

  ${media.greaterThan('md')`
    width: 100%;
    padding: ${doublePx()};
    min-width: 300px;
    min-height: 300px;
  `};

  ${media.greaterThan('lg')`
    padding: ${doublePx()};
    min-width: 200px;
    min-height: 200px;
  `};

  ${media.greaterThan('xl')`
    padding: ${triplePx()};
    min-width: 300px;
    min-height: 300px;
  `};
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${singlePx()};

  & img {
    object-fit: cover;
  }

  ${media.greaterThan('md')`
    min-width: 300px;
    min-height: 300px;
  `};

  ${media.greaterThan('lg')`
    min-width: 250px;
    min-height: 250px;
  `};

  ${media.greaterThan('xl')`
    min-width: 350px;
    min-height: 350px;
  `};
`

export const ContentContainer = styled.div``

export const Headline = styled.h4`
  font-size: 1rem;
  text-align: left;
  font-weight: bold;
  padding-bottom: ${thirdPx()};

  ${media.greaterThan('md')`
    padding-bottom: ${thirdPx()};
    font-size: 1.2rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.5rem;
  `};
`

export const Subheadline = styled.h5`
  font-size: 1rem;
  text-align: left;
  font-weight: lighter;
  padding-bottom: ${thirdPx()};
  color: ${GRAY_300_COLOR};

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    padding-bottom: ${thirdPx()};
  `};

  ${media.greaterThan('xl')`
    font-size: 1.5rem;
  `};
`

export const SocialNetworksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ${media.greaterThan('lg')`
    padding-top: ${thirdPx()};
  `};

  & > a {
    text-decoration: none;
    color: ${ACCENT_COLOR};
    font-weight: bold;
    text-transform: capitalize;
    margin-right: ${thirdPx()};

    ${media.greaterThan('md')`
    font-size: 1.2rem;
    `};

    ${media.greaterThan('xl')`
    font-size: 1.5rem;
  `};
  }
`
