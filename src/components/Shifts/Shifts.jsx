import React from 'react'
import { ShiftsCard, ShiftsCardData } from './ShiftsStyles'

const Shifts = () => {
  return (
    <ShiftsCard>
        <h2>Franco</h2>
        <ShiftsCardData>
            <p>GYM</p>
            <span>14hs</span>
            <p>Tintura</p>
        </ShiftsCardData>
    </ShiftsCard>
  )
}

export default Shifts