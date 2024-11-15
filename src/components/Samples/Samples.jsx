import React, {useState,useEffect, useRef} from 'react'
import Particles from "../Particles/Particles"
import {Laptop, SampleDescription, Carousel,LinkBtns} from "./components"
import gsap from "gsap"
import { sampleData } from '../../const'
import "./Samples.css"

const Samples = () => {
  const [counter,setCounter] = useState(0)
  const [samples,setSamples] = useState(sampleData)
  const [focused,setFocused] = useState(sampleData[counter]);
  const [runCarousel,setRunCarousel] = useState(true);
  // const screenRef = useRef();
  const linkBtnRef = useRef();
  const codeBtnRef = useRef();
  let carouselInterval;




  useEffect(()=>{
    if(runCarousel){
      carouselInterval = setInterval(()=>{
        // console.log('render')
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
      setFocused(samples[counter]);

  
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
 

  }
  return (
    <div className="samples-container view-container">
      <Particles/>
        <div className="samples-main-row">
          <div className="left-laptop-info-column">
            <SampleDescription focused = {focused}/>
            <Laptop link={focused.link}/>
          </div>
          <div className="right-laptop-info-column">
          <LinkBtns focused={focused}/>
          </div>
        </div>
      <Carousel samples={samples} handleCarousel={handleCarousel} runCarousel={runCarousel} setRunCarousel={setRunCarousel}/>

    </div>
  )
}

export default Samples