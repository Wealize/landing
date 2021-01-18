import React from 'react'
import { mount } from 'enzyme'

import WAnimation from './index'

describe('<WAnimation />', () => {
  const wrapperWithoutBlendMode = mount(<WAnimation isMixMultiplyBlendMode={false} />)

  it('wrapperWithoutBlendMode: should render without blend mode', () => {
    expect(wrapperWithoutBlendMode).toBeDefined()
    expect(wrapperWithoutBlendMode).toMatchSnapshot()
  })

  it('wrapperWithoutBlendMode: should render content correctly', () => {
    expect(wrapperWithoutBlendMode.find('Player').length).toEqual(1)
  })

  const wrapperWithBlendMode = mount(<WAnimation isMixMultiplyBlendMode={true} />)

  it('wrapperWithBlendMode: should render without blend mode', () => {
    expect(wrapperWithBlendMode).toBeDefined()
    expect(wrapperWithBlendMode).toMatchSnapshot()
  })

  it('wrapperWithBlendMode: should render content correctly', () => {
    expect(wrapperWithBlendMode.find('Player').length).toEqual(1)
  })
})
