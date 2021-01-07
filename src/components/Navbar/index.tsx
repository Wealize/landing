import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Scroll from 'react-scroll'
import useTranslation from 'next-translate/useTranslation'

import i18nConfig from '../../../i18n.js'
import { HOME_HREF, PROFILE_HREF } from '../../constants/hrefs'
import WealizeMinimalMediumIcon from '../icons/WealizeMinimalMediumIcon'
import WealizeNormalMediumIcon from '../icons/WealizeNormalMediumIcon'
import ButtonRounded from '../Buttons/Rounded'
import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import { SMALL } from '../Buttons/Rounded/sizes'

import {
  Navbar,
  LogoMobileContainer,
  LogoContainer,
  NavLink,
  LinksContainer
} from './styles'


interface NavbarProps {
  showNavigationBarClosablePage: boolean
}

const { locales } = i18nConfig
const NavBar = ({ showNavigationBarClosablePage }: NavbarProps) => {
  const [visible, setVisible] = useState(true)
  const router = useRouter()
  const { t, lang } = useTranslation('common')

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

      {showNavigationBarClosablePage
        ? (
            <ButtonRounded
              backgroundColor={WHITE_COLOR}
              textColor={ACCENT_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              aria-label="Go to home page"
              handleClick={() => router.push(HOME_HREF)}
            >
              {t('navbar.return_button_text')}
            </ButtonRounded>
          )
        : (
            <LinksContainer>
              <Link href={PROFILE_HREF}>
                <NavLink
                  aria-label="Profile"
                  data-cy="nav-profile-link"
                  isCurrentPage={isCurrentPage(PROFILE_HREF)}
                >
                  {t('navbar.profile')}
                </NavLink>
              </Link>

              <NavLink
                aria-label="Contact"
                data-cy="nav-contact-link"
                onClick={scrollToFooter}
                isCurrentPage={isCurrentPage('')}
              >
                {t('navbar.contact')}
              </NavLink>
              {
                locales.map((lng) => {
                  if (lng === lang) return null

                  return (
                    <Link href={HOME_HREF} locale={lng} key={lng}>
                      <NavLink
                      id="change-language-toggle"
                      isCurrentPage={null}
                      aria-label="Change language">
                        {`${lng}`}
                      </NavLink>
                    </Link>
                  )
                })
              }
            </LinksContainer>
          )}

    </Navbar>
  )
}

export default React.memo(NavBar)
