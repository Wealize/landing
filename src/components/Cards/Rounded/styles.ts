import styled from 'styled-components'

import { PRIMARY, WHITE, DARK_GRAY, LIGHT_GRAY } from '../../../theme/color'
import {
  thirdPx,
  singlePx,
  singleAndHalfPx,
  doubleAndHalfPx
} from '../../../theme/space'
import { media } from '../../../theme/media'

const DEFAULT_RADIUS = 28

export const CardContainer = styled.article<{ hasPrimary: boolean }>`
  width: 100%;
  background: ${LIGHT_GRAY};
  display: flex;
  flex-direction: column;

  ${({ hasPrimary }) => media.greaterThan('md')`
    display: flex;
    flex-direction: row;
    position: initial;
    transform: ${hasPrimary ? 'translateX(-5%)' : 'translateX(5%)'};
    flex-direction: ${hasPrimary ? 'row' : 'row-reverse'};
  `};
`

export const CardImageContainer = styled.div<{
  imageUrl: string
  hasPrimary: boolean
}>`
  width: 100%;
  display: flex;
  align-items: stretch;
  background: url(${({ imageUrl }) => imageUrl}) no-repeat top center;
  background-size: cover;
  min-height: 290px;

  ${media.greaterThan('md')`
    width: 50%;
    min-height: 350px;
  `};

  ${media.greaterThan('lg')`
    min-height: 500px;
  `};
`

export const CardContentContainer = styled.div<{ hasPrimary: boolean }>`
  width: 100%;
  margin-top: -8%;
  top: 90%;
  background-color: ${({ hasPrimary }) => (hasPrimary ? PRIMARY : WHITE)};
  color: ${({ hasPrimary }) => (hasPrimary ? WHITE : DARK_GRAY)};
  padding: ${singlePx()};
  border-top-left-radius: ${DEFAULT_RADIUS}px;
  border-top-right-radius: ${DEFAULT_RADIUS}px;

  ${({ hasPrimary }) => media.greaterThan('md')`
    width: 50%;
    flex-direction: column-reverse;
    justify-content: space-between;
    margin-top: 0;
    display: flex;
    position: initial;
    padding: ${singleAndHalfPx()};
    border-top-left-radius: ${hasPrimary ? 'initial' : `${DEFAULT_RADIUS}px`};
    border-top-right-radius: ${hasPrimary ? `${DEFAULT_RADIUS}px` : `initial`};
  `};

  ${media.greaterThan('lg')`
    padding: ${doubleAndHalfPx()};
  `};
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.h5`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  padding: 0 0 ${singlePx()} 0;

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
  `};
`

export const CardDescription = styled.p`
  line-height: 1.5;
  font-size: 1rem;

  ${media.greaterThan('lg')`
    font-size: 1.2rem;
  `};
`

export const CardLinkContainer = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${singlePx()} 0;
  color: ${({ color }) => color};
`

export const CardLink = styled.a<{ color: string }>`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: ${thirdPx()};
  color: ${({ color }) => color};
`

export const TagsContainer = styled.div`
  padding-top: ${singlePx()};

  ${media.greaterThan('md')`
    order: 1;
    padding: 0 0 ${singlePx()} 0;
  `};
`

export const Tag = styled.span<{ hasPrimary: boolean }>`
  display: inline-block;
  text-align: center;
  padding: ${thirdPx()};
  border-radius: 16px;
  border: 1px solid ${({ hasPrimary }) => (hasPrimary ? WHITE : DARK_GRAY)};
`
