import { createGlobalStyle } from 'styled-components'

import { DARK_GRAY_COLOR } from '../theme/color'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
    scroll-behavior: smooth;
    color: ${DARK_GRAY_COLOR};
  }

  a, button {
     -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  button {
    outline: none;
  }
`

export default Global
