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
      <Title>Proyecto financiado por CDTI</Title>
      <Description>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Donec elementum ligula eu
          sapien consequat eleifend. Donec nec dolor erat, condimentum sagittis
          sem. Praesent porttitor porttitor risus, dapibus rutrum ipsum gravida
          et. Integer lectus nisi, facilisis sit amet eleifend nec, pharetra
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
