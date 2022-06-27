import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { Title3 } from "../../components/Titles/Titles";
// import Doctor1 from "/assets/images/doctors/3.png";
// import Doctor2 from "/assets/images/doctors/4.png";
// import Doctor3 from "/assets/images/doctors/5.png";
// import Doctor4 from "/assets/images/doctors/6.png";
// import Doctor5 from "/assets/images/doctors/7.png";
// import Doctor6 from "/assets/images/doctors/1.png";
// import Doctor7 from "/assets/images/doctors/2.png";
// import Doctor8 from "/assets/images/doctors/5.png";
import "./OurDoctors.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";


const OurDoctors = ({ seo, doctor }) => {
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;

    const doctors = [
        {
            img: "/assets/images/doctors/3.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/4.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/5.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/6.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/7.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/1.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/2.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
        {
            img: "/assets/images/doctors/5.png",
            name: "სახელი გვარი",
            position: "პროფესია",
            experience: "გამოცდილება 15 წელი",
            description:
                "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="ourDoctorsPage">
                <PageHead title="ჩვენი ექიმები" prev={renderHTML(__('client.nav_main', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} active={renderHTML(__('client.nav_doctors', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <div className="wrapper2">
                    <div className="heading">
                        <Title3 text={renderHTML(__('client.doctors_ourdoctors', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                        <p>
                            {renderHTML(__('client.doctors_main_text', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                        </p>
                    </div>
                    <div className="grid">
                        {doctor.map((doctor, index) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="img">
                                        <img src={doctor.latest_image != null
                                            ? "/" +
                                            doctor.latest_image.path +
                                            "/" +
                                            doctor.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <div className="name">{doctor.name}</div>
                                    <div className="pos">{doctor.proffesion}</div>
                                    <div className="exp" style={{ color: "#778197" }}>
                                        {doctor.experience}
                                    </div>
                                    <p>{doctor.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OurDoctors;
