import styled from 'styled-components'

import { media } from '../../../theme/media'
import { ACCENT_COLOR, WHITE_COLOR, GRAY_300_COLOR } from '../../../theme/color'
import { DEFAULT_RADIUS } from '../../../theme/border'


export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${WHITE_COLOR};
  padding-top: 3rem;

  ${media.greaterThan('md')`
    padding-top: 0;
  `};
`

export const PaginationPage = styled.a`
  display: flex;
  font-weight: 400;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  min-width: 4.5rem;
  color: ${GRAY_300_COLOR};
  text-decoration: none;
  transition: all 0.5s;

  &.current{
    color: ${WHITE_COLOR};
    background-color: ${ACCENT_COLOR};
    font-weight: bold;
    padding: 1rem;
    border-radius: ${DEFAULT_RADIUS}px;
  }
`
