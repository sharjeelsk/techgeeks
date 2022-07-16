import React from 'react'
import Header from '../Header/Header'
import "./Services.scss"
import {Helmet} from "react-helmet";
function Services() {
  return (
    <div>
        <Helmet>
        <title>Services</title>
        <meta name="description" content="We develop web, mobile and destop applications with best and robust frameworks which are out there" />
        </Helmet>
        <Header id="3" />
        <div className='Services'>
        <h3>Web Development</h3>

        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/logo192.png" alt="react" />
            </div>
            <div className="col-9">
                <h4>ReactJS</h4>
                <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
            </div>
        </section>

        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/nodejs-logo.png" alt="react" />
            </div>
            <div className="col-9">
                <h4>NodeJS</h4>
                <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.</p>
            </div>
        </section>

        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/expresslogo.jpeg" alt="react" />
            </div>
            <div className="col-9">
                <h4>ExpressJS</h4>
                <p>Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</p>
            </div>
        </section>

        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/mongodb.png" alt="react" />
            </div>
            <div className="col-9">
                <h4>MongoDB</h4>
                <p>MongoDB is an open source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions.</p>
            </div>
        </section>

        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/python-django.png" alt="react" />
            </div>
            <div className="col-9">
                <h4>Django</h4>
                <p>Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit.</p>
            </div>
        </section>

        <h3 className="head">Mobile App Development</h3>
        <section className="service-section row m-auto align-items-center">
            <div className="col-2">
                <img src="/reactnative.png" alt="react" />
            </div>
            <div className="col-9">
                <h4>React Native</h4>
                <p>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android, Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.</p>
            </div>
        </section>

        </div>
    </div>
  )
}

export default Services