import React, { useState, useEffect } from "react";
// import SliderImg1 from "/assets/images/hero/1.png";
// import SliderImg2 from "/assets/images/hero/2.png";
// import SliderImg3 from "/assets/images/hero/3.png";
// import { ArrowDown } from "../../../assets/images/icons/contact/contactIcons";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import "./HeroSlider.css";

const HeroSlider = () => {
    const images = ["/assets/images/hero/1.png", "/assets/images/hero/2.png", "/assets/images/hero/3.png"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = SliderData.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);

        return () => {
            clearInterval(slider);
        };
    }, [index]);

    const moveDot = (i) => {
        setIndex(i);
    };
    const SliderData = [
        {
            title: "სამშობიარო სახლში სიახლეა, გაიგე მეტი!",
            paragraph:
                "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ",
        },
        {
            title: " კსჯდფოინ ლკჯნპო  იჰკჰბ ",
            paragraph:
                "It has roots in a piece of classical LatiContrary to popular ndom text. n literature",
        },
        {
            title: " უყფუყგ ჯიჯი გოიუ",
            paragraph:
                "Why random tContrary  Lorem Ipsum is notto popular belief simplext. It has roots in a piece of classical t. It has roots in a piece of classical t. It has roots in a piece of classical Latin literature",
        },
    ];
    return (
        <div className="heroSlider ">
            {SliderData.map((data, indexData, i) => {
                let position = "nextSlide";
                if (indexData === index) {
                    position = "activeSlide";
                }
                if (
                    indexData === index - 1 ||
                    (index === 0 && indexData === data.length - 1)
                ) {
                    position = "lastSlide";
                }
                return (
                    <article className={position} key={indexData}>
                        <img className="bg" src={images[indexData]} alt="hero img" />
                        <div className="content wrapper">
                            <h3>{data.title}</h3>
                            <p>{data.paragraph}</p>
                            <MainBtn text="გაიგე მეტი" />
                        </div>
                    </article>
                );
            })}
            <button onClick={() => setIndex(index - 1)} className="arrow prev">
                {/* <ArrowDown color="#1dbfcc" /> */}
            </button>
            <button onClick={() => setIndex(index + 1)} className="arrow next">
                {/* <ArrowDown color="#1dbfcc" /> */}
            </button>
            <div className="pagination">
                {Array.from({ length: SliderData.length }).map((item, i) => {
                    return (
                        <button
                            key={i}
                            onClick={() => moveDot(i)}
                            className={index === i ? "active" : ""}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroSlider;
