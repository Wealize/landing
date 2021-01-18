import React, { useRef } from 'react'
import Scroll from 'react-scroll'
import useTranslation from 'next-translate/useTranslation'

import RoundArrowIcon from '../icons/RoundArrowIcon'
import { BREAKPOINT_LG } from '../../theme/media'
import WAnimation from '../WAnimation'

import {
  Container,
  Background,
  Button,
  Headline,
  Slogan,
  SubHeadline
} from './styles'

const HomeSpecial = () => {
  const containerRef = useRef(null)
  const buttonScrollRef = useRef(null)
  const { t } = useTranslation('home')

  const scrollToNextElement = () => {
    const navbarHeight = document.getElementById('navbar').clientHeight
    const buttonMiddleHeight = buttonScrollRef.current.clientHeight / 2

    if (!navbarHeight) return false

    if (window.innerWidth < BREAKPOINT_LG) {
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
        <WAnimation isMixMultiplyBlendMode={false} />
      </Background>
      <Slogan>
        <Headline>{t('slogan.headline')}</Headline>
        <SubHeadline>
          {t('slogan.subheadline')}
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
