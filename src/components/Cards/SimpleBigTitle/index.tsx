import React from 'react'

import { Container, Headline, SubHeadline } from './styles'

interface CardProps {
  title: string
  description: string
}

const SimpleBigTitleCard = ({ title, description }: CardProps) => {
  return (
    <Container className="SimpleBigTitleCard">
      <Headline>{title}</Headline>
      <SubHeadline>{description}</SubHeadline>
    </Container>
  )
}

export default React.memo(SimpleBigTitleCard)
