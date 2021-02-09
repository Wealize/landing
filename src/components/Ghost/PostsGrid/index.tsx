import { PostOrPage } from '@tryghost/content-api'
import Link from 'next/link'
import React from 'react'

import GhostPostCard from '../../../components/Ghost/PostCard'

import { Container, SectionTitle, ContainerPosts, ShowMoreLink } from './styles'


type GhostPostsGridProps = {
  posts: PostOrPage[]
  sectionTitle?: string
  showMoreContentButton?: boolean,
  maxPaginationPages?: number,
  coverSectionPageName?: string
}

const GhostPostsGrid = (props: GhostPostsGridProps) => {
  const {
    posts,
    sectionTitle,
    showMoreContentButton,
    maxPaginationPages,
    coverSectionPageName
  } = props

  console.log(posts)

  return (
    <Container>
      {
        posts?.length
          ? (
            <>
              { sectionTitle ? <SectionTitle>{sectionTitle}</SectionTitle> : null}
              <ContainerPosts>
                {posts.map((post: PostOrPage, index: number) => (
                  <GhostPostCard key={index} post={post} />
                ))}
              </ContainerPosts>
              { showMoreContentButton &&
                coverSectionPageName &&
                maxPaginationPages > 1
                ? (
                  <Link href={`${coverSectionPageName}`} passHref>
                    <ShowMoreLink className="show-more-link">Show more content</ShowMoreLink>
                  </Link>
                  )
                : null}
            </>
            )
          : null
      }
    </Container>
  )
}

export default React.memo(GhostPostsGrid)
