import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import GhostPostResponse from '../../interfaces/Ghost/GhostPostResponse'
import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import { Container, PageHeader, PageTitle, PageDescription } from '../../styles/pages/news'
import GhostPostsGrid from '../../components/Ghost/PostsGrid'
import { useSWR } from '../../hooks/useSWR'
import { ARTICLE_TAG_SLUG, CLIENT_STORY_TAG_SLUG, NEWS_TAG_SLUG } from '../../constants/Ghost/sectionsTags'
import { WHITE_COLOR } from '../../theme/color'
import { GET_IN_TOUCH_HREF } from '../../constants/contacts'

const NewsRoom = (): JSX.Element => {
  const { t, lang } = useTranslation('news')
  const { data: articlesNewsData } = useSWR<GhostPostResponse>(`news-room-articles-news-${lang}`, () =>
    GhostService.getPostsByTagsAndPaginationPage(
      '1',
      [NEWS_TAG_SLUG, ARTICLE_TAG_SLUG],
      lang
    ))

  const { data: clientStoriesData } = useSWR<GhostPostResponse>(`news-room-client-stories-${lang}`, () => GhostService.getPostsByTagsAndPaginationPage(
    '1',
    [CLIENT_STORY_TAG_SLUG],
    lang
  ))

  useEffect((): void => {
    document.getElementById('navbar').style.backgroundColor = WHITE_COLOR
  }, [])

  return (
    <Container>
      <PageHeader>
        <PageTitle>{ t('page_title') }</PageTitle>
        <PageDescription>
          {<Trans
            i18nKey="news:page_description"
            components={[(
              <a
                key={0}
                rel="noopener noreferrer"
                target="_blank"
                href={GET_IN_TOUCH_HREF}
                title="get in touch link"
                aria-label="get in touch link"></a>
            )]}
          />}
        </PageDescription>
      </PageHeader>
      <GhostPostsGrid
        posts={articlesNewsData?.posts}
        sectionTitle={t('news_articles_section')}
        maxPaginationPages={articlesNewsData?.meta?.pagination?.pages}
        coverSectionPageName="news/section/news-articles"
      />
      <GhostPostsGrid
        posts={clientStoriesData?.posts}
        sectionTitle={t('client_stories_section')}
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
