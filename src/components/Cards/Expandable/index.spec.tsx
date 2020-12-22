import React from 'react'
import { shallow } from 'enzyme'

import CardExpandable from './index'
import { Toggle, Content, Headline, Subheadline, Description } from './styles'
import BlockchainIcon from '../../icons/thingsWeAreGoodAt/BlockchainIcon'
import { PRIMARY, PRIMARY_LIGHT } from '../../../theme/color'

describe('<CardExpanded />', () => {
  const cardProps = {
    headline: 'headline',
    subheadline: 'subheadline',
    description: 'description',
    image: <BlockchainIcon />,
    backgroundColor: PRIMARY_LIGHT,
    textColor: PRIMARY,
    isExpanded: false
  }
  const wrapper = shallow(<CardExpandable {...cardProps} />)

  it('wrapper: should render', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render content correctly', () => {
    expect(wrapper.find(Toggle).length).toEqual(1)
    expect(wrapper.find(Content)).toHaveStyleRule('max-height', '0px')
    expect(wrapper.find(BlockchainIcon).length).toEqual(1)
    expect(wrapper.find(Headline).text()).toEqual(cardProps.headline)
    expect(wrapper.find(Subheadline).text()).toEqual(cardProps.subheadline)
    expect(wrapper.find(Description).text()).toEqual(cardProps.description)

    const cardPropsExpanded = {
      ...cardProps,
      isExpanded: true
    }
    const wrapperExpanded = shallow(<CardExpandable {...cardPropsExpanded} />)

    expect(wrapperExpanded.find(Toggle).length).toEqual(1)
    expect(wrapperExpanded.find(Content)).toHaveStyleRule(
      'max-height',
      '1000px'
    )
    expect(wrapperExpanded.find(BlockchainIcon).length).toEqual(1)
    expect(wrapperExpanded.find(Headline).text()).toEqual(cardProps.headline)
    expect(wrapperExpanded.find(Subheadline).text()).toEqual(
      cardProps.subheadline
    )
    expect(wrapperExpanded.find(Description).text()).toEqual(
      cardProps.description
    )
  })

  it('should click on toggle button', async () => {
    const mockOnClick = jest.fn()
    const toggleComponent = shallow(
      <Toggle onClick={mockOnClick} textColor={PRIMARY} isExpanded={false} />
    )
    toggleComponent.simulate('click')
    expect(mockOnClick.mock.calls.length).toEqual(1)
  })
})
