import styled from 'styled-components'

import { LIGHT_GRAY_COLOR } from '../../theme/color'
import { doublePx } from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const ContainerOverflowHidden = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_GRAY_COLOR};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const StartedContainer = styled.div`
  min-height: 50vh;
  background: ${LIGHT_GRAY_COLOR};
  ${CONTAINER_SPACING.MOBILE}
  line-height: 1.32;
  position: relative;
  z-index: 1;

  > .w-static-logo {
    position: absolute;
    bottom: -15%;
    right: -50%;
    height: 50%;
    z-index: -1;
  }

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}

    > .w-static-logo {
      bottom: -15%;
      right: -50%;
      width: 90%;
      height: 50%;
    }
  `};

  ${media.greaterThan('lg')`
  ${CONTAINER_SPACING.SMALL_DESKTOP};

    > .w-static-logo {
      bottom: -30%;
      right: -50%;
      height: 90%;
    }
  `}

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};

    > .w-static-logo {
      bottom: -40%;
      right: -50%;
      height: 75%;
    }
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    > .w-static-logo {
      bottom: -25%;
      right: -45%;
      height: 65%;
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

  ${media.greaterThan('lg')`
    font-size: 3.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 3.7rem;
  `};

  ${media.greaterThan('xxl')`
    width: 55%;
  `};
`

export const WAnimationContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: -15%;
  right: 0%;
  height: 40%;
  z-index: -3;
  mix-blend-mode: multiply;

  ${media.greaterThan('md')`
    bottom: -10%;
    width: 50%;
    height: 40%;
  `};

  ${media.greaterThan('lg')`
    width: 60%;
    height: 40%;
  `};

  ${media.greaterThan('xl')`
    width: 55%;
    height: 55%;
    bottom:-15%;
  `};

  ${media.greaterThan('xxl')`
    bottom: -20%;
    width: 45%;
    height: 65%;
  `};
`
