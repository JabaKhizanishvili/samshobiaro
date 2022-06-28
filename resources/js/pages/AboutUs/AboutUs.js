import React, { useEffect } from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./AboutUs.css";
// import Check from "../../assets/images/icons/service/check.svg";
import { Title2 } from "../../components/Titles/Titles";
// import Icon1 from "../../assets/images/icons/service/1.png";
// import Icon2 from "../../assets/images/icons/service/2.png";
// import Icon3 from "../../assets/images/icons/service/3.png";
// import Icon4 from "../../assets/images/icons/service/4.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { ServiceBox } from "../../components/ServiceBox/ServiceBox";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";


const AboutUs = ({ seo, page, images }) => {
    console.log(images);
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    // const checkList = [
    //     "პროფესიონალიზმი",
    //     "პასუხისმგებლობის მაღალი გრძნობა",
    //     "დიდი გამოცდილება",
    //     "საქმის სიყვარული",
    //     "პროფესიონალიზმი",
    //     "პასუხისმგებლობის მაღალი გრძნობა",
    // ];

    const checkList = [
        renderHTML(__('client.doctors_proffesionalism', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_responsibility', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_experience', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
        renderHTML(__('client.doctors_love', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
    ];
    const serviceBoxData = [
        {
            icon: "/assets/images/icons/service/1.png",
            title: renderHTML(__('client.services_1', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            para: renderHTML(__('client.services_1_txt', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            background: "#e4feff7d",
        },
        {
            icon: "/assets/images/icons/service/2.png",
            title: renderHTML(__('client.services_2', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            para: renderHTML(__('client.services_2_txt', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            background: "#efefef7b",
        },
        {
            icon: "/assets/images/icons/service/3.png",
            title: renderHTML(__('client.services_3', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            para: renderHTML(__('client.services_3_txt', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            background: "#efefef7b",
        },
        {
            icon: "/assets/images/icons/service/4.png",
            title: renderHTML(__('client.services_4', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            para: renderHTML(__('client.services_4_txt', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            background: "#e4feff7d",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="aboutPage">
                <PageHead title={renderHTML(__('client.aboutus_aboutus', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} prev={renderHTML(__('client.nav_main', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} active={renderHTML(__('client.nav_aboutus', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <div className="showcase" style={{
                    background: `url(${images[0]}) no-repeat`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    paddingTop: "72px",
                    paddingBottom: "124px",
                }}>
                    <div className="wrapper">
                        <div className="content">
                            <h4>{renderHTML(__('client.aboutus_newhome', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</h4>
                            <p>
                                {renderHTML(__('client.aboutus_newhometext', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <div className="checks">
                                {checkList.map((item) => {
                                    return (
                                        <div className="item">
                                            <span>
                                                <img src="/assets/images/icons/service/check.svg" alt="" />
                                            </span>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="wrapper flex">
                        <div className="lft">
                            <Title2 text={renderHTML(__('client.aboutus_whoarewe', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                            <p>
                                {renderHTML(__('client.aboutus_whoarewe_1_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <div className="img_flex flex">
                                <div className="img">
                                    <img src={images[1]} alt="" />
                                </div>
                                <div className="img">
                                    <img src={images[2]} alt="" />
                                </div>
                            </div>
                            <p>
                                {renderHTML(__('client.aboutus_whoarewe_1_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <MainBtn text={renderHTML(__('client.aboutus_whoarewe_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                        </div>
                        <div className="rgt">
                            <Title2 text={renderHTML(__('client.aboutus_mission', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                            <p>
                                {renderHTML(__('client.aboutus_mission_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <div className="img" data-aos="flip-left">
                                <img src={images[3]} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_service wrapper ">
                    <Title2 text={renderHTML(__('client.aboutus_ourservice', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                    <div className="flex">
                        <div data-aos="fade-right">
                            <img src={images[4]} alt="" style={{ marginBottom: "30px" }} />
                            <p>
                                {renderHTML(__('client.aboutus_ourservice_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                        </div>
                        <div className="grid" data-aos="fade-left">
                            {serviceBoxData.map((box) => {
                                return (
                                    <ServiceBox
                                        icon={box.icon}
                                        title={box.title}
                                        paragraph={box.para}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
};

export default AboutUs;
