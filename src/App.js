import React from 'react'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header'
import Routes from './routes/Routes'

const App = () => {
  return (
    <Layout>
      <Header/>
      <Routes/>
    </Layout>
  )
}

export default App
