import React from 'react'
import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

import Global from '../components/Global'
import { Head } from '../components/layout/Head'
import Layout from '../components/layout/Layout'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

const ExtendedApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head />
      <Reset />
      <Global />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}

export default ExtendedApp
