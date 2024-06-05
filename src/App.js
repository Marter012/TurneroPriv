import React from 'react'
import Layout from './components/Layout/Layout'
import Routes from './routes/Routes'
import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import { FondImg } from './components/Styles/GlobalStyles'

const App = () => {
  return (
    <Layout>
      <Header/>
      <BurgerMenu/>
      <FondImg src="https://res.cloudinary.com/dsgcmsjv4/image/upload/v1710274557/Turnero/xhmpttoa7n8qgppc6pzn.jpg"/>
      <Routes/>
    </Layout>
  )
}

export default App
