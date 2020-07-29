import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const ListLink = props => (
  <li className='listItem' style={{ display: `inline-block`, 
    textAlign: 'center', lineHeight: '100px', marginRight: `1rem`, 
    width: '100px', height: '100px', border: '1px solid grey', 
    borderRadius: '100%' }}>
    <AniLink className="listItem"
      cover
      to={props.to}
      direction="left"
      duration={3}
      bg="url(../background.jpg)" 
      >{props.children}</AniLink>
  </li>
)

export default function HomePage() {
    return (
        <div>
            <h1>Hi! I'm a Full Stack Web Developer.</h1>
            <p style={{ paddingBottom: `20px`}}>
                I am currently looking for full time work or contract work.
                Check out my site to learn more about me.
            </p>
            <div style={{ position: 'absolute',  left: '350px'}}>
            <ul style={{ listStyle: `none`, float: `right`}}>
                <ListLink to="/">1</ListLink>
                <ListLink to="/about/">2</ListLink>
                <ListLink to="/mywork/">3</ListLink>
                <ListLink to="/resume/">4</ListLink>
                <ListLink to="/contact/">5</ListLink>
            </ul>
        </div> 
        </div>
    )
}