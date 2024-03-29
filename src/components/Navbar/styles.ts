import styled from 'styled-components'

import {
  WHITE_COLOR,
  DARK_GRAY_COLOR,
  LIGHT_GRAY_COLOR,
  ACCENT_COLOR
} from '../../theme/color'
import {
  halfPx,
  singlePx,
  singleAndHalfPx,
  triplePx,
  quadruplePx
} from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Navbar = styled.nav<{
  isVisible: boolean
  showNavigationBarClosablePage: boolean
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE_COLOR};
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  min-height: ${triplePx()};
  transition: all 0.4s;
  z-index: 5;
  ${CONTAINER_SPACING.MOBILE}
  padding-top: ${singlePx()};
  padding-bottom: ${singlePx()};
  border: solid 1.5px ${LIGHT_GRAY_COLOR};

  ${({ showNavigationBarClosablePage }) => media.greaterThan('md')`
    min-height: ${showNavigationBarClosablePage ? quadruplePx() : triplePx()};
    ${CONTAINER_SPACING.TABLET}
    padding-top: ${singlePx()};
    padding-bottom: ${singlePx()};
  `};

  ${({ isVisible, showNavigationBarClosablePage }) => media.greaterThan('lg')`
    ${
      showNavigationBarClosablePage
        ? `border: 1.5px solid ${LIGHT_GRAY_COLOR}`
        : 'border: none'
    };

    background-color: ${
      showNavigationBarClosablePage ? WHITE_COLOR : LIGHT_GRAY_COLOR
    };
    transform: ${isVisible ? 'inherit' : 'translateY(-100%)'};
    ${CONTAINER_SPACING.SMALL_DESKTOP};
    padding-top: ${singlePx()};
    padding-bottom: ${singlePx()};
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    padding-top: ${singleAndHalfPx()};
    padding-bottom: ${singleAndHalfPx()};
  `};

  ${({ showNavigationBarClosablePage }) => media.greaterThan('xxl')`

    ${
      showNavigationBarClosablePage
        ? CONTAINER_SPACING.WIDE
        : CONTAINER_SPACING.DESKTOP
    }
    padding-top: ${singleAndHalfPx()};
    padding-bottom: ${singleAndHalfPx()};
  `};
`

export const LogoMobileContainer = styled.div`
  ${media.greaterThan('md')`
    display: none;
  `}
`

export const LogoContainer = styled.div`
  display: none;

  ${media.greaterThan('md')`
    display: block;
    width: 130px;
  `}
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 15%;

  ${media.greaterThan('lg')`
    margin-right: 0;
    display: flex;
  `}
`

export const NavLink = styled.a<{ isCurrentPage: boolean; hreflang?: string }>`
  display: none;
  text-decoration: none;
  color: ${DARK_GRAY_COLOR};
  margin: 0 ${halfPx()};
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  transition: border-bottom 0.7s;
  border-bottom: 3px solid
    ${({ isCurrentPage }) => (!isCurrentPage ? 'transparent' : ACCENT_COLOR)};

  &#change-language-toggle {
    text-transform: uppercase;
  }

  &:hover {
    border-bottom: 3px solid ${ACCENT_COLOR};
  }

  ${media.greaterThan('lg')`
    display: flex;

    &:hover {
      border-bottom: 3px solid ${ACCENT_COLOR};
    }
  `}
`

export const LangNavLink = styled(NavLink)`
  display: flex;
`
