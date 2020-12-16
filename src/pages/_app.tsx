import React from 'react'
import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import Global from '../components/Global'
import HeadComponent from '../components/layout/Head/'
import Layout from '../components/layout/'
import { LayoutOptions } from '../interfaces/Page'

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

  const DEFAULT_LAYOUT_OPTIONS: LayoutOptions = {
    showFooter: false,
    showNavigationBarClosablePage: true
  }

  const { layoutOptions = DEFAULT_LAYOUT_OPTIONS } = pageProps

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
