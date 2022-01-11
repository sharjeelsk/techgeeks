import React from 'react'
import "./Section3.scss"
import Card from './Card'
function Section3() {
    return (
        <div className="section3">
            <h1 className="heading">Our Web Apps</h1>

            <div className="row justify-content-between pr-card-head">
            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
               <Card 
               heading="Events"
               para="Create, Subscribe, and Vendor any event
               Events is a platform where you can create an event, subscribe a event and vendor a event. All three roles in just one platform, everything on just a single click without any lag. come join our community and explore the world of events"
               />
               <a  className="link" href="https://events-fawn.vercel.app/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Jitecsoft"
               para="At JitecSoft, we connect multiple dimensions of software development to give you an old-digital world. We look beyond traditional delivery paradigms and one-size-fits-all applications to translate your idea into a scalable technology solution."
               />
               <a className="link" href="https://jitecsoft.herokuapp.com/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Zee Vaccination"
               para="In our fight against COVID-19, we are all together.
               Getting vaccinated is the only way to win this battle.
               ZEE TV brings to you Vaccination Camp, an initiative to bring the life-saving vaccine to our viewers in a hassle free, safe way."
               />
               <a className="link" href="https://zeevaccination.vercel.app/">Visit Now</a>
            </section>
            </div>


            <div className="row justify-content-between pr-card-head">
            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Alpine Stationery"
               para="In fugiat est ipsum nostrud. Ea deserunt adipisicing deserunt est esse culpa culpa pariatur tempor incididunt irure mollit labore. Tempor officia non ullamco duis officia aliqua in reprehenderit. Voluptate aute ea eiusmod officia aute excepteur. Quis sint nulla enim ea et elit deserunt velit aliquip veniam reprehenderit ipsum non. Nostrud labore irure magna ex reprehenderit consectetur."
               />
               <a className="link" href="https://alpinestationeries.herokuapp.com/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Pre Alert"
               para="In fugiat est ipsum nostrud. Ea deserunt adipisicing deserunt est esse culpa culpa pariatur tempor incididunt irure mollit labore. Tempor officia non ullamco duis officia aliqua in reprehenderit. Voluptate aute ea eiusmod officia aute excepteur. Quis sint nulla enim ea et elit deserunt velit aliquip veniam reprehenderit ipsum non. Nostrud labore irure magna ex reprehenderit consectetur."
               />
               <a className="link" href="https://prealert.herokuapp.com/">Visit Now</a>
            </section>

            <section className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 pr-card">
                 <Card 
               heading="Blog Wep"
               para="What is Blog Wep ?
               The place where you can post your doubts, ask queries, and write blogs regarding Tech. No matter what your domain is, a community is there for you!. Why do we use it ?
               Cause you can write blogs on various tech topics and learn from others as well, to develop your self."
               />
               <a className="link" href="https://blogwep.herokuapp.com">Visit Now</a>
            </section>
            </div>







        </div>
    )
}

export default Section3
