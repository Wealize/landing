import React, { ReactChild } from 'react'
import dynamic from 'next/dynamic'

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
  const Footer = dynamic(() => import('../Footer'))


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
