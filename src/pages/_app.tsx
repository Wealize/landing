import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { AppProps } from 'next/app'
import { Reset } from 'styled-reset'
import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import LoadingBar from 'react-top-loading-bar'
import dynamic from 'next/dynamic'

import 'react-placeholder/lib/reactPlaceholder.css'
import Global from '../components/Global'
import HeadComponent from '../components/layout/Head/'
import Layout from '../components/layout/'
import { LayoutOptions } from '../interfaces/Page'
import useWindowSize from '../hooks/useWindowSize'
import { ACCENT_COLOR, WHITE_COLOR } from '../theme/color'
import { DEFAULT_RADIUS } from '../theme/border'
import { COOKIES_POLICY_HREF } from '../constants/hrefs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0
})

const ExtendedApp = (props: AppProps) => {
  const { Component, pageProps } = props
  const CookieConsent = dynamic(() => import('react-cookie-consent'))

  const [progress, setProgress] = useState(0)
  const router = useRouter()
  const windowSize = useWindowSize()
  const { t } = useTranslation('common')

  const DEFAULT_LAYOUT_OPTIONS: LayoutOptions = {
    showFooter: false,
    showNavigationBarClosablePage: true
  }

  const { layoutOptions = DEFAULT_LAYOUT_OPTIONS } = pageProps

  const handleRouteChangeStart = () => {
    setProgress(progress + 20)
  }

  const handleRouteChangeComplete = () => {
    changeBodyBackgroundColor()
    setProgress(100)
  }

  const changeBodyBackgroundColor = () => {
    const UNSET_VALUE_BG = 'rgba(0, 0, 0, 0)'

    const mainElement = document.querySelector('main')
    if (!mainElement.hasChildNodes() || typeof window === 'undefined') return

    const firstChildrenFromMain = mainElement.childNodes[0] as HTMLElement
    if (!firstChildrenFromMain) return

    const firstChildrenFromMainBgColor = window
      .getComputedStyle(firstChildrenFromMain, null)
      .getPropertyValue('background-color')

    document.body.style.backgroundColor =
      firstChildrenFromMainBgColor === UNSET_VALUE_BG
        ? WHITE_COLOR
        : `${firstChildrenFromMainBgColor}`
  }

  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    // If the component is unmounted, unsubscribe
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeComplete)
    }
  }, [])

  useEffect(() => {
    changeBodyBackgroundColor()
  }, [windowSize])

  return (
    <React.Fragment>
      <HeadComponent />
      <LoadingBar
        color={ACCENT_COLOR}
        height={5}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Reset />
      <Global />
      <Layout layoutOptions={layoutOptions}>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent
        location="bottom"
        buttonText={t('cookieConsentPopup.button_text')}
        cookieName="cookieConsent"
        style={{
          backgroundColor: ACCENT_COLOR,
          color: WHITE_COLOR,
          padding: '20px 30px',
          lineHeight: '1.3',
          fontSize: '1.1rem',
          fontFamily: 'DM Sans'
        }}
        buttonStyle={{
          color: ACCENT_COLOR,
          backgroundColor: WHITE_COLOR,
          borderRadius: DEFAULT_RADIUS,
          padding: '15px 20px',
          fontSize: '1.1rem',
          fontFamily: 'DM Sans'
        }}
        expires={150}
      >
        {
          <Trans
            i18nKey="common:cookieConsentPopup.text"
            components={[
              <Link key={0} href={COOKIES_POLICY_HREF} passHref>
                <a
                  style={{
                    textDecoration: 'underline',
                    color: WHITE_COLOR,
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                  title=""
                  aria-label=""
                >
                  {t('cookieConsentPopup.more_info_link_text')}
                </a>
              </Link>
            ]}
          />
        }
      </CookieConsent>
    </React.Fragment>
  )
}

export default ExtendedApp
