import React from 'react'

import { CardSimpleBigTitle } from '../../interfaces/Cards/CardSimpleBigTitle'
import SimpleBigTitleCard from '../Cards/SimpleBigTitle'
import { WE_DELIVER_TITLE, WE_DELIVER_DATA } from '../../data/weDeliverData'

import { Container, Title, ContainerCards } from './styles'
const WeDeliver = () => {
  return (
    <Container>
      <Title>{WE_DELIVER_TITLE}</Title>
      <ContainerCards>
        {WE_DELIVER_DATA.map((weDeliver: CardSimpleBigTitle, index: number) => (
          <SimpleBigTitleCard
            key={index}
            title={weDeliver.title}
            description={weDeliver.description}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}

export default React.memo(WeDeliver)
