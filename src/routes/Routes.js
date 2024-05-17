import React from 'react'

import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Mensual from '../pages/Mensual/Mensual'
import Semanal from '../pages/Semanal/Semanal'
import Balance from '../pages/Balance/Balance'


const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Mensual/>}/>
      <Route path='/semanal' element={<Semanal/>}/>
      <Route path='/cobros' element={<Balance/>}/>
    </ReactDomRoutes>
  )
}

export default Routes
