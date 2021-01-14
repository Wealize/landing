import styled from 'styled-components'

import { GRAY_300_COLOR } from '../../theme/color'
import {
  halfPx,
  singlePx,
  doublePx,
  quadruple
} from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.section`
  ${CONTAINER_SPACING.MOBILE}
  min-height: 100vh;

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    padding-right: ${quadruple() * 5}px;
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    padding-right: ${quadruple() * 7}px;
  `};
`

export const Content = styled.article`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    justify-content: initial;
    align-items: initial;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
  `};
`

export const Title = styled.h3`
  font-size: 2.2rem;
  line-height: 1.29;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    font-size: 2.5rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 3.2rem;
  `};
`

export const Description = styled.div`
  font-size: 1.3rem;
  line-height: 1.46;

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.7rem;
  `};

  & p {
    padding: ${singlePx()} 0;
  }
`
export const LogosContainer = styled.div`
  width: 80%;
  padding: ${doublePx()} 0;

  ${media.greaterThan('md')`
    width: 60%;
  `}

  ${media.greaterThan('lg')`
    width: 40%;
  `}

  ${media.greaterThan('xl')`
    width: 25%;
  `}
`

export const BottomContainer = styled.div`
  width: 100%;
  padding: ${doublePx()} 0;
`

export const FinancingContent = styled.div`
  padding: ${halfPx()} 0;
  font-size: 1.3rem;
  line-height: 1.46;

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.7rem;
  `};
`

export const ProjectContent = styled.div`
  padding: ${halfPx()} 0;
  font-size: 1.3rem;
  line-height: 1.46;
  color: ${GRAY_300_COLOR};

  ${media.greaterThan('md')`
    font-size: 1.4rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.7rem;
  `};
`
