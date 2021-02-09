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

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `}

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
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
    font-size: 3rem;
    width: 85%;
  `};

  ${media.greaterThan('xl')`
  font-size: 3.2rem;
    width: 85%;
  `};

  ${media.greaterThan('xxl')`
    font-size: 3.5rem;
    width: 80%;
  `};
`

export const WAnimationContainer = styled.div`
  width: 70%;
  position: absolute;
  bottom: -5%;
  right: 0%;
  z-index: -3;
  mix-blend-mode: multiply;

  & video {
    mix-blend-mode: multiply;
  }

  ${media.greaterThan('xs')`
    bottom: -25%;
  `};

  ${media.greaterThan('sm')`
    width: 60%;
  `};

  ${media.greaterThan('md')`
    bottom: -10%;
    width: 50%;
  `};

  ${media.greaterThan('lg')`
    width: 50%;
    bottom: -15%;
  `};

  ${media.greaterThan('xl')`
    width: 50%;
    bottom: -35%;
  `};

  ${media.greaterThan('xxl')`
    bottom: -25%;
    width: 40%;
  `};

  ${media.greaterThan('xxxl')`
    bottom: -30%;
    width: 30%;
  `};
`
