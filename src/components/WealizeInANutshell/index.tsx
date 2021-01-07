import React from 'react'
import { InView } from 'react-intersection-observer'
import useTranslation from 'next-translate/useTranslation'

import { ACCENT_COLOR, DARK_GRAY_COLOR } from '../../theme/color'
import {
  InANutshellTitle,
  InANutshellData
} from '../../data/WealizeInANutshellData'

import { Container, Title, Content, Paragraph } from './styles'

interface CardProps {
  highlightColor: string
}

const WealizeInANutshell = ({ highlightColor }: CardProps) => {
  const { t } = useTranslation('profile')

  return (
    <Container className="WealizeInANutshell">
      <Title>{t('wealize-in-a-nutshell.title', { text: InANutshellTitle })}</Title>
      <Content>
        {InANutshellData.map((content: string, index: number) => (
          <InView
            key={index}
            threshold={0.3}
            onChange={() => {
              document
                .querySelectorAll('.intersecting')
                .forEach((element: HTMLElement, index: number) => {
                  if (index === 0) {
                    element.style.color = ACCENT_COLOR
                  } else {
                    element.style.color = DARK_GRAY_COLOR
                  }
                })
            }}
          >
            {({ ref, inView }) => {
              return (
                <Paragraph
                  ref={ref}
                  isIntersecting={inView}
                  className={`${'wealize-nutshell-paragraph'} ${
                    inView ? 'intersecting' : ''
                  }`}
                  highlightColor={highlightColor}
                >
                  {t(`wealize-in-a-nutshell.paragraph-${index}`, { text: content })}
                </Paragraph>
              )
            }}
          </InView>
        ))}
      </Content>
    </Container>
  )
}

export default React.memo(WealizeInANutshell)
