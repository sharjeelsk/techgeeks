import React from 'react'
import Header from '../Header/Header'
import "./Projects.scss"
import Card from '../Section3/Card'
import {Helmet} from "react-helmet";
function Projects() {
  return (
    <div>
                <Helmet>
        <title>Projects</title>
        <meta name="description" content="Checkout are amazing projects which were just an idea and we made it a reality!" />
        </Helmet>
        <Header id="4" />
        <div className='Projects'>
        <h1>Our Projects</h1>
        <div className="row justify-content-between pr-card-head">
        <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="BanksterIndia"
               para="BanksterIndia Platform Where Job Seekers Can Find All Banking Jobs Update this is often the simplest application for college students or job seekers. BanksterIndia contents the banking job opening details in India. It provides a chance to succeed in a pool of individuals who are actively seeking employment within the banking sector in India."
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://banksterindia.com/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Hellomitr"
               para="Hellomitr is an E-Commerce platform which sells almost everything and Within our platform, millions of people around India connect, both online and offline, to make, sell and buy unique goods. We also offer a wide range of Seller Services and tools that help creative entrepreneurs start, manage and scale their businesses."
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://hellomitr.com/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
               <Card 
               heading="Events"
               para="Create, Subscribe, and Vendor any event
               Events is a platform where you can create an event, subscribe a event and vendor a event. All three roles in just one platform, everything on just a single click without any lag. come join our community and explore the world of events"
               />
               <a target="_blank" rel='noreferrer'  className="link" href="https://eventpickl.com/">Visit Now</a>
            </section>

            {/* <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Jitecsoft"
               para="At JitecSoft, we connect multiple dimensions of software development to give you an old-digital world. We look beyond traditional delivery paradigms and one-size-fits-all applications to translate your idea into a scalable technology solution."
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://jitecsoft.herokuapp.com/">Visit Now</a>
            </section> */}


            </div>


            <div className="row justify-content-between pr-card-head">

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Zee Vaccination"
               para="In our fight against COVID-19, we are all together.
               Getting vaccinated is the only way to win this battle.
               ZEE TV brings to you Vaccination Camp, an initiative to bring the life-saving vaccine to our viewers in a hassle free, safe way."
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://zeevaccination.vercel.app/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Alpine Stationery"
               para="Alpine Stationery is an E-commerce platform consisting of stationery, educational and various types of books, that is accessible to the citizens of Aurangabad Maharashtra, where Alpine Stationery aims to provides one-day delivery"
               />
               {/* <a target="_blank" rel='noreferrer' className="link" href="https://alpinestationeries.herokuapp.com/">Visit Now</a> */}
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Pre Alert"
               para="Pre Alert is an ERP system that is used by the famous courier company named Courier Plus in Nigeria. Pre Alert is a tracking mechanism with a mobile app and a operator dashboard where packages are tracked by the driver and the employees of courier plus and similarly the operator can manage this whole system which goes by road and air"
               />
               {/* <a target="_blank" rel='noreferrer' className="link" href="https://prealert.herokuapp.com/">Visit Now</a> */}
            </section>


            </div>

            <div className="row justify-content-between pr-card-head">
            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Blog Wep"
               para="What is Blog Wep ?
               The place where you can post your doubts, ask queries, and write blogs regarding Tech. No matter what your domain is, a community is there for you!. Why do we use it ?
               Cause you can write blogs on various tech topics and learn from others as well, to develop your self."
               />
               {/* <a target="_blank" rel='noreferrer' className="link" href="https://blogwep.herokuapp.com">Visit Now</a> */}
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Syncx"
               para="Syncx is an application similar to Microsoft Teams for developers, inorder to get their daily tasks sync up. You can create a standup and add your organization employees. Employees can update their statuses on a particular task which is added by the project manager and similarly comments feature is also there"
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://taskmanagement-two.vercel.app">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Tgcrypt"
               para="Tgcrypt is a blockchain based web app which uses your browser wallet to send crypto's to various addresses. Security Guaranteed | Best exchange rates | Fastest transactions"
               />
               <a target="_blank" rel='noreferrer' className="link" href="https://tgcrypt.vercel.app">Visit Now</a>
            </section>
            </div>
        </div>
    </div>
  )
}

export default Projects
