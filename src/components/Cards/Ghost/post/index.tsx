import React from 'react'
import Link from 'next/link'

import GhostPost from '../../../../interfaces/Ghost/GhostPost'

import { Container, CardHeadline, CardPublishedAt } from './styles'

interface GhostPostCardProps {
  post: GhostPost
}

const GhostPostCard = (props: GhostPostCardProps) => {
  const { post } = props
  return (
    <Link href="/news-room/[slug]" as={`/news-room/${post.slug}`} passHref>
      <Container className="ghost-post-card">
      <CardHeadline>{post.title}</CardHeadline>
      <CardPublishedAt>{post.published_at}</CardPublishedAt>
    </Container>
    </Link>
  )
}

export default React.memo(GhostPostCard)
