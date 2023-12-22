import React from 'react'
import Home from './pages/home'
import {users} from "./data/index"
import Header from './layouts/header'
import Footer from './layouts/footer'

const App = () => {
  return (
  <>
    <Header/>

<Home users={users}/>

<Footer/></>

  )
}

export default App