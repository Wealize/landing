import styled from 'styled-components'

import { doublePx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'
import { WHITE_COLOR } from '../../theme/color'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${WHITE_COLOR};
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP}
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
  `};
`

export const Title = styled.h5`
  font-size: 1.7rem;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 1.44px;
  font-weight: bold;


  ${media.greaterThan('lg')`
    font-size: 2rem;
    margin-bottom: ${doublePx()};
  `};
`

export const ContainerCards = styled.div`

  > .simple-big-title-card {
    padding-left: 0;
    padding-right: 0;

    &:last-child {
      padding-bottom: 0;

      & h5 {
        padding-bottom: 0;
      }
    }
  }

  ${media.greaterThan('md')`

    > .simple-big-title-card {
      padding-left: 0;
      padding-right: 0;
    }

    > .simple-big-title-card > h5 {
      width: 80%;
      padding-bottom: 0;
    }

    > .simple-big-title-card {
      padding-bottom: 0;
      padding-top: ${doublePx()};
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

  ${media.greaterThan('xl')`
    grid-gap: ${triplePx()};
  `};

  ${media.greaterThan('xxl')`
    grid-gap: ${quadruplePx()};
  `};

`
