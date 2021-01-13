
import { singlePx, doublePx, triplePx, quadruplePx } from './space'

export const CONTAINER_SPACING = {
  MOBILE: `padding: ${doublePx()} ${singlePx()};`,
  TABLET: `padding: ${doublePx()};`,
  SMALL_DESKTOP: `padding: ${triplePx()} ${doublePx()};`,
  DESKTOP: `padding: ${triplePx()};`,
  WIDE: `padding: ${quadruplePx()};`
}
