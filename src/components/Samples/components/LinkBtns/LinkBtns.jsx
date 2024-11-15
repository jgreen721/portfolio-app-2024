import React, {useRef, useState, useEffect} from 'react'
import gsap from "gsap"
import "./LinkBtns.css"

const LinkBtns = ({focused}) => {
    const linkBtnRef = useRef();
    const codeBtnRef = useRef();
    const [slide,setSlide] = useState(false);


    useEffect(()=>{
        if(slide){
        gsap.from(linkBtnRef.current,{translateX:-1000})
        gsap.to(linkBtnRef.current,{translateX:0,duration:.75,ease:"power1.in"})
        // gsap.to(linkBtnRef.current,{x:0,duration:1.5,ease:"power1.in"})
        gsap.from(codeBtnRef.current,{x:1000})
        gsap.to(codeBtnRef.current,{x:0,duration:1,ease:"power1.in"})
        setSlide(false)
        }
        else{
            gsap.from(linkBtnRef.current,{filter:"blur(50px)",scaleX:3})
            gsap.to(linkBtnRef.current,{filter:"blur(0px)",scaleX:1,duration:.75,ease:"power1.in"})
            // gsap.to(linkBtnRef.current,{x:0,duration:1.5,ease:"power1.in"})
            gsap.from(codeBtnRef.current,{filter:"blur(50px)",scaleY:5})
            gsap.to(codeBtnRef.current,{filter:"blur(0px)",scaleY:1,duration:1,ease:"power1.in"})
            setSlide(true);
        }
  },[focused])
  return (
    <div className="links-card">
    <a ref={linkBtnRef} className="focused-link" href={focused.link} target="_blank">Visit Site</a>
    <a ref={codeBtnRef} className="focused-link" href={focused.code} target="_blank">View Code </a>

 
</div>
  )
}

export default LinkBtns