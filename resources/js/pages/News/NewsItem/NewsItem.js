import React from "react";
import "./NewsItem.css";
import Calendar from "/assets/images/icons/news/calendar.svg";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className="news_item">
            <div className="img">
                <img src={props.imgSrc} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
            <div className="flex">
                <div className="date">
                    <img src={Calendar} alt="" />
                    {props.date}
                </div>
                <Link href="/single-news" className="more">
                    სრულად ნახვა <div className="plus">+</div>
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;
