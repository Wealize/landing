import { act } from '@testing-library/react'
import { differenceWith } from 'lodash'

import { testHook } from '../utils/testHook'
import talentsData from '../data/talentsData'

import useRefreshContent from './useRefreshContent'
describe('useRefreshContent()', () => {
  const MAX_ITEMS_TO_SHOW = 6
  const MAX_ITEMS_TO_REFRESH = 2

  let dataToDisplay, refreshData

  testHook(() => {
    ;({ dataToDisplay, refreshData } = useRefreshContent(
      talentsData,
      MAX_ITEMS_TO_SHOW,
      MAX_ITEMS_TO_REFRESH
    ))
  })
  it('should have the initial correct elements', () => {
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
  })

  it('should have changed elements', async () => {
    const oldDataToDisplay = dataToDisplay
    await act(async () => await refreshData())
    const elementsChanged = differenceWith(dataToDisplay, oldDataToDisplay)
    expect(elementsChanged.length).toEqual(MAX_ITEMS_TO_REFRESH)
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
  })
})

describe('useRefreshContent() with wrong values', () => {
  let dataToDisplay, refreshData

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
        talentsData.splice(0, 2),
        50,
        20
      ))
    })
    expect(dataToDisplay.length).toEqual(0)
    expect(refreshData()).toEqual(null)
  })
})
