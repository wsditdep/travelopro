"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import Image1 from "@/public/costar_assets/images/upperEast_img.png"
// import Image2 from "@/public/costar_assets/images/suttonPlace.png"
// import Image3 from "@/public/costar_assets/images/greenwichVillage.png"
// import Image4 from "@/public/costar_assets/images/nomad_img.png"
// import Image5 from "@/public/costar_assets/images/beekmanImg.png"
// import Image6 from "@/public/costar_assets/images/chelseaImg.png"
// import Image7 from "@/public/costar_assets/images/westVillage.png"
// import Image8 from "@/public/costar_assets/images/centralPark.png"
import Image1 from "@/public/costar_assets/slider2_images/img1.png";
import Image2 from "@/public/costar_assets/slider2_images/img2.jpg";
import Image3 from "@/public/costar_assets/slider2_images/img3.jpg";
import Image4 from "@/public/costar_assets/slider2_images/img4.jpg";


const UniqueProperties = () => {

    const settings = {
        dots: false,  // Enables navigation dots at the bottom 
        infinite: false, // Enables infinite scrolling
        speed: 500,  // Transition speed in milliseconds
        slidesToShow: 1.8,  // Number of cards to show at a time
        slidesToScroll: 1,  // Number of cards to scroll at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    return (
        <>
            <div className="properties-wrapper">
                <div className="property-title">
                    <h2>You might be interested </h2>
                </div>
                <Slider {...settings}>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image1}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3>SHANGRI-LA </h3>
                                <p>London, GB</p>
                                <ui>
                                    <li>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star empty-fullStar'></i>
                                    </li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image2}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3>HILTON ISTANBUL BOMONTI HOTEL </h3>
                                <p>Istanbul, TR</p>
                                <ui>
                                    <li>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star-half-alt'></i>
                                    </li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image3}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3>AMSTERDAM MARRIOT HOTEL</h3>
                                <p>Amsterdam, NL</p>
                                <ui>
                                    <li>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star-half-alt'></i>
                                        <i className='fa fa-star empty-fullStar'></i>
                                    </li>
                                </ui>
                            </div>
                        </div>
                    </div>
                    <div className="property-img-parent">
                        <div className="property-img-child">
                            <Image
                                src={Image4}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                            <div className="img-details">
                                <h3>W HOTEL BARCELONA</h3>
                                <p>Barcelona, ES</p>
                                <ui>
                                    <li>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </li>
                                </ui>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default UniqueProperties;