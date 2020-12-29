import styled from 'styled-components'

import { singlePx, doublePx, triplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${doublePx()} 0;

  ${media.greaterThan('lg')`
    padding: ${singlePx()} ${singlePx()} ${triplePx()};
  `};
`

export const Title = styled.h5`
  font-size: 1.7rem;
  padding: ${singlePx()} ${singlePx()} 0;

  ${media.greaterThan('md')`
    padding: ${singlePx()} ${doublePx()} 0;
  `};

  ${media.greaterThan('lg')`
    font-size: 2rem;
    padding: ${singlePx()} ${triplePx()} 0;
  `};
`

export const ContainerCards = styled.div`
  ${media.greaterThan('md')`
    > .SimpleBigTitleCard > h5 {
      width: 80%;
    }
  `};

  ${media.greaterThan('lg')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;

    > .SimpleBigTitleCard {
      width: 50%;
    }

    > .SimpleBigTitleCard > h5 {
      width: 100%;
    }
  `};
`
