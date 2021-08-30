import React from 'react'
import './banner.css'
import banner2 from '../../images/banner2.png'

function Banner2() {
    return (
        <div className="container-fluid my-5 py-5 bg-banner2">
            <div className="row break-banner ">
                <div className="image col-6 ms-5 ">
                    <img src={banner2} className="left-image-border mb-5"></img>
                </div>
                <div className="col-5 banner-text banner2-align ">
                    <h2 className='text-bold'>
                        Simple & Elegant<br/>
                        Virtual Studio
                    </h2>
                <p className="text-secondary">Power-packed live streaming studio with all elements<br/>
                     to perform an interactive session with your audience,<br/>
                      anywhere, anytime. Components like chat control, <br/>
                      stream destinations, guest list, and other essential<br/>
                       things are available at one place on our virtual studio.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Banner2;
