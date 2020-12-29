import React from 'react'

import { ButtonSize } from '../../../interfaces/Buttons/ButtonSize'

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
  animatedBackgroundColor: string
  animatedTextColor: string
  children?: string
  size: ButtonSize
  handleClick?: (e?: Event) => void | null
}
const ButtonRounded = (props: ButtonProps) => {
  const {
    backgroundColor,
    textColor,
    animatedBackgroundColor,
    animatedTextColor,
    children,
    size = MEDIUM,
    handleClick
  } = props

  return (
    <Container
      className="button-rounded"
      backgroundColor={backgroundColor}
      textColor={textColor}
      animatedBackgroundColor={animatedBackgroundColor}
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
        animatedBackgroundColor={animatedBackgroundColor}
        aria-label={`${children} animated`}
      >
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonAnimated>
    </Container>
  )
}

export default React.memo(ButtonRounded)
