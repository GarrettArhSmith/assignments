import React from 'react';

function About(props) {
    return (
        <section id="about">
            <img src="https://ca.slack-edge.com/T0E1PQ12P-U014VC27HDL-00b8fadef54d-512" alt="Garrett Smith"/>
            <span>
                <h1 className="title">WHO AM I?</h1>
                <p style={{textIndent:40}}>I'm an aspiring Full-Stack Web Developer, and passionate about developing applications that 
                better the lives of others. I'm currently enrolled in V-School, a FullStack Web Development 
                bootcamp, and I'm constantly learning new skills and improving current ones to make that possible. 
                I also love teaching others about my craft. We are all teachers. We are all students.</p>
                <h1 className="title">SKILLS</h1>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JAVASCRIPT</li>
                    <li>REACT</li>
                    <li>PHOTOSHOP</li>
                </ul>
            </span>
        </section>
    );
}

export default About;