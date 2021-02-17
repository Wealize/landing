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
  justify-content: flex-start;
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

    ${media.greaterThan('lg')`
      font-size: 1.8rem;
    `};
  }

  & h3 {
    padding: ${singleAndHalfPx()} 0;
  }

  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: ${singlePx()};

    ${media.greaterThan('lg')`
      font-size: 1.3rem;
    `};
  }

  & ul, ol {
    list-style-position: inside;
    margin: initial;
  }

  & li {
    font-size: 1.1rem;
    margin-bottom: ${singlePx()};
    line-height: 1.5;

    ${media.greaterThan('lg')`
      font-size: 1.3rem;
    `};
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

    ${media.greaterThan('lg')`
      font-size: 1.3rem;
    `};
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

  & .kg-bookmark-card {
    width: 100%;

    & a {
      display: flex;
      flex-direction: column-reverse;
      width: 100%;
      height: 100%;

      ${media.greaterThan('lg')`
        flex-direction: row;
        align-items: stretch;
      `};

      & .kg-bookmark-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 1rem;
        color: ${WHITE_COLOR};
        background-color: ${ACCENT_COLOR};

        ${media.greaterThan('lg')`
          width: 70%;
        `};

        & .kg-bookmark-title {
          color: ${WHITE_COLOR};
          padding-bottom: 1rem;
          font-weight: bold;
          font-size: 1.5rem;
        }

        & .kg-bookmark-description {
          color: ${WHITE_COLOR};
          font-size: 1.3rem;
          opacity: 0.9;
        }

        & .kg-bookmark-metadata {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding-top: 1rem;

          & img {
            height: 30px;
            margin-right: .7rem;
          }

          & span {
            color: ${WHITE_COLOR};
            opacity: 0.9;
          }
        }
      }

      & .kg-bookmark-thumbnail {
        width: 100%;
        min-height: 10rem;
        position: relative;

        ${media.greaterThan('lg')`
          width: 30%;
        `};

        & img {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
          right: 0;
          object-fit: cover;
          object-position: top center;
        }
      }
    }
  }

  & .kg-gallery-card {
    margin: ${singleAndHalfPx()} 0;

    & .kg-gallery-container {
      width: 100vw;
      max-width: 100vw;
      margin-left: calc(50% - 50vw);
      display: flex;
      flex-direction: column;

      ${media.greaterThan('lg')`
        width: 100%;
        margin-left: initial;
      `};

      & .kg-gallery-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: .5rem;

        & .kg-gallery-image {
          padding-top: 56.25%;
          background: green;
          position: relative;

          & img {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            object-fit: cover;
          }
        }
      }
    }
  }
`

export const PostHeader = styled.header<{isShowFeaturedImage: boolean}>`
  width: 100%;
  padding-top: ${({ isShowFeaturedImage }) => (isShowFeaturedImage ? 0 : doublePx())};

  ${media.greaterThan('sm')`
    width: 80%;
  `};

  ${({ isShowFeaturedImage }) => media.greaterThan('md')`
    width: 75%;
    padding-top: ${(isShowFeaturedImage ? 0 : doublePx())};
  `};

  ${({ isShowFeaturedImage }) => media.greaterThan('lg')`
    padding-top: ${(isShowFeaturedImage ? 0 : doublePx())};
  `};

  ${({ isShowFeaturedImage }) => media.greaterThan('xl')`
    padding-top: ${(isShowFeaturedImage ? 0 : doublePx())};
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
  width: 100%;

  ${media.greaterThan('sm')`
    width: 80%;
  `};

  ${media.greaterThan('md')`
    width: 75%;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.3rem;
  `};

  ${media.greaterThan('xl')`
    width: 60%;
  `};
`

export const Figure = styled.figure`
  position: relative;
  margin-bottom: ${doublePx()};
  width: 100%;
  padding-top: 56.25%;

  & img {
    background: #fff;
  }

  &.feature-image {
    width: 100vw;
    min-height: 10rem;
    padding-top: initial;

    ${media.greaterThan('md')`
      min-height: 20rem;
    `};

    ${media.greaterThan('lg')`
      width: 75%;
    `};

    ${media.greaterThan('xl')`
      width: 60%;
    `};
  }

  ${media.greaterThan('md')`
    min-height: 20rem;
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
