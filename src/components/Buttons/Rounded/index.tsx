import React from 'react'

import {
  Container,
  ContainerButtonOriginal,
  ContainerButtonAnimated,
  Content
} from './styles'

interface ButtonProps {
  backgroundColor: string
  textColor: string
  accentColor: string
  children?: string
}

const ButtonRounded = ({
  backgroundColor,
  textColor,
  accentColor,
  children
}: ButtonProps) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      accentColor={accentColor}
    >
      <ContainerButtonOriginal backgroundColor={backgroundColor}>
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonOriginal>
      <ContainerButtonAnimated accentColor={accentColor}>
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonAnimated>
    </Container>
  )
}

export default React.memo(ButtonRounded)
