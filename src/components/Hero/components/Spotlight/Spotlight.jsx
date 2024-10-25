import React from 'react'
import "./Spotlight.css"

const Spotlight = () => {
  return (
    <div className="spotlight-parent">
    <div className="spotlight-div">
      <div className="eclipse"></div>
      <div className="spotlight"></div>
    </div>
    <div className="beams">
      <div className="beam left-beam"></div>
      <div className="beam center-beam"></div>
      <div className="beam right-beam"></div>
    </div>
    </div>
  )
}

export default Spotlight