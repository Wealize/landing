import styled from 'styled-components'

import { WHITE, LIGHT_GRAY } from '../../theme/color'
import { triplePx } from '../../theme/space'

export const Main = styled.main<{ showNavigationBarClosablePage: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ showNavigationBarClosablePage }) =>
    showNavigationBarClosablePage ? WHITE : LIGHT_GRAY};
  padding-top: ${triplePx()};
  overflow-x: hidden;
`
