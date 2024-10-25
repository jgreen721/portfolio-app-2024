import React from 'react'
import "./HeroCard.css"

const HeroCard = () => {
  return (
    <div className="hero-card">
        <div className="hero-card-top-section">
            <div className="hero-h1-div h1-div-one">
                <h1 style={{"--i":"1.5s"}} className="hero-h1 hero-h1-one">J</h1>
            </div>
            <div className="hero-h1-div h1-div-two">
                <h1 style={{"--i":"2s"}} className="hero-h1 hero-h1-two">G</h1>
            </div>
            <div className="hero-h3-div">
                <h3 className="hero-h3">dev</h3>
            </div>
        </div>
        <div className="hero-card-caption-div">
            <div className="caption-row">
                <h5 className="caption-h5">Clean</h5>
                <h5 className="caption-h5">Scalable</h5>
                <h5 className="caption-h5">Solutions</h5>
            </div>
        </div> 
    </div>

  )
}

export default HeroCard