import React from 'react'
import useTranslation from 'next-translate/useTranslation'

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

const PrivacyLegal = (): JSX.Element => {
  const { t } = useTranslation('privacy-legal')

  return (
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
          <p>{t('question-5.paragraph-4')}</p>
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
          <p>{t('question-9.paragraph-4')}</p>
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
    </QuestionsContainer>
  </Container>
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
