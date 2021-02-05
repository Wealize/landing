import { ParsedUrlQuery } from 'querystring'

import parse from 'html-react-parser'
import React from 'react'
import { PostOrPage } from '@tryghost/content-api'

import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PostHeadline, PostBody } from '../../styles/pages/news-room/post'


type PostPageProps = {
  post: PostOrPage
}

const PostPage = (props: PostPageProps): JSX.Element => {
  const { post } = props

  return (
    <Container>
      <PostHeadline>{post?.title}</PostHeadline>
      <PostBody>
          {parse(`${post?.html}`)}
      </PostBody>
    </Container>
  )
}

type NextGetStaticPath = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

type NextGetStaticPathsCtx = {
  paths: NextGetStaticPath[];
  fallback: boolean
};

export const getStaticPaths = (): NextGetStaticPathsCtx => {
  return {
    paths: [],
    fallback: true
  }
}

type NextGetStaticPropsCtx = {
  params?: ParsedUrlQuery;
  preview?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  previewData?: any;
};
export const getStaticProps = async ({ params }: NextGetStaticPropsCtx): Promise<{
  props: { layoutOptions: LayoutOptions, post: PostOrPage }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  const getFirstParam = Array.isArray(params) ? params[0] : params

  const { posts } = await GhostService.getPostBySlug(getFirstParam.slug)

  const post = posts.length ? posts[0] : null

  return { props: { layoutOptions, post } }
}

export default PostPage
