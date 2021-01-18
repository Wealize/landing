
import { createGlobalState } from 'react-hooks-global-state'

interface navbarVisibility {
  isVisible: boolean
}

const initialState: navbarVisibility = {
  isVisible: false
}

export const { useGlobalState } = createGlobalState(initialState)
