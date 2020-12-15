import React from 'react'

import { Container, Text } from './styles'

interface CardProps {
  children?: string
}

const SimpleCard = ({ children }: CardProps) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  )
}

export default React.memo(SimpleCard)
