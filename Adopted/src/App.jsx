import { useState } from 'react'
import './App.css'
import Footer from './layouts/footer'
import Header from './layouts/header'
import Topheader from './layouts/topheader'
import Carusel from './pages/carusel'

function App() {
  return (
    <>
<Topheader/>
<Header/>
<Carusel/>
<Footer/>

    </>
  )
}

export default App
