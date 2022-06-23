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

const Contact = () => {
    const contactInfo = [
        {
            icon: <Call color="#1DBFCC" />,
            text: "ტელეფონის ნომერი",
            info: "+995 032 2 111 111",
        },
        {
            icon: <Mail color="#1DBFCC" />,
            text: "ელექტრონული ფოსტა",
            info: "2_samshobiaro@mail.ru",
        },
        {
            icon: <Location color="#1DBFCC" />,
            text: "მისამართი",
            info: "ქუთაისი, ლორთქიფანიძის ქუჩა №13",
        },
    ];
    return (
        <div className="contactPage">
            <PageHead title="კონტაქტი" prev="მთავარი" active="კონტაქტი" />
            <div className="wrapper main">
                <div className="map">
                    <Map />
                </div>
                <div className="flex content">
                    <div className="left">
                        <Title2 text="თუ გაქვთ კითხვები მოგვწერეთ" />
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                        </p>
                        <input type="text" placeholder="სახელი და გვარი" />
                        <input type="text" placeholder="ტელეფონის ნომერი" />
                        <input type="text" placeholder="ელექტრონული ფოსტა" />
                        <textarea placeholder="შეტყობინება"></textarea>
                        <MainBtn text="გაგზავნა" />
                    </div>
                    <div className="right">
                        <Title2 text="საკონტაქტო ინფორმაცია" />
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
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
    );
};

export default Contact;
