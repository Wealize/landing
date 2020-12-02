import styled from 'styled-components'

import { WHITE, DARK_GRAY, LIGHT_GRAY } from '../../theme/color'
import { halfPx, singlePx, triplePx } from '../../theme/space'
import { media } from '../../theme/media'

export const Navbar = styled.nav<{ isVisible: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${WHITE};
  padding: ${halfPx()} ${singlePx()};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-height: ${triplePx()};
  transition: all 0.4s;

  transform: ${({ isVisible }) =>
    isVisible ? 'inherit' : 'translateY(-100%)'};

  ${media.greaterThan('md')`
    background-color: ${LIGHT_GRAY};
    padding: ${singlePx()} ${triplePx()};
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
  `}
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const NavLink = styled.a`
  text-decoration: none;
  color: ${DARK_GRAY};
  margin: 0 ${halfPx()};
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  ${media.greaterThan('md')`
    font-size: 1.2rem;
  `}
`
