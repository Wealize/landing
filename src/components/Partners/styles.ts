import styled from 'styled-components'

import { DARK_GRAY, LIGHT_GRAY } from '../../theme/color'
import { singlePx, doublePx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.aside`
  background-color: ${LIGHT_GRAY};
  padding: ${doublePx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${triplePx()} ${quadruplePx()};
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
  font-size: 2rem;
  line-height: 1.32;
  color: ${DARK_GRAY};

  ${media.greaterThan('md')`
    font-size: 2.2rem;
    line-height: 1.35;
  `};

  ${media.greaterThan('lg')`
    font-size: 2.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.7rem;
    width: 60%;
  `};

  ${media.greaterThan('xxl')`
    font-size: 3rem;
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
    width: 10%;
  `};
`
