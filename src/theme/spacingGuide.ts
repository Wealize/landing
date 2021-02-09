import { singlePx, doublePx, triplePx, quadruple } from './space'

export const CONTAINER_SPACING = {
  MOBILE: `padding: ${doublePx()} ${singlePx()};`,
  TABLET: `padding: ${doublePx()};`,
  SMALL_DESKTOP: `padding: ${triplePx()} ${doublePx()};`,
  DESKTOP: `padding: ${triplePx()};`,
  WIDE: `padding: ${quadruple()}px ${quadruple() * 3}px;`
}
