import styled from 'styled-components'

import { sixthPx, halfPx, twoThirdPx, singlePx, singleAndHalfPx, doublePx, doubleAndHalfPx, triplePx, quadruplePx, quadruple } from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.div<{ backgroundColor: string, textColor: string}>`
  width: 100%;
  min-height: 20vh;
  padding: ${doubleAndHalfPx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${triplePx()} ${quadruplePx()};
  `};

  ${media.greaterThan('lg')`
    padding: ${quadruplePx()} ${quadruple() * 1.5}px;
  `};

  ${media.greaterThan('xl')`
    padding: ${quadruplePx()} ${quadruple() * 2.5}px;
  `};

  ${media.greaterThan('xxl')`
    padding: ${quadruplePx()} ${quadruple() * 3.5}px;
  `};

  color: ${({ textColor }) => textColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const TitleContainer = styled.div`
  padding-bottom: 0;

  > .accordion-separator{
    margin-top: ${halfPx()};
  }
`

export const Title = styled.h5<{ textColor: string}>`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ textColor }) => textColor};

  ${media.greaterThan('xl')`
    font-size: 1.1rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 1.2rem;
  `};
`

export const Separator = styled.hr<{ textColor: string}>`
  width: 100%;
  background-color: ${({ textColor }) => textColor};
  opacity: .6;
  border: none;
  height: 2px;
  margin: 0;
`

export const SectionContainer = styled.div`
  padding-top: ${singleAndHalfPx()};

  > .accordion-separator {
    margin-top: ${singleAndHalfPx()};
  }

  ${media.greaterThan('md')`
    padding-top: ${doublePx()};

    > .accordion-separator {
      margin-top: ${doublePx()};
    }
  `};
`

export const SectionHeader = styled.div<{isExpanded: boolean}>`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0;

  > .button-rounded {
    display: none;

    & span {
      font-weight: lighter;
    }
  }


  ${media.greaterThan('lg')`
    > .accordion-section-toggle-button {
      display: none;
    }

    > .button-rounded {
      display: block;
      min-height: 75px;
    }
  `};

`

export const SectionTitle = styled.h6`
  font-size: 1.7rem;
  width: 75%;
  line-height: 1.52;

  ${media.greaterThan('md')`
    font-size: 1.8rem;
  `};

  ${media.greaterThan('lg')`
    font-size: 2.2em;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.4rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 2.7rem;
  `};
`

export const SectionToggle = styled.button<{
  textColor: string
  backgroundColor: string
  isExpanded: boolean
}>`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  padding: 0;
  transition: all 0.5s ease-out;
  transform: ${({ isExpanded }) =>
    isExpanded ? 'rotate(0deg)' : 'rotate(180deg)'};

  & svg > g:first-child {
    fill: ${({ textColor, isExpanded }) => isExpanded ? textColor : 'none'};
  }

  & svg > g > path:last-child {
    fill: ${({ textColor }) => textColor};
  }

  & svg > path {
    fill: ${({ textColor, backgroundColor, isExpanded }) => isExpanded ? backgroundColor : textColor};
  }

  ${media.greaterThan('md')`
      width: 50px;
      height: 50px;
  `};

  ${media.greaterThan('lg')`
    display: none;
  `};
`

export const SectionContentContainer = styled.div<{isExpanded: boolean}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${singlePx()};
  transition: all 0.5s ease-out;
  overflow: hidden;
  height: auto;
  max-height: ${({ isExpanded }) => (isExpanded ? 1000 : 0)}px;
  padding-top: ${({ isExpanded }) => (isExpanded ? singleAndHalfPx() : 0)};

  ${media.greaterThan('lg')`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.greaterThan('xl')`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.greaterThan('xxl')`
    grid-template-columns: repeat(4, 1fr);
  `};

`

export const SectionElement = styled.span`
  padding: ${twoThirdPx()} 0 ${sixthPx()};
  line-height: 1.4;

  &:before {
    content: '- '
  }

  ${media.greaterThan('md')`
    font-size: 1.2rem;
    padding: ${twoThirdPx()};
  `};

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.4rem;
  `};

  ${media.greaterThan('xxl')`
    font-size: 1.5rem;
  `};
`
