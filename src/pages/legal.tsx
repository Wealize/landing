import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { LayoutOptions } from '../interfaces/Page'
import {
  Container,
  Content,
  Title,
  Description
} from '../styles/pages/Politics'

const Legal = (): JSX.Element => {
  const { t } = useTranslation('legal')

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Container>
        <Content>
          <Title>{ t('page_title') }</Title>
          <Description>
            <p>
              {t('paragraph-0')}
            </p>
            <p>
              {t('paragraph-1')}
            </p>
            <ol>
              <li>{t('paragraph-2')}</li>
              <li>{t('paragraph-3')}</li>
              <li>{t('paragraph-4')}</li>
              <li>{t('paragraph-5')}</li>
              <li>{t('paragraph-6')}</li>
              <li>{t('paragraph-7')}</li>
              <li>{t('paragraph-8')}</li>
              <li>{t('paragraph-9')}</li>
              <li>{t('paragraph-10')}</li>
              <li>{t('paragraph-11')}</li>
            </ol>
            <p>{t('paragraph-12')}</p>
            <p>{t('paragraph-13')}</p>
          </Description>
        </Content>
      </Container>
    </>
  )
}

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: true
  }

  return { props: { layoutOptions } }
}

export default Legal
