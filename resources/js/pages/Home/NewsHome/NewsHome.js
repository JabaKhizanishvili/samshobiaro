import React, { useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { ArrowDown } from "/assets/images/icons/contact/contactIcons";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
import "./NewsHome.css";
// import Img1 from "/assets/images/news/1.png";
// import Img2 from "/assets/images/news/2.png";
// import Img3 from "/assets/images/news/3.png";
import Calendar from "/assets/images/icons/news/calendar.svg";
// import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import { Route } from "react-router-dom";

const NewsHome = (props) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const newsData = [
        {
            img: "/assets/images/news/1.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
        {
            img: "/assets/images/news/2.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
        {
            img: "/assets/images/news/3.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
        {
            img: "/assets/images/news/2.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
        {
            img: "/assets/images/news/3.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
        {
            img: "/assets/images/news/2.png",
            status: "სიახლის დასახელება",
            date: "12 ოქტომბერი, 2021",
            caption: "შემთხვევითად გენერირებული",
        },
    ];

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 600, itemsToShow: 2 },
        { width: 1000, itemsToShow: 3 },
    ];

    return (
        <div className="newsHome wrapper">
            <div className="head flex">
                <Title1 largeText={renderHTML(__('client.news_news', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} subtitle={renderHTML(__('client.news_siaxeebi', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <MainBtn link={route("client.news.index")} text={renderHTML(__('client.news_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
            </div>
            <div className="news_slider flex" data-aos="fade-right">
                {/* <button className="arrow prev">
                    <ArrowDown color="#1dbfcc" />
                </button> */}
                <Carousel breakPoints={breakPoints}>
                    {props.news.map((item, i) => {
                        return (
                            <div className="news_box" key={i}>
                                <div className="img">
                                    {/* <img src={item.img} alt="" /> */}
                                    <img src={item.latest_image != null
                                        ? "/" +
                                        item.latest_image.path +
                                        "/" +
                                        item.latest_image.title
                                        : null} />
                                </div>
                                <div className="content">
                                    <div className="status">{item.name}</div>
                                    <div className="date">
                                        <span>
                                            <img src={Calendar} alt="" />
                                        </span>
                                        {item.date}
                                    </div>
                                    <div className="caption">{item.short_description}</div>
                                    <Link href={route("client.news.show", item.id)} className="link ">
                                        <div>
                                            {renderHTML(__('client.news_post_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} <div className="plus">+</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
                {/* <button className="arrow next">
                    <ArrowDown color="#1dbfcc" />
                </button> */}
            </div >
        </div >
    );
};

export default NewsHome;
