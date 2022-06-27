import React, { useEffect } from "react";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
// import Icon1 from "/assets/images/icons/service/1.png";
// import Icon2 from "/assets/images/icons/service/2.png";
// import Icon3 from "/assets/images/icons/service/3.png";
// import Icon4 from "/assets/images/icons/service/4.png";
import { ServiceBox } from "../../../components/ServiceBox/ServiceBox";
import "./ServiceHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const ServiceHome = ({ page, seo, images }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
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
        <div className="serviceHome">
            <div className="wrapper flex content">
                <div className="left">
                    <p>{renderHTML(__('client.services_aboutus', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</p>
                    <h2>{renderHTML(__('client.services_title', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}</h2>
                    <p>
                        {renderHTML(__('client.services_short_description', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <p>
                        {renderHTML(__('client.services_description', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <MainBtn link={route("client.about.index")} text={renderHTML(__('client.services_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                </div>
                <div className="right">
                    <Title1 largeText={renderHTML(__('client.services_services', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} subtitle={renderHTML(__('client.services_offer', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                    <p className="p">
                        {renderHTML(__('client.services_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </p>
                    <div className="service_grid" data-aos="fade-left">
                        {serviceBoxData.map((box, i) => {
                            return (
                                <ServiceBox
                                    key={i}
                                    icon={box.icon}
                                    title={box.title}
                                    paragraph={box.para}
                                    background={box.background}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;
