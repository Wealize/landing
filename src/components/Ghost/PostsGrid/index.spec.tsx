import React from 'react'
import { mount } from 'enzyme'
import { PostOrPage } from '@tryghost/content-api'

import GhostPostsGrid from './index'


describe('<GhostPostsGrid />', () => {
  const posts: PostOrPage[] = [
    {
      id: '6017df3f6b0d7a001c15cc7c',
      uuid: 'b4283683-b51e-4c67-ba42-66de093b1e05',
      title: 'Writing posts with Ghost ✍️',
      slug: 'the-editor',
      tags: [
        {
          id: '602112e0638f28001c9994e3',
          name: 'Client Story',
          slug: 'client-story',
          description: null,
          feature_image: null,
          visibility: 'public',
          meta_title: null,
          meta_description: null,
          url: 'https://wlz-blog.herokuapp.com/tag/client-story/'
        }
      ],
      html: '<p>test html</p>',
      comment_id: '6017df3f6b0d7a001c15cc7c',
      feature_image: 'https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png',
      featured: false,
      created_at: '2021-02-01T11:00:15.000+00:00',
      updated_at: '2021-02-01T11:00:15.000+00:00',
      published_at: '2021-02-01T11:00:20.000+00:00',
      custom_excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
      codeinjection_head: null,
      codeinjection_foot: null,
      custom_template: null,
      canonical_url: null,
      url: 'https://wlz-blog.herokuapp.com/the-editor/',
      excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
      reading_time: 3,
      og_image: null,
      og_title: null,
      og_description: null,
      twitter_image: null,
      twitter_title: null,
      twitter_description: null,
      meta_title: null,
      meta_description: null
    },
    {
      id: '6017df3f6b0d7a001c15cc8c',
      uuid: 'b4283683-b51e-4c67-ba42-66de093b1e05',
      title: 'Writing posts with Ghost ✍️ 2',
      slug: 'the-editor',
      tags: [
        {
          id: '602112e0638f28001c9994e3',
          name: 'Client Story',
          slug: 'client-story',
          description: null,
          feature_image: null,
          visibility: 'public',
          meta_title: null,
          meta_description: null,
          url: 'https://wlz-blog.herokuapp.com/tag/client-story/'
        }
      ],
      html: '<p>test html</p>',
      comment_id: '6017df3f6b0d7a001c15cc7c',
      feature_image: 'https://static.ghost.org/v3.0.0/images/writing-posts-with-ghost.png',
      featured: false,
      created_at: '2021-02-01T11:00:15.000+00:00',
      updated_at: '2021-02-01T11:00:15.000+00:00',
      published_at: '2021-02-01T11:00:20.000+00:00',
      custom_excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
      codeinjection_head: null,
      codeinjection_foot: null,
      custom_template: null,
      canonical_url: null,
      url: 'https://wlz-blog.herokuapp.com/the-editor/',
      excerpt: 'Discover familiar formatting options in a functional toolbar and the ability to add dynamic content seamlessly.',
      reading_time: 3,
      og_image: null,
      og_title: null,
      og_description: null,
      twitter_image: null,
      twitter_title: null,
      twitter_description: null,
      meta_title: null,
      meta_description: null
    }
  ]
  const postsGridProps = {
    posts: posts,
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
    posts: posts,
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
      posts: posts.slice(0, 1),
      maxPaginationPages: 1
    }
    const wrapperWithoutContentForSectionCover = mount(<GhostPostsGrid {...GhostPostsPaginatorWithoutContentForSectionCover} />)
    expect(wrapperWithoutContentForSectionCover.find('.show-more-link').length).toEqual(0)
  })
})
