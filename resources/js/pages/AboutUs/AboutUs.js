import React, { useEffect } from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./AboutUs.css";
// import Check from "../../assets/images/icons/service/check.svg";
import { Title2 } from "../../components/Titles/Titles";
// import Img1 from "../../assets/images/about/1.png";
// import Img2 from "../../assets/images/about/2.png";
// import Img3 from "../../assets/images/about/3.png";
// import Img4 from "../../assets/images/about/4.png";
// import Icon1 from "../../assets/images/icons/service/1.png";
// import Icon2 from "../../assets/images/icons/service/2.png";
// import Icon3 from "../../assets/images/icons/service/3.png";
// import Icon4 from "../../assets/images/icons/service/4.png";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { ServiceBox } from "../../components/ServiceBox/ServiceBox";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const checkList = [
        "პროფესიონალიზმი",
        "პასუხისმგებლობის მაღალი გრძნობა",
        "დიდი გამოცდილება",
        "საქმის სიყვარული",
        "პროფესიონალიზმი",
        "პასუხისმგებლობის მაღალი გრძნობა",
    ];
    const serviceBoxData = [
        {
            icon: "/assets/images/icons/service/1.png",
            title: "მეანობა",
            para: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან ",
            background: "#e4feff7d",
        },
        {
            icon: "/assets/images/icons/service/1.png",
            title: "ანტენატალური მეთვალყურეობა",
            para: " შემთხვევითად გენერ, ირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნსირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრეალუ",
            background: "#efefef7b",
        },
        {
            icon: "/assets/images/icons/service/1.png",
            title: "გინეკოლოგიური მომსახურება",
            para: "რებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრე ",
            background: "#efefef7b",
        },
        {
            icon: "/assets/images/icons/service/1.png",
            title: "სრულფასოვანი ლაბორატორიული კვლევა",
            para: " რებული ტექსტი ული ტექსტი ული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრე",
            background: "#e4feff7d",
        },
    ];
    return (
        <div className="aboutPage">
            <PageHead title="ჩვენ შესახებ" prev="მთავარი" active="ჩვენ შესახებ" />
            <div className="showcase">
                <div className="wrapper">
                    <div className="content">
                        <h4>ახალი N2 სამშობიარო სახლი</h4>
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც
                            სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები
                            უამრავია, თუმცა არსებობს რამდენიმე ძირითად.
                        </p>
                        <div className="checks">
                            {checkList.map((item) => {
                                return (
                                    <div className="item">
                                        <span>
                                            <img src="/assets/images/icons/service/check.svg" alt="" />
                                        </span>
                                        {item}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="wrapper flex">
                    <div className="lft">
                        <Title2 text="ვინ ვართ ჩვენ?" />
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც
                            სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები
                            უამრავია, თუმცა არსებობს რამდენიმე ძირითადი,
                        </p>
                        <div className="img_flex flex">
                            <div className="img">
                                <img src="/assets/images/about/1.png" alt="" />
                            </div>
                            <div className="img">
                                <img src="/assets/images/about/2.png" alt="" />
                            </div>
                        </div>
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც
                            სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები
                            უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში
                            ყველაზე ხშირად ვიყენებთ ხოლმე.
                        </p>
                        <MainBtn text="დაგვიკავშირდი" />
                    </div>
                    <div className="rgt">
                        <Title2 text="ჩვენი მისია და მიზანი" />
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც
                            სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები
                            უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში
                            ყველაზე ხშირად ვიყენებთ ხოლმე.
                        </p>
                        <div className="img" data-aos="flip-left">
                            <img src="/assets/images/about/3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_service wrapper ">
                <Title2 text="ჩვენი სერვისი" />
                <div className="flex">
                    <div data-aos="fade-right">
                        <img src="/assets/images/about/4.png" alt="" style={{ marginBottom: "30px" }} />
                        <p>
                            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                            ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც
                            სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და
                        </p>
                    </div>
                    <div className="grid" data-aos="fade-left">
                        {serviceBoxData.map((box) => {
                            return (
                                <ServiceBox
                                    icon={box.icon}
                                    title={box.title}
                                    paragraph={box.para}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
