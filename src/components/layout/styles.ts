import styled from 'styled-components'

import { WHITE_COLOR, LIGHT_GRAY_COLOR } from '../../theme/color'
import { triplePx } from '../../theme/space'

export const Main = styled.main<{ showNavigationBarClosablePage: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ showNavigationBarClosablePage }) =>
    showNavigationBarClosablePage ? WHITE_COLOR : LIGHT_GRAY_COLOR};
  padding-top: ${triplePx()};
  overflow-x: hidden;
`
