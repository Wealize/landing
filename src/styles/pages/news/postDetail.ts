import styled from 'styled-components'

import {
  halfPx,
  singlePx,
  singleAndHalfPx,
  doublePx,
  thirdPx
} from '../../../theme/space'
import { media } from '../../../theme/media'
import { CONTAINER_SPACING } from '../../../theme/spacingGuide'
import {
  ACCENT_COLOR,
  WHITE_COLOR,
  LIGHT_GRAY_COLOR,
  DARK_GRAY_COLOR
} from '../../../theme/color'

export const Container = styled.article`
  ${CONTAINER_SPACING.MOBILE}
  min-height: 100vh;
  background-color: ${WHITE_COLOR};
  padding-top: 0;
  color: ${DARK_GRAY_COLOR};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
    padding-top: 0;
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
    padding-top: 0;
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
    padding-top: 0;
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
    padding-top: 0;
  `};

  & h2 {
    font-size: 1.7rem;
    padding: ${singleAndHalfPx()} 0;
  }

  & h3 {
    padding: ${singleAndHalfPx()} 0;
  }

  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: ${singlePx()};
  }

  & ul, ol {
    list-style-position: inside;
    margin: initial;
  }

  & li {
    font-size: 1.1rem;
    margin-bottom: ${singlePx()};
    line-height: 1.5;
  }

  & blockquote {
    margin: 0 0 1.5em;
    padding: 0 1.5em;
    border-left: 3px solid ${ACCENT_COLOR};
  }

  & em {
    font-style: italic;
    font-size: 1.1rem;
    line-height: 1.5;
  }

  & strong {
    font-weight: 700;
  }

  & a {
    text-decoration: none;
    color: ${ACCENT_COLOR};
  }

  & pre {
    background-color: ${LIGHT_GRAY_COLOR};
    color: ${DARK_GRAY_COLOR};
    max-width: 100%;
    overflow-x: auto;
    padding: 1rem;
    margin-bottom: ${singlePx()};
  }

  & code {
    background-color: ${LIGHT_GRAY_COLOR};
    color: ${DARK_GRAY_COLOR};
    opacity: 0.75;
    padding: 0.1rem 0.4rem;
    max-width: 100%;
    line-height: 1.5;
  }

  & hr {
    opacity: .2;
  }
`

export const PostHeader = styled.header`
  ${media.greaterThan('md')`
    width: 75%;
  `};

  ${media.greaterThan('xl')`
    width: 60%;
  `};
`

export const PostHeadline = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  line-height: 1.2;

  ${media.greaterThan('md')`
    padding-bottom: ${singlePx()};
    font-size: 2.7rem;
    line-height: 1.3;
  `};
`

export const AuthorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${halfPx()};
`

export const AuthorImage = styled.figure`
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow-x: hidden;
`

export const AuthorName = styled.h5`
  margin-left: ${halfPx()};
  font-weight: 500;
`

export const PostSubheadline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: ${halfPx()} 0;
  text-transform: uppercase;
`

export const PostBody = styled.section`
  font-size: 1.2rem;
  line-height: 1.3;
  padding: ${singlePx()} 0;

  ${media.greaterThan('md')`
    width: 75%;
  `};

  ${media.greaterThan('xl')`
    width: 60%;
  `};
`

export const Figure = styled.figure`
  position: relative;
  min-height: 15rem;
  margin-bottom: ${doublePx()};
  width: 100vw;
  max-width: 100vw;
  margin-left: calc(50% - 50vw);

  ${media.greaterThan('lg')`
    min-height: 20rem;
    margin-left: initial;
  `};

  ${media.greaterThan('xl')`
    width: 60%;
  `};
`

export const Tag = styled.span`
  display: inline-block;
  text-align: center;
  padding: ${thirdPx()};
  border-radius: 16px;
  border: 1px solid ${DARK_GRAY_COLOR};
  font-size: 0.9rem;
`

export const PublishedAt = styled.span`
  padding: ${thirdPx()} 0;
`

export const ReadingTime = styled.span`
  padding: ${thirdPx()} 0;
`
