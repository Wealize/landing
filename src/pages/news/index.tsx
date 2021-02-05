import React from 'react'
import { useRouter } from 'next/router'
import { PostOrPage } from '@tryghost/content-api'

import GhostPostResponse from '../../interfaces/Ghost/GhostPostResponse'
import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PageHeader, PageTitle, PageDescription, PostsContainer } from '../../styles/pages/NewsRoom'
import GhostPostCard from '../../components/Ghost/PostCard'
import GhostPostsPaginator from '../../components/Ghost/PostsPaginator'
import { useSWR } from '../../hooks/useSWR'


const NewsRoom = (): JSX.Element => {
  const router = useRouter()
  const {
    query: { page = '1' }
  } = router

  const { data } = useSWR<GhostPostResponse>(`news-room-${page}`, () => GhostService.getPostsByPaginationPage(Array.isArray(page) ? page[0] : page))

  return (
    <Container>
      <PageHeader>
        <PageTitle>Newsroom</PageTitle>
        <PageDescription>If you would like to know more about these topics and solutions, please get in touch</PageDescription>
      </PageHeader>
      <PostsContainer>
        {data?.posts?.map((post: PostOrPage, index: number) => (
            <GhostPostCard key={index} post={post} />
        ))}
      </PostsContainer>
      <GhostPostsPaginator metaPagination={data?.meta?.pagination} />
    </Container>
  )
}

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  return { props: { layoutOptions } }
}


export default NewsRoom
