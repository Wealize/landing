import React from 'react'
import { mount } from 'enzyme'

import ButtonRounded from '../Buttons/Rounded'

import NavBar from './index'

// eslint-disable-next-line
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
describe('<NavBar />', () => {
  useRouter.mockImplementation(() => ({
    pathname: '/'
  }))

  const componentProps = {
    showNavigationBarClosablePage: true
  }
  const wrapperWithClosablePage = mount(<NavBar {...componentProps} />)

  it('should render', () => {
    expect(wrapperWithClosablePage).toBeDefined()
  })

  it('should render content correctly', () => {
    expect(wrapperWithClosablePage.find(ButtonRounded).length).toEqual(1)

    const componentProps = {
      showNavigationBarClosablePage: false
    }
    const wrapperWithoutClosablePage = mount(<NavBar {...componentProps} />)
    expect(wrapperWithoutClosablePage.find(ButtonRounded).length).toEqual(0)
  })
})
