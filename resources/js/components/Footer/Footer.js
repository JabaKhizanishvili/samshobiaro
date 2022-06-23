import React from "react";
// import { Link, useLocation } from "react-router-dom";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Map } from "../Map/Map";
// import Logo from "../../assets/images/header/logo2.png";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import {
    ArrowDown,
    Call,
    Mail,
    Location,
} from "/assets/images/icons/contact/contactIcons";
import "./Footer.css";

const Footer = () => {
    // const { pathname } = useLocation();
    const { pathname } = usePage().props;

    let hideMap = false;

    if (pathname === "/contact") {
        hideMap = true;
    }

    const navbar = [
        {
            nav: "მთავარი",
            link: "/",
        },
        {
            nav: "ჩვენ შესახებ",
            link: "/",
        },
        {
            nav: "სიახლეები",
            link: "/",
        },
        {
            nav: "ჩვენი ექიმები",
            link: "/",
        },
        {
            nav: "გალერეა",
            link: "/",
        },
        {
            nav: "კონტაქტი",
            link: "/",
        },
    ];
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="map" style={{ display: hideMap ? "none" : "block" }}>
                    <Map />
                </div>
                <div
                    className="flex first"
                    style={{
                        borderBottom: "3px solid #1DBFCC",
                        paddingBottom: "8px",
                        paddingTop: hideMap ? "30px" : "0",
                        marginBottom: "32px",
                    }}
                >
                    <Link href="/" className="logo flex center">
                        <img src="/assets/images/header/logo2.png" alt="" />
                        ახალი N2 სამშობიარო სახლი
                    </Link>
                    <SocialMedia color="#171C26" />
                </div>
                <div className="content flex">
                    <div className="navs">
                        {navbar.map((nav) => {
                            return (
                                <Link className="nav_link" href={nav.link}>
                                    {nav.nav}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="right">
                        <h2>საკონტაქტო ინფორმაცია</h2>
                        <Link href="/">
                            <Call color="#171C26" />
                            +995 032 2 111 111
                        </Link>
                        <Link href="/">
                            <Mail color="#171C26" />
                            2_samshobiaro@mail.ru
                        </Link>
                        <Link href="/">
                            <Location color="#171C26" />
                            ქუთაისი, ლორთქიფანიძის ქუჩა №13
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
