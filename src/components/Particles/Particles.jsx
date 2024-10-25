import React, {useRef,useEffect, useState} from 'react'

const Particles = () => {
  const canvasRef = useRef();
  const [repaint,setRepaint] = useState(false)

  useEffect(()=>{
    if(canvasRef.current){
      canvasRef.current.width = innerWidth;
      canvasRef.current.height = innerHeight;
      let ctx = canvasRef.current.getContext("2d")
     
      let particles = [];

      class Particle{
        constructor(x,y,r,vel,color){
          this.x = x;
          this.y = y;
          this.baseX = x;
          this.baseY = y;
          this.r = 0;
          this.size = r;
          this.color = color;
          this.toDelete = false;
          this.vel = vel;
          this.delete = false;
        }

        draw(){

          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.arc(this.x,this.y,this.r,0,Math.PI * 2,false);
          ctx.fill()
          ctx.closePath();
        }

        update(){
          if(!this.toDelete && this.r < this.size){
            this.r += .15;
            
          }
          this.x += this.vel.x;
          this.y += this.vel.y;

          if(Math.abs(this.y - this.baseY) > 150){
            this.toDelete = true;
          }
          if(this.toDelete){
            this.r-=.25;
          }
          if(this.r < .25 && this.toDelete){
            this.delete = true;
          }
        }
      }

      function generateParticles(count){
        for(let i=0;i<count;i++){
          let posX = Math.random() * innerWidth;
          let posY = Math.random() * innerHeight;
          let opacity = Math.random();
          opacity = opacity > .25 ? opacity : .25;
          let particleSize = Math.random() * 2 | 0 + 1;
          let velY = Math.random()  * -1.5;
          velY = Math.abs(velY) > .5 ? velY : -.5;
          let velX = Math.random() > .5 ? Math.random() > .5 ? Math.random() : Math.random() * -.5 : 0;
          velX = 0;
          particles.push(new Particle(posX,posY,particleSize,{x:velX,y:velY},`rgba(255,255,255,${opacity})`))
        }
      
      }

      generateParticles(65);
      // console.log(particles);

      function animation(){
        ctx.fillStyle = "rgb(15,20,15)"
        ctx.fillRect(0,0,canvasRef.current.width,canvasRef.current.height)
       
        particles.forEach((particle,idx)=>{
          particle.draw();
          particle.update();
          if(particle.delete){
            particles.splice(idx,1)
            generateParticles(1);
          }
        })

        requestAnimationFrame(animation)
      }

      animation();
    }

  },[repaint]);

let bounceInt
  onresize=()=>{
    if(bounceInt) clearTimeout(bounceInt);
    bounceInt = setTimeout(()=>{
      setRepaint((repaint)=>repaint=!repaint)
    },500);
  }
  return (
    // <div className="particles-canvas-container">
      <canvas style={{position:"absolute",height:"100%"}} ref={canvasRef}></canvas>
    // </div>
  )
}

export default Particles