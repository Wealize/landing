import React from 'react'

import GhostPost from '../interfaces/Ghost/GhostPost'
import { LayoutOptions } from '../interfaces/Page'
import GhostService from '../services/GhostService'
import { Container, PageTitle, PostsContainer } from '../styles/pages/NewsRoom'
import GhostPostCard from '../components/Cards/Ghost/post/'

interface NewsRoomProps {
  posts: GhostPost[]
}
const NewsRoom = (props: NewsRoomProps): JSX.Element => {
  const { posts } = props

  return (
    <Container>
      <PageTitle>Posts</PageTitle>
      <PostsContainer>
        {posts.map((post: GhostPost, index: number) => (
            <li key={index}><GhostPostCard post={post} /></li>
        ))}
      </PostsContainer>
    </Container>
  )
}

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions, posts: GhostPost[] }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  const posts = await GhostService.getAllPosts()

  return { props: { layoutOptions, posts } }
}

export default NewsRoom
