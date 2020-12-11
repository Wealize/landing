import React from 'react'
import styled from 'styled-components'

import { LIGHT_GRAY } from '../../theme/color'
import { triplePx } from '../../theme/space'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Layout = (props) => {
  // eslint-disable-next-line
  const { children } = props

  return (
    <>
      <Navbar />
      <Main id="main">{children}</Main>
      <Footer />
    </>
  )
}

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${LIGHT_GRAY};
  padding-top: ${triplePx()};
  overflow-x: hidden;
`

export default React.memo(Layout)
