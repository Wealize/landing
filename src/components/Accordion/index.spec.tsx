import React from 'react'
import { shallow, mount } from 'enzyme'

import RoundArrowIcon from '../icons/thingsWeAreGoodAt/RoundArrowIcon'
import { WHITE_COLOR, ACCENT_COLOR } from '../../theme/color'

import Accordion from './index'
import {
  Separator,
  Title,
  SectionContainer,
  SectionTitle,
  SectionToggle,
  SectionElement
} from './styles'
describe('<Accordion />', () => {
  const sectionsData = [
    {
      title: 'Languages & frameworks',
      data: ['Cypress', 'Jest', 'Redux', 'Fabric', 'Hyperledger Besu', 'Quorum', 'web3']
    },
    {
      title: 'Devops, Architecture & Systems',
      data: ['Cypress', 'Jest', 'Redux', 'Fabric', 'Hyperledger Besu', 'Quorum', 'web3']
    }
  ]
  const accordionProps = {
    backgroundColor: ACCENT_COLOR,
    textColor: WHITE_COLOR,
    title: 'Tools & Tech Stack',
    sectionsData: sectionsData,
    ToggleButtonBackgroundColor: ACCENT_COLOR,
    ToggleButtonTextColor: WHITE_COLOR,
    ToggleButtonAnimatedBackgroundColor: WHITE_COLOR,
    ToggleButtonAnimatedTextColor: ACCENT_COLOR
  }
  const wrapper = shallow(<Accordion {...accordionProps} />)

  it('should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Separator).length).toEqual(3)
    expect(wrapper.find(SectionContainer).length).toEqual(2)
    expect(wrapper.find(Title).text()).toEqual(accordionProps.title)
    expect(wrapper.find(SectionTitle).length).toEqual(2)
    expect(wrapper.find(SectionTitle).at(0).text()).toEqual(sectionsData[0].title)
    expect(wrapper.find(SectionTitle).at(1).text()).toEqual(sectionsData[1].title)
    expect(wrapper.find(SectionToggle).length).toEqual(2)
    expect(wrapper.find(RoundArrowIcon).length).toEqual(2)
    expect(wrapper.find(SectionElement).length).toEqual(14)
  })

  it('should click on toggle button', () => {
    const setIsExpanded = jest.fn()
    const toggleComponent = mount(
      <SectionToggle
        onClick={setIsExpanded}
        textColor={WHITE_COLOR}
        backgroundColor={ACCENT_COLOR} isExpanded={false}
      />
    )
    const handleClick = jest.spyOn(React, 'useState')
    handleClick.mockImplementation(isExpanded => [isExpanded, setIsExpanded])
    toggleComponent.simulate('click')
    expect(setIsExpanded).toBeTruthy()
  })
})
