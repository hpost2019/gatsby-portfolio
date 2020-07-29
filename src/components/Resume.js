import React from "react"
import res from "../assets/docs/resume.pdf"

export default function Resume(){
    return (
        <div>
            <h1>Resume Excerpt</h1>
            <a href={res} target="_blank">View entire resume</a>
            <h3>Current Job</h3>
            <h4>Student Tutor</h4>
            <p>Kenzie Academy - started February 2020
            <ul>
                <li>Provided academic assistance to students with subject-specific 
                    problems and questions to improve student academic achievement.
                </li>
                <li>Demonstrated reliability by attending scheduled sessions and 
                    communicating in advance of cancellations.
                </li>
                <li>Responded to after hours email and telephone requests to provide 
                    students assistance with specific questions.
                </li>
            </ul></p>
            <h3>Education</h3>
            <h4>Full Stack Software Engineer Certificate</h4>
            <p>Kenzie Academy/Butler University - Indianapolis, IN - 10/2019 - 10/2020</p>
            <h4>Associate of Applied Science : Computer Science</h4>
            <p>Stevens-Henager College-Ogden - Ogden, UT - 01/1995 - 10/1996</p>
            <h3>Certifications</h3>
            <ul>
                <li>ASTQB Foundation Level Exam</li>
                <li>ASTQB Agile Exam</li>
                <li>ASTQB Certified Mobile Tester</li>
                <li>CompTIA Network+</li>
                <li>CompTIA Security+</li>
                <li>CompTIA A+</li>
                <li>CompTIA Project+</li>
                <li>CompTIA Secure Infrastructure Specialist – CSIS</li>
                <li>CompTIA IT Operations Specialist – CIOS</li>
            </ul>
        </div>
    )
}