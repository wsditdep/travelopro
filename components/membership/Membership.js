"use client";

import Image from "next/image";
import vip1 from "@/public/costar_assets/icons/beginnerIcon.png"
import vip2 from "@/public/costar_assets/icons/silverIcon.png"
import vip3 from "@/public/costar_assets/icons/goldIcon.png"
import vip4 from "@/public/costar_assets/icons/platinumIcon.png"
import { useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Membership = ({ membership, authenticatedUser, allCommission, userCommission }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const arrayVip = [vip1, vip2, vip3, vip4];
    const arrayText = [
        "Perfect for those just starting out",
        "Easy integration to your website for FAST payments",
        "Take your business to new heights",
        "Scale your business with everything on PLUS",
    ];

    const toggleDropdown = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <>
            <Breadcrumb
                link="/dashboard"
                title="MEMBERSHIP UPGRADE"
                authenticatedUser={authenticatedUser}
                allCommission={allCommission}
                userCommission={userCommission}
            />
            <div className="membership-wrapper">
                <div className="membership-wrapper-intro">
                    <h3>START WITH THE RIGHT PLAN</h3>
                    <p>Choose the plan that works for your travel business-no matter where you are in your journey.</p>
                </div>
                {
                    membership?.map((data, index) => (
                        <div className="membership-card" key={index} onClick={() => toggleDropdown(index)}>
                            <div className="membership-card-wrapper">
                                <div className="membership-card-wrapper-childs">
                                    <h1>{data?.membership_name}</h1>
                                    <p>Automation Level</p>
                                </div>
                                <div className="membership-card-wrapper-childs">
                                    <i
                                        className={`fa ${activeIndex === index ? "fa-angle-down" : "fa-angle-left"
                                            }`}
                                    ></i>
                                </div>
                            </div>
                            {activeIndex === index && (
                                <>
                                    <div className="membership-card-dropdown">
                                        <Image
                                            src={arrayVip[index]}
                                            alt="vip"
                                            height={100}
                                            width={100}
                                            unoptimized
                                        />
                                        <p>{arrayText[index]}</p>
                                    </div>
                                    <div className="membership-card-dropdown-more">
                                        <div className="membership-card-dropdown-inner">
                                            <h4 style={{
                                                color: "red",
                                                textDecoration: "underline"

                                            }}>PAYMENT WALLET</h4>
                                            <p>CRYPTO WALLET</p>
                                        </div>
                                        <div className="membership-card-dropdown-inner">
                                            <h4>Daily journey</h4>
                                            <p>{data?.order_quantity}</p>
                                        </div>
                                        <div className="membership-card-dropdown-inner">
                                            <h4>Normal journey rebate</h4>
                                            <p>{(data?.commission_rate * 100)?.toFixed(2)} %</p>
                                        </div>
                                        <div className="membership-card-dropdown-inner">
                                            <h4>Special journey rebate</h4>
                                            <p>{(data?.ticket_commission * 100)?.toFixed(2)} %</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Membership