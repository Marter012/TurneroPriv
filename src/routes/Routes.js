import React from 'react'

import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Mensual from '../pages/Mensual/Mensual'
import Semanal from '../pages/Semanal/Semanal'


const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Mensual/>}/>
      <Route path='/semanal' element={<Semanal/>}/>
    </ReactDomRoutes>
  )
}

export default Routes
