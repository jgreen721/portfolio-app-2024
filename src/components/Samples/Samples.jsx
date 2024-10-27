import React, {useState,useEffect,useRef} from 'react'
import Particles from "../Particles/Particles"
import {SampleItem} from "./components"
import { sampleData,keyboardBtns } from '../../const'
import {FaPlay, FaPause , FaFastForward, FaFastBackward} from "react-icons/fa"
import gsap from "gsap"
import "./Samples.css"

const Samples = () => {
  const [counter,setCounter] = useState(0)
  const [samples,setSamples] = useState(sampleData)
  const [focused,setFocused] = useState(sampleData[counter]);
  const [runCarousel,setRunCarousel] = useState(true);
  const contextRef = useRef(null);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const screenRef = useRef();
  let carouselInterval;




  useEffect(()=>{
    if(runCarousel){
      carouselInterval = setInterval(()=>{
        console.log('render')

        setSamples(samples =>samples.map(sample=>sample.offset == samples.length-1 ? {...sample,offset:0} : {...sample,offset:sample.offset +1}));
        setCounter((counter)=>counter = counter  == 0 ? samples.length-1  : counter - 1);


      },5000);
    }
    else{
      clearInterval(carouselInterval);
    }
      return ()=>
        clearInterval(carouselInterval)
      
  },[runCarousel]);


  useEffect(()=>{
      console.log("Counter",counter);
      setFocused(samples[counter]);
      gsap.from(titleRef.current,{scaleY:0,y:20})
      gsap.to(titleRef.current,{scaleY:1,y:0,duration:2,ease:"elastic.out"})
      gsap.from(descriptionRef.current,{scaleX:0})
      gsap.to(descriptionRef.current,{scaleX:1,duration:2.5,ease:"elastic.out"})
      gsap.from(screenRef.current,{scaleX:0})
      gsap.to(screenRef.current,{scaleX:1,duration:3,ease:"elastic.out"})

    
  
  },[counter])

  const handleCarousel=(dir)=>{
  
    let tempCounter = counter;
      if(dir == "prev"){
    
        setSamples(samples =>samples.map(sample=>sample.offset == 0 ? {...sample,offset:samples.length-1} : {...sample,offset:sample.offset -1}));
        tempCounter = tempCounter == samples.length-1 ? 0 : counter+1
      }
       else{
        setSamples(samples =>samples.map(sample=>sample.offset == samples.length-1 ? {...sample,offset:0} : {...sample,offset:sample.offset +1}));
         tempCounter = tempCounter ==  0 ? samples.length-1 : counter-1

       }
      setCounter(tempCounter)
      setFocused(samples[tempCounter]);
 

  }
  return (
    <div className="samples-container view-container">
      <Particles/>
        <div className="samples-info-laptop-card">
          <div className="samples-info-card">
          <h3 ref={titleRef} className="sample-title-h3">{focused.title}</h3>
          <h5 ref={descriptionRef} className="sample-description-h5">{focused.description}</h5>
          </div>
          <div className="laptop">
          <div className="monitor">
            <div ref={screenRef} className="monitor-screen">
              <iframe className="iframe-screen" src={focused.link} frameBorder="0"></iframe>
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
        </div>
    

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
              {runCarousel ?
                <FaPause/>
                :
                <FaPlay/>
}
              </button>
           
            </div>
        </div>
    </div>
  )
}

export default Samples