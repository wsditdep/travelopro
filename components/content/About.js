"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import Image from 'next/image';
import about_bg from "@/public/costar_assets/images/aboutUs_img.jpg"
import white_logo from "@/public/costar_assets/logos/white_logo.svg"
import blackLogo from "@/public/costar_assets/logos/black_logo.svg"
import laptopImg from "@/public/costar_assets/images/laptopImg.jpg"
import inventoryImg from "@/public/costar_assets/images/inventoryImg.jpg"
import marketingImg from "@/public/costar_assets/images/marketingImg.jpg"
import analyticsImg from "@/public/costar_assets/images/analyticsImg.jpg"
import Link from 'next/link';

const About = ({ data, allCommission, userCommission, authenticatedUser }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "about")[0];
        setInfo(infoData);
    }, []);

    return (
        <>

            <div className='about-us-page-wrapper'>
                <Breadcrumb
                    title={"About Us"}
                    link="/dashboard"
                    authUser={authenticatedUser}
                    authenticatedUser={authenticatedUser}
                    allCommission={allCommission}
                    userCommission={userCommission}
                />
                <div className='about-page-details-wrapper'>
                    <section className="content-section">
                        <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About