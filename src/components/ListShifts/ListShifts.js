import React from 'react'
import { ListShiftsContainer, ListShiftsWrapper } from './ListShiftsStyles'
import Shifts from '../Shifts/Shifts'

const ListShifts = () => {
    return (
        <ListShiftsWrapper>
            <ListShiftsContainer>
                <Shifts/>
            </ListShiftsContainer>
        </ListShiftsWrapper>
    )
}

export default ListShifts