import React from 'react'

import GhostPostResponse from '../../interfaces/Ghost/GhostPostResponse'
import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PageHeader, PageTitle, PageDescription } from '../../styles/pages/news-room'
import GhostPostsGrid from '../../components/Ghost/PostsGrid'
import { useSWR } from '../../hooks/useSWR'
import { ARTICLE_TAG_SLUG, CLIENT_STORY_TAG_SLUG, NEWS_TAG_SLUG } from '../../constants/Ghost/sectionsTags'


const NewsRoom = (): JSX.Element => {
  const { data: articlesNewsData } = useSWR<GhostPostResponse>('news-room-articles-news', () =>
    GhostService.getPostsByTagsAndPaginationPage(
      '1',
      [NEWS_TAG_SLUG, ARTICLE_TAG_SLUG]
    ))

  const { data: clientStoriesData } = useSWR<GhostPostResponse>('news-room-client-stories', () => GhostService.getPostsByTagsAndPaginationPage(
    '1',
    [CLIENT_STORY_TAG_SLUG]
  ))

  return (
    <Container>
      <PageHeader>
        <PageTitle>Newsroom</PageTitle>
        <PageDescription>If you would like to know more about these topics and solutions, please get in touch</PageDescription>
      </PageHeader>
      <GhostPostsGrid
        posts={articlesNewsData?.posts}
        sectionTitle="News & Articles"
        showMoreContentButton={true}
        maxPaginationPages={articlesNewsData?.meta?.pagination?.pages}
        coverSectionPageName="news/section/news-articles"
      />
      <GhostPostsGrid
        posts={clientStoriesData?.posts}
        sectionTitle="Client Stories"
        showMoreContentButton={true}
        maxPaginationPages={clientStoriesData?.meta?.pagination?.pages}
        coverSectionPageName="news/section/client-stories"
      />
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
