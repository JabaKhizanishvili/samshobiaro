import React, { useEffect } from "react";
// import Doctor1 from "/assets/images/doctors/1.png";
// import Doctor2 from "/assets/images/doctors/2.png";
// import Check from "/assets/images/icons/service/check.svg";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
import "./DoctorsHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";


const DoctorsHome = ({ seo, info, img }) => {
    console.log('esaa', img[0]);
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const checks = [
        renderHTML(__('client.doctors_proffesionalism', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_responsibility', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_experience', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_love', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
    ];
    return (
        <div className="doctorsHome wrapper flex">
            <div className="img_shapes" data-aos="flip-left">
                <div className="shape shape_1">
                    <img src={img[0]} alt="error" />
                </div>
                <div className="shape shape_2">
                    {/* <img src="/assets/images/doctors/2.png" alt="" /> */}
                    <img src={img[0]} alt="error" />
                </div>
                <div className="shape shape_3"></div>
            </div>
            <div data-aos="fade-left">
                <Title1 largeText={renderHTML(__('client.doctors_ourdoctors', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <h3>{renderHTML(__('client.doctors_title', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</h3>
                <p className="p">
                    {renderHTML(__('client.doctors_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                </p>
                <div className="checks">
                    {checks.map((item, i) => {
                        return (
                            <p key={i}>
                                <span>
                                    <img src="/assets/images/icons/service/check.svg" alt="" />
                                </span>
                                {item}
                            </p>
                        );
                    })}
                </div>
                <MainBtn link={route("client.doctors.index")} text={renderHTML(__('client.doctors_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
            </div>
        </div>
    );
};

export default DoctorsHome;
