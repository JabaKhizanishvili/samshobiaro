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
import { ConsultBox } from "../../components/ConsultBox/ConsultBox";
import "./SingleNews.css";
import Layout from "../../Layouts/Layout";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";


const SingleNews = ({ seo, news, newsGallery, currentlocale }) => {
    const date = () => {
        const tveebi = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
        const tveebi1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        let z = news.created_at.split("-");
        z[2] = z[2].split(":");
        z[2] = z[2][0].slice(0, z[2][0].search("T"));
        if (z[1].length == 2 && z[1][0] == 0) {
            z[1] = z[1].slice(1);
        }
        if (currentlocale == 'ge') {
            z[1] = tveebi[z[1] - 1];
            return z;
        } else if (currentlocale == 'en') {
            z[1] = tveebi1[z[1] - 1];
            return z;
        } else return z

    }
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    const { errors, gphone, gemail, gaddress } = usePage().props;
    const otherNews = [
        {
            img: "/assets/images/news/5.png",
            para: "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/assets/images/news/5.png",
            para: "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/assets/images/news/5.png",
            para: "დეველოპერის ან დიზაინერირო ისეთი ამოცანების მარტივად შესრღიურ საქმიანობაში ლება, ყოველდღიურ საქმიანობაში  ",
            date: "12 ოქტომბერი, 2021",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="newsPage singleNewsPage">
                <PageHead
                    title={renderHTML(__('client.singlenews_news', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    prev={renderHTML(__('client.nav_news', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                    active={renderHTML(__('client.nav_singlenews', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                />
                <div className="wrapper2 flex main">
                    <div className="news_list">
                        <img className="main_img"
                            src={news.latest_image != null
                                ? "/" +
                                news.latest_image.path +
                                "/" +
                                news.latest_image.title
                                : null}

                            alt="" />
                        <p>
                            {news.description}
                        </p>
                        <p>
                            {news.short_description}
                        </p>
                        <p>
                            {news.description}
                        </p>
                        <div className="flex">
                            <div className="date">
                                <img src="/assets/images/icons/news/calendar.svg" alt="" />
                                {`${date()[0]} ${date()[1]}, ${date()[2]}`}
                            </div>
                            <Link href={route("client.news.index")} className="return">
                                <img
                                    style={{ transform: "rotate(180deg)", marginRight: "10px" }}
                                    src="/assets/images/icons/news/double-arrow.svg"
                                    alt=""
                                />
                                {renderHTML(__('client.singlenews_backbtn', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <Title3 text={renderHTML(__('client.singlenews_lastadded', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                        {newsGallery.map((item, i) => {
                            const tveebi = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი']
                            const tveebi1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                            const date = () => {
                                let z = item.created_at.split("-");
                                z[2] = z[2].split(":");
                                z[2] = z[2][0].slice(0, z[2][0].search("T"));
                                if (z[1].length == 2 && z[1][0] == 0) {
                                    z[1] = z[1].slice(1);
                                }
                                if (currentlocale == 'ge') {
                                    z[1] = tveebi[z[1] - 1];
                                    return z;
                                } else if (currentlocale == 'en') {
                                    z[1] = tveebi1[z[1] - 1];
                                    return z;
                                } else return z

                            }
                            return (
                                <div className="flex other_news" key={i}>
                                    <div className="img">
                                        <img src={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null} alt="" />
                                    </div>
                                    <div>
                                        <div className="para" style={{ marginBottom: "13px" }}>
                                            {item.short_description}
                                        </div>
                                        <div className="date">
                                            <img src="/assets/images/icons/news/calendar.svg" alt="" /> {`${date()[0]} ${date()[1]}, ${date()[2]}`}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <ConsultBox
                            content={renderHTML(__('client.singlenews_contactus', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            number={gphone.value}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SingleNews;
