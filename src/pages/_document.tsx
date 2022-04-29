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
            dangerouslySetInnerHTML={{
              __html:
              `window.chatbotSettings = {
                chatbotEndpoint: 'wss://coloqio-bid.herokuapp.com/webchat/37be89ae-3790-4ee5-9660-9b61a4d268b4/',
                welcomeMessage: 'Lograr un impacto social y ambiental positivo es clave para BID Lab. Pero medir el resultado de las operaciones no es fácil. Por eso, estamos diseñando herramientas digitales que ayuden a nuestros especialistas y clientes a escoger los indicadores más apropiados para medir los resultados que esperan de sus proyectos. Bienvenido a KiPI.Bot.',
                startButton: '¡Hola!',
                agentProfile: {
                  teamName: 'KiPi bot'
                },
                isOpen: true,
                isWebView: false
              };
              (function(){
                var w=window;var d=document;
                var l=function(){
                  var x=d.getElementsByTagName('script')[0];
                  var c=d.createElement('div');
                  c.id='chatbotContainer';
                  d.body.appendChild(c);
                  var s=d.createElement('script');
                  s.type='text/javascript';
                  s.async=true;s.src='https://d1hbk1yt8xmke0.cloudfront.net/157/branded-chatbot-window.min.js';
                  x.parentNode.insertBefore(s,x)
                ;};
                if(d.readyState==='complete'){l();}
                else if(w.attachEvent){w.attachEvent('onload',l);}
                else{w.addEventListener('load',l,false);}}
              )();`,
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
