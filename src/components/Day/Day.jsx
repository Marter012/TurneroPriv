import React from 'react'
import { ContainerDay, ContainerShifts, ShiftDay } from './DayStyles'
import moment from 'moment';

const Day = ({day,date}) => { 
    let fecha = moment(`2024-03-${32}`)
  return (
    <ContainerDay>
      <h3>{`${day} ${fecha.format("Do")}`}</h3>
      <ContainerShifts>
        <ShiftDay>
            <span>14:30hs</span>
            <p>Martin</p>
        </ShiftDay>
        <ShiftDay>
            <span>14:30hs</span>
            <p>Martin</p>
        </ShiftDay><ShiftDay>
            <span>14:30hs</span>
            <p>Martin</p>
        </ShiftDay><ShiftDay>
            <span>14:30hs</span>
            <p>Martin</p>
        </ShiftDay>
      </ContainerShifts>
    </ContainerDay>
  )
}

export default Day
