import React from 'react'
import { mount } from 'enzyme'

import NavBar from './index'

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
describe('<NavBar />', () => {
  useRouter.mockImplementation(() => ({
    pathname: '/'
  }))
  const wrapper = mount(<NavBar />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })
})
