import React from 'react'
import { shallow } from 'enzyme'
import { Pagination } from '@tryghost/content-api'
import Link from 'next/link'

import { NEWS_ROOM_HREF } from '../../../constants/hrefs'

import GhostPostsPaginator from './index'

describe('<GhostPostsPaginator />', () => {
  const ghostMetaPaginationData: Pagination = {
    page: 1,
    limit: 15,
    pages: 3,
    total: 15,
    next: 2,
    prev: null
  }
  const wrapper = shallow(<GhostPostsPaginator metaPagination={ghostMetaPaginationData} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Link).length).toEqual(3)
    expect(wrapper.find('.pagination-page-item.current').length).toEqual(1)
    expect(wrapper.find(Link).at(0).prop('href')).toContain(`${NEWS_ROOM_HREF}?page=1`)
    expect(wrapper.find(Link).at(1).prop('href')).toContain(`${NEWS_ROOM_HREF}?page=2`)
    expect(wrapper.find(Link).at(2).prop('href')).toContain(`${NEWS_ROOM_HREF}?page=3`)
  })
})
