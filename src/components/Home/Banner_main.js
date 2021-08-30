import React from 'react'
import './banner.css'
import banner1 from '../../images/banner1.png'
import check from '../../images/check-circle-fill.svg'
import Navbar from "../header/Navbar"
function Banner_main() {
    return (
        <div className="container-fluid bg-main mb-5">
            <Navbar/>
            <div className="row break-banner">
                <div className="col-6 banner-aling">
                    <div className="banner-text m-auto">
                        <h2 className="m-auto text-bold">
                            Multi Channel<br />
                        Live Streaming<br />
                        Platform
                        </h2>
                        <p className="text-secondary">Experience the Magical Way of Streaming your Live <br /> Sessions on Multiple Social Media Platforms at Same Time.</p>
                        <div className="p-0 m-0 text-secondary">
                            <p className="p-0 m-0 "><img src={check} />Clean UI with Amazing Features</p>
                            <p className="p-0 m-0"><img src={check} />One-Click Streaming Option</p>
                            <p className="p-0 m-0"><img src={check} />Innovative Virtual Studio</p>
                        </div>
                        <button className="btn btn-danger px-4" type="button">Try 1Break for Free</button>
                    </div>
                </div>
                <div className="image col-6 background-image">
                    <img src={banner1}></img>
                </div>
            </div>

        </div>
    )
}

export default Banner_main;
