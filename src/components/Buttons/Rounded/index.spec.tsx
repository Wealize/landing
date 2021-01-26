import React from 'react'
import { shallow } from 'enzyme'

import {
  ACCENT_COLOR,
  DARK_GRAY_COLOR,
  WHITE_COLOR
} from '../../../theme/color'

import ButtonRounded from './index'
import {
  Content
} from './styles'
import { SMALL } from './sizes'

describe('<ButtonRounded />', () => {
  const buttonProps = {
    backgroundColor: DARK_GRAY_COLOR,
    textColor: WHITE_COLOR,
    animatedBackgroundColor: ACCENT_COLOR,
    animatedTextColor: WHITE_COLOR,
    size: SMALL,
    children: <span>Hello</span>,
    handleClick: null
  }
  const wrapper = shallow(<ButtonRounded {...buttonProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('wrapper: should render content correctly', () => {
    expect(wrapper.find(Content).first().text()).toEqual('Hello')
    expect(wrapper.find(Content).at(1).text()).toEqual('Hello')
  })
})
