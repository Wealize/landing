/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import { isEqual, differenceWith, shuffle } from 'lodash'

interface IUseRefreshContent {
  dataToDisplay: any[]
  elementsReplacedLastRefresh: number[]
  refreshData: () => void
}

const useRefreshContent = (
  data = [],
  MAX_ITEMS_TO_SHOW: number,
  MAX_ITEMS_TO_REFRESH: number
): IUseRefreshContent => {
  const [dataToDisplay, setDataToDisplay] = useState(data)
  const [dataNotDisplayed, setDataNotDisplayed] = useState([])
  const [elementsReplacedLastRefresh, setElementsReplacedLastRefresh] = useState([])

  useEffect(() => {
    setDataToDisplay(getDataToShow(data, MAX_ITEMS_TO_SHOW))
  }, [])

  useEffect(() => {
    setDataNotDisplayed(differenceWith(data, dataToDisplay, isEqual))
  }, [dataToDisplay])

  const getDataToShow = (array, numberElements: number): any[] => {
    if (!array) return []

    const ranTalents = []
    const copyArray = [...array]
    let randomIndex = 0

    if (numberElements > array.length) return ranTalents

    while (numberElements--) {
      randomIndex = Math.floor(Math.random() * (copyArray.length))
      const talent = copyArray[randomIndex]

      ranTalents.push(talent)
      copyArray.splice(randomIndex, 1)
    }

    return ranTalents
  }

  const getRandomIndexes = (array, numbersOfIndex: number): number[] => {
    if (!array) return []

    const ranTalents = []
    const copyArray = [...array]
    let randomIndex = 0

    if (numbersOfIndex > array.length) return ranTalents

    while (numbersOfIndex--) {
      randomIndex = Math.floor(Math.random() * (copyArray.length))

      ranTalents.push(randomIndex)
      copyArray.splice(randomIndex, 1)
    }

    return ranTalents
  }

  const refreshData = (): void | null => {
    const elementsToAdd = getDataToShow(dataNotDisplayed, MAX_ITEMS_TO_REFRESH)

    const indexesToReplace = getRandomIndexes(
      dataToDisplay,
      MAX_ITEMS_TO_REFRESH
    )

    if (!elementsToAdd.length || !indexesToReplace.length) return null

    setDataToDisplay(
      shuffle(dataToDisplay.map((element: any, index: number) => {
        return indexesToReplace.includes(index) ? elementsToAdd.pop() : element
      }))
    )

    setElementsReplacedLastRefresh(indexesToReplace)
  }


  return { dataToDisplay, elementsReplacedLastRefresh, refreshData }
}

export default useRefreshContent
