import styled from 'styled-components'

import { twoThirdPx, singlePx } from '../../../theme/space'
import { media } from '../../../theme/media'

const BUTTON_SHARED_STYLES = `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  position: absolute;
  bottom: 0;
`

export const ContainerButtonOriginal = styled.button<{
  backgroundColor: string
}>`
  ${BUTTON_SHARED_STYLES};

  top: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: all ease-out 0.3s;
`

export const ContainerButtonAnimated = styled.button<{
  accentColor: string
}>`
  ${BUTTON_SHARED_STYLES};

  background-color: ${({ accentColor }) => accentColor};
  top: 150%;
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
    border: none;
  }

  &:hover ${ContainerButtonOriginal} {
    top: -120%;
  }

  &:hover ${ContainerButtonAnimated} {
    top: 0%;
    border: none;
  }

  ${media.greaterThan('md')`
    min-width: 180px;
  `};

  ${media.greaterThan('lg')`
    min-width: 200px;
    min-height: 100px;
  `};

  ${media.greaterThan('xl')`
    min-width: 250px;
    min-height: 100px;
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
