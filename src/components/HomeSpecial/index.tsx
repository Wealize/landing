import React, { useRef } from 'react'
import Lottie from 'react-lottie'
import Scroll from 'react-scroll'

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
  const BREAKPOINT_LG_PX = 992

  const scrollToNextElement = () => {
    const navbarHeight = document.getElementById('navbar').clientHeight
    const buttonMiddleHeight = buttonScrollRef.current.clientHeight / 2

    if (!navbarHeight) return false

    if (window.innerWidth < BREAKPOINT_LG_PX) {
      Scroll.animateScroll.scrollTo(
        containerRef.current.clientHeight + navbarHeight + 2,
        { duration: 1000, delay: 0, smooth: true }
      )
    } else {
      Scroll.animateScroll.scrollTo(
        containerRef.current.clientHeight + navbarHeight + buttonMiddleHeight,
        { duration: 1000, delay: 0, smooth: true }
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
