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
import { Route,Routes } from 'react-router-dom'

import ServicesDetails from './servicesdetailes'
import NotFound from './pages/not-faund'


const App = () => {
  return (
   <>
    <Topheader/>
    <Header/>



<Routes>

  <Route path='/' element={ <Home/>}> 
  </Route >
  <Route path='/services' element={     <Services/>}> 
  </Route >
  <Route path='/servicestwo' element={  <Servicestwo/>}> 
  </Route >
  <Route path='/contact' element={   <Study/>}> 
  </Route >
  <Route path='/contact' element={     <Search/>}> 
  </Route >
  <Route path='/contact' element={<Blog/>}> 
  </Route >
  <Route path='/products' element={   <Carusel/>}> 
  </Route >
  <Route path='/team' element={     <Team/>}> 
  </Route >
  <Route path='/services/:id' element={  <ServicesDetails/>}> 
  </Route >
  <Route path='*' element={  <NotFound/>}> 
  </Route >
</Routes>

<br />

    <Footer/>
   
    
    </>
   
  )
}

export default App