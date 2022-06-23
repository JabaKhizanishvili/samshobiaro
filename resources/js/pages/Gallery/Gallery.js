import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./Gallery.css";
import Layout from "../../Layouts/Layout";
// import Doctor1 from "../../assets/images/doctors/3.png";
// import Doctor2 from "../../assets/images/doctors/4.png";
// import Doctor3 from "../../assets/images/doctors/5.png";
// import Doctor4 from "../../assets/images/doctors/6.png";
// import Photo1 from "../../assets/images/gallery/1.png";
// import Photo2 from "../../assets/images/gallery/2.png";
// import Photo3 from "../../assets/images/gallery/3.png";
// import Photo4 from "../../assets/images/gallery/4.png";
// import Photo5 from "../../assets/images/gallery/5.png";
// import Photo6 from "../../assets/images/gallery/6.png";
import { Pagination } from "../../components/Pagination/Pagination";

const Gallery = ({ seo }) => {
    const photos = [
        {
            img: "/assets/images/doctors/3.png",
            span: 1,
        },
        {
            img: "/assets/images/gallery/6.png",
            span: 1,
        },
        {
            img: "/assets/images/doctors/4.png",
            span: 2,
        },
        {
            img: "/assets/images/doctors/3.png",
            span: 1,
        },
        {
            img: "/assets/images/gallery/5.png",
            span: 2,
        },
        {
            img: "/assets/images/doctors/5.png",
            span: 1,
        },

        {
            img: "/assets/images/doctors/6.png",
            span: 1,
        },
        {
            img: "/assets/images/gallery/1.png",
            span: 1,
        },
        {
            img: "/assets/images/doctors/5.png",
            span: 1,
        },
        {
            img: "/assets/images/gallery/1.png",
            span: 1,
        },
        {
            img: "/assets/images/doctors/6.png",
            span: 1,
        },
        {
            img: "/assets/images/gallery/1.png",
            span: 2,
        },
    ];
    return (
        <Layout seo={seo}>

            <div className="galleryPage">
                <PageHead title="გალერეა" prev="მთავარი" active="გალერეა" />
                <div className="wrapper main ">
                    <div className="grid">
                        {photos.map((photo) => {
                            return (
                                <div className="img" style={{ gridColumn: `span ${photo.span}` }}>
                                    <img src={photo.img} alt="" />
                                </div>
                            );
                        })}
                    </div>
                    {/* <Pagination /> */}
                </div>
            </div>
        </Layout>
    );
};

export default Gallery;
