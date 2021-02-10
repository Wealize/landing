import React from 'react'
import Link from 'next/link'
import { PostOrPage } from '@tryghost/content-api'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

import { ACCENT_COLOR, WHITE_COLOR } from '../../../theme/color'
import { isClientStory, isExternalContent, getFirstHref } from '../../../helpers/Ghost/post'

import {
  Anchor,
  Article,
  Header,
  EntryContent,
  CardImage,
  CardHeadline,
  CardPublishedAt
} from './styles'

type GhostPostCardProps = {
  post: PostOrPage,
  color?: string,
  textColor?: string
}

const GhostPostCard = (props: GhostPostCardProps) => {
  const {
    post,
    color = WHITE_COLOR,
    textColor = ACCENT_COLOR
  } = props

  const isValidExternalContent = () => isExternalContent(post) && getFirstHref(post)

  return (
    <Link href={
      isValidExternalContent()
        ? getFirstHref(post)
        : `/news/${post.slug}`}
      passHref
    >
      <Anchor
        className={`${post.featured ? 'post-card' : 'post-card featured'}`}
        color={color}
        textColor={textColor}
        isFeatured={post?.featured}
        title={`postcard ${post.title}`}
        aria-label={`postcard ${post.title}`}
        target={isValidExternalContent() ? '_blank' : '_self'}
        {...(isValidExternalContent() ? { rel: 'noreferrer' } : {})}
      >
        <Article>
          <Header>
            <CardImage isVisible={post?.feature_image?.length > 0}>
            {post?.feature_image
              ? (
                <>
                    <ReactPlaceholder
                      type='rect'
                      firstLaunchOnly={false}
                      showLoadingAnimation={true}
                      ready={false}
                      style={{ marginRight: '0', position: 'absolute' }}
                      // eslint-disable-next-line react/no-children-prop
                      children={null}
                    />
                    <Image
                      src={post.feature_image}
                      layout="fill"
                      objectFit="cover"
                      aria-label={`post ${post.title}`}
                      title={`post ${post.title}`}
                    />
                  </>
                )
              : null }
          </CardImage>
            <CardHeadline>{post.title}</CardHeadline>
          </Header>
          <EntryContent>
            <p>{post.excerpt}</p>
            <CardPublishedAt isShowDate={!isClientStory(post)}>{post.published_at}</CardPublishedAt>
          </EntryContent>
        </Article>
      </Anchor>
    </Link>
  )
}

export default React.memo(GhostPostCard)
