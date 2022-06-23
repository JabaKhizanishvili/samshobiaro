import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import {
    ArrowDown,
    Call,
    Mail,
    Location,
} from "/assets/images/icons/contact/contactIcons";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./Header.css";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    // const { pathname } = useLocation();
    const { pathname, currentLocale, user } = usePage().props;


    let transparent = false;

    if (pathname === "/") {
        transparent = true;
    }
    const navbar = [
        {
            nav: "მთავარი",
            link: "/",
        },
        {
            nav: "ჩვენ შესახებ",
            link: "/about-us",
        },
        {
            nav: "სიახლეები",
            link: "/news",
        },
        {
            nav: "ჩვენი ექიმები",
            link: "/doctors",
        },
        {
            nav: "გალერეა",
            link: "/gallery",
        },
        {
            nav: "კონტაქტი",
            link: "/contact",
        },
    ];
    return (
        <div className="header">
            <div className="header_top">
                <div className="wrapper flex">
                    <Link href="/" className="logo">
                        <img src='/assets/images/header/logo.png' alt="" />
                        ახალი N2 სამშობიარო სახლი
                    </Link>
                    <div className="flex" style={{ height: "100%" }}>
                        <SocialMedia color="#1DBFCC" />
                        <div className="contact_info">
                            <Link href="/">
                                <Call color="#fff" />
                                +995 032 2 111 111
                            </Link>
                            <Link href="/">
                                <Mail color="#fff" />
                                2_samshobiaro@mail.ru
                            </Link>
                            <Link href="/">
                                <Location color="#fff" />
                                ქუთაისი, ლორთქიფანიძის ქუჩა №13
                            </Link>
                        </div>
                    </div>
                    <button
                        id="menu_btn"
                        className={mobileMenu ? "clicked" : ""}
                        onClick={() => toggleMobileMenu()}
                    ></button>
                </div>
            </div>
            <div
                className={mobileMenu ? "header_bottom open" : "header_bottom"}
                style={{ background: transparent ? "transparent" : "#fff" }}
            >
                <div className="wrapper navigation flex centered">
                    {navbar.map((nav, i) => {
                        return (
                            <React.Fragment key={i}>
                                <Link
                                    className={
                                        nav.link === pathname ? "nav_link active" : "nav_link"
                                    }
                                    href={nav.link}
                                >
                                    {nav.nav}
                                </Link>
                            </React.Fragment>
                        );
                    })}
                    <div className="languages">
                        <div className="active">
                            ქრთ <ArrowDown color="#171C26" />
                        </div>
                        <div className="drop">
                            <Link href="/">ENG</Link>
                            <Link href="/">РУС</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
