export const BASE_LINE_HEIGHT = 24

export const sixth = (unit = BASE_LINE_HEIGHT): number => unit / 6
export const third = (unit = BASE_LINE_HEIGHT): number => unit / 3
export const half = (unit = BASE_LINE_HEIGHT): number => unit / 2
export const twoThird = (unit = BASE_LINE_HEIGHT): number => (unit * 2) / 3
export const single = (unit = BASE_LINE_HEIGHT): number => unit
export const singleAndHalf = (unit = BASE_LINE_HEIGHT): number => unit * 1.5
export const double = (unit = BASE_LINE_HEIGHT): number => unit * 2
export const doubleAndHalf = (unit = BASE_LINE_HEIGHT): number => unit * 2.5
export const triple = (unit = BASE_LINE_HEIGHT): number => unit * 3
export const quadruple = (unit = BASE_LINE_HEIGHT): number => unit * 4

export const sixthPx = (unit = BASE_LINE_HEIGHT): string => `${sixth(unit)}px`
export const thirdPx = (unit = BASE_LINE_HEIGHT): string => `${third(unit)}px`
export const halfPx = (unit = BASE_LINE_HEIGHT): string => `${half(unit)}px`
export const twoThirdPx = (unit = BASE_LINE_HEIGHT): string =>
  `${twoThird(unit)}px`
export const singlePx = (unit = BASE_LINE_HEIGHT): string => `${single(unit)}px`
export const singleAndHalfPx = (unit = BASE_LINE_HEIGHT): string =>
  `${singleAndHalf(unit)}px`
export const doublePx = (unit = BASE_LINE_HEIGHT): string => `${double(unit)}px`
export const doubleAndHalfPx = (unit = BASE_LINE_HEIGHT): string =>
  `${doubleAndHalf(unit)}px`
export const triplePx = (unit = BASE_LINE_HEIGHT): string => `${triple(unit)}px`
export const quadruplePx = (unit = BASE_LINE_HEIGHT): string =>
  `${quadruple(unit)}px`
