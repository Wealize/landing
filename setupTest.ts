import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'
configure({ adapter: new Adapter() })

/* eslint-disable @typescript-eslint/no-empty-function */
window.IntersectionObserver = class {
  readonly root: Element | null

  readonly rootMargin: string

  readonly thresholds: ReadonlyArray<number>

  constructor() {
    this.root = null
    this.rootMargin = ''
    this.thresholds = []
  }

  disconnect() {}

  observe() {}

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  unobserve() {}
}
