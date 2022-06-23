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

const Home = ({ page, seo, images }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <Layout seo={seo}>
            <div className="homePage">
                <HeroSlider />
                <ServiceHome />
                <DoctorsHome />
                <NewsHome />
                <GalleryHome />
            </div>
        </Layout >
    );
};

export default Home;
