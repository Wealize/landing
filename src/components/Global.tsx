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
`

export default Global
