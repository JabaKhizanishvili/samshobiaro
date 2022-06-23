import React, { useEffect } from "react";
// import Doctor1 from "/assets/images/doctors/1.png";
// import Doctor2 from "/assets/images/doctors/2.png";
// import Check from "/assets/images/icons/service/check.svg";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
import "./DoctorsHome.css";
import Aos from "aos";
import "aos/dist/aos.css";


const DoctorsHome = ({ seo, info }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const checks = [
        "პროფესიონალიზმი",
        "პასუხისმგებლობის მაღალი გრძნობა",
        "დიდი გამოცდილება",
        "საქმის სიყვარული",
    ];
    return (
        <div className="doctorsHome wrapper flex">
            <div className="img_shapes" data-aos="flip-left">
                <div className="shape shape_1">
                    <img src="/assets/images/doctors/1.png" alt="" />
                </div>
                <div className="shape shape_2">
                    <img src="/assets/images/doctors/2.png" alt="" />
                </div>
                <div className="shape shape_3"></div>
            </div>
            <div data-aos="fade-left">
                <Title1 largeText="ჩვენი ექიმები" />
                <h3>lorem ipsum dolor</h3>
                <p className="p">
                    შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული
                    ნაწარმისემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                    ტიპოგრაფიული ნაწარმის
                </p>
                <div className="checks">
                    {checks.map((item, i) => {
                        return (
                            <p key={i}>
                                <span>
                                    <img src="/assets/images/icons/service/check.svg" alt="" />
                                </span>
                                {item}
                            </p>
                        );
                    })}
                </div>
                <MainBtn text="ნახე სრულად" />
            </div>
        </div>
    );
};

export default DoctorsHome;
