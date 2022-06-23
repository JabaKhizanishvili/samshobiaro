import React from "react";
import "./Titles.css";

export const Title1 = ({ largeText, subtitle }) => {
    return (
        <div className="title1">
            <h1>{largeText}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export const Title2 = ({ text }) => {
    return <div className="title2">{text}</div>;
};

export const Title3 = ({ text }) => {
    return <div className="title3">{text}</div>;
};
