import styled from 'styled-components'

import { twoThirdPx, singlePx } from '../../../theme/space'
import { media } from '../../../theme/media'
import { ButtonSize } from '../../../interfaces/Buttons/ButtonSize'

const BUTTON_SHARED_STYLES = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  bottom: 0;
  transition: all ease-out 0.3s;
  cursor: pointer;
`

export const ContainerButtonOriginal = styled.button<{
  backgroundColor: string
}>`
  ${BUTTON_SHARED_STYLES};

  top: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ContainerButtonAnimated = styled.button<{
  animatedBackgroundColor: string
}>`
  ${BUTTON_SHARED_STYLES};

  background-color: ${({ animatedBackgroundColor }) => animatedBackgroundColor};
  top: 150%;
  left: 0;
`

export const Content = styled.span<{ textColor: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${twoThirdPx()};
  background-color: transparent;
  color: ${({ textColor }) => textColor};
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;

  ${media.greaterThan('md')`
    padding: ${singlePx()};
  `};

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 1.4rem;
  `};
`

export const Container = styled.div<{
  backgroundColor: string
  textColor: string
  animatedBackgroundColor: string
  animatedTextColor: string
  size: ButtonSize
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: 2px solid ${({ textColor }) => textColor};

  min-width: ${({ size }) => size.mobile[0]}px;
  min-height: ${({ size }) => size.mobile[1]}px;
  transition: all 0.3s;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${({ size }) => media.greaterThan('md')`
    min-width: ${size.tablet[0]}px;
  `};

  ${({ size, animatedTextColor }) => media.greaterThan('lg')`
    min-width: ${size.desktop[0]}px;
    min-height: ${size.desktop[1]}px;

    &:hover {
      border: none;
    }

    &:hover ${ContainerButtonOriginal} {
      top: -120%;
    }

    &:hover ${ContainerButtonAnimated} {
      top: 0%;
      border: none;
    }

    &:hover ${Content} {
      color: ${animatedTextColor};
    }
  `};

  ${({ size }) => media.greaterThan('xl')`
    min-width: ${size.wide[0]}px;
    min-height: ${size.wide[1]}px;
  `};
`
