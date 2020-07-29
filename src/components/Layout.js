import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} activeStyle={{ color: `red`}}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: 650, padding: `0 1rem` }}>
        <header style={{ marginBottom: `8.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none`, color: `black`, textDecoration: `none` }}>
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