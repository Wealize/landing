import { GetStaticPaths, GetStaticPropsContext } from 'next'
import parse from 'html-react-parser'
import React from 'react'
import { PostOrPage } from '@tryghost/content-api'

import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PostHeadline, PostBody } from '../../styles/pages/news-room/postDetail'


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

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}


export const getStaticProps = async ({ params }: GetStaticPropsContext): Promise<{
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
