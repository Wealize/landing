import styled from 'styled-components'

import { doublePx, doubleAndHalfPx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${doubleAndHalfPx()} 0;

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};
  `};
`

export const Title = styled.h5`
  font-size: 1.7rem;
  padding: 0;


  ${media.greaterThan('lg')`
    font-size: 2rem;
  `};
`

export const ContainerCards = styled.div`

  > .simple-big-title-card:last-child h5{
    padding-bottom: 0;
  }

  ${media.greaterThan('md')`

    > .simple-big-title-card {
      padding-left: 0;
      padding-right: 0;
    }

    > .simple-big-title-card > h5 {
      width: 80%;
    }

    > .simple-big-title-card:last-child {
      padding-bottom: 0;
    }
  `};

  ${media.greaterThan('lg')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${doublePx()};

    > .simple-big-title-card > h5 {
      width: 100%;
    }
  `};

`
