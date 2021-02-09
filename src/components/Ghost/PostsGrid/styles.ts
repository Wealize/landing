import styled from 'styled-components'

import { ACCENT_COLOR } from '../../../theme/color'
import { media } from '../../../theme/media'
import { singlePx, singleAndHalfPx, doublePx } from '../../../theme/space'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${singlePx()} 0;
`

export const SectionTitle = styled.h3`
  font-size: 1.4rem;
  width: 100%;
  text-align: left;
  margin-top: ${singleAndHalfPx()};
`

export const ContainerPosts = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .post-card {
    margin-top: ${singleAndHalfPx()};
  }

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding: ${singlePx()} 0;
  `};

  ${media.greaterThan('xl')`
    grid-template-columns: repeat(4, 1fr);
  `};
`

export const ShowMoreLink = styled.a`
  text-decoration: none;
  color: ${ACCENT_COLOR};
  font-size: 1.1rem;
  padding: ${doublePx()} 0;

  ${media.greaterThan('md')`
      padding: ${singlePx()} 0;
  `};
`
