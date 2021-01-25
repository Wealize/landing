import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Head from 'next/head'
import Link from 'next/link'

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
} from '../styles/pages/Politics'
import { HOME_HREF } from '../constants/hrefs'

const CookiesPolicy = (): JSX.Element => {
  const { t } = useTranslation('cookies-policy')

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
              {<Trans
                i18nKey="cookies-policy:paragraph-0"
                components={[(
                  <Link key={0} href={HOME_HREF} passHref>
                    <a title="wealize page link" aria-label="wealize page link">Wealize</a>
                  </Link>
                )]}
                />}
            </p>
            <p>
              {t('paragraph-1')}
            </p>
            <p>
              {t('paragraph-2')}
            </p>
            <p>
              {t('paragraph-3')}
            </p>
          </Description>
        </Content>
        <QuestionsContainer>
        <Question>
          <QuestionTitle>{t('question-0.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-0.paragraph-0')}
            </p>
            <p>
              {t('question-0.paragraph-1')}
            </p>
            <ul>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-0.paragraph-2"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-0.paragraph-3"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-0.paragraph-4"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
            </ul>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-1.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-1.paragraph-0')}
            </p>
            <p>
              {t('question-1.paragraph-1')}
            </p>
            <ul>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-1.paragraph-2"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-1.paragraph-3"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
            </ul>
            <p>
              {t('question-1.paragraph-4')}
            </p>
            <ul>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-1.paragraph-5"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
              <li>
                {<Trans
                  i18nKey="cookies-policy:question-1.paragraph-6"
                  components={[(<b key={0}></b>)]}
                  />}
              </li>
            </ul>
            <p>
              {t('question-1.paragraph-7')}
            </p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-2.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-2.paragraph-0')}
            </p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-3.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-3.paragraph-0')}
            </p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-4.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-4.paragraph-0')}
            </p>
              <p>
              {t('question-4.paragraph-1')}
            </p>
            <p>
              {t('question-4.paragraph-2')}
            </p>
            <ul>
              <li>
                <Link key={0} href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&hl=es-419" passHref>
                  <a title="Deactivate cookie chrome" aria-label="Deactivate cookie chrome">Chrome</a>
                </Link>
              </li>
              <li>
                <Link key={0} href="https://support.apple.com/es-es/guide/safari/sfri11471/mac#:~:text=Eliminar%20cookies%20y%20datos%20almacenados,o%20en%20%E2%80%9CEliminar%20todo%E2%80%9D" passHref>
                  <a title="Deactivate cookie safari" aria-label="Deactivate cookie safari">Safari</a>
                </Link>
              </li>
                <li>
                <Link key={0} href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros" passHref>
                  <a title="Deactivate cookie firefox" aria-label="Deactivate cookie firefox">Firefox</a>
                </Link>
              </li>
            </ul>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-5.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-5.paragraph-0')}
            </p>
          </QuestionDescription>
        </Question>
      </QuestionsContainer>
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

export default CookiesPolicy
