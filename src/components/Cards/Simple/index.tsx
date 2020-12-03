import React from 'react'

import { CardContainer, CardText } from './styles'

interface CardProps {
  text: string
}
const SimpleCard = ({ text }: CardProps) => {
  return (
    <CardContainer>
      <CardText>{text}</CardText>
    </CardContainer>
  )
}

export default React.memo(SimpleCard)
