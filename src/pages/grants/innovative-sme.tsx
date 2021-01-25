import React from 'react'
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
          <div title="Sello PYME INNOVADORA 23/01/2023" style={{ width: '238px', textAlign: 'center' }}>
            <a style={{ textDecoration: ' none' }} target="_blank" rel="noreferrer" href="https://sede.micinn.gob.es/pyiINFO/buscarPyi.mec?&nif=B56103468" title="Ir a 'Sello Pyme Innovadora con validez 23/01/2023 ' en ventana nueva" >
          <div>
            <img alt="Sello PYME INNOVADORA 23/01/2023" src="https://sede.micinn.gob.es/pyiINFO/imagenes/sello.jpg" /></div>
            <div style={{ color: '#000000', textDecoration: 'none', marginTop: '10px', marginBottom: '10px' }}><div style={{ fontWeight: 'bold', fontSize: '16px' }}>
              PYME INNOVADORA
            </div>
              <div style={{ fontSize: '10px' }}>Válido hasta el 23 de enero de 2023 </div>
            </div>
            <div>
              <img alt="escudo de MEIC 23/01/2023" src="https://sede.micinn.gob.es/pyiINFO/imagenes/escudo.jpg"/>
            </div>
            </a>
          </div>
      </LogosContainer>
      <BottomContainer>

        <FinancingContent>
          {t('financing_content')}
        </FinancingContent>
        <ProjectContent>
          {t('project_content.first_line')}
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
