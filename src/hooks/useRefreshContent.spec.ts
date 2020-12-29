import { act } from '@testing-library/react'
import { differenceWith } from 'lodash'

import { testHook } from '../utils/testHook'

import useRefreshContent from './useRefreshContent'
describe('useRefreshContent()', () => {
  const MAX_ITEMS_TO_SHOW = 6
  const MAX_ITEMS_TO_REFRESH = 2

  let dataToDisplay, refreshData
  const data = [
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Miguel Calero',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        },
        {
          name: 'Twitter',
          url: ''
        },
        {
          name: 'Linkedin',
          url: ''
        },
        {
          name: 'Dev.to',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Javier Aguirre',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Jesús Mejías',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Miguel Gavilán',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Javier Martín',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Daniel Ranchal',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Nieves borrego',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Victoria',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Maca Torralba',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    }
  ]
  testHook(() => {
    ;({ dataToDisplay, refreshData } = useRefreshContent(
      data,
      MAX_ITEMS_TO_SHOW,
      MAX_ITEMS_TO_REFRESH
    ))
  })
  it('should have the initial correct elements', () => {
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
  })

  it('should have changed elements', () => {
    const oldDataToDisplay = dataToDisplay
    act(() => refreshData())
    const elementsChanged = differenceWith(dataToDisplay, oldDataToDisplay)
    expect(elementsChanged.length).toEqual(MAX_ITEMS_TO_REFRESH)
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
  })
})

describe('useRefreshContent() with wrong values', () => {
  let dataToDisplay, refreshData
  const data = [
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Miguel Calero',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        },
        {
          name: 'Twitter',
          url: ''
        },
        {
          name: 'Linkedin',
          url: ''
        },
        {
          name: 'Dev.to',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Javier Aguirre',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Jesús Mejías',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Miguel Gavilán',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Javier Martín',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Daniel Ranchal',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Nieves borrego',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Victoria',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    },
    {
      imageUrl: '/img/talents/placeholder.png',
      name: 'Maca Torralba',
      description: 'Magía y hechicería',
      socialNetworks: [
        {
          name: 'Email',
          url: ''
        }
      ]
    }
  ]
  testHook(() => {
    ;({ dataToDisplay, refreshData } = useRefreshContent(undefined, 50, 50))
  })

  it('should return empty when we send wrong values', () => {
    testHook(() => {
      ;({ dataToDisplay, refreshData } = useRefreshContent(null, 50, 20))
    })
    expect(dataToDisplay.length).toEqual(0)
    expect(refreshData()).toEqual(null)
  })

  it('should return empty when we send invalid values', () => {
    testHook(() => {
      ;({ dataToDisplay, refreshData } = useRefreshContent(
        data.splice(0, 2),
        50,
        20
      ))
    })
    expect(dataToDisplay.length).toEqual(0)
    expect(refreshData()).toEqual(null)
  })
})
