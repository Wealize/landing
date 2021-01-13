import { generateMedia } from 'styled-media-query'

export const BREAKPOINT_XS = '480px'
export const BREAKPOINT_SM = '576px'
export const BREAKPOINT_MD = '768px'
export const BREAKPOINT_LG = '992px'
export const BREAKPOINT_XL = '1366px'
export const BREAKPOINT_XXL = '1600px'
export const BREAKPOINT_XXXL = '1800px'

export const media = generateMedia({
  xs: BREAKPOINT_XS,
  sm: BREAKPOINT_SM,
  md: BREAKPOINT_MD,
  lg: BREAKPOINT_LG,
  xl: BREAKPOINT_XL,
  xxl: BREAKPOINT_XXL,
  xxxl: BREAKPOINT_XXXL
})
