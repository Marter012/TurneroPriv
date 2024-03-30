import React from 'react'
import Layout from './components/Layout/Layout'
import Routes from './routes/Routes'
import Header from './components/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'

const App = () => {
  return (
    <Layout>
      <Header/>
      <BurgerMenu/>
      <Routes/>
    </Layout>
  )
}

export default App
