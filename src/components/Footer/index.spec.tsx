import React from 'react'
import { shallow } from 'enzyme'

import ButtonRounded from '../Buttons/Rounded'
import WealizeWhiteNormalMediumIcon from '../icons/WealizeWhiteNormalMediumIcon'

import Footer from './index'
import {
  BigText,
  Social,
  PrivacyLegalLink,
  CopyrightText,
  Grant
} from './styles'


describe('<Footer />', () => {
  const wrapper = shallow(<Footer />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('wrapper: render content correctly', () => {
    expect(wrapper.find(WealizeWhiteNormalMediumIcon).length).toEqual(1)
    expect(wrapper.find(BigText).length).toEqual(2)
    expect(wrapper.find(ButtonRounded).length).toEqual(2)
    expect(wrapper.find(PrivacyLegalLink).length).toEqual(1)
    expect(wrapper.find(CopyrightText).length).toEqual(1)
    expect(wrapper.find(Social).length).toEqual(6)
    expect(wrapper.find(Grant).length).toEqual(2)
  })
})
