import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Head from 'next/head'

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
  const { data: articlesNewsData } = useSWR<GhostPostResponse>('news-room-articles-news', () =>
    GhostService.getPostsByTagsAndPaginationPage(
      '1',
      [NEWS_TAG_SLUG, ARTICLE_TAG_SLUG]
    ))

  const { data: clientStoriesData } = useSWR<GhostPostResponse>('news-room-client-stories', () => GhostService.getPostsByTagsAndPaginationPage(
    '1',
    [CLIENT_STORY_TAG_SLUG]
  ))

  useEffect((): void => {
    document.getElementById('navbar').style.backgroundColor = WHITE_COLOR
  }, [])

  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta
          name="description"
          content={t('meta_description')}
        />
        <link rel="alternate" hrefLang="es" href="https://wealize.digital/es/news" />
        <link rel="alternate" hrefLang="en" href="https://wealize.digital/news" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wealize.digital/news" />
        <meta property="og:image" content="https://wlz-branding.s3.eu-central-1.amazonaws.com/banner_400x400.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:image:alt" content={t('meta_title')} />
        <meta property="og:title" content={t('meta_title')} />
        <meta property="og:description" content={t('meta_description')} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={t('meta_title')} />
        <meta name="twitter:description" content={t('meta_description')} />
        <meta name="twitter:image" content="https://wlz-branding.s3.eu-central-1.amazonaws.com/banner_400x400.png" />

        {lang.toLowerCase() === 'en'
          ? (
            <>
              <link rel="canonical" href="https://wealize.digital/news" />
              <meta property="og:locale" content="en_En" />
              <meta property="og:site_name" content="Wealize, digital products" />
            </>
            )
          : null}
        {lang.toLowerCase() === 'es'
          ? (
            <>
              <link rel="canonical" href="https://wealize.digital/es/news" />
              <meta property="og:locale" content="es_Es" />
              <meta property="og:site_name" content="Wealize, productos digitales" />
            </>
            )
          : null}
      </Head>
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
    </>
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
