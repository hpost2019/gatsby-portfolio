import React, { useState, useEffect } from "react"
import { CSSTransition } from "react-transition-group"
import LoadingScreen from "../components/LoadingScreen"
import HomePage from "../components/HomePage"
import Layout from "../components/Layout"

export default function Home() {
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
            <Layout>
              <HomePage />
            </Layout>
          
            </div>
       
     </div>)
}
