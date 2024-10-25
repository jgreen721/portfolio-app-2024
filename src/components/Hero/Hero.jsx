import React from 'react'
import Particles from "../Particles/Particles"
import {HeroCard,Spotlight} from "./components"
import "./Hero.css"

const Hero = () => {
  return (
<header className="hero">
  <Particles/>
  <div className="header-content">
    <Spotlight/> 
    <HeroCard/>
    <div className="bottom-plate-parent">
      <div className="bottom-plate"></div>
    </div>
  </div>
</header>
  )
}

export default Hero