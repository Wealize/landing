import React from 'react'

import GhostPost from '../../interfaces/Ghost/GhostPost'
import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PostHeadline, PostBody } from '../../styles/pages/news-room/post'


interface PostPageProps {
  post: GhostPost
}

const PostPage = (props: PostPageProps): JSX.Element => {
  const { post } = props

  return (
    <Container>
      <PostHeadline>{post?.title}</PostHeadline>
      <PostBody dangerouslySetInnerHTML={{ __html: post?.html }}>
      </PostBody>
    </Container>
  )
}


export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps = async ({ params }): Promise<{
  props: { layoutOptions: LayoutOptions, post: GhostPost }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  const posts = await GhostService.getPostBySlug(params.slug)

  const post = posts.length ? posts[0] : null

  return { props: { layoutOptions, post } }
}

export default PostPage
