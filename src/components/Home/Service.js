import React from 'react'
import './home.css'
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import ellips from "../../images/Ellipse.png";
function Service() {
    const data = [
        {
            img: icon1,
            title: "Multi-Platform Streaming",
            body: <p>Take your live session on different social <br/> media platforms in real-time to get more<br/> visibility. The more you appear, the more<br/> you’ll get noticed.</p>,
            bgColor: "#CB5EFF"
        },
{
    img: icon2,
        title: "Brand Your Live Sessions",
            body:<p> Add your logo, colour and custom overlays<br/> to brand your live sessions as per your <br/>choice. Save them as presents and use <br/>them on other live sessions.</p>
},
{
    img: icon3,
        title: "One-Click Streaming",
            body: <p>No need to configure the streaming<br/> options every time; set up once and go live <br/>in a single click. Schedule the upcoming <br/>events to not race in the last minutes.</p>
}
    ]
return (
    <div className="container-fluid bg-color py-4">
        <div className="row text-center text-light">
            {/* <img src={ellips} height="50px"/> */}
            <h3 className="my-4 service-head ">With 1break You Can....</h3>
        </div>
        <div className="container">
            <div className="row">
                {
                    data.map((data) => {
                        return (
                            <div className="col m 3 text-center m-auto">
                                <div style={{backgroundColor:'data.bgColor'}}>
                                    <img src={data.img} height="50px" />
                                </div>
                                <h3 className="text-light service-title">{data.title}</h3>
                                <p className="text-white-50 service-body">{data.body}</p>
                            </div>
                        );
                    })
                }

            </div>
        </div>

    </div>
);
}

export default Service;
