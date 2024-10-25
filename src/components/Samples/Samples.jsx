import React, {useState,useEffect} from 'react'
import Particles from "../Particles/Particles"
import {SampleItem} from "./components"
import { sampleData } from '../../const'
import {FaPlay, FaPause , FaFastForward, FaFastBackward} from "react-icons/fa"
import "./Samples.css"

const Samples = () => {
  const [counter,setCounter] = useState(0)
  const [samples,setSamples] = useState(sampleData)
  const [focused,setFocused] = useState(sampleData[counter]);
  const [runCarousel,setRunCarousel] = useState(true)
  let carouselInterval;
  const keyboardBtns = [
    // {id:1,key:"tab",size:"medium"},
    {id:2,key:"q",size:"small"},
    {id:3,key:"w",size:"small"},
    {id:4,key:"e",size:"small"},
    {id:5,key:"r",size:"small"},
    {id:6,key:"t",size:"small"},
    {id:7,key:"q",size:"small"},
    {id:8,key:"y",size:"small"},
    {id:9,key:"u",size:"small"},
    {id:10,key:"i",size:"small"},
    {id:11,key:"o",size:"small"},
    {id:12,key:"p",size:"small"},
    {id:13,key:"{",size:"small"},
    {id:14,key:"}",size:"small"},
    // {id:15,key:"caps lock",size:"medium"},
    {id:16,key:"a",size:"small"},
    {id:17,key:"s",size:"small"},
    {id:18,key:"d",size:"small"},
    {id:19,key:"f",size:"small"},
    {id:20,key:"g",size:"small"},
    {id:21,key:"h",size:"small"},
    {id:22,key:"j",size:"small"},
    {id:23,key:"k",size:"small"},
    {id:24,key:"l",size:"small"},
    {id:25,key:"return",size:"medium"},
    {id:26,key:"shift",size:"medium"},
    {id:27,key:"z",size:"small"},
    {id:28,key:"x",size:"small"},
    {id:29,key:"c",size:"small"},
    {id:30,key:"v",size:"small"},
    {id:31,key:"b",size:"small"},
    {id:32,key:"n",size:"small"},
    {id:33,key:"m",size:"small"},
    {id:34,key:"shift",size:"medium"},
    {id:35,key:"space",size:"large"},
  
  ]


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
        <div className="samples-info-card">
          <h3 className="sample-title-h3">{focused.title}</h3>
          <h5 className="sample-description-h5">{focused.description}</h5>
          <div className="laptop">
          <div className="monitor">
            <div className="monitor-screen">
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