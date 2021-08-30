import React from 'react';
import './footer.css';
import logo from "../../images/logo2.png"
import cube from "../../images/cube-1.png"
import ellipse from "../../images/Ellipse.png"
import vector from "../../images/Vector-2.png"
function Footer() {
    return (
        <div className=" container-fluid break-footer vector">
            <div className="row container pt-5 pb-5 m-auto ">
                {/* <img src={vector}/> */}
                <div className="col m 4 footer-first-row ">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="cube">
                        <img src={cube} />
                    </div>
                </div>
                <div className="col m 4">
                        <li>Pricing</li>
                        <li>Knowledge Base</li>
                        <li>Terms of  Service</li>
                        <li>Privacy Policy</li>
                </div>
                <div className="col m 4">
                        <li>Queries or Support</li>
                        <li className="text-warning">support@1break.live</li>

                </div>
                <div className="col m 4 mt-4 ">
                        <img src={ellipse} />
                        <img src={ellipse} className="m-3"/>
                        <img src={ellipse} />

                </div>
            </div>
        </div>
    )
}

export default Footer;
