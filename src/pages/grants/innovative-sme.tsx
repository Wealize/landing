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
const InnovativeSME = (): JSX.Element => (
  <Container>
    <Content>
      <Title>Innovative SMEs Stamp</Title>
      <Description>
        <p>
          The Ministry of Economy and Competitiveness of the Spanish Government
          has awarded us the Innovative SME Stamp. At Wealize (formally The Neon
          Project), we are committed to the development of digital products that
          enable us to overcome challenges through technology, and we believe
          that innovation is one of the most important paths to growth.
        </p>
        <p>
          For all these reasons, this recognition adds an extra dimension to the
          R&D we have been developing. It also encourages us to go even deeper
          into the areas of greatest technological interest from the point of
          view of innovation: digital identity and other solutions based on
          blockchain; the development of conversational agents as a method of
          communication and business support; and the use of tools based on
          cognitive services that allow complex problems to be solved.
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

export default InnovativeSME
