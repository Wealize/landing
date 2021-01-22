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
    font-size: 3.5rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 3.7rem;
  `};
`

export const WAnimationContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: -15%;
  right: 0%;
  z-index: -3;
  mix-blend-mode: multiply;

  ${media.greaterThan('md')`
    bottom: -15%;
    width: 50%;
  `};

  ${media.greaterThan('lg')`
    width: 60%;
  `};

  ${media.greaterThan('xl')`
    width: 50%;
    bottom: -20%;
  `};

  ${media.greaterThan('xxl')`
    bottom: -15%;
    width: 45%;
  `};

  ${media.greaterThan('xxxl')`
    bottom: -25%;
    width: 35%;
  `};
`
