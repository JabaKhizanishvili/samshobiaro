import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
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
    const { errors, gphone, gemail, gaddress } = usePage().props;
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;


    // const { pathname } = useLocation();
    const { pathname, currentLocale, locale_urls, locales } = usePage().props;



    let transparent = false;

    if (pathname === "/") {
        transparent = true;
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
        <div className="header">
            <div className="header_top">
                <div className="wrapper flex">
                    <Link href={route("client.home.index")} className="logo">
                        <img src='/assets/images/header/logo.png' alt="" />
                        {renderHTML(__('client.home_logo', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    </Link>
                    <div className="flex" style={{ height: "100%" }}>
                        <SocialMedia color="#1DBFCC" />
                        <div className="contact_info">
                            <Link href="/">
                                <Call color="#fff" />
                                {gphone.value}
                            </Link>
                            <Link href="/">
                                <Mail color="#fff" />
                                {gemail.value}
                            </Link>
                            <Link href="/">
                                <Location color="#fff" />
                                {gaddress.value}
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
                            {
                                Object.keys(locales).map((e, i) => {
                                    return (
                                        <React.Fragment>
                                            <Link key={i} href={locale_urls[e]}>{e}</Link>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
