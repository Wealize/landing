import React from 'react'

import { ButtonSize } from '../../../interfaces/ButtonSize'
import { MEDIUM } from './sizes'
import {
  Container,
  ContainerButtonOriginal,
  ContainerButtonAnimated,
  Content
} from './styles'

interface ButtonProps {
  backgroundColor: string
  textColor: string
  animatedBackground: string
  animatedTextColor: string
  children?: string
  size: ButtonSize
  handleClick?: (e?: Event) => void | null
}
const ButtonRounded = (props: ButtonProps) => {
  const {
    backgroundColor,
    textColor,
    animatedBackground,
    animatedTextColor,
    children,
    size = MEDIUM,
    handleClick
  } = props

  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      animatedBackground={animatedBackground}
      size={size}
      animatedTextColor={animatedTextColor}
      onClick={() => handleClick && handleClick()}
    >
      <ContainerButtonOriginal
        backgroundColor={backgroundColor}
        aria-label={children}
      >
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonOriginal>
      <ContainerButtonAnimated
        animatedBackground={animatedBackground}
        aria-label={`${children} animated`}
      >
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonAnimated>
    </Container>
  )
}

export default React.memo(ButtonRounded)
