import React, { useEffect } from "react";
import DoctorsHome from "./DoctorsHome/DoctorsHome";
import GalleryHome from "./GalleryHome/GalleryHome";
import HeroSlider from "./HeroSlider/HeroSlider";
import "./Home.css";
import NewsHome from "./NewsHome/NewsHome";
import ServiceHome from "./ServiceHome/ServiceHome";
import Layout from "../../Layouts/Layout";
import Aos from "aos";
import { Link, usePage } from "@inertiajs/inertia-react";
import "aos/dist/aos.css";

const Home = ({ page, seo, images, slider, blog, gallery, links }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Layout seo={seo}>
            <div className="homePage">
                <HeroSlider slider={slider} />
                <ServiceHome />
                <DoctorsHome img={images} />
                <NewsHome news={blog} />
                <GalleryHome img={gallery} links={links} />
            </div>
        </Layout >
    );
};

export default Home;
