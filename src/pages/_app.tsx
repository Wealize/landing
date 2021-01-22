import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import Global from '../components/Global'
import '../theme/animations.css'
import HeadComponent from '../components/layout/Head/'
import Layout from '../components/layout/'
import { LayoutOptions } from '../interfaces/Page'
import useWindowSize from '../hooks/useWindowSize'
import { WHITE_COLOR } from '../theme/color'


Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

const ExtendedApp = (props: AppProps) => {
  const {
    Component,
    pageProps,
   } = props

  const router = useRouter()
  const windowSize = useWindowSize()

  const DEFAULT_LAYOUT_OPTIONS: LayoutOptions = {
    showFooter: false,
    showNavigationBarClosablePage: true
  }

  const { layoutOptions = DEFAULT_LAYOUT_OPTIONS } = pageProps

  const changeBodyBackgroundColor = ()=> {
    const UNSET_VALUE_BG = "rgba(0, 0, 0, 0)"

    const mainElement = document.querySelector('main')
    if (!mainElement.hasChildNodes() || typeof window === 'undefined') return

    const firstChildrenFromMain = mainElement.childNodes[0] as HTMLElement
    if (!firstChildrenFromMain) return

    const firstChildrenFromMainBgColor = window.getComputedStyle(firstChildrenFromMain, null).getPropertyValue('background-color')

    document.body.style.backgroundColor = firstChildrenFromMainBgColor === UNSET_VALUE_BG ? WHITE_COLOR : `${firstChildrenFromMainBgColor}`
  }

  useEffect(() => {

    router.events.on('routeChangeStart', () => {
      const html = document.querySelector('html')
      html.style.scrollBehavior = 'auto'
    })

    router.events.on('routeChangeComplete', () => {
      const html = document.querySelector('html')
      html.style.scrollBehavior = 'smooth'

      changeBodyBackgroundColor()
    })
  }, [])

  useEffect(() => {
    changeBodyBackgroundColor()
  }, [windowSize])

  return (
    <React.Fragment>
      <HeadComponent />
      <Reset />
      <Global />
      <Layout layoutOptions={layoutOptions}>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default ExtendedApp
