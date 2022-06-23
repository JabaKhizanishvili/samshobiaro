import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
// import Img1 from "/assets/images/news/6.png";
// import Img2 from "/assets/images/news/5.png";
// import Img3 from "/assets/images/news/4.png";
// import Img4 from "/assets/images/news/1.png";
// import Img5 from "/assets/images/news/3.png";
import NewsItem from "./NewsItem/NewsItem";
import { Title3 } from "../../components/Titles/Titles";
import { ConsultBox } from "../../components/ConsultBox/ConsultBox";
import Layout from "../../Layouts/Layout";
import "./News.css";
import { Pagination } from "../../components/Pagination/Pagination";

const News = ({ seo, page }) => {
    const newsData = [
        {
            img: "/assets/images/news/6.png",
            title: "ახალი N2 სამშობიარო სახლი",
            paragraph:
                "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დილსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხო",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/assets/images/news/5.png",
            title: "ახალი N2 სამშობიარო სახლი",
            paragraph:
                "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დილსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხო",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/assets/images/news/4.png",
            title: "ახალი N2 სამშობიარო სახლი",
            paragraph:
                "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები და ინსტრუმენტები უამრავია, თუმცა არსებობს რამდენიმე ძირითადი, რომელსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დილსაც ომედიაში ყველაზე ხშირად ვიყენებთ ხოლმე. დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხო",
            date: "12 ოქტომბერი, 2021",
        },
    ];
    const imgGrid = ["/assets/images/news/6.png", "/assets/images/news/5.png", "/assets/images/news/4.png", "/assets/images/news/1.png", "/assets/images/news/3.png", "/assets/images/news/6.png"];
    return (
        <Layout seo={seo}>
            <div className="newsPage">
                <PageHead title="სიახლეები" prev="მთავარი" active="სიახლეები" />
                <div className="wrapper2 flex main">
                    <div className="news_list">
                        {newsData.map((item) => {
                            return (
                                <NewsItem
                                    imgSrc={item.img}
                                    title={item.title}
                                    paragraph={item.paragraph}
                                    date={item.date}
                                />
                            );
                        })}
                        <Pagination />
                    </div>
                    <div className="right">
                        <Title3 text="გალერეა" />
                        <div className="img_grid">
                            {imgGrid.map((img, i) => {
                                return <img key={i} src={img} alt="" />;
                            })}
                        </div>
                        <ConsultBox
                            content="კონსულტაციაზე ჩასაწერად დაგვიკავშირდით"
                            number="+995 032 2 111 111"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default News;
