// eslint-disable-next-line
import React, { useState } from 'react'
import Link from 'next/link'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { HOME_HREF, CONTACT_HREF, PROFILE_HREF } from '../../constants/hrefs'
import {
  Navbar,
  LogoMobileContainer,
  LogoContainer,
  NavLink,
  LinksContainer
} from './styles'
import WealizeMinimalMedium from '../icons/WealizeMinimalMedium'
import WealizeNormalMedium from '../icons/WealizeNormalMedium'

const NavBar = () => {
  const [visible, setVisible] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(prevPos.y < currPos.y || (currPos.y >= 0 && currPos.y <= 5))
  })

  return (
    <Navbar id="navbar" isVisible={visible}>
      <LogoMobileContainer data-cy="navbar-logo-mobile-container">
        <Link href={HOME_HREF}>
          <a>
            <WealizeMinimalMedium />
          </a>
        </Link>
      </LogoMobileContainer>

      <LogoContainer data-cy="navbar-logo-container">
        <Link href={HOME_HREF}>
          <a>
            <WealizeNormalMedium />
          </a>
        </Link>
      </LogoContainer>

      <LinksContainer>
        <Link href={PROFILE_HREF}>
          <NavLink aria-label="Profile" data-cy="nav-profile-link">
            Profile
          </NavLink>
        </Link>
        <Link href={CONTACT_HREF}>
          <NavLink aria-label="Contact" data-cy="nav-contact-link">
            Contact
          </NavLink>
        </Link>
      </LinksContainer>
    </Navbar>
  )
}

export default React.memo(NavBar)
