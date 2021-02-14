/* eslint-disable no-case-declarations */
import { GetStaticPaths } from 'next'
import parse from 'html-react-parser'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { PostOrPage } from '@tryghost/content-api'
import ReactPlaceholder from 'react-placeholder'
import Head from 'next/head'

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
import { useSWR } from '../../hooks/useSWR'
import { WHITE_COLOR, ACCENT_COLOR } from '../../theme/color'
import ImageWithPlaceholder from '../../components/ImageWithPlaceholder'


const PostPage = (): JSX.Element => {
  const router = useRouter()
  const {
    query: { slug }
  } = router

  const { data: post } = useSWR<PostOrPage>(`post-detail-${slug}`, () => slug && GhostService.getPostBySlug(Array.isArray(slug) ? slug[0] : slug))

  const getShortDateFormatted = (dateTime: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    return new Intl.DateTimeFormat('en-US', options)
      .format(new Date(dateTime))
  }

  useEffect(() => {
    document.getElementById('navbar').style.backgroundColor = WHITE_COLOR
  }, [])

  const replaceDomNodesConfig = {
    replace: (domNode) => {
      if (domNode?.name === 'figure' && domNode?.children?.length) {
        const imgSrc = domNode.children[0]?.attribs?.src
        if (!imgSrc) return

        return (<Figure>
            <ImageWithPlaceholder
              imageUrl={imgSrc}
              placeholderType='rect'
              style={{ position: 'absolute', top: '0' }}
            />
          </Figure>)
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
              <meta property="og:url" content={`https://wealize.digital/${router.asPath}`} />
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
          : null }
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
                <PostHeader>
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
                    <PublishedAt>{getShortDateFormatted(post?.published_at)}</PublishedAt>
                    <ReadingTime>&nbsp;•&nbsp;{post?.reading_time} min read</ReadingTime>
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

export default PostPage
