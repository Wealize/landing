import React from 'react'

import GhostPost from '../../interfaces/Ghost/GhostPost'
import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PageHeader, PageTitle, PageDescription, PostsContainer } from '../../styles/pages/NewsRoom'
import GhostPostCard from '../../components/Cards/Ghost/post'

type NewsRoomProps = {
  posts: GhostPost[]
}
const NewsRoom = (props: NewsRoomProps): JSX.Element => {
  const { posts } = props

  return (
    <Container>
      <PageHeader>
        <PageTitle>Newsroom</PageTitle>
        <PageDescription>If you would like to know more about these topics and solutions, please get in touch</PageDescription>
      </PageHeader>
      <PostsContainer>
        {posts.map((post: GhostPost, index: number) => (
            <GhostPostCard key={index} post={post} />
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

  if (!posts) {
    return { props: { layoutOptions, posts: [] } }
  }

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const postsDateFormatted:GhostPost[] = posts.map((post: GhostPost) => {
    post.published_at = new Intl.DateTimeFormat('en-US', options)
      .format(new Date(post.published_at))

    return post
  })

  return { props: { layoutOptions, posts: postsDateFormatted } }
}

export default NewsRoom
