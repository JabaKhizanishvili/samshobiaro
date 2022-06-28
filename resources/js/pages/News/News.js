import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import NewsItem from "./NewsItem/NewsItem";
import { Title3 } from "../../components/Titles/Titles";
import { ConsultBox } from "../../components/ConsultBox/ConsultBox";
import Layout from "../../Layouts/Layout";
import "./News.css";
import { Pagination } from "../../components/Pagination/Pagination";
import { ArrowDown } from "/assets/images/icons/contact/contactIcons";
import "../../components/Pagination/Pagination.css";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";


const News = ({ seo, page, news, blog, gallery, gallerylinks, currentlocale }) => {
    const { errors, gphone, gemail, gaddress } = usePage().props;
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });
    const sharedData = usePage().props.localizations;
    let links = function (links) {
        let rows = [];
        //links.shift();
        //links.splice(-1);
        {
            links.map(function (item, index) {
                if (index > 0 && index < links.length - 1) {
                    rows.push(
                        <Link
                            href={item.url}
                            className={item.active ? "pageNum active" : "pageNum"}
                        >
                            {item.label}
                        </Link>
                    );
                }
            });
        }
        return <div className="nums"> {rows.length > 1 ? rows : null} </div>;
    };

    let linksPrev = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[0].url}>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}
                <button className="arrow" style={{ transform: "rotate(-90deg)" }}>
                    <ArrowDown color="#1DBFCC" />
                </button>
                {/* <Arrow color="#2F3E51" rotate="90" /> */}

            </Link>
        ) : null;
    };
    let linksNext = function (links) {
        let rowCount = 0;
        links.map(function (item, index) {
            if (index > 0 && index < links.length - 1) {
                rowCount++;
            }
        });
        return rowCount > 1 ? (
            <Link href={links[links.length - 1].url}>
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                {/* <Arrow color="#2F3E51" rotate="-90" /> */}
                <button className="arrow" style={{ transform: "rotate(90deg)" }}>
                    <ArrowDown color="#1DBFCC" />
                </button>
            </Link>
        ) : null;
    };
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
                <PageHead title={renderHTML(__('client.news_news', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} prev={renderHTML(__('client.nav_main', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} active={renderHTML(__('client.nav_news', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                <div className="wrapper2 flex main">
                    <div className="news_list">
                        {blog.data.map((item, i) => {
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
                                } else {
                                    z[1] = tveebi1[z[1] - 1];
                                    return z;
                                }
                            }
                            return (
                                <React.Fragment key={i}>
                                    <NewsItem
                                        imgSrc={item.latest_image != null
                                            ? "/" +
                                            item.latest_image.path +
                                            "/" +
                                            item.latest_image.title
                                            : null}
                                        title={item.name}
                                        paragraph={item.short_description}
                                        date={`${date()[0]} ${date()[1]}, ${date()[2]}`}
                                        id={item.id}
                                    />
                                </React.Fragment>
                            );
                        })}
                        {/* <Pagination /> */}
                        <div className="pagination flex centered">
                            {linksPrev(blog.links)}
                            <button className="pageNum">{links(blog.links)}</button>
                            {linksNext(blog.links)}
                        </div>
                    </div>
                    <div className="right">
                        <Title3 text={renderHTML(__('client.news_gallery', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))} />
                        <div className="img_grid">
                            {gallery.map((img, i) => {
                                return (
                                    // <img key={i}
                                    // src={img.latest_image != null
                                    //     ? "/" +
                                    //     img.latest_image.path +
                                    //     "/" +
                                    //     img.latest_image.title
                                    //     : null} alt='asd' />

                                    <img key={i} src={gallerylinks + "/" + img.name} />
                                );
                            })}
                        </div>
                        <ConsultBox
                            content={renderHTML(__('client.news_contactifo', sharedData).replace(/(?:\r\n|\r|\n)/g, '<br>'))}
                            number={gphone.value}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default News;
