import React from 'react'
import './banner.css'
import banner4 from '../../images/banner3.png'

function Banner4() {
    return (
        <div className="container-fluid my-5 py-5 bg-banner2">
            <div className="row break-banner ">
                <div className="image col-6 ms-5 ">
                    <img src={banner4} className="left-image-border mb-5"></img>
                </div>
                <div className="col-5 banner-text banner2-align ">
                    <h2 className='text-bold'>
                    Top-Notch Event Handling<br />
                        Features
                    </h2>
                <p className="text-secondary">Manage all your stream events hosted by you, invited <br />
                    as a guest or included as participants on 1Break on a<br/>
                     single tab. No need to jot down upcoming live sessions<br/>
                      in various places.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner4;
