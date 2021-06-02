import styled from 'styled-components'

import {
  ACCENT_COLOR,
  DARK_GRAY_COLOR,
  WHITE_COLOR
} from '../../../theme/color'
import { media } from '../../../theme/media'

export const StyledMenu = styled.nav<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  padding-left: 2em;
  padding-top: 20vh;
  background-color: ${WHITE_COLOR};
  display: flex;
  flex-direction: column;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};

  ${({ open }) => media.greaterThan('md')`
    transform: ${open ? 'translateX(65%)' : 'translateX(100%)'};
    padding-top: 14vh;
  `}

  ${media.greaterThan('lg')`
    display: none;
  `}
`

export const StyledLink = styled.a<{ isCurrentPage: boolean }>`
  font-weight: bold;
  text-decoration: none;
  color: ${DARK_GRAY_COLOR};
  font-size: 1.125rem;
  cursor: pointer;
  margin-bottom: 32px;
  max-width: fit-content;
  border-bottom: 3px solid
    ${({ isCurrentPage }) => (!isCurrentPage ? 'transparent' : ACCENT_COLOR)};

  transition: border-bottom 0.6s;

  & :hover {
    border-bottom: 3px solid ${ACCENT_COLOR};
  }
`
