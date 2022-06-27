import React from "react";
import "./NewsItem.css";
import Calendar from "/assets/images/icons/news/calendar.svg";
// import { Link } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const NewsItem = (props) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

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
                <Link href={route("client.news.show", props.id)} className="more">
                    {renderHTML(__('client.news_btn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} <div className="plus">+</div>
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;
