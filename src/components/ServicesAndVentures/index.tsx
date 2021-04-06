import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import servicesData from '../../data/servicesData'
import venturesData from '../../data/venturesData'
import { ServiceContent } from '../../interfaces/Data/ServiceContent'
import { VentureContent } from '../../interfaces/Data/VentureContent'

import {
  Container,
  Title,
  ContentContainer,
  SectionContainer,
  SectionTitle,
  CardContainer,
  CardHeadline,
  CardDescription,
  Subtitle
} from './styles'
const ServicesAndVentures = () => {
  const { t } = useTranslation('profile')

  return (
    <Container>
      <Title>{t('services-ventures.title')}</Title>
      <Subtitle>{t('services-ventures.subtitle')}</Subtitle>
      <ContentContainer>
        <SectionContainer>
          <SectionTitle>{t('services-ventures.services-section.title')}</SectionTitle>
          {servicesData.map((service: ServiceContent, index: number) => (
            <CardContainer
              key={index}
            >
              <CardHeadline>{t(`services-ventures.services-section.section-title-${index}`, { text: service.headline })}</CardHeadline>
              <CardDescription>{t(`services-ventures.services-section.section-description-${index}`, { text: service.description })}</CardDescription>
            </CardContainer>
          ))}
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>{t('services-ventures.ventures-section.title')}</SectionTitle>
          {venturesData.map((service: VentureContent, index: number) => (
            <CardContainer
              key={index}
            >
              <CardHeadline>{t(`services-ventures.ventures-section.section-title-${index}`, { text: service.headline })}</CardHeadline>
              <CardDescription>{t(`services-ventures.ventures-section.section-description-${index}`, { text: service.description })}</CardDescription>
            </CardContainer>
          ))}
        </SectionContainer>
      </ContentContainer>
    </Container>
  )
}

export default React.memo(ServicesAndVentures)
