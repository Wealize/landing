import { createGlobalStyle } from 'styled-components'

import { DARK_GRAY_COLOR, WHITE_COLOR } from '../theme/color'

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
    background-color: ${WHITE_COLOR};
  }

  a, button {
     -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  span {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
  }

  ul, ol {
    list-style: initial;
  }

  button {
    outline: none;
  }
`

export default Global
