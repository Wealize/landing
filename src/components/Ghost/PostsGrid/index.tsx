import { PostOrPage } from '@tryghost/content-api'
import Link from 'next/link'
import React from 'react'

import GhostPostCard from '../../../components/Ghost/PostCard'

import { Container, SectionTitle, ContainerPosts, ShowMoreLink } from './styles'


type GhostPostsGridProps = {
  posts: PostOrPage[]
  sectionTitle?: string,
  maxPaginationPages?: number,
  coverSectionPageName?: string
}

const GhostPostsGrid = (props: GhostPostsGridProps) => {
  const {
    posts,
    sectionTitle,
    maxPaginationPages,
    coverSectionPageName
  } = props

  return (
    <Container>
      {
        posts?.length
          ? (
            <>
              { sectionTitle ? <SectionTitle>{sectionTitle}</SectionTitle> : null}
              <ContainerPosts>
                {posts.map((post: PostOrPage, index: number) => {
                  return <GhostPostCard key={index} post={post} />
                })}
              </ContainerPosts>
              {
                coverSectionPageName &&
                maxPaginationPages > 1
                  ? (
                      <Link href={`${coverSectionPageName}`} passHref>
                        <ShowMoreLink
                          className="show-more-link"
                        >
                          Show more
                        </ShowMoreLink>
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
