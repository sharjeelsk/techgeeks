import React from 'react'
import "./Section3.scss"
function Card(props) {
    return (
        <div>
             <h2>{props.heading}</h2>
                <p>
                    {
                        props.para
                    }
                </p>
        </div>
    )
}

export default Card
