import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import { MensualContainer } from './MensualStyles'
import SectionsShifts from '../../components/SectionShifts/SectionsShifts'

const Mensual = () => {
  return (
    <MensualContainer>
      <Calendar />
      <SectionsShifts/>
    </MensualContainer>
  )
}

export default Mensual
