"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import white_bg from "@/public/costar_assets/images/support-shadow.svg"
import colorfull_bg from "@/public/costar_assets/images/colorfull_bg.svg"
import Link from 'next/link';


const Support = ({ setting, authUser, isLink, authenticatedUser, allCommission, userCommission, support }) => {

    const handleAddFundsClick = () => {
        if (window.LC_API && typeof window.LC_API.open_chat_window === 'function') {
            window.LC_API.open_chat_window();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

    return (
        <>
            <div className="colorfull-bg" style={{
                backgroundImage: `url(${colorfull_bg.src})`,
            }}>
            </div>
            {
                isLink
                    ?
                    <Breadcrumb
                        authUser={authUser}
                        title="Support"
                        link="/signin"
                        isLink={isLink}
                    />
                    :
                    <Breadcrumb
                        authUser={authUser}
                        title="Support"
                        link="/dashboard"
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                    />
            }
            <div className="linkwallet-section">
                <div className="card-vector-image-wrapper">
                    <div className="vector-image-note">
                        <h3>Need help?</h3>
                        <p>Don’t worry, we got your back!
                            Contact us now for assist.</p>
                    </div>
                    <div className="card-vector-image">
                        <Image
                            src={white_bg}
                            alt="shadow"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
                <div className="support-info">
                    <h3>Contact us with Livechat or Telegram</h3>
                    <p>Agency Service Operation Time: {support?.work_time ?? ""}</p>
                </div>
                <div className="app-global-form invite-padding">
                    <div className="invite-friend-info">
                        <p>Working Hour</p>
                        <h3>{support?.work_time ?? ""}</h3>
                    </div>
                    <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>Contact us with Livechat</button>
                    <Link href={`${support?.link ?? ""}`} target="_blank">
                        <button className="btn global-primary-btn">Contact us with Telegram</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Support