import { renderHook, act } from '@testing-library/react-hooks'

import talentsData from '../data/talentsData'

import useRefreshContent from './useRefreshContent'
describe('useRefreshContent()', () => {
  const MAX_ITEMS_TO_SHOW = 6
  const MAX_ITEMS_TO_REFRESH = 2

  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should have the initial correct elements', () => {
    const { result } = renderHook(() => useRefreshContent(
      talentsData,
      MAX_ITEMS_TO_SHOW,
      MAX_ITEMS_TO_REFRESH
    ))
    const { dataToDisplay, elementsReplacedLastRefresh } = result.current
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
    expect(elementsReplacedLastRefresh.length).toEqual(0)
  })

  it('should have changed elements', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useRefreshContent(
      talentsData,
      MAX_ITEMS_TO_SHOW,
      MAX_ITEMS_TO_REFRESH
    ))

    await act(async () => {
      result.current.refreshData()
      await waitForNextUpdate()
    })

    const { dataToDisplay, elementsReplacedLastRefresh } = result.current

    expect(elementsReplacedLastRefresh.length).toEqual(MAX_ITEMS_TO_REFRESH)
    expect(dataToDisplay.length).toEqual(MAX_ITEMS_TO_SHOW)
  })
})

describe('useRefreshContent() with wrong values', () => {
  it('should return empty when we send wrong values', async () => {
    const { result } = renderHook(() => useRefreshContent(null, 50, 20))

    const { dataToDisplay, refreshData } = result.current
    expect(dataToDisplay).toEqual([])
    expect(refreshData()).toEqual(null)
  })

  it('should return empty when we send invalid values', async () => {
    const { result } = renderHook(() => useRefreshContent(
      talentsData.slice(0, 2),
      50,
      20
    ))

    const { dataToDisplay, refreshData } = result.current

    expect(dataToDisplay.length).toEqual(0)
    expect(refreshData()).toEqual(null)
  })
})
