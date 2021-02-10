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

export const SectionTitle = styled.h2`
  font-size: 1.7rem;
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
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    padding: ${singlePx()} 0;

    & .post-card {
      width: calc(50% - ${singleAndHalfPx()});
      margin-right: ${singleAndHalfPx()};
    }
  `};

  ${media.greaterThan('xl')`
    & .post-card {
      width: calc(25% - ${singleAndHalfPx()});
    }
  `};
`

export const ShowMoreLink = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${ACCENT_COLOR};
  padding: ${doublePx()} 0;
  cursor: pointer;

  ${media.greaterThan('md')`
      padding: ${singlePx()} 0;
  `};
`
