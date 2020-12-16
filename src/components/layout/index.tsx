import React, { ReactChild } from 'react'
import styled from 'styled-components'

import { WHITE, LIGHT_GRAY } from '../../theme/color'
import { triplePx } from '../../theme/space'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { LayoutOptions } from '../../interfaces/Page'

interface LayoutProps {
  children: ReactChild | ReactChild[] | Element | Element[]
  layoutOptions: LayoutOptions
}

const Layout = (props: LayoutProps) => {
  const {
    children,
    layoutOptions: { showFooter = true, showNavigationBarClosablePage = false }
  } = props

  return (
    <>
      <Navbar showNavigationBarClosablePage={showNavigationBarClosablePage} />

      <Main
        id="main"
        showNavigationBarClosablePage={showNavigationBarClosablePage}
      >
        {children}
      </Main>

      {showFooter ? <Footer /> : null}
    </>
  )
}

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

export default React.memo(Layout)
