import styled from 'styled-components'

import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import {
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  triple,
  quadruple
} from '../../theme/space'
import { media } from '../../theme/media'
import { DEFAULT_RADIUS } from '../../theme/border'

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

export const ContainerCards = styled.h5`
  ${media.greaterThan('lg')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;

    > .SimpleBigTitleCard {
      width: 50%;
    }
  `};
`
