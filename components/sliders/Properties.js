"use client";

import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import properyImg1 from "@/public/costar_assets/images/lenox-hillImg.png"
// import properyImg2 from "@/public/costar_assets/images/midtown_img.png"
// import properyImg3 from "@/public/costar_assets/images/upperEast_img.png"
// import properyImg4 from "@/public/costar_assets/images/lincolnSquare_img.png"
// import properyImg5 from "@/public/costar_assets/images/carnegieHill_img.png"
// import properyImg6 from "@/public/costar_assets/images/parkAvenue_img.png"
import properyImg1 from "@/public/costar_assets/slider1_images/img1.jpg";
import properyImg2 from "@/public/costar_assets/slider1_images/img2.jpg";
import properyImg3 from "@/public/costar_assets/slider1_images/img3.jpg";
import properyImg4 from "@/public/costar_assets/slider1_images/img4.jpg";
import properyImg5 from "@/public/costar_assets/slider1_images/img5.jpg";
import properyImg6 from "@/public/costar_assets/slider1_images/img6.jpg";
import properyImg7 from "@/public/costar_assets/slider1_images/img7.jpg";
import properyImg8 from "@/public/costar_assets/slider1_images/img8.jpg";


const Properties = () => {

    const settings = {
        dots: false,  // Enables navigation dots at the bottom
        infinite: false, // Enables infinite scrolling
        speed: 500,  // Transition speed in milliseconds
        slidesToShow: 1.5,  // Number of cards to show at a time
        slidesToScroll: 1,  // Number of cards to scroll at a time
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
            <div className="destination-wrapper">
                <div className="destination-title">
                    <h2>Property Nearby</h2>
                </div>
                <Slider {...settings}>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg1}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>EUROPE</h1>
                            <p>The hub of history & culture</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg2}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>NORTH AMERICA</h1>
                            <p>Land of dreams & diversity</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg3}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>ASIA</h1>
                            <p>The pulse of tradition & innovation</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg4}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>CENTRAL AMERICA</h1>
                            <p>A blend of cultures & nature</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg5}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>OCEANIA</h1>
                            <p>Islands of paradise & adventure</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg6}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>SOUTH AMERICA</h1>
                            <p>Passionate & untamed</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg7}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>SOUTH AMERICA</h1>
                            <p>Passionate & untamed</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="destination-details-wrapper">
                        <Image
                            src={properyImg8}
                            height={100}
                            width={100}
                            alt="white"
                            unoptimized
                        />
                        <div className="destination-details">
                            <h1>MIDDLE EAST</h1>
                            <p>The cradle of ancient civilizations</p>
                            <ul>
                                <li>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                    <i className='fa fa-star'></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Properties