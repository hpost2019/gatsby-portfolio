import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { CSSTransition } from "react-transition-group"
import LoadingScreen from "../components/LoadingScreen"

export default function Contact() {
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
      <div className='content'>
        <Layout>
          <h1>How to contact me</h1>
          <h3>Email: hpost2012@gmail.com</h3>
          <h3>Phone: (747)312-8045</h3>
        </Layout>
      </div>
    </div>
  )
}