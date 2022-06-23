import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
// import Img1 from "/assets/images/news/6.png";
// import Img2 from "/assets/images/news/5.png";
// import Img3 from "/assets/images/news/4.png";
// import Img4 from "/assets/images/news/1.png";
// import Calendar from "../../assets/images/icons/news/calendar.svg";
// import Arrow from "/assets/images/icons/news/double-arrow.svg";
import { Title3 } from "../../components/Titles/Titles";
// import { Link } from "react-router-dom";
import { Link } from '@inertiajs/inertia-react'
import { ConsultBox } from "../../components/ConsultBox/ConsultBox";
import "./SingleNews.css";

const SingleNews = () => {
    const otherNews = [
        {
            img: Img2,
            para: "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: Img3,
            para: "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: Img4,
            para: "დეველოპერის ან დიზაინერირო ისეთი ამოცანების მარტივად შესრღიურ საქმიანობაში ლება, ყოველდღიურ საქმიანობაში  ",
            date: "12 ოქტომბერი, 2021",
        },
    ];
    return (
        <div className="newsPage singleNewsPage">
            <PageHead
                title="ახალი N2 სამშობიარო სახლი"
                prev="სიახლეები"
                active="ახალი N2 "
            />
            <div className="wrapper2 flex main">
                <div className="news_list">
                    <img className="main_img" src={Img1} alt="" />
                    <p>
                        დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე
                        საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური
                        ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია,
                        თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად
                        ვიყენებთ ხოლმე.
                    </p>
                    <p>
                        დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე
                        საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური
                        ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია,
                        თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად
                        ვიყენებთ ხოლმედეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში
                        ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                        რომელსაც სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და
                        ინსტრუმენტები უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც
                        ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე.
                    </p>
                    <p>
                        დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე
                        საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური
                        ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია,
                        თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად
                        ვიყენებთ ხოლმე.დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში
                        ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                        რომელსაც სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და
                        ინსტრუმენტები უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც
                        ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე.
                    </p>
                    <div className="flex">
                        <div className="date">
                            <img src="/assets/images/icons/news/calendar.svg" alt="" />
                            12 ოქტომბერი, 2021
                        </div>
                        <Link href="/news" className="return">
                            <img
                                style={{ transform: "rotate(180deg)", marginRight: "10px" }}
                                src="/assets/images/icons/news/double-arrow.svg"
                                alt=""
                            />
                            უკან დაბრუნება
                        </Link>
                    </div>
                </div>
                <div className="right">
                    <Title3 text="ბოლოს დამატებული" />
                    {otherNews.map((item) => {
                        return (
                            <div className="flex other_news">
                                <div className="img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div>
                                    <div className="para" style={{ marginBottom: "13px" }}>
                                        {item.para}
                                    </div>
                                    <div className="date">
                                        <img src="/assets/images/icons/news/calendar.svg" alt="" /> {item.date}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <ConsultBox
                        content="კონსულტაციაზე ჩასაწერად დაგვიკავშირდით"
                        number="+995 032 2 111 111"
                    />
                </div>
            </div>
        </div>
    );
};

export default SingleNews;
