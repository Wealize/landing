import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { HOME_HREF, PROFILE_HREF } from '../../../constants/hrefs'

const HeadComponent = (): JSX.Element => {
  const { t, lang } = useTranslation()
  const router = useRouter()

  const ES_LANG_KEY = 'es'
  const EN_LANG_KEY = 'en'

  const isHomePage = () => router.pathname === HOME_HREF
  const isProfilePage = () => router.pathname === PROFILE_HREF
  const isIndexedPage = () => isHomePage() || isProfilePage()


  return (
  <Head>
    { isHomePage()
      ? (
        <>
          <title>{t('home:meta_title')}</title>
          <meta
            name="description"
            content={t('home:meta_description')}
          />
          <link rel="alternate" hrefLang="es" href="https://wealize.digital/es" />
          <link rel="alternate" hrefLang="en" href="https://wealize.digital/" />
          {lang.toLowerCase() === EN_LANG_KEY
            ? <link rel="canonical" href ="https://wealize.digital/" />
            : <link rel="canonical" href ="https://wealize.digital/es" />}
        </>
        )
      : null }

    { isProfilePage()
      ? (
        <>
          <title>{t('profile:meta_title')}</title>
          <meta
            name="description"
            content={t('profile:meta_description')}
          />
          <link rel="alternate" hrefLang="es" href="https://wealize.digital/es/profile" />
          <link rel="alternate" hrefLang="en" href="https://wealize.digital/profile" />
          {lang.toLowerCase() === EN_LANG_KEY
            ? <link rel="canonical" href ="https://wealize.digital/profile" />
            : <link rel="canonical" href ="https://wealize.digital/es/profile" />}
        </>
        )
      : null }

    { !isIndexedPage()
      ? (
          <meta name="robots" content="noindex,nofollow" />
        )
      : null }

    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    <meta name="theme-color" content="#f06078" />
    <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="/android-icon-192x192.png"
    />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />

    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', '${process.env.GTM_ID}');`
      }}
    />
  </Head>
  )
}

export default HeadComponent
