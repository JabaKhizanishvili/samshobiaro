import React from "react";
import { ArrowDown } from "/assets/images/icons/contact/contactIcons";
import "./Pagination.css";

export const Pagination = () => {
    return (
        <div className="pagination flex centered">
            <button className="arrow" style={{ transform: "rotate(-90deg)" }}>
                <ArrowDown color="#1DBFCC" />
            </button>
            <button className="pageNum active">1</button>
            <button className="pageNum">2</button>
            <button className="pageNum">3</button>
            <button className="pageNum">4</button>
            <button className="arrow" style={{ transform: "rotate(90deg)" }}>
                <ArrowDown color="#1DBFCC" />
            </button>
        </div>
    );
};
