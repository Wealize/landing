import React from 'react'

import { LayoutOptions } from '../interfaces/Page'
import {
  Container,
  Content,
  Title,
  Description,
  QuestionsContainer,
  Question,
  QuestionTitle,
  QuestionDescription
} from '../styles/pages/PrivacyLegal'

const PrivacyLegal = (): JSX.Element => (
  <Container>
    <Content>
      <Title>Privacy & legal</Title>
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
    </Content>
    <QuestionsContainer>
      <Question>
        <QuestionTitle>¿Quiénes somos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Nuestra denominación: xxxxxxxxxxxxxxxxxxx Nuestro CIF / NIF:
            xxxxxxxxxxxxxxxxxx
            <br />
            Nuestra actividad principal: xxxxxxxxxxxx
            <br />
            Nuestra dirección:xxxxxxxx
            <br />
            Nuestra dirección de correo electrónico de contacto: xxxxxxxxxxxxxx
            <br />
            Nuestra página web: xxxxxxxxxxxxxxxxxxxxx
          </p>

          <p>
            Para su confianza y seguridad, le informamos que somos una entidad
            inscrita en el siguiente Registro Mercantil /Registro Público:
            xxxxxxx
          </p>
          <p>Estamos a su disposición, no dude en contactar con nosotros.</p>
        </QuestionDescription>
      </Question>
      <Question>
        <QuestionTitle>¿Para qué vamos a usar sus datos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Con carácter general, sus datos personales serán usados para poder
            relacionarnos con usted y poder prestarle nuestros servicios.
          </p>

          <p>
            Asimismo, también pueden ser usados para otras actividades, como
            enviarle publicidad o promocionar nuestras actividades.{' '}
          </p>
        </QuestionDescription>
      </Question>
      <Question>
        <QuestionTitle>¿Para qué vamos a usar sus datos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Con carácter general, sus datos personales serán usados para poder
            relacionarnos con usted y poder prestarle nuestros servicios.
          </p>

          <p>
            Asimismo, también pueden ser usados para otras actividades, como
            enviarle publicidad o promocionar nuestras actividades.{' '}
          </p>
        </QuestionDescription>
      </Question>
      <Question>
        <QuestionTitle>¿Para qué vamos a usar sus datos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Con carácter general, sus datos personales serán usados para poder
            relacionarnos con usted y poder prestarle nuestros servicios.
          </p>

          <p>
            Asimismo, también pueden ser usados para otras actividades, como
            enviarle publicidad o promocionar nuestras actividades.{' '}
          </p>
        </QuestionDescription>
      </Question>
      <Question>
        <QuestionTitle>¿Para qué vamos a usar sus datos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Con carácter general, sus datos personales serán usados para poder
            relacionarnos con usted y poder prestarle nuestros servicios.
          </p>

          <p>
            Asimismo, también pueden ser usados para otras actividades, como
            enviarle publicidad o promocionar nuestras actividades.{' '}
          </p>
        </QuestionDescription>
      </Question>
      <Question>
        <QuestionTitle>¿Para qué vamos a usar sus datos?</QuestionTitle>
        <QuestionDescription>
          <p>
            Con carácter general, sus datos personales serán usados para poder
            relacionarnos con usted y poder prestarle nuestros servicios.
          </p>

          <p>
            Asimismo, también pueden ser usados para otras actividades, como
            enviarle publicidad o promocionar nuestras actividades.{' '}
          </p>
        </QuestionDescription>
      </Question>
    </QuestionsContainer>
  </Container>
)

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: true
  }

  return { props: { layoutOptions } }
}

export default PrivacyLegal
