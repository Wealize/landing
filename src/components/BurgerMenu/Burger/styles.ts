import styled from 'styled-components'

import { ACCENT_COLOR } from '../../../theme/color'
import { media } from '../../../theme/media'
import { singlePx } from '../../../theme/space'

export const StyledBurger = styled.button<{ open: boolean }>`
  top: ${singlePx()};
  margin-top: 2.5%;
  left: ${({ open }) => (open ? '85%' : '85%')};
  width: 2rem;
  height: 1.5rem;
  position: fixed;
  background: transparent;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }

  ${media.greaterThan('md')`
    margin-top: 0.4%;
  `}

  ${media.greaterThan('lg')`
    display: none;
  `}

  div {
    width: 1.5rem;
    height: 0.18rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: ${ACCENT_COLOR};

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
