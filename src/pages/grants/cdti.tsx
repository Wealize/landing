import React from 'react'
import Image from 'next/image'

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

const CDTI = (): JSX.Element => (
  <Container>
    <Content>
      <Title>Project Financed by CDTI</Title>
      <Description>
        <p>
          Wealize (formally The Neon Project) was awarded a CDTI grant in one of
          its most important programmes in 2019: NEOTEC, an initiative to
          support the creation and consolidation of technology-based companies.
          This has meant the validation and support of the R&D work in one of
          the projects being developed by the company: Metaledger.
        </p>
        <p>
          At Wealize, we help organisations to overcome challenges through
          technology. That is why we develop digital products based on
          blockchain, cognitive services and conversational agents. In this
          sense, Metaledger is a traceability solution for gold and other
          high-value metals that are mined in difficult environments.
        </p>
      </Description>
      <LogosContainer>
        <Image
          src="/img/grants/CDTI.png"
          width="100%"
          height="55%"
          layout="responsive"
          aria-label="CDTI logo"
        />
      </LogosContainer>
      <BottomContainer>
        <FinancingContent>
          Financiado por los Presupuestos Generales del Estado a cargo de la
          aplicación 27.12.467C.74908.
        </FinancingContent>
        <ProjectContent>
          Nº DE PROYECTO: XXXXXXX <br />
          FECHA COMIENZO: XX/XX/XXXX <br />
          FECHA FINAL: XX/XX/XXXX
        </ProjectContent>
      </BottomContainer>
    </Content>
  </Container>
)

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: false,
    showNavigationBarClosablePage: true
  }

  return { props: { layoutOptions } }
}

export default CDTI
