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

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    const { errors, gphone, gemail, gaddress } = usePage().props;
    // const { pathname } = useLocation();
    const { pathname } = usePage().props;

    let hideMap = false;

    if (pathname === "/contact") {
        hideMap = true;
    }

    const navbar = [
        {
            nav: __('client.nav_main', sharedData),
            link: route("client.home.index"),
        },
        {
            nav: __("client.nav_aboutus", sharedData),
            link: route("client.about.index"),
        },
        {
            nav: __("client.nav_news", sharedData),
            link: route("client.news.index"),
        },
        {
            nav: __("client.nav_doctors", sharedData),
            link: route("client.doctors.index"),
        },
        {
            nav: __("client.nav_gallery", sharedData),
            link: route("client.gallery.index"),
        },
        {
            nav: __("client.nav_contact", sharedData),
            link: route("client.contact.index"),
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
                            {gphone.value}
                        </Link>
                        <Link href="/">
                            <Mail color="#171C26" />
                            {gemail.value}
                        </Link>
                        <Link href="/">
                            <Location color="#171C26" />
                            {gaddress.value}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
