import styled from 'styled-components'

import {
  GRAY_300_COLOR,
  LIGHT_GRAY_COLOR,
  WHITE_COLOR
} from '../../theme/color'
import {
  doubleAndHalfPx,
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  quadruple
} from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${LIGHT_GRAY_COLOR};

  ${media.greaterThan('lg')`
    background-color: ${WHITE_COLOR};
  `};
`

export const Content = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: ${LIGHT_GRAY_COLOR};
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
    font-size: 1.2rem;
    justify-content: initial;
    align-items: initial;
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
    font-size: 1.5rem;
    background-color: ${WHITE_COLOR};
  `};

  ${media.greaterThan('xl')`
    padding-top: ${quadruplePx()};
    padding-bottom: ${quadruplePx()};
    padding-left: ${quadruplePx()};
    padding-right: ${quadruple() * 5}px;
  `};

  ${media.greaterThan('xxl')`
    padding-top: ${quadruplePx()};
    padding-bottom: ${quadruplePx()};
    padding-left: ${quadruplePx()};
    padding-right: ${quadruple() * 7}px;
  `};
`

export const Title = styled.h3`
  width: 100%;
  font-size: 2.2rem;
  line-height: 1.29;
  padding-bottom: ${singlePx()};
  text-align: left;

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
    font-size: 1.8rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.9rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.2rem;
  `};

  & p {
    padding: ${singlePx()} 0;
  }
`

export const QuestionsContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: ${WHITE_COLOR};
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    ${CONTAINER_SPACING.TABLET}
  `}

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
    display: block;
    ${CONTAINER_SPACING.SMALL_DESKTOP};
    column-count: 2;
    column-gap: ${doubleAndHalfPx()};
    column-fill: auto;
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    column-count: 2;
    column-gap: ${triplePx()};
    column-fill: auto;

  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    column-gap: ${quadruplePx()};
  `};
`

export const Question = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 250px;
  margin-bottom: ${doublePx()};

  &:nth-child(odd) {
    padding-right: ${singlePx()};
  }

  &:last-child {
    margin-bottom: 0;
  }

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    margin-bottom: ${triplePx()};
  `}

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
    display: inline-block;
    min-height: initial;

    &:nth-child(odd) {
      padding-right: ${triplePx()};
    }
  `};
`

export const QuestionTitle = styled.h4`
  width: 100%;
  text-align: left;
  font-weight: bold;
  padding: ${singlePx()} 0;
  font-size: 1.5rem;
  line-height: 1.25;

  ${media.greaterThan('md')`
    font-size: 2rem;
  `}

  ${media.greaterThan('xl')`
    font-size: 2.2rem;
  `}
`

export const QuestionDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.94;

  & p:last-child {
    padding-bottom: 0;
  }

  & p {
    color: ${GRAY_300_COLOR};
    line-height: 1.63;
    padding-bottom: ${singlePx()};
    text-align: left;
    width: 100%;

    ${media.greaterThan('md')`
      font-size: 1.3rem;
    `}

    ${media.greaterThan('lg')`
      padding-bottom: ${singlePx()};
    `}
  }
`
