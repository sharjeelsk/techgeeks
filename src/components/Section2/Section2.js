import React from 'react'
import "./Section2.scss"
import SharjeelProfile from '../../Images/profile_logo_.jpg'
import FidaKhan from '../../Images/fidakhan.jfif'
import Hassan from '../../Images/pp.jfif'
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
                    Hello folks . I am sharjeel . I am a  MERN stack developer  expert in MongoDB, Express, React and Node. I am  proficient in JavaScript and use HTML, CSS and JavaScript to handle front-end operations and JavaScript with Node. js to handle back-end operations.
                    </p>
                </div>
            </div>


            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={FidaKhan} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Fida Ur Rehman Khan</h2>
                    <p className="card-role">MERN stack developer</p>
                    <p className="card-info">
                        Irure consectetur magna nisi consectetur ipsum consectetur aliqua excepteur amet tempor aute sint. Excepteur in proident ullamco occaecat consectetur eu. Sunt exercitation tempor qui exercitation reprehenderit ipsum. Anim labore enim aute cupidatat cillum sunt ipsum culpa consequat veniam non officia. Consectetur esse ea tempor tempor. Consectetur sint aliquip eu fugiat id velit non commodo.
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
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Raheem</h2>
                    <p className="card-role">Front-end developer</p>
                    <p className="card-info">
                    Hello folks i am abdur raheem proficient in html CSS react and Shopify to handle front-end operations
                    </p>
                </div>
            </div>


            <div className="card-head-left row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
                </div>
                <div className="col-9">
                    <h2 className="card-heading">Abdur Razzak</h2>
                    <p className="card-role">Backend and wordpress developer</p>
                    <p className="card-info">
                    Hello folks i am abdur razzak a developer proficient in  django python wordpress woo commerce
                    </p>
                </div>
            </div>


            <div className="card-head-right row align-items-center">
                <div className="col-3">
                    <img src={DefaultProfile} className="profile"  alt="sharjeelportfolio"/>
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
