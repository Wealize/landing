import React, { useRef } from 'react'
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
import WStaticIcon from '../icons/WStaticIcon'

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

  return (
    <Container ref={containerRef}>
      <Background>
        <WStaticIcon />
      </Background>
      <Slogan>
        <Headline>Unlock today’s world</Headline>
        <SubHeadline>
          Crafting digital products with real-world impact
        </SubHeadline>
        <Button
          onClick={scrollToNextElement}
          aria-label="scroll-button"
          ref={buttonScrollRef}
        >
          <RoundArrowIcon />
        </Button>
      </Slogan>
    </Container>
  )
}

export default React.memo(HomeSpecial)
