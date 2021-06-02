import React from 'react'

import { StyledBurger } from './styles'

export type Props = {
  open: boolean
  setOpen: (arg: boolean) => void
}

const Burger = (props: Props): JSX.Element => (
  <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
)

export default Burger
