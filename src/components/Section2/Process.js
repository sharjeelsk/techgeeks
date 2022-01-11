import React from 'react'
import "./Section2.scss"
import {ReactComponent as Document} from '../../Images/undraw_resume_folder_re_e0bi.svg'
import {ReactComponent as DiscussnCode} from '../../Images/undraw_pair_programming_re_or4x.svg'
import {ReactComponent as Deliver} from '../../Images/undraw_online_groceries_a02y.svg'

function Process() {
    return (
        <div className="process-section">
            <h1>Process We Follow</h1>

            <div className="row justify-content-between">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <Document className="processimage" />
                <h1 className="p-head">Step 1</h1>
                <p className='p-para'>
                    We require an understanding document, a well written document with every minute
                    requirement helps us to understand the project in a better manner. a document should be so well formatted that after conveying it to developers it they shouldn't get stuck understand the flow 
                </p>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <DiscussnCode className="processimage" />
                <h1 className="p-head">Step 2</h1>
                <p className='p-para'>
                    After verifying and discussing the requirements, we move on to development and 
                    we follow agile approach which basically means that after incorporating every main feature
                    we tend to have meeting with the client to confirm if its correct, then we continue the development after the inputs
                </p>
                </div>


                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                <Deliver className="processimage" />
                <h1 className="p-head">Step 3</h1>
                <p className='p-para'>
                    After development of every single requirement which was mentioned in side the doc we create a test build,
                    test build is to check that we have met every requirement and its picture perfect as mentioned. once we confirm that we make 
                    a production build and launch it on their respective platforms
                </p>
                </div>
            </div>
        </div>
    )
}

export default Process
