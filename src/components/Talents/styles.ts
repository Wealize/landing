import styled from 'styled-components'

import { singlePx, doublePx, doubleAndHalfPx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${doubleAndHalfPx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};
  `};
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${singlePx()};

  & .button-rounded {
    max-width: 150px;
    & span {
      font-size: 0.9rem;
    }
  }

  ${media.greaterThan('md')`
    padding: 0;

    & .button-rounded {
      max-width: 200px;
      & span {
        font-size: 1rem;
      }
    }
  `};

  ${media.greaterThan('lg')`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    & .button-rounded {
      width: 250px;
      max-height: 80px;
      & span {
        font-size: 1rem;
      }
    }
  `};
`

export const Headline = styled.h3`
  font-size: 1.5rem;
  line-height: 1.46;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    font-size: 1.8rem;
  `}

  ${media.greaterThan('lg')`
    width: 55%;
    font-size: 2.2rem;
  `}

  ${media.greaterThan('xl')`
    width: 50%;
  `}

  ${media.greaterThan('xxl')`
    font-size: 2.7rem;
    width: 45%;
  `}
`

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & .talent-card {
    padding-left: initial;
    padding-right: initial;
  }

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${singlePx()};

    & .talent-card {
      padding-left: initial;
      padding-right: initial;
      padding-bottom: initial;
    }
  `};

  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${doublePx()};
  `};

  ${media.greaterThan('xxl')`
    grid-template-columns: repeat(4, 1fr);
  `};
`
