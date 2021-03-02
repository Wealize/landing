import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import useTranslation from 'next-translate/useTranslation'
// https://github.com/zeit/next.js/tree/canary/examples/with-styled-components
class ExtendedDocument extends Document {
  public static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render () {
    const {
      __NEXT_DATA__: {
        query: {
          __lng
        }
      }
    } = this.props

    return (
      <Html lang={__lng as string}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html:
              `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', '${process.env.GTM_ID}');`,
            }}
          />
          <script
            defer
            dangerouslySetInnerHTML={{
              __html:
              `window.chatbotSettings = {
                chatbotEndpoint: '${process.env.WEBCHAT_ENDPOINT}',
                welcomeMessage: '¡Bienvenido al webchat de Maldita',
                startButton: '¡Hola!',
                hideUserInputWithQuickReplies: true,
                agentProfile: {
                  teamName: 'Maldita.es',
                  imageUrl: 'https://tnpnlu-assets.s3.eu-central-1.amazonaws.com/Logo_MALDITA.jpg'
                },
                theme: {
                  brandColor: 'blue'
                },
                userTimeout: 3600
              };

              (function(){var w=window;var d=document;var l=function(){var x=d.getElementById('__next');var c=d.createElement('div');c.id='chatbotContainer';x.parentNode.insertBefore(c,x);var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://d1hbk1yt8xmke0.cloudfront.net/146/branded-chatbot-window.min.js';x.parentNode.insertBefore(s,x);};if(d.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}})();`
            }}
          />
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
              }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default ExtendedDocument
