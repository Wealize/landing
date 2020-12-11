import React, { useState } from 'react'
import Link from 'next/link'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Scroll from 'react-scroll'

import { HOME_HREF, PROFILE_HREF } from '../../constants/hrefs'
import {
  Navbar,
  LogoMobileContainer,
  LogoContainer,
  NavLink,
  LinksContainer
} from './styles'
import WealizeMinimalMediumIcon from '../icons/WealizeMinimalMediumIcon'
import WealizeNormalMediumIcon from '../icons/WealizeNormalMediumIcon'

const NavBar = () => {
  const [visible, setVisible] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(prevPos.y < currPos.y || (currPos.y >= 0 && currPos.y <= 5))
  })

  const scrollToFooter = () => {
    Scroll.animateScroll.scrollTo(
      document.getElementById('main').clientHeight,
      { duration: 1000, delay: 0, smooth: true }
    )
  }

  return (
    <Navbar id="navbar" isVisible={visible}>
      <LogoMobileContainer data-cy="navbar-logo-mobile-container">
        <Link href={HOME_HREF}>
          <a aria-label="Home">
            <WealizeMinimalMediumIcon />
          </a>
        </Link>
      </LogoMobileContainer>

      <LogoContainer data-cy="navbar-logo-container">
        <Link href={HOME_HREF}>
          <a aria-label="Home">
            <WealizeNormalMediumIcon />
          </a>
        </Link>
      </LogoContainer>

      <LinksContainer>
        <Link href={PROFILE_HREF}>
          <NavLink aria-label="Profile" data-cy="nav-profile-link">
            Profile
          </NavLink>
        </Link>

        <NavLink
          aria-label="Contact"
          data-cy="nav-contact-link"
          onClick={scrollToFooter}
        >
          Contact
        </NavLink>
      </LinksContainer>
    </Navbar>
  )
}

export default React.memo(NavBar)
