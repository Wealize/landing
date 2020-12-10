import styled from 'styled-components'

import { twoThirdPx, singlePx } from '../../../theme/space'
import { media } from '../../../theme/media'

export const ContainerButtonOriginal = styled.button<{
  backgroundColor: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: all ease-out 0.3s;
`

export const ContainerButtonAnimated = styled.button<{
  accentColor: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  outline: none;
  border: none;
  background-color: ${({ accentColor }) => accentColor};
  position: absolute;
  top: 150%;
  bottom: 0;
  left: 0;
  transition: all ease-in 0.3s;
`

export const Container = styled.div<{
  backgroundColor: string
  textColor: string
  accentColor: string
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  border: 2px solid ${({ textColor }) => textColor};

  min-width: 150px;
  min-height: 80px;
  transition: all 0.3s;
  position: relative;
  overflow-y: hidden;
  overflow-x: hidden;

  &:hover {
    border-color: ${({ accentColor }) => accentColor};
  }

  &:hover ${ContainerButtonOriginal} {
    top: -100%;
  }

  &:hover ${ContainerButtonAnimated} {
    top: 0%;
  }

  ${media.greaterThan('md')`
    min-width: 180px;
  `};
`

export const Content = styled.span<{ textColor: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${twoThirdPx()};
  background-color: transparent;
  border: none;
  color: ${({ textColor }) => textColor};
  font-size: 1rem;
  font-weight: bold;

  ${media.greaterThan('md')`
    padding: ${singlePx()};
  `};
`
