import React from 'react'
import { useRouter } from 'next/router'

import GhostPostResponse from '../../../interfaces/Ghost/GhostPostResponse'
import { LayoutOptions } from '../../../interfaces/Page'
import GhostService from '../../../services/GhostService'
import { Container, PageHeader, PageTitle } from '../../../styles/pages/news-room'
import GhostPostsGrid from '../../../components/Ghost/PostsGrid'
import GhostPostsPaginator from '../../../components/Ghost/PostsPaginator'
import { useSWR } from '../../../hooks/useSWR'
import { SMALL } from '../../../components/Buttons/Rounded/sizes'
import { ACCENT_COLOR, WHITE_COLOR } from '../../../theme/color'
import ButtonRounded from '../../../components/Buttons/Rounded'
import { NEWS_ROOM_HREF } from '../../../constants/hrefs'
import { ARTICLE_TAG_SLUG, CLIENT_STORY_TAG_SLUG, NEWS_TAG_SLUG } from '../../../constants/Ghost/sectionsTags'

const NewsRoomSectionCover = (): JSX.Element => {
  const router = useRouter()
  const {
    query: { section, page = '1' }
  } = router
  const CLIENT_STORY_SECTION = 'client-stories'
  const NEWS_ARTICLES_SECTION = 'news-articles'

  const getTagsForFilter = (): string[] => {
    if (section === CLIENT_STORY_SECTION) return [CLIENT_STORY_TAG_SLUG]
    if (section === NEWS_ARTICLES_SECTION) return [ARTICLE_TAG_SLUG, NEWS_TAG_SLUG]

    return []
  }

  const getPageTitle = () => {
    const sectionString:string = Array.isArray(section) ? section[0] : section
    return sectionString.replace('-', ' ')
  }

  const { data } = useSWR<GhostPostResponse>(`news-room-section-cover-${page}-${section}`, () => GhostService.getPostsByTagsAndPaginationPage(
    Array.isArray(page) ? page[0] : page,
    getTagsForFilter()
  ))

  return (
    <Container>
      <ButtonRounded
        backgroundColor={WHITE_COLOR}
        textColor={ACCENT_COLOR}
        animatedBackgroundColor={ACCENT_COLOR}
        animatedTextColor={WHITE_COLOR}
        size={SMALL}
        aria-label="Go to back"
        handleClick={() => router.push(NEWS_ROOM_HREF)}
        id="section-back-button"
      >
        <span>Back to news</span>
      </ButtonRounded>
      <PageHeader>
        <PageTitle className="page-section-title">{ getPageTitle() }</PageTitle>
      </PageHeader>
      <GhostPostsGrid posts={data?.posts} />
      <GhostPostsPaginator metaPagination={ data?.meta?.pagination }/>
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

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  return { props: { layoutOptions } }
}


export default NewsRoomSectionCover
