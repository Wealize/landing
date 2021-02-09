import React from 'react'
import Link from 'next/link'
import { Pagination } from '@tryghost/content-api'
import { useRouter } from 'next/router'

import { Container, PaginationPage } from './styles'


type GhostPostsPaginatorProps = {
  metaPagination: Pagination
}

const GhostPostsPaginator = (props: GhostPostsPaginatorProps) => {
  const { metaPagination } = props
  const router = useRouter()
  const {
    query: { section }
  } = router

  const pages = Array.from({ length: metaPagination?.pages }, (_, i) => i + 1)

  return (
    <Container>
      {pages?.map((page: number, index: number) =>
        <Link href={`${section}?page=${page}`} key={index} passHref>
          <PaginationPage className={`pagination-page-item${metaPagination?.page === page ? ' current' : ''}`} >
            {page}
          </PaginationPage>
        </Link>)}
    </Container>
  )
}

export default React.memo(GhostPostsPaginator)
