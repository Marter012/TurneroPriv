import React from 'react'

import {Routes as ReactDomRoutes, Route} from 'react-router-dom'
import Home from '../pages/Home/Home'


const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route path='/' element={<Home/>}/>
    </ReactDomRoutes>
  )
}

export default Routes
