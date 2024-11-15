import React, {useEffect,useRef} from 'react'
import gsap from "gsap"
import "./SampleDescription.css"

const SampleDescription = ({focused}) => {
    const titleRef = useRef();
    const descriptionRef = useRef();

useEffect(()=>{
    gsap.from(titleRef.current,{scaleY:0,y:20})
    gsap.to(titleRef.current,{scaleY:1,y:0,duration:2,ease:"elastic.out"})
    gsap.from(descriptionRef.current,{scaleX:0})
    gsap.to(descriptionRef.current,{scaleX:1,duration:2.5,ease:"elastic.out"})
},[focused]);
  return (
            <div className="samples-info-card">
              <h3 ref={titleRef} className="sample-title-h3">{focused.title}</h3>
              <h5 ref={descriptionRef} className="sample-description-h5">{focused.description}</h5>
            </div>
  )
}

export default SampleDescription