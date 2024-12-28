"use client";

import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import white_bg from "@/public/costar_assets/images/link-wallet-shadow.svg"
import colorfull_bg from "@/public/costar_assets/images/colorfull_bg.svg"


const Invite = ({ user, authenticatedUser, allCommission, userCommission }) => {

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    return (
        <>
            <div className="colorfull-bg" style={{
                backgroundImage: `url(${colorfull_bg.src})`,
            }}>
            </div>

            <Breadcrumb
                authUser={user}
                title="INVITE FRIENDS"
                link="/dashboard"
                authenticatedUser={authenticatedUser}
                allCommission={allCommission}
                userCommission={userCommission}
            />
            <div className="linkwallet-section">
                <div className="card-vector-image-wrapper">
                    <div className="vector-image-note">
                        <h3>Invitation</h3>
                        <p>Refer to your friends
                            and earn together!</p>
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
                        <p>Referral Code</p>
                        <h3>{user?.invitation_code ?? ""}</h3>
                        <svg onClick={() => copyToClipboard(user?.invitation_code ?? "")}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 21 21"
                        >
                            <path
                                stroke="#1F2F5C"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M5 4.716v-2.31C5 1.63 5.63 1 6.406 1h12.188C19.37 1 20 1.63 20 2.406v12.188C20 15.37 19.37 16 18.594 16h-2.336"
                            ></path>
                            <path
                                fill="#1F2F5C"
                                stroke="#1F2F5C"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M14.594 5H2.406C1.63 5 1 5.63 1 6.406v12.188C1 19.37 1.63 20 2.406 20h12.188C15.37 20 16 19.37 16 18.594V6.406C16 5.63 15.37 5 14.594 5Z"
                            ></path>
                        </svg>
                    </div>
                    <div className="invitation-msg">
                        <p>Tap the ‘Copy’ icon to copy your invitation code
                            or click below ‘Send Invitation’ button to share</p>
                    </div>
                    <button onClick={() => copyToClipboard(user?.invitation_code ?? "")} className="btn global-primary-btn mt2">SEND INVITE</button>
                </div>
            </div>

        </>
    )
}

export default Invite;