import React, { useRef } from 'react'
import Lottie from 'react-lottie'

import RoundArrowIcon from '../icons/RoundArrowIcon'
import {
  Container,
  Background,
  Button,
  Headline,
  Slogan,
  SubHeadline
} from './styles'
import animationStartedWealize from '../../animations/w-started-wealize-light-gray.json'

const HomeSpecial = () => {
  const containerRef = useRef(null)
  const buttonScrollRef = useRef(null)

  const scrollToNextElement = () => {
    const navbarHeight = document.getElementById('navbar').clientHeight
    const buttonMiddleHeight = buttonScrollRef.current.clientHeight / 2

    if (navbarHeight) {
      window.scrollTo(
        0,
        containerRef.current.clientHeight + navbarHeight + buttonMiddleHeight
      )
    }
  }

  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationStartedWealize,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <Container ref={containerRef}>
      <Background>
        <Lottie options={defaultLottieOptions} width="100%" height="100%" />
      </Background>
      <Slogan>
        <Headline>Unlock today’s world</Headline>
        <SubHeadline>
          Crafting digital products with real-world impact
        </SubHeadline>
        <Button
          onClick={scrollToNextElement}
          name="scroll-button"
          ref={buttonScrollRef}
        >
          <RoundArrowIcon />
        </Button>
      </Slogan>
    </Container>
  )
}

export default React.memo(HomeSpecial)
