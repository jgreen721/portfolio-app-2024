import React, {useRef, useEffect} from 'react'
import { keyboardBtns } from '../../../../const'
import gsap from 'gsap'
import "./Laptop.css"

const Laptop = ({link}) => {
    const screenRef = useRef();


    useEffect(()=>{
        gsap.from(screenRef.current,{filter:"blur(50px)"})
        gsap.to(screenRef.current,{filter:"blur(0px)",duration:1.,ease:"power1.in"})
    },[link])

  return (
    <div className="laptop">
    <div className="monitor">
      <div ref={screenRef} className="monitor-screen">
        <iframe className="iframe-screen" src={link} frameBorder="0"></iframe>
      </div>
    </div>
    <div className="keyboard">
      <div className="keyboard-buttons">
        <div className="keyboard-btn-row keyboard-btns">
          {keyboardBtns.map(btn=>(
          <div key={btn.id} className={`keyboard-btn ${btn.size}`}>
              {btn.key}
          </div>
        ))}
      </div>
      </div>
      </div>
      </div>
 
  )
}

export default Laptop