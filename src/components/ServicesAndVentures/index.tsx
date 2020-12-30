import React from 'react'

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
  CardDescription
} from './styles'
const ServicesAndVentures = () => {
  const SECTION_TITLE = 'We craft digital products with real-world impact and build sustainable ventures  that contribute positively to the community'

  const SECTION_SERVICES_TITLE = 'Services'
  const SECTION_VENTURES_TITLE = 'Ventures'

  return (
    <Container>
      <Title>{SECTION_TITLE}</Title>
      <ContentContainer>
        <SectionContainer>
          <SectionTitle>{SECTION_SERVICES_TITLE}</SectionTitle>
          {servicesData.map((service: ServiceContent, index: number) => (
            <CardContainer
              key={index}
            >
              <CardHeadline>{service.headline}</CardHeadline>
              <CardDescription>{service.description}</CardDescription>
            </CardContainer>
          ))}
        </SectionContainer>
        <SectionContainer>
          <SectionTitle>{SECTION_VENTURES_TITLE}</SectionTitle>
          {venturesData.map((service: VentureContent, index: number) => (
            <CardContainer
              key={index}
            >
              <CardHeadline>{service.headline}</CardHeadline>
              <CardDescription>{service.description}</CardDescription>
            </CardContainer>
          ))}
        </SectionContainer>
      </ContentContainer>
    </Container>
  )
}

export default React.memo(ServicesAndVentures)
