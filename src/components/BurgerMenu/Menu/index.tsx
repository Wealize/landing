import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Scroll from 'react-scroll'

import Burger from '../Burger'
import { HOME_HREF, PROFILE_HREF } from '../../../constants/hrefs'

import { StyledMenu, StyledLink } from './styles'

export type Props = {
  open: boolean
  setOpen: (v: boolean) => void
}

const Menu = (props: Props): JSX.Element => {
  const node = useRef<HTMLDivElement>(null)
  const { t } = useTranslation('common')
  const router = useRouter()
  const isCurrentPage = (url: string) => url === router.pathname

  const scrollToFooter = () => {
    Scroll.animateScroll.scrollTo(
      document.getElementById('main').clientHeight,
      { duration: 1000, delay: 0, smooth: true }
    )
  }

  return (
    <div ref={node}>
      <StyledMenu open={props.open}>
        <Link href={HOME_HREF}>
          <StyledLink
            isCurrentPage={isCurrentPage(HOME_HREF)}
            title="Home page link"
            aria-label="Home"
            data-cy="navbar-logo-container"
            onClick={() => props.setOpen(false)}
          >
            {t('navbar.home')}
          </StyledLink>
        </Link>

        <Link href={PROFILE_HREF}>
          <StyledLink
            isCurrentPage={isCurrentPage(PROFILE_HREF)}
            title="Profile page link"
            aria-label="Profile"
            data-cy="nav-profile-link"
            onClick={() => props.setOpen(false)}
          >
            {t('navbar.profile')}
          </StyledLink>
        </Link>

        <Link href={t('navbar.external_href.client_stories')} passHref>
          <StyledLink
            isCurrentPage={isCurrentPage('')}
            title="Client stories link"
            aria-label="Client stories"
            data-cy="nav-profile-link"
            target="_blank"
            rel="nofollow"
            onClick={() => props.setOpen(false)}
          >
            {t('navbar.client_stories')}
          </StyledLink>
        </Link>

        <Link href={t('navbar.external_href.blog')} passHref>
          <StyledLink
            isCurrentPage={isCurrentPage('')}
            title="Client stories link"
            aria-label="Client stories"
            data-cy="nav-profile-link"
            target="_blank"
            rel="nofollow"
            onClick={() => props.setOpen(false)}
          >
            {t('navbar.blog')}
          </StyledLink>
        </Link>

        <StyledLink
          isCurrentPage={isCurrentPage('')}
          title="Contact"
          aria-label="Contact"
          data-cy="nav-contact-link"
          onClick={() => {
            props.setOpen(false)
            scrollToFooter()
          }}
        >
          {t('navbar.contact')}
        </StyledLink>
      </StyledMenu>

      <Burger open={props.open} setOpen={props.setOpen} />
    </div>
  )
}

export default Menu
