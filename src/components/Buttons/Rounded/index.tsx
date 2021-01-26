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
  id?: string,
  backgroundColor: string
  textColor: string
  animatedBackgroundColor: string
  animatedTextColor: string
  children?: React.ReactElement
  size: ButtonSize
  handleClick?: (e?: Event) => void | null
}
const ButtonRounded = (props: ButtonProps) => {
  const {
    id,
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
      id={id}
    >
      <ContainerButtonOriginal
        backgroundColor={backgroundColor}
      >
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonOriginal>
      <ContainerButtonAnimated
        animatedBackgroundColor={animatedBackgroundColor}
        aria-label={'button animated'}
      >
        <Content textColor={textColor}>{children}</Content>
      </ContainerButtonAnimated>
    </Container>
  )
}

export default React.memo(ButtonRounded)
