import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import LoadingScreen from "../components/LoadingScreen"
import LayoutTwo from "../components/LayoutTwo"
import Projects from "../components/Projects"

export default function MyWork() {
  const [bDiv, setBDiv] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setBDiv(false)
      
    }, 2000)
  }, [])
  
  return(
     <div>
       
          <CSSTransition in={bDiv} timeout={1000} classNames="my-node" unmountOnExit>
            <LoadingScreen />
          </CSSTransition>
          <div className="content">
            <LayoutTwo>
              <Projects />
            </LayoutTwo>
          
            </div>
       
     </div>)
}