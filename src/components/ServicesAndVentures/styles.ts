import styled from 'styled-components'

import { singlePx, singleAndHalfPx, doublePx, doubleAndHalfPx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: ${doubleAndHalfPx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};
  `};
`

export const Title = styled.h3`
  font-size: 1.8rem;
  line-height: 1.40;
  padding: 0;

  ${media.greaterThan('md')`
    width: 70%;
  `};

  ${media.greaterThan('lg')`
    width: 60%;
    font-size: 2rem
  `};

  ${media.greaterThan('xl')`
    width: 50%;
    font-size: 2.1rem
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
`

export const SectionContainer = styled.div``

export const SectionTitle = styled.h4`
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: bold;
  padding-top: ${doubleAndHalfPx()};

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.3rem;
  `};
`

export const CardContainer = styled.div`
  padding-top: ${singleAndHalfPx()};
`

export const CardHeadline = styled.div`
  font-size: 1.8rem;
  line-height: 1.52;

  ${media.greaterThan('lg')`
    font-size: 1.9rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2rem;
  `};
`

export const CardDescription = styled.h5`
  font-size: 1.1rem;
  line-height: 1.52;

  ${media.greaterThan('lg')`
    font-size: 1.4rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.6rem;
  `};
`
