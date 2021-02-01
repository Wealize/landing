import { createGlobalStyle } from 'styled-components'

import { ACCENT_COLOR, DARK_GRAY_COLOR, WHITE_COLOR } from '../theme/color'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
    color: ${DARK_GRAY_COLOR};
    background-color: ${WHITE_COLOR};
    text-rendering: optimizeSpeed;
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


  /* Webchat */
  .sc-launcher, .sc-chat-window  {
    z-index: 20;
  }

  .sc-header, .sc-launcher, .sc-header--close-button {
    background-color: ${ACCENT_COLOR} !important;
  }
`

export default Global
