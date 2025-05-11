"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ConfirmModal from '../successModal/ConfirmModal';
import membership_bg from "@/public/costar_assets/images/membership-bg.png"
import withdrawIcon from "@/public/costar_assets/icons/withdrawIcon.png"
import depositIcon from "@/public/costar_assets/icons/depositIcon.png"
import walletIcon from "@/public/costar_assets/icons/walletIcon.png"
import invitationIcon from "@/public/costar_assets/icons/invitationIcon.png"
import faqIcon from "@/public/costar_assets/icons/faqIcon.png"
import aboutIcon from "@/public/costar_assets/icons/aboutIcon.png"
import tcIcon from "@/public/costar_assets/icons/tcIcon.png"
import securityIcon from "@/public/costar_assets/icons/securityIcon.png"
import supportIcon from "@/public/costar_assets/icons/supportIcon.png"
import user_profile from "@/public/costar_assets/images/user_profile.jpg"
import appraisersIcon from "@/public/costar_assets/icons/appraisersIcon.png"

import vip1 from "@/public/costar_assets/icons/beginnerIcon.png"
import vip2 from "@/public/costar_assets/icons/silverIcon.png"
import vip3 from "@/public/costar_assets/icons/goldIcon.png"
import vip4 from "@/public/costar_assets/icons/platinumIcon.png"
import LuckyDraw from '../draw/LuckyDraw';

const Sidebar = ({ session, isWhite, authenticatedUser, userCommission, allCommission }) => {
    const [isNav, setIsNav] = useState(false);
    const [isConfirm, setIsConfirm] = useState(false);

    const [userMembership, setUserMembership] = useState({});

    const openConfirm = () => {
        setIsConfirm(true);
        setIsNav(false);
    }

    const vipArr = [vip1, vip2, vip3, vip4];

    useEffect(() => {
        const data = allCommission?.filter((item) => {
            return item?.membership_name === userCommission
        })
        setUserMembership(data[0] || {});

    }, [userCommission, allCommission]);

    return (
        <>
            {
                isConfirm
                    ?
                    <ConfirmModal setIsModal={setIsConfirm} />
                    :
                    <></>
            }
            <div className="dashboard-navigation-childs">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                    <LuckyDraw user={JSON.parse(JSON.stringify(authenticatedUser))} />
                    <button className={isWhite ? "colorWhite" : ""} onClick={() => setIsNav(true)}><i className="fa fa-bars"></i></button>
                </div>
                {
                    isNav ? <div className="sidebar-overlay" onClick={() => setIsNav(false)}></div> : <></>
                }
                {
                    isNav
                        ?
                        <>
                            <div className="sidebar-weapper">
                                <div className={isNav ? "sidebar-inner-wrapper rightVal" : "sidebar-inner-wrapper"}>
                                    <div className="sidebar-close-btn">
                                        <i onClick={() => setIsNav(false)} className="fa fa-times"></i>
                                    </div>
                                    <div className="sidebar-user-detail-parent">
                                        <div className="sidebar-user-detail-childs">
                                            {
                                                authenticatedUser?.url === null
                                                    ?
                                                    <Link href="/dashboard/profile">
                                                        <Image
                                                            src={user_profile}
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                            style={{ opacity: "0.5" }}
                                                        />
                                                    </Link>
                                                    :
                                                    <Link href="/dashboard/profile">
                                                        <Image
                                                            src={authenticatedUser?.url ?? ""}
                                                            alt="logo"
                                                            height={100}
                                                            width={100}
                                                        />
                                                    </Link>
                                            }
                                        </div>
                                        <div className="sidebar-user-detail-childs">
                                            <h3>{session?.username}</h3>
                                            <p>{session?.invitation_code}</p>
                                        </div>
                                    </div>
                                    <div className='membership-status-wrapper'>
                                        <div className='staus-background'>
                                            <Image
                                                src={membership_bg}
                                                alt='bg'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                            <div className='status-details'>
                                                <h3>{userMembership?.membership_name ?? "Loading..."}</h3>
                                                <p>{(userMembership?.commission_rate) * 100 ?? "Loading..."}%</p>
                                            </div>
                                            <div className='level-image'>
                                                <Image
                                                    src={
                                                        userMembership?.membership_name === "Junior Traveler"
                                                            ?
                                                            vipArr[0]
                                                            :
                                                            userMembership?.membership_name === "Senior Traveler"
                                                                ?
                                                                vipArr[1]
                                                                :
                                                                userMembership?.membership_name === "Expert Traveler"
                                                                    ?
                                                                    vipArr[2]
                                                                    :
                                                                    vipArr[3]

                                                    }
                                                    alt='icon'
                                                    height={100}
                                                    width={100}
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='link-list-heading'>
                                        <h3>OTHERS</h3>
                                    </div>
                                    <ul className="sidebar-added-css">
                                        <Link href="/dashboard/withdrawal">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={withdrawIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Withdraw</h3>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/recharge">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={depositIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Recharge</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/withdrawal/linkwallet">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={walletIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Link Wallet</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/content/about">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={aboutIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>About Us</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/content/tc">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={tcIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Terms & Conditions</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/content/faq">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={faqIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Frequently Asked Questions</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/invite">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={invitationIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Invitation</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/membership">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={appraisersIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Membership Upgrade</h3>
                                                </div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/recovery/changePassword">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={securityIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Security</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                        <Link href="/dashboard/support">
                                            <li>
                                                <div className='iconAndTitle'>
                                                    <Image
                                                        src={supportIcon}
                                                        alt='icon'
                                                        height={100}
                                                        width={100}
                                                    />
                                                    <h3>Support</h3>
                                                </div>

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 7 7"
                                                >
                                                    <path
                                                        fill="#0C5AAA"
                                                        d="M4.578 3.5.769 5.97a.56.56 0 0 0-.265.395.5.5 0 0 0 .171.425c.128.119.31.193.508.208a.9.9 0 0 0 .547-.132l4.5-2.917a.6.6 0 0 0 .2-.201.5.5 0 0 0 .07-.248.5.5 0 0 0-.07-.247.6.6 0 0 0-.2-.2L1.73.134a.9.9 0 0 0-.548-.133.83.83 0 0 0-.508.208.5.5 0 0 0-.171.426.56.56 0 0 0 .266.396z"
                                                    ></path>
                                                </svg>
                                            </li>
                                        </Link>
                                    </ul>
                                    <div className='logout-button'>
                                        <button onClick={() => openConfirm()}>LOGOUT</button>
                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <></>
                }

            </div>
        </>
    )
}

export default Sidebar