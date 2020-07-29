import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import LoadingScreen from "../components/LoadingScreen"
import Resume from "../components/Resume"
import LayoutTwo from "../components/LayoutTwo"

export default function ResumeShort() {
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
              <Resume />
            </LayoutTwo>
          
            </div>
       
     </div>)
}