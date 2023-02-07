import React from 'react'
import "./Section2.scss"
import SharjeelProfile from '../../Images/sharjeel.jpg'
import sohail from '../../Images/sohail.jpg'
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
                    <img src={sohail} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Sohel Ahmed</h2>
                    <p className="card-role">HR Manager</p>
                    <p className="card-info">
                    Hello, my name is Sohel and I am the HR Manager. I am responsible for overseeing all aspects of human resources, from recruiting and hiring to employee relations and benefits administration. I am dedicated to creating a positive and productive work environment for our employees, and I am committed to helping them reach their full potential. I am excited to be part of this team and I look forward to contributing to our company's success
                    </p>
                </div>
            </div>

            


            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={shaikhsohel} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Shaikh Sohel</h2>
                    <p className="card-role">Backend developer and data scientist</p>
                    <p className="card-info">
                    Hello, my name is Sohel and I am a cloud engineer and Django developer. I specialize in designing, building, and maintaining cloud-based solutions that meet the needs of businesses and organizations. My expertise in Django, a high-level Python web framework, allows me to create dynamic and scalable web applications with ease
                    </p>
                </div>
            </div>

            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Razzak</h2>
                    <p className="card-role">Full stack and Wordpress developer</p>
                    <p className="card-info">
                    Hello, my name is Razzak and I am a full-stack developer. I have expertise in front-end and back-end development, as well as database design and management. I have a strong understanding of various web technologies and programming languages, such as HTML, CSS, JavaScript, and Python
                    </p>
                </div>
            </div>

            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Raheem</h2>
                    <p className="card-role">Front-End developer</p>
                    <p className="card-info">
                    Hello, my name is Abdur Raheem and I am a full-stack developer. I have a deep understanding of both front-end and back-end development, as well as database design and management
                    </p>
                </div>
            </div>




            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={Taabish} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Taabish Khan</h2>
                    <p className="card-role">UI / UX Designer</p>
                    <p className="card-info">
                    Hello, my name is Tabish Khan and I am a UI/UX designer. I have a passion for creating digital experiences that are both visually appealing and intuitive to use. I have a strong understanding of user-centered design principles and a keen eye for detail. I am skilled in using design tools such as Sketch, Adobe XD, and Figma to create wireframes, prototypes, and high-fidelity designs
                    </p>
                </div>
            </div>



        </div>
    )
}

export default Section2
