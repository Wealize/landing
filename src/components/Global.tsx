import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
  }

  a {
     -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`

export default Global
