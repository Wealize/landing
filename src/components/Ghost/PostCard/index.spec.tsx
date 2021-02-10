import React from 'react'
import { mount } from 'enzyme'

import { POST_WITHOUT_TAGS } from '../../../__fixtures__/Ghost/posts'

import GhostPostCard from './index'

describe('<GhostPostCard />', () => {
  const wrapper = mount(<GhostPostCard post={POST_WITHOUT_TAGS} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find('a').length).toEqual(1)
    expect(wrapper.find('a').prop('href')).toContain(`/news/${POST_WITHOUT_TAGS.slug}`)
    expect(wrapper.find('img').length).toEqual(1)
    expect(wrapper.find('h3').text()).toEqual(POST_WITHOUT_TAGS.title)
    expect(wrapper.find('span').text()).toEqual('2021-02-01T11:00:20.000+00:00')

    const ghostPostCardDataWithoutFeatureImage = {
      ...POST_WITHOUT_TAGS,
      feature_image: null
    }
    const wrapperWithoutFeatureImage = mount(<GhostPostCard post={ghostPostCardDataWithoutFeatureImage} />)
    expect(wrapperWithoutFeatureImage.find('img').length).toEqual(0)
  })
})
