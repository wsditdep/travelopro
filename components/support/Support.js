"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Image from 'next/image';
import white_bg from "@/public/costar_assets/images/support-shadow.svg"
import colorfull_bg from "@/public/costar_assets/images/colorfull_bg.svg"


const Support = ({ setting, authUser, isLink, authenticatedUser, allCommission, userCommission }) => {

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

                <div className="app-global-form invite-padding">
                    <div className="invite-friend-info">
                        <p>Working Hour</p>
                        <h3>11:00 - 23:00</h3>
                    </div>
                    <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>CONTACT US</button>
                </div>
            </div>
        </>
    )
}

export default Support