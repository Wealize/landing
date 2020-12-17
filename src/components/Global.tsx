import { createGlobalStyle } from 'styled-components'

import { DARK_GRAY } from '../theme/color'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
    scroll-behavior: smooth;
    color: ${DARK_GRAY};
  }

  a, button {
     -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`

export default Global
