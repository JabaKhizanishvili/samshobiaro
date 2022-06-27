import React from "react";
import {
    Call,
    Mail,
    Location,
} from "/assets/images/icons/contact/contactIcons";
import { Map } from "../../components/Map/Map.js";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { PageHead } from "../../components/PageHead/PageHead";
import { Title2 } from "../../components/Titles/Titles";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Contact = ({ seo, page }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const { errors, gphone, gemail, gaddress } = usePage().props;
    const contactInfo = [
        {
            icon: <Call color="#1DBFCC" />,
            text: renderHTML(__('client.contact_phonenum', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            info: gphone.value,
        },
        {
            icon: <Mail color="#1DBFCC" />,
            text: renderHTML(__('client.contact_e_mail', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            info: gemail.value,
        },
        {
            icon: <Location color="#1DBFCC" />,
            text: renderHTML(__('client.contact_address', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>')),
            info: gaddress.value,
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="contactPage">
                <PageHead title={renderHTML(__('client.contact_contact', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} prev={renderHTML(__('client.nav_main', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} active={renderHTML(__('client.nav_contact', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <div className="wrapper main">
                    <div className="map">
                        <Map />
                    </div>
                    <div className="flex content">
                        <div className="left">
                            <Title2 text={renderHTML(__('client.contact_anyquestion', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                            <p>
                                {renderHTML(__('client.contact_anyquestion_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            <input type="text" placeholder={__('client.contact_form_name', sharedData)} />
                            <input type="text" placeholder={__('client.contact_form_phone', sharedData)} />
                            <input type="text" placeholder={__('client.contact_form_email', sharedData)} />
                            <textarea placeholder={__('client.contact_form_massage', sharedData)}></textarea>
                            <MainBtn text={renderHTML(__('client.contact_sendbtn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                        </div>
                        <div className="right">
                            <Title2 text={renderHTML(__('client.contact_info', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                            <p>
                                {renderHTML(__('client.contactinfo_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </p>
                            {contactInfo.map((info) => {
                                return (
                                    <div className="flex contact_info">
                                        <div className="icon flex centered">{info.icon}</div>
                                        <div>
                                            <div className="txt">{info.text}</div>
                                            <h5>{info.info}</h5>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
