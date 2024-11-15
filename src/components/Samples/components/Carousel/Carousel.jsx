import React from 'react'
import  {SampleItem}  from './components'
import {FaPlay, FaPause , FaFastForward, FaFastBackward} from "react-icons/fa"
import "./Carousel.css"


const Carousel = ({handleCarousel,setRunCarousel,runCarousel,samples}) => {
  return (
    <div className="samples-carousel-container">
    <div className="samples-carousel">
        {samples.map(sample=>(
            <SampleItem key={sample.id} sample={sample}/>
        ))}
    </div>
    <div className="carousel-btns-row">
      <button className="carousel-btn" onClick={()=>handleCarousel('play')}>
        <FaFastBackward/>
      </button>
      <button className="carousel-btn" onClick={()=>handleCarousel('next')}>
        <FaFastForward/>
      </button>
      <button className="carousel-btn" onClick={()=>setRunCarousel(runCarousel=>runCarousel = !runCarousel)}>
        {runCarousel ? <FaPause/> : <FaPlay/> }
      </button>
  </div>
</div>
  )
}

export default Carousel