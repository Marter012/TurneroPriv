import React from 'react'
import { SemanalContainer, SemanalWrapper } from './SemanalStyles'
import Day from '../../components/Day/Day'
import { dayWeeks } from '../../utils/daysWeek'

const Semanal = () => {
  return (
    <SemanalWrapper>
      <SemanalContainer>
        {dayWeeks.map(({day,date}) => {
          return <Day day={day} date={date}/>
        })}
      </SemanalContainer>
    </SemanalWrapper>
  )
}

export default Semanal
