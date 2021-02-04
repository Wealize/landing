import React from 'react'
import Link from 'next/link'

import GhostPost from '../../../../interfaces/Ghost/GhostPost'

import { Container, Content, CardHeadline, CardPublishedAt, CardBody } from './styles'

type GhostPostCardProps = {
  post: GhostPost
}

const GhostPostCard = (props: GhostPostCardProps) => {
  const {
    post
  } = props

  return (
    <Link href="/news-room/[slug]" as={`/news-room/${post.slug}`} passHref>
      <Container className={`${post.featured ? 'post-card' : 'post-card featured'}`} isFeatured={post.featured}>
        <Content>
          <CardHeadline>{post.title}</CardHeadline>
          <CardBody>
            {post.excerpt}
          </CardBody>
          <CardPublishedAt>{post.published_at}</CardPublishedAt>
        </Content>
      </Container>
    </Link>
  )
}

export default React.memo(GhostPostCard)
