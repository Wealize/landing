import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
import ButtonRounded from '../Buttons/Rounded'
import { ACCENT, LIGHT_GRAY, WHITE } from '../../theme/color'
import { SMALL } from '../Buttons/Rounded/sizes'

interface NavbarProps {
  showNavigationBarClosablePage: boolean
}

const NavBar = ({ showNavigationBarClosablePage }: NavbarProps) => {
  const [visible, setVisible] = useState(true)
  const router = useRouter()

  useScrollPosition(({ prevPos, currPos }) => {
    setVisible(prevPos.y < currPos.y || (currPos.y >= 0 && currPos.y <= 5))
  })

  const scrollToFooter = () => {
    Scroll.animateScroll.scrollTo(
      document.getElementById('main').clientHeight,
      { duration: 1000, delay: 0, smooth: true }
    )
  }

  const isCurrentPage = (url: string) => url === router.pathname

  const goToHomePage = () => router.push(HOME_HREF)

  return (
    <Navbar
      id="navbar"
      isVisible={visible}
      showNavigationBarClosablePage={showNavigationBarClosablePage}
    >
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

      {showNavigationBarClosablePage ? (
        <ButtonRounded
          backgroundColor={WHITE}
          textColor={ACCENT}
          animatedBackground={ACCENT}
          animatedTextColor={WHITE}
          size={SMALL}
          aria-label="Go to previous page"
          handleClick={goToHomePage}
        >
          Return
        </ButtonRounded>
      ) : (
        <LinksContainer>
          <Link href={PROFILE_HREF}>
            <NavLink
              aria-label="Profile"
              data-cy="nav-profile-link"
              isCurrentPage={isCurrentPage(PROFILE_HREF)}
            >
              Profile
            </NavLink>
          </Link>

          <NavLink
            aria-label="Contact"
            data-cy="nav-contact-link"
            onClick={scrollToFooter}
            isCurrentPage={isCurrentPage('')}
          >
            Contact
          </NavLink>
        </LinksContainer>
      )}
    </Navbar>
  )
}

export default React.memo(NavBar)
