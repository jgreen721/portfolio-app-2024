import { useState } from 'react'
import {Hero,Navbar,Samples,Footer} from "./components"
import './App.css'

function App() {

  return (
    <div className="app">
      <Hero/>
      <Samples/>
      <Footer/>
    </div>
  )
}

export default App
