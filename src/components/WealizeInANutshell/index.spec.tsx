import React from 'react'
import { mount } from 'enzyme'

import { Title, Paragraph } from './styles'
import WealizeInANutshell from './index'
import { ACCENT_COLOR } from '../../theme/color'

describe('<WealizeInANutshell />', () => {
  const componentProps = {
    highlightColor: ACCENT_COLOR
  }
  const wrapper = mount(<WealizeInANutshell {...componentProps} />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Title).text().length).toBeGreaterThan(0)
    expect(wrapper.find(Paragraph).length).toEqual(7)
  })
})
