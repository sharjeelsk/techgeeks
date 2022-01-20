import React from 'react'
import "./ContactUs.scss"
import Button from '@mui/material/Button';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com';
import SimpleBackdrop from './SimpleBackdrop';
function ContactUs(props) {
    const {handleSubmit,formState:{errors},register} = useForm()
    const [loading,setLoading]=React.useState(false)
    const onSubmit = (data,e)=>{
        console.log(data);
        setLoading(true)
        emailjs.sendForm('service_h5rtv2c', 'template_j7xbmho',e.target, 'user_FSNYDg6xpEqMSIFqFAsZ3')
        .then((result) => {
            console.log(result.text);
            setLoading(false)
            props.history.push("/")
        }, (error) => {
            console.log(error);
            setLoading(false)
        });
    }

    return (
        <div className="contact-us">
            <SimpleBackdrop open={loading} />
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-input">
            <label>Name:</label>
            <input {...register('firstname',{required:true})} placeholder='Enter your name'/>
            </div>

            <div className="form-input">
            <label>Email:</label>
            <input {...register('email',{required:true})} placeholder='Enter your email'  />
            </div>

            <div className="form-input">
            <label>Requirement:</label>
            <input {...register('number',{required:true})} placeholder='Enter your requirement'  />
            </div>

            <div style={{textAlign:"center"}}>
            <Button endIcon={<SendRoundedIcon />} variant="outlined" type="submit">Send</Button>
            </div>


            </form>
        </div>
    )
}

export default ContactUs
