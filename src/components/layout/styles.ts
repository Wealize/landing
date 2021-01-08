import styled from 'styled-components'

import { WHITE_COLOR, LIGHT_GRAY_COLOR } from '../../theme/color'

export const Main = styled.main<{ showNavigationBarClosablePage: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ showNavigationBarClosablePage }) =>
    showNavigationBarClosablePage ? WHITE_COLOR : LIGHT_GRAY_COLOR};
`
