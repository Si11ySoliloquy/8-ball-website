import { useState } from 'react'
import './App.css'
import { motion, AnimatePresence, useAnimate, useDragControls } from "framer-motion"
//this needs to be outside of function i'm not renaming fuck you, it's the transitions thx framer
//suck my dick it's a small project i don't care for multiple files
const fadeinAnimation = {
      initial:{ opacity: 0 },
      animate:{ opacity: 1},
      exit:{opacity: 0, scale: 0.2, transition:{duration: 0.75 }},
      transition:{delay: 2, ease:"linear", duration: 2}
      
} 


//main function for returning the app 
function App() {
  const [scope, animate] = useAnimate()
  const [count, setCount] = useState(false)
  const [isShown, setIsShown] = useState(true)

 const handleDrag = () => {
  setCount(false);
 }
  const handleOnDragEnd = () => {
    animate(scope.current, { scale: [1, 1, 1.1, 1.1, 1], 
                            borderRadius: ["50%", "50%", "75%", "100%", "50%"],
                          x:[0, 0, 10, 10, 0, -10, -10, 3, 0],
                          y:[0, 0, 10, -10, 0, 10, 0], 
                        })
    
    console.log("drag ended");
    setCount(true)
    } 
  const handleClick = () => {
    
      setIsShown(false);


  }
  return (
    <>
{/* the first animate presence for the title*/}
    <AnimatePresence key="titlePresence">
      {isShown && (
        <motion.h1 {...fadeinAnimation}>Magic 8 Ball</motion.h1>
      )}
      </AnimatePresence>
      {/* the second animate presence for the button*/}
      <AnimatePresence key="buttonPresence">
      {/* isShown returns true or false, && determines if it shows on true and hides on false
      onClick is an event handler for when you click and it calls the handleClick function*/}
      {isShown && (
        <motion.div className="card" {...fadeinAnimation}>
          <motion.button
            onClick={handleClick}>
            Start 
          </motion.button>
        </motion.div>
      )} </AnimatePresence>

    {!isShown && (
      <>
    <motion.div {...fadeinAnimation}
    drag
    dragConstraints={{left:-50,top:0,right:50,bottom:200}}
    dragElastic={1}
    onDragEnd={handleOnDragEnd}
    onDrag={handleDrag}
    >
    <AnimatePresence key="triangle">
      <motion.figure key="eightBallFigure" ref={scope} className="eightBall" ></motion.figure>
      <motion.figure key="innie" className="eightBall-innerCircle" {... fadeinAnimation}></motion.figure>
      {count && (
        <motion.figure key="blueTriangleFigure"  className="blueTriangle"
        {... fadeinAnimation}>
        </motion.figure>
      )}
      </AnimatePresence>
      </motion.div>
    
        <motion.div>
        <p1> rahhhh </p1>     
        </motion.div>
        </>
    )}
    </>
  )
}

export default App
