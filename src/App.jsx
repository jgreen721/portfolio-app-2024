import { useState } from 'react'
import {Hero,Navbar,Samples} from "./components"
import './App.css'

function App() {

  return (
    <div className="app">
      <Hero/>
      <Samples/>
    </div>
  )
}

export default App
