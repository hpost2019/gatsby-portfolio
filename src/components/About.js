import React from 'react'
import pic from "../assets/images/portrait.png"

export default function About() {
    return (
        <div>
            <h1>A little about me</h1>
            <p>
            I am a certified nerd with over 20 years of experience in the computer industry. 
            I have done everything from desktop and web application programming to network 
            design, setup and maintenance. I enjoy passing on my knowledge and expertise to 
            others. I have been able to do this throughout my career by leading training 
            classes in subjects of computer programming, software testing, computer repair, 
            networking and security. I have also managed teams of computer technicians, 
            website programmers, and application programmers.
            </p>
            <p>
            I thrive in learning new technology and solving problems whether it be 
            troubleshooting software or troubleshooting network and hardware issues. 
            In my career if someone couldn’t fix an issue, I was the one everyone came 
            to for help.
            </p>
            <p>
            I am hoping to join an innovative and dynamic company and further develop my 
            skills in software development.
            </p>
            {/* <div style={{ backgroundColor: `black`, position: `absolute`, top: '30vh', right: `50vh`, width:'250px',
                height:`250px`, border: `1px solid black`, borderRadius:`100%`}}>
                    <img src={pic} style={{borderRadius:`100%`, width: `250px`, height: `250px`}}/>
            </div> */}
        </div>
    )
}