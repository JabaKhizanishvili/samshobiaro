import React from "react";
import "./PageHead.css";
// import Arrow from "../../assets/images/icons/news/double-arrow.svg";

export const PageHead = (props) => {
    return (
        <div className="pageHead">
            <div className="wrapper flex">
                <h2>{props.title}</h2>
                <div className="path">
                    {props.prev}
                    <span>
                        <img src="/assets/images/icons/news/double-arrow.svg" alt="" />
                    </span>
                    {props.active}
                </div>
            </div>
        </div>
    );
};
