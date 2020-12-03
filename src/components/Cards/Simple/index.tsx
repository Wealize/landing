import React from 'react'

import { Container, Text } from './styles'

interface CardProps {
  text: string
}
const SimpleCard = ({ text }: CardProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  )
}

export default React.memo(SimpleCard)
