import React from 'react'
import "./SampleItem.css"

const SampleItem = ({sample}) => {
  return (
    <div style={{'--rotate':`${sample.offset}deg`,'--offset':`${sample.offset}`}} className="sample-item">
      <div className="sample-item-img-container">
        <img className="sample-item-img" src={sample.img} alt="" />
      </div>
    </div>
  )
}

export default SampleItem