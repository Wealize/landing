import React from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { LayoutOptions } from '../../interfaces/Page'
import {
  Container,
  Content,
  Title,
  Description,
  LogosContainer,
  BottomContainer,
  FinancingContent,
  ProjectContent
} from '../../styles/pages/Grant'
const InnovativeSME = (): JSX.Element => {
  const { t } = useTranslation('grants_innovative-sme')
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Container>
        <Content>
      <Title>{t('title')}</Title>
      <Description>
        <p>
         {t('description.first_paragraph')}
        </p>
        <p>
          {t('description.second_paragraph')}
        </p>
      </Description>
      <LogosContainer>
        <Image
          src="/img/grants/innovation-SME.png"
          width="100%"
          height="100%"
          layout="responsive"
          aria-label="Innovation SME logo"
        />
      </LogosContainer>
      <BottomContainer>
        <FinancingContent>
          {t('financing_content')}
        </FinancingContent>
        <ProjectContent>
          {t('project_content.first_line')} <br />
          {t('project_content.second_line')} <br />
          {t('project_content.third_line')}
        </ProjectContent>
      </BottomContainer>
    </Content>
      </Container>
    </>

  )
}

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: false,
    showNavigationBarClosablePage: true
  }

  return { props: { layoutOptions } }
}

export default InnovativeSME
