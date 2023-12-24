import React from 'react'
import Topheader from './layout/top-header'
import Header from './layout/header'

import Home from './pages/home'
import Services from './pages/services'
import Servicestwo from './pages/services-two'
import Study from './pages/study'

import Search from './pages/search'
import Blog from './pages/blog'
import Carusel from './pages/carusel'
import Team from './pages/Team'

import Footer from './layout/footer'


const App = () => {
  return (
   <>
    <Topheader/>
    <Header/>
    <Home/>
    <Services/>
    <Servicestwo/>
 
    <Study/>

    <Search/>
    <Blog/>
  
    <Carusel/>
    <Team/>

<br />

    <Footer/>
   
    
    </>
   
  )
}

export default App