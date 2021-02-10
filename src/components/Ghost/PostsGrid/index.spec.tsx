import React from 'react'
import { mount } from 'enzyme'

import { CLIENT_STORIES } from '../../../__fixtures__/Ghost/posts'

import GhostPostsGrid from './index'


describe('<GhostPostsGrid />', () => {
  const postsGridProps = {
    posts: CLIENT_STORIES,
    showMoreContentButton: false
  }
  const wrapper = mount(<GhostPostsGrid {...postsGridProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('wrapper: should render content correctly', () => {
    expect(wrapper.find('article').length).toEqual(2)
    expect(wrapper.find('.show-more-link').length).toEqual(0)
  })

  const postsGridNewsListMode = {
    posts: CLIENT_STORIES,
    sectionTitle: 'Section title',
    showMoreContentButton: true,
    maxPaginationPages: 3,
    coverSectionPageName: 'news/section/client-stories'
  }
  const wrapperNewsListMode = mount(<GhostPostsGrid {...postsGridNewsListMode} />)
  it('wrapperNewsListMode: should render content correctly', () => {
    expect(wrapperNewsListMode.find('article').length).toEqual(2)
    expect(wrapperNewsListMode.find('h2').text()).toEqual(postsGridNewsListMode.sectionTitle)
    expect(wrapperNewsListMode.find('a.show-more-link').length).toEqual(1)
    const GhostPostsPaginatorWithoutContentForSectionCover = {
      ...postsGridNewsListMode,
      posts: CLIENT_STORIES.slice(0, 1),
      maxPaginationPages: 1
    }
    const wrapperWithoutContentForSectionCover = mount(<GhostPostsGrid {...GhostPostsPaginatorWithoutContentForSectionCover} />)
    expect(wrapperWithoutContentForSectionCover.find('.show-more-link').length).toEqual(0)
  })
})
