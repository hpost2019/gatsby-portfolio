import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import { CSSTransition } from "react-transition-group"
import LoadingScreen from "../components/LoadingScreen"

export default function AboutMe() {
  const [bDiv, setBDiv] = useState(true)
  

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setBDiv(false)
      
    }, 2000)
    
  }, [])

  return (
    <div>
      <CSSTransition in={bDiv} timeout={1000} classNames="my-node" unmountOnExit>
            <LoadingScreen />
      </CSSTransition>
      <div className="content">
        <Layout>
          <About />
        </Layout>
      </div>
    </div>
  )
}