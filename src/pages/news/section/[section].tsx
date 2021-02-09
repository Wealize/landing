import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GetStaticPaths } from 'next'
import { PostOrPage } from '@tryghost/content-api'
import InfiniteScroll from 'react-infinite-scroll-component'
import { union } from 'lodash'

import GhostPostResponse from '../../../interfaces/Ghost/GhostPostResponse'
import { LayoutOptions } from '../../../interfaces/Page'
import GhostService from '../../../services/GhostService'
import { Container, PageHeader, PageTitle } from '../../../styles/pages/news-room'
import GhostPostsGrid from '../../../components/Ghost/PostsGrid'
import { useSWR } from '../../../hooks/useSWR'
import { SMALL } from '../../../components/Buttons/Rounded/sizes'
import { ACCENT_COLOR, WHITE_COLOR } from '../../../theme/color'
import ButtonRounded from '../../../components/Buttons/Rounded'
import { NEWS_ROOM_HREF } from '../../../constants/hrefs'
import { ARTICLE_TAG_SLUG, CLIENT_STORY_TAG_SLUG, NEWS_TAG_SLUG } from '../../../constants/Ghost/sectionsTags'
import { CLIENT_STORY_SECTION, NEWS_ARTICLES_SECTION } from '../../../constants/Ghost/hrefs'


const NewsRoomSectionCover = (): JSX.Element => {
  const router = useRouter()
  const {
    query: { section }
  } = router
  const [postsToShow, setPostsToShow] = useState<PostOrPage[]>([])
  const [page, setPage] = useState('1')
  const [hasMore, setHasMore] = useState(true)
  const [pageTitle, setPageTitle] = useState('')
  const getTagsForFilter = (): string[] => {
    switch (section) {
      case CLIENT_STORY_SECTION:
        setPageTitle('Client stories')
        return [CLIENT_STORY_TAG_SLUG]
      case NEWS_ARTICLES_SECTION:
        setPageTitle('Articles & News')
        return [ARTICLE_TAG_SLUG, NEWS_TAG_SLUG]
      default:
        return []
    }
  }

  const { data } = useSWR<GhostPostResponse>(`news-room-section-cover-${page}-${section}`, () => GhostService.getPostsByTagsAndPaginationPage(
    page,
    getTagsForFilter()
  ))

  useEffect(() => {
    if (data?.posts) {
      setPostsToShow(postsToShow => union(postsToShow, data.posts))
    }
  }, [data])

  const fetchNextPage = () => {
    if (data?.meta?.pagination?.next) {
      setPage(data.meta.pagination.next.toString())
    } else {
      setHasMore(false)
    }
  }

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
        <PageTitle className="page-section-title">{ pageTitle }</PageTitle>
      </PageHeader>
      <InfiniteScroll
        dataLength={postsToShow.length}
        next={fetchNextPage}
        hasMore={hasMore}
        loader={null}
        scrollThreshold={0.3}
        style={{
          width: '100%',
          overflow: 'hidden'
        }}
      >
        {<GhostPostsGrid posts={postsToShow} />}
      </InfiniteScroll>
    </Container>
  )
}

export const getStaticPaths:GetStaticPaths = async () => {
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
