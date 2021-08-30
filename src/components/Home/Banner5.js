import React from 'react'
import './banner.css'
import banner5 from '../../images/banner5.png';


function Banner5() {
    return (
        <div className="container-fluid ">
            <div className="row break-banner my-5 pb-5 bg-banner5">
                <div className="col-6 banner-aling ">
                    <div className="banner-text">
                        <h2 className="text-bold">
                            Elements to Stream <br />
                        the Live as you Like
                        </h2>
                        <p className="text-secondary">Customize your streaming contents with additional <br />
                    elements like background, logo, captions, chat display, <br />
                    overlay, video and other components to brand your <br />
                    streaming sessions.</p>
                    </div>
                </div>
                <div className=" image col-6 pb-5 ">
                    <img src={banner5}></img>
                </div>
            </div>


        </div>
    )
}

export default Banner5;
