import styled from 'styled-components'

import { doublePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
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


  ${media.greaterThan('lg')`
    font-size: 2rem;
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
