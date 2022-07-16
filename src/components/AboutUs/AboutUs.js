import React from 'react'
import Header from '../Header/Header'
import "./AboutUs.scss"
import {Helmet} from "react-helmet";
function AboutUs() {
  return (
    <div>
          <Helmet>
        <title>AboutUs</title>
        <meta name="description" content="We at Techgeeksfirm aim to provide the best technical solution for your Problem or an Idea that needs to be molded into a web application or a mobile application. We belive in quality work instead of quantity and always keep our clients on first priority, client-developer engagement is the thing that matters to us the most. Come start a project with us and be a part of our family and help us grow big and prosper" />
        </Helmet>
        <Header id="2" />
        <div className='aboutus'>
        <h1>About Us</h1>
        <p>We are MERN stack, React Native, Desktop Application, WordPress, Django, Data Science, Blockchain Developers and UI/UX designers who have recently started freelancing with good hands-on MongoDB, expressjs, reactjs, nodejs, and Adobe XD for UI design's, which are the latest technologies of today's generation for web development. we are web,mobile, desktop app developers and also have hands-on Artificial Intelligence</p>
        <p>We at Techgeeksfirm aim to provide the best technical solution for your Problem or an Idea that needs to be molded into a web application or a mobile application. We belive in quality work instead of quantity and always keep our clients on first priority, client-developer engagement is the thing that matters to us the most. Come start a project with us and be a part of our family and help us grow big and prosper</p>
        </div>
    </div>
  )
}

export default AboutUs