import React from 'react'
import "./Section2.scss"
import SharjeelProfile from '../../Images/profile_logo_.jpg'
import FidaKhan from '../../Images/fidakhan.jfif'
import Hassan from '../../Images/pp.jfif'
import shaikhsohel from '../../Images/shaikhsohel.jpg'
import Taabish from '../../Images/pp (1).jfif'
import DefaultProfile from '../../Images/user (2).png'
import Process from './Process'


function Section2() {
    return (
        <div className="section2">
        <Process />

            <h1>Meet Our Developers</h1>


            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={SharjeelProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Shaikh Sharjeel</h2>
                    <p className="card-role">MERN stack developer</p>
                    <p className="card-info">
                    Hello folks . I'm sharjeel . I'm a MERN stack developer  expert in MongoDB, Express, React and Node. Proficient in JavaScript and use HTML, CSS and JavaScript to handle front-end operations and JavaScript with NodeJS to handle back-end operations. I develop Android and IOS apps in React Native too!
                    </p>
                </div>
            </div>


            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={FidaKhan} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Fida Ur Rehman Khan</h2>
                    <p className="card-role">NodeJS developer</p>
                    <p className="card-info">
                    Hi guys, This is Fida Ur Rehman, I am a NodeJS developer with good hands-on Node, Express and MongoDB. I usually talk with client side via robust and highly secured API. I'm well versed in aggregation pipeline of mongoDB where you just need to request for a desired data format and you'll get it!
                    </p>
                </div>
            </div>

            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={Hassan} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">M. Hassan Khan</h2>
                    <p className="card-role">Cloud Architect</p>
                    <p className="card-info">
                    Hello folks . I am M. Hassan khan a cloud architect an IT professional who is responsible for overseeing a company's cloud computing strategies for clients. This includes cloud adoption plans, cloud application design, cloud web/App deployment, cloud management and monitoring.
                    </p>
                </div>
            </div>

            


            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={shaikhsohel} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Shaikh Sohel</h2>
                    <p className="card-role">Backend developer and data scientist</p>
                    <p className="card-info">
                    Hello folks i am Shaikh sohel a developer and data analyst proficient in pythoy data science and django
                    </p>
                </div>
            </div>

            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Razzak</h2>
                    <p className="card-role">Full stack and Wordpress developer</p>
                    <p className="card-info">
                    Hello folks i am abdur razzak a developer proficient in React, Redux, HTML, CSS, Django, Python and Wordpress
                    </p>
                </div>
            </div>

            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Raheem</h2>
                    <p className="card-role">Front-End developer</p>
                    <p className="card-info">
                    Hello folks i am abdur raheem proficient in html CSS react and Shopify to handle front-end operations
                    </p>
                </div>
            </div>




            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={Taabish} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Taabish Khan</h2>
                    <p className="card-role">UI / UX Designer</p>
                    <p className="card-info">
                    Hello folks . Iam Tabish khan a professional logo designer ui/ux designer
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Section2
