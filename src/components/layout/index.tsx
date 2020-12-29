import React, { ReactChild } from 'react'

import Footer from '../Footer'
import Navbar from '../Navbar'
import { LayoutOptions } from '../../interfaces/Page'

import { Main } from './styles'

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

export default React.memo(Layout)
