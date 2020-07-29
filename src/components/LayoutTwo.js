import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <AniLink
      cover
      to={props.to}
      direction="left"
      duration={3}
      bg="url(../background.jpg)" 
      activeStyle={{ color: `red`}}>{props.children}</AniLink>
  </li>
)

export default function LayoutTwo({ children }) {
  return (
    <div style={{ maxWidth: `100%`, padding: `0 1rem` }}>
        <header style={{ marginBottom: `8.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>Howard Post</h3>
        </Link>
        <div style={{ position: 'absolute', top: '0px', right: '150px'}}>
            <ul style={{ listStyle: `none`, float: `right`  }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/mywork/">My Work</ListLink>
                <ListLink to="/resume/">Resume</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </div>  
      </header>
      <div style={{width: '100%', marginLeft: '15rem'}}>
        {children}
      </div>
    </div>
  )
}