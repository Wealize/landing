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
import { COOKIES_POLICY_HREF } from '../constants/hrefs'

const PrivacyLegal = (): JSX.Element => {
  const { t } = useTranslation('privacy')

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
            <p>
              {t('paragraph-2')}
            </p>
            <p>
              {t('paragraph-3')}
            </p>
            <p>
              {t('paragraph-4')}
            </p>
          </Description>
        </Content>
        <QuestionsContainer>
        <Question>
          <QuestionTitle>{t('question-0.title')}</QuestionTitle>
          <QuestionDescription>
            <p>
              {t('question-0.paragraph-0')} <br/>
              {t('question-0.paragraph-1')} <br/>
              {t('question-0.paragraph-2')} <br/>
              {t('question-0.paragraph-3')} <br/>
              {t('question-0.paragraph-4')}
            </p>
            <p>{t('question-0.paragraph-5')}</p>
            <p>{t('question-0.paragraph-6')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-1.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-1.paragraph-0')}</p>
            <p>{t('question-1.paragraph-1')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-2.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-2.paragraph-0')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-3.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-3.paragraph-0')}</p>
            <p>{t('question-3.paragraph-1')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-4.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-4.paragraph-0')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-5.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-5.paragraph-0')}</p>
            <p>{t('question-5.paragraph-1')}</p>
            <p>{t('question-5.paragraph-2')}</p>
            <p>{t('question-5.paragraph-3')}</p>
            <p>
              {<Trans
                i18nKey="privacy:question-5.paragraph-4"
                components={[(
                  <Link key={0} href="https://www.agpd.es" passHref>
                    <a title="agpd" aria-label="agpd"></a>
                  </Link>
                )]}
                />}
            </p>
            <p>
              {t('question-5.paragraph-5')} <br/>
              {t('question-5.paragraph-6')} <br/>
              {t('question-5.paragraph-7')}
            </p>
            <p>
              {t('question-5.paragraph-8')} <br/>
              {t('question-5.paragraph-9')} <br/>
              {t('question-5.paragraph-9')}
            </p>
            <p>
              {t('question-5.paragraph-11')}
            </p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-6.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-6.paragraph-0')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-7.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-7.paragraph-0')}</p>
            <p>{t('question-7.paragraph-1')}</p>
            <p>{t('question-7.paragraph-2')}</p>
            <p>{t('question-7.paragraph-3')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-8.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-8.paragraph-0')}</p>
            <p>{t('question-8.paragraph-1')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-9.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-9.paragraph-0')}</p>
            <p>{t('question-9.paragraph-1')}</p>
            <p>{t('question-9.paragraph-2')}</p>
            <p>{t('question-9.paragraph-3')}</p>
            <p>
              {<Trans
                i18nKey="privacy:question-5.paragraph-4"
                components={[(
                  <Link key={0} href="https://www.agpd.es" passHref>
                    <a title="agpd" aria-label="agpd"></a>
                  </Link>
                )]}
              />}
            </p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-10.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-10.paragraph-0')}</p>
            <p>{t('question-10.paragraph-1')}</p>
            <p>{t('question-10.paragraph-2')}</p>
          </QuestionDescription>
        </Question>
        <Question>
          <QuestionTitle>{t('question-11.title')}</QuestionTitle>
          <QuestionDescription>
            <p>{t('question-11.paragraph-0')}</p>
            <p>{t('question-11.paragraph-1')}</p>
            <p>
              {<Trans
                i18nKey="privacy:question-11.paragraph-2"
                components={[(
                  <Link key={0} href={COOKIES_POLICY_HREF} passHref>
                    <a title="wealize cookies policy page link" aria-label="wealize cookies policy page link"></a>
                  </Link>
                )]}
                />}
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

export default PrivacyLegal
