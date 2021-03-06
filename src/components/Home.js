import React from 'react'
import "./Home.scss"
import {ReactComponent as Name} from '../Images/Group 3.svg'
import {ReactComponent as Dev} from '../Images/undraw_programming_re_kg9v.svg'
import Section2 from './Section2/Section2'
import Section3 from './Section3/Section3'
import Section4 from './Section4/Section4'
import Footer from './Footer/Footer'
import Fab from '@mui/material/Fab';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import Header from './Header/Header'
function Home(props) {
    return (
        <div className="home">
            <Header   />
        <div className="m-auto row justify-content-between">
        
        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <Name className="name"/>
        </div>

        <div className=" col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <Dev className="dev" />
        </div>
        </div>
    
        <div className="fab-cont" onClick={()=>props.history.push("/contactus")}>
        <Fab size='large' color="secondary" aria-label="edit">
        <MessageRoundedIcon />
        </Fab>
        </div>

        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
       

        </div>
    )
}

export default Home
