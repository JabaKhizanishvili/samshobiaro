import React, { useEffect } from "react";
import { Title1 } from "../../../components/Titles/Titles";
import "./GalleryHome.css";
// import Photo1 from "/assets/images/gallery/1.png";
// import Photo2 from "/assets/images/gallery/2.png";
// import Photo3 from "/assets/images/gallery/3.png";
// import Photo4 from "/assets/images/gallery/4.png";
// import Photo5 from "/assets/images/gallery/5.png";
// import Photo6 from "/assets/images/gallery/6.png";
// import Photo7 from "/assets/images/gallery/7.png";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const GalleryHome = (props) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const images = [
        {
            src: "/assets/images/gallery/1.png",
            span: 1,
        },
        {
            src: "/assets/images/gallery/2.png",
            span: 2,
        },
        {
            src: "/assets/images/gallery/3.png",
            span: 1,
        },
        {
            src: "/assets/images/gallery/4.png",
            span: 1,
        },
        {
            src: "/assets/images/gallery/5.png",
            span: 2,
        },
        {
            src: "/assets/images/gallery/6.png",
            span: 1,
        },
        {
            src: "/assets/images/gallery/7.png",
            span: 2,
        },
    ];
    return (
        <div className="GalleryHome wrapper">
            <Title1 largeText={renderHTML(__('client.gallery_photogallery', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
            <div className="photo_grid" data-aos="fade-up">
                {props.img.map((img, i) => {
                    return (
                        <div
                            key={i}
                            className="img" style={{ gridColumn: `span ${img.width}` }}>
                            <img src={props.links + "/" + img.name}></img>
                        </div>
                    );
                })}
            </div>
            <MainBtn text={renderHTML(__('client.gallery_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} link={route("client.gallery.index")} />
        </div>
    );
};

export default GalleryHome;
