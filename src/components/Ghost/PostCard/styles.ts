import styled from 'styled-components'


import { DEFAULT_RADIUS } from '../../../theme/border'
import { ACCENT_COLOR, WHITE_COLOR } from '../../../theme/color'
import { media } from '../../../theme/media'
import { singlePx } from '../../../theme/space'

export const Container = styled.a<{isFeatured: boolean}>`
  width: 100%;
  background-color: ${({ isFeatured }) => (isFeatured ? ACCENT_COLOR : WHITE_COLOR)};
  z-index: 1;
  color: ${({ isFeatured }) => (isFeatured ? WHITE_COLOR : ACCENT_COLOR)};
  text-decoration: none;
  display: inline-block;
  padding: ${singlePx()};
  border-radius: ${DEFAULT_RADIUS}px;
  border: 2px solid ${({ isFeatured }) => (isFeatured ? WHITE_COLOR : ACCENT_COLOR)};
  min-height: 15rem;
  transition: all 0.5s;
  transform: scale(1);

  ${media.greaterThan('md')`
  `};


  ${media.greaterThan('lg')`
    &:hover {
      transform: scale(1.07);
    }
    min-height: 20rem;
  `};

`

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 15rem;

  ${media.greaterThan('lg')`
    min-height: 20rem;
  `};
`

export const CardHeadline = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  padding-bottom: ${singlePx()};
  line-height: 1.4;
`

export const CardBody = styled.h5`
  display: flex;
  font-size: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 1.4;
`

export const CardPublishedAt = styled.span`
  font-size: 0.9rem;
  padding-top: ${singlePx()};
  font-style: italic;
`
