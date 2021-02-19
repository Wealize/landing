import { PostOrPage } from '@tryghost/content-api'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import ReactPlaceholder from 'react-placeholder'

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
  const { t } = useTranslation('common')

  return (
    <ReactPlaceholder
        type='media'
        ready={posts?.length > 0}
        style={{
          marginTop: '7rem',
          width: '100%',
          height: '100%'
        }}>
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
                            { t('posts_grid.show_more_link_text') }
                          </ShowMoreLink>
                        </Link>
                      )
                    : null}
              </>
              )
            : null
        }
      </Container>
    </ReactPlaceholder>
  )
}

export default React.memo(GhostPostsGrid)
