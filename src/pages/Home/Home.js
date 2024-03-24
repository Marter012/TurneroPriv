import React from 'react'
import Calendar from '../../components/Calendar/Calendar'
import ListShifts from '../../components/ListShifts/ListShifts'
import { HomeContainer } from './HomeStyles'

const Home = () => {
  return (
    <HomeContainer>
      <Calendar />
      <ListShifts />
    </HomeContainer>
  )
}

export default Home
