import { GetStaticPropsContext } from 'next'
import parse, { HTMLReactParserOptions } from 'html-react-parser'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PostOrPage } from '@tryghost/content-api'
import ReactPlaceholder from 'react-placeholder'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import { LayoutOptions } from '../../interfaces/Page'
import GhostService from '../../services/GhostService'
import {
  Container,
  PostHeader,
  PostHeadline,
  PostSubheadline,
  Figure,
  PostBody,
  Tag,
  PublishedAt,
  ReadingTime,
  AuthorContainer,
  AuthorImage,
  AuthorName
} from '../../styles/pages/news/postDetail'
import { WHITE_COLOR, ACCENT_COLOR } from '../../theme/color'
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder'

type PostPageProps = {
  post: PostOrPage
}

const PostPage = (props: PostPageProps): JSX.Element => {
  const router = useRouter()
  const {
    query: { slug }
  } = router
  const { post } = props
  const { t, lang } = useTranslation('post_detail')

  const hasChildren = (domNode):boolean => domNode?.children?.length

  useEffect((): void => {
    document.getElementById('navbar').style.backgroundColor = WHITE_COLOR
  }, [])

  const replaceDomNodesConfig: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode?.name === 'figure' && hasChildren(domNode)) {
        const imgSrc = domNode.children[0]?.attribs?.src
        if (!imgSrc) return

        return (
          <Figure>
            <ImageWithPlaceholder
              imageUrl={imgSrc}
              placeholderType='rect'
              objectFit='contain'
              style={{ position: 'absolute', top: '0' }}
            />
          </Figure>
        )
      }
    }
  }

  return (
    <>
      <Head>
        { post?.meta_title ? <title>{post?.meta_title}</title> : null}
        { post?.meta_description
          ? <meta name="description" content={post?.meta_description} />
          : null }

        { post?.og_image
          ? (
            <>
              <meta property="og:type" content="website" />
              <meta property="og:url" content={`https://wealize.digital/news/${slug}`} />
              <meta property="og:image" content={post?.og_image} />
              <meta property="og:image:width" content="400" />
              <meta property="og:image:height" content="400" />
            </>
            )
          : null }

        { post?.og_title
          ? <meta property="og:title" content={post?.og_title} />
          : null }

        { post?.og_description
          ? <meta property="og:description" content={post?.og_description} />
          : null }

        { post?.twitter_title
          ? <>
              <meta name="twitter:card" content="summary" />
              <meta
              name="twitter:title"
              content={post?.twitter_title} />
            </>
          : null }

        { post?.twitter_description
          ? <meta name="twitter:description" content={post?.twitter_description} />
          : null }

        { post?.twitter_image
          ? <meta name="twitter:image" content={post?.twitter_image} />
          : null}
        <link rel="alternate" hrefLang="es" href={`https://wealize.digital/es/news/${slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://wealize.digital/news/${slug}`} />

        {lang.toLowerCase() === 'en'
          ? (
          <>
            <link rel="canonical" href={`https://wealize.digital/news/${slug}`} />
            <meta property="og:locale" content="en_En" />
            <meta property="og:site_name" content="Wealize, digital products" />
          </>
            )
          : null}
        {lang.toLowerCase() === 'es'
          ? (
            <>
              <link rel="canonical" href={`https://wealize.digital/es/news/${slug}`} />
              <meta property="og:locale" content="es_Es" />
              <meta property="og:site_name" content="Wealize, productos digitales" />
            </>
            )
          : null}
      </Head>
      <div className="inner">
        <Container>
        { post?.title
          ? (<>
              {post?.feature_image
                ? (
                    <Figure className="feature-image">
                      <ImageWithPlaceholder
                        imageUrl={post.feature_image}
                        imageAriaLabel={`post ${post.title}`}
                        imageTitle={`post ${post.title}`}
                        placeholderType='rect'
                        style={{ position: 'absolute', top: '0' }}
                      />
                    </Figure>
                  )
                : null}
                <PostHeader isShowFeaturedImage={!!post?.feature_image}>
                  <PostHeadline>{post?.title}</PostHeadline>
                  <AuthorContainer>
                    <AuthorImage>
                    {post?.primary_author?.profile_image
                      ? (
                        <ImageWithPlaceholder
                          imageUrl={post?.primary_author?.profile_image}
                          imageAriaLabel={`author ${post?.primary_author?.name}`}
                          imageTitle={`author ${post?.primary_author?.name}`}
                          placeholderType='round'
                          style={{ position: 'absolute', top: '0' }}
                        />
                        )
                      : (
                        <ReactPlaceholder
                          type='round'
                          firstLaunchOnly={false}
                          ready={false}
                          color={ACCENT_COLOR}
                          style={{ marginRight: '0', position: 'absolute' }}
                          // eslint-disable-next-line react/no-children-prop
                          children={null}
                        />
                        )}
                      </AuthorImage>
                    <AuthorName>{ post?.primary_author?.name}</AuthorName>
                  </AuthorContainer>
                  <PostSubheadline>
                    <PublishedAt>{post?.published_at}</PublishedAt>
                  <ReadingTime>&nbsp;•&nbsp;{post?.reading_time} {t('read-time')}</ReadingTime>
                  </PostSubheadline>
                  <Tag>{ post?.primary_tag?.name}</Tag>
                </PostHeader>
              </>)
          : null}

        { post?.html
          ? (
            <PostBody>
              {parse(`${post?.html}`, replaceDomNodesConfig)}
            </PostBody>
            )
          : null}
      </Container>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ params, locale }: GetStaticPropsContext): Promise<{
  props: {
    layoutOptions: LayoutOptions,
    post: PostOrPage
  }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  const getSlugParam = Array.isArray(params) ? params[0].slug : params.slug

  const post: PostOrPage = await GhostService.getPostBySlug(getSlugParam, locale)

  return { props: { layoutOptions, post } }
}

export default PostPage
