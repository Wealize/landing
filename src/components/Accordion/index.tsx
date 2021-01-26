import React, { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

import { AccordionProps, AccordionSectionData } from '../../interfaces/Accordion'
import ButtonRounded from '../Buttons/Rounded'
import { SMALL } from '../Buttons/Rounded/sizes'
import RoundArrowIcon from '../icons/thingsWeAreGoodAt/RoundArrowIcon'

import {
  SectionRowElementContainer,
  SectionElementContainer,
  Container,
  Separator,
  TitleContainer,
  Title,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionToggle,
  SectionContentContainer,
  SectionElement
} from './styles'
const Accordion = (props: AccordionProps) => {
  const {
    backgroundColor,
    textColor,
    title,
    sectionsData,
    ToggleButtonBackgroundColor,
    ToggleButtonTextColor,
    ToggleButtonAnimatedBackgroundColor,
    ToggleButtonAnimatedTextColor
  } = props

  const { t } = useTranslation('profile')

  return (
    <Container backgroundColor={backgroundColor} textColor={textColor}>
      <TitleContainer>
        <Title textColor={textColor}>{t('accordion.title', { text: title })}</Title>
        <Separator className="accordion-separator" textColor={textColor}/>
      </TitleContainer>

      {
        sectionsData.map((section: AccordionSectionData, index: number) => {
          const [isExpanded, setIsExpanded] = useState(index === 0)
          return (
          <SectionContainer
            className="accordion-section-container"
            key={index}
          >
            <SectionHeader isExpanded={isExpanded}>
              <SectionTitle>{t(`accordion.section-${index}.title`, { text: section.title })}</SectionTitle>
              <SectionToggle
                className="accordion-section-toggle-button"
                textColor={textColor}
                backgroundColor={backgroundColor}
                isExpanded={isExpanded}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-label={`expand ${section.title} content button`}
              >
                <RoundArrowIcon />
              </SectionToggle>
              <ButtonRounded
                backgroundColor={ToggleButtonBackgroundColor}
                textColor={ToggleButtonTextColor}
                animatedBackgroundColor={ToggleButtonAnimatedBackgroundColor}
                animatedTextColor={ToggleButtonAnimatedTextColor}
                size={SMALL}
                handleClick={() => setIsExpanded(!isExpanded)}
              >
                <span>{isExpanded ? t('accordion.toogle-button-opened-text') : t('accordion.toogle-button-closed-text')}</span>
              </ButtonRounded>
            </SectionHeader>
            <SectionContentContainer isExpanded={isExpanded}>
              {section.data.map((element: string, index: number) => (
                <SectionElementContainer key={index}>
                  <SectionRowElementContainer>
                    <i> -&nbsp; </i>
                    <SectionElement>{element}</SectionElement>
                  </SectionRowElementContainer>
                </SectionElementContainer>

              ))}
            </SectionContentContainer>
            <Separator className="accordion-separator" textColor={textColor}/>
          </SectionContainer>
          )
        })
      }


    </Container>
  )
}

export default React.memo(Accordion)
