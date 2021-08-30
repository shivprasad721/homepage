import React from 'react'
import './banner.css'
import banner3 from '../../images/banner3.png'
import check from '../../images/check-circle-fill.svg'
function Banner3() {
    return (
        <div className="container-fluid ">
            <div className="row break-banner my-5 py-5">
                <div className="col-6  banner-aling ">
                    <div className="banner-text">
                        <h2 className="text-bold">
                            Easy to Manage Multiple <br />
                        Social Media Destinations
                        </h2>
                        <p className="text-secondary">Add your social media source to stream the sessions in
                        <br /> one place. You can favourite any destinations that are <br />
                    frequently used to interact with your audience.</p>
                    </div>
                </div>
                <div className="image col-6">
                    <img src={banner3} ></img>
                </div>
            </div>

        </div>
    )
}

export default Banner3;
