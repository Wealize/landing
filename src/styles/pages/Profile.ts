import styled from 'styled-components'

import { WHITE_COLOR, LIGHT_GRAY_COLOR } from '../../theme/color'
import { singlePx, doublePx, doubleAndHalfPx, triplePx, quadruplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${WHITE_COLOR};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const StartedContainer = styled.div`
  min-height: 50vh;
  background: ${LIGHT_GRAY_COLOR};
  padding: ${doubleAndHalfPx()} ${singlePx()};
  line-height: 1.32;
  position: relative;
  z-index: 1;

  > .w-static-logo {
    position: absolute;
    bottom: -15%;
    right: -50%;
    z-index: 1;
    height: 50%;
    z-index: -1;
  }

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
  `};

  ${media.greaterThan('lg')`
    > .w-static-logo {
      bottom: -30%;
      right: -50%;
      height: 90%;
    }
  `}

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};

    > .w-static-logo {
      bottom: -40%;
      right: -50%;
      height: 85%;
    }
  `};

  ${media.greaterThan('xxl')`

    > .w-static-logo {
      bottom: -50%;
      right: -45%;
      height: 115%;
    }
  `};
`

export const StartedDescription = styled.div`
  font-size: 2rem;
  height: 100%;
  z-index: 9999;
  text-align: left;

  > p {
    padding-bottom: ${doublePx()};

    &:last-child {
      padding-bottom: 0;
    }
  }

  ${media.greaterThan('md')`
    font-size: 2.5rem;
    width: 70%;
  `};

  ${media.greaterThan('xl')`
    font-size: 3rem;
  `};
`
