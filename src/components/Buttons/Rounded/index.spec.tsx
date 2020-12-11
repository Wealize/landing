import React from 'react'
import { shallow } from 'enzyme'

import ButtonRounded from './index'
import { ACCENT, DARK_GRAY, WHITE } from '../../../theme/color'
import {
  ContainerButtonOriginal,
  ContainerButtonAnimated,
  Content
} from './styles'

describe('<ButtonRounded />', () => {
  const buttonProps = {
    backgroundColor: DARK_GRAY,
    textColor: WHITE,
    accentColor: ACCENT,
    children: 'Test text'
  }
  const wrapper = shallow(<ButtonRounded {...buttonProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('wrapper: should render content correctly', () => {
    expect(wrapper.find(ContainerButtonOriginal)).toHaveStyleRule(
      'background-color',
      DARK_GRAY
    )
    expect(wrapper.find(ContainerButtonAnimated)).toHaveStyleRule(
      'background-color',
      ACCENT
    )

    expect(wrapper.find(Content).first()).toHaveStyleRule('color', WHITE)
    expect(wrapper.find(Content).at(1)).toHaveStyleRule('color', WHITE)

    expect(wrapper.find(Content).first().text()).toEqual(buttonProps.children)
    expect(wrapper.find(Content).at(1).text()).toEqual(buttonProps.children)
  })
})
