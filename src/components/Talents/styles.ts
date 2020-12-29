import styled from 'styled-components'

import { singlePx, doublePx, triplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${doublePx()} 0;

  ${media.greaterThan('lg')`
    padding: ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${singlePx()} ${singlePx()} ${triplePx()};
  `};

  ${media.greaterThan('xxl')`
    padding: ${singlePx()} ${singlePx()} ${triplePx()};
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
    padding: ${doublePx()};

    & .button-rounded {
      max-width: 200px;
      & span {
        font-size: 1rem;
      }
    }
  `};

  ${media.greaterThan('lg')`
    width: 100%;
    padding: ${triplePx()};
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
  padding: ${doublePx()} 0 0;
  flex-wrap: wrap;

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${singlePx()};
    padding: ${singlePx()} ${doublePx()} 0;

    & .talent-card {
      padding-left: initial;
      padding-right: initial;
      padding-top: initial;
    }
  `};

  ${media.greaterThan('lg')`
    padding: 0 ${triplePx()} 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${doublePx()};
  `};

  ${media.greaterThan('xxl')`
    padding: 0 ${triplePx()} ${doublePx()};
    grid-template-columns: repeat(4, 1fr);
  `};
`
