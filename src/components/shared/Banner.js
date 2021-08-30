import React from 'react'
import './banner.css'
import banner2 from '../../images/banner2.png'

function Banner2() {
    return (
        <div className="container-fluid ">
            <div className="row break-banner">
                <div className="image col-6">
                    <img src={banner2}></img>
                </div>
                <div className="col-6 banner-text">
                    <h1>

                    </h1>
                    <p>
                    </p>
                </div>
                <img src={banner2}></img>    
            </div>

        </div>
    )
}

export default Banner2;
