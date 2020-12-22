import styled from 'styled-components'

import { GRAY_300, LIGHT_GRAY, WHITE } from '../../theme/color'
import {
  doubleAndHalfPx,
  singlePx,
  doublePx,
  triplePx,
  quadruplePx,
  quadruple
} from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.section`
  min-height: 100vh;
  background-color: ${LIGHT_GRAY};

  ${media.greaterThan('lg')`
    background-color: ${WHITE};
  `};
`

export const Content = styled.article`
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: ${LIGHT_GRAY};
  padding: ${doubleAndHalfPx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${doublePx()};
        font-size: 1.2rem;
    justify-content: initial;
    align-items: initial;
  `};

  ${media.greaterThan('lg')`
    padding: ${quadruplePx()};
    font-size: 1.5rem;
    background-color: ${WHITE};
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
    font-size: 1.4rem;
  `}

  ${media.greaterThan('lg')`
    font-size: 1.7rem;
  `};

  & p {
    padding: ${singlePx()} 0;
  }
`

export const QuestionsContainer = styled.div`
  width: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  background-color: ${WHITE};
  padding: ${doubleAndHalfPx()} ${singlePx()};

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    padding: ${triplePx()} ${doublePx()};
  `}

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
    padding: ${quadruplePx()};
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()};
  `};

  ${media.greaterThan('xxl')`
    padding: ${quadruplePx()};
  `};
`

export const Question = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    width: 50%;
    justify-content: flex-start;
    align-items: flex-start;

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
    font-size: 2.5rem;
  `}
`

export const QuestionDescription = styled.div`
  font-size: 1.1rem;

  & p:last-child {
    padding-bottom: 0;
  }

  & p {
    color: ${GRAY_300};
    line-height: 1.63;
    padding-bottom: ${singlePx()};
    text-align: left;
    width: 100%;

    ${media.greaterThan('md')`
      font-size: 1.6rem;
    `}

    ${media.greaterThan('lg')`
      padding-bottom: ${singlePx()};
    `}
  }
`