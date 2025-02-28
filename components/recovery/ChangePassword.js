"use client";

import { useState } from 'react';
import { useFormStatus } from "react-dom";
import { logout, resetPassword } from "@/app/actions/user/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Link from 'next/link';
import Image from "next/image";
import white_bg from "@/public/costar_assets/images/security-shadow.svg"
import colorfull_bg from "@/public/costar_assets/images/colorfull_bg.svg"


function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? "Submitting..." : "CHANGE PASSWORD"}</button>
        </>
    )
}

const ChangePassword = ({ authUser, authenticatedUser, allCommission, userCommission }) => {
    const { push } = useRouter();

    const [isShow, setIsShow] = useState(false);

    const handleForm = async (formData) => {
        try {
            const response = await resetPassword(formData);

            if (response.status === 201) {
                toast.success(response.message);
                await logout();
                push('/signin');
                return;
            } else {
                toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="colorfull-bg" style={{
                backgroundImage: `url(${colorfull_bg.src})`,
            }}>
            </div>
            <Breadcrumb
                authUser={authUser}
                title="Security"
                link="/dashboard"
                authenticatedUser={authenticatedUser}
                allCommission={allCommission}
                userCommission={userCommission}
            />
            <div className="linkwallet-section page_animation">
                <div className="card-vector-image-wrapper">
                    <div className="vector-image-note">
                        <h3>Security Center</h3>
                        <p>Change your passwords here</p>
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
                    <form action={handleForm}>
                        <div className="security-tab">
                            <Link href="/dashboard/recovery/changePassword">
                                <button className="security-tab-active">Security PIN</button>
                            </Link>
                            <Link href="/dashboard/recovery/changePin">
                                <button>Withdrawal PIN</button>
                            </Link>
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow ? "test" : "password"}
                                placeholder="Current Password"
                                name="old_password"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                            />
                            <svg className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                fill="none"
                                viewBox="0 0 15 16"
                            >
                                <path
                                    fill="#1F2F5C"
                                    stroke="#1F2F5C"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12.9 7.3H1.7A.7.7 0 0 0 1 8v6.3a.7.7 0 0 0 .7.7h11.2a.7.7 0 0 0 .7-.7V8a.7.7 0 0 0-.7-.7Z"
                                ></path>
                                <path
                                    stroke="#1F2F5C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3.8 7.3V4.5a3.5 3.5 0 0 1 7 0v2.8"
                                ></path>
                                <path
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M7.3 10.1v2.1"
                                ></path>
                            </svg>
                            {
                                isShow
                                    ?

                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="15"
                                        fill="none"
                                        viewBox="0 0 16 15"
                                    >
                                        <path
                                            fill="#1F2F5C"
                                            fillRule="evenodd"
                                            stroke="#1F2F5C"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 14.222c3.866 0 7-3.236 7-5.444s-3.134-5.445-7-5.445-7 3.239-7 5.445 3.134 5.444 7 5.444Z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            stroke="#fff"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 11.111a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z"
                                        ></path>
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeWidth="1.5"
                                            d="m3.825 2.659 1.009 1.408M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="8"
                                        fill="none"
                                        viewBox="0 0 16 8"
                                    >
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M1.368 1c.234.45.588.866 1.04 1.236 1.266 1.038 3.299 1.71 5.59 1.71s4.324-.672 5.59-1.71c.452-.37.806-.787 1.04-1.236M9.831 3.947l.763 2.846M12.917 2.972 15 5.055M1 5.055l2.084-2.083M5.393 6.793l.763-2.846"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow ? "test" : "password"}
                                placeholder="New Password"
                                name="new_password"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                            />
                            <svg className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                fill="none"
                                viewBox="0 0 15 16"
                            >
                                <path
                                    fill="#1F2F5C"
                                    stroke="#1F2F5C"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12.9 7.3H1.7A.7.7 0 0 0 1 8v6.3a.7.7 0 0 0 .7.7h11.2a.7.7 0 0 0 .7-.7V8a.7.7 0 0 0-.7-.7Z"
                                ></path>
                                <path
                                    stroke="#1F2F5C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3.8 7.3V4.5a3.5 3.5 0 0 1 7 0v2.8"
                                ></path>
                                <path
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M7.3 10.1v2.1"
                                ></path>
                            </svg>
                            {
                                isShow
                                    ?

                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="15"
                                        fill="none"
                                        viewBox="0 0 16 15"
                                    >
                                        <path
                                            fill="#1F2F5C"
                                            fillRule="evenodd"
                                            stroke="#1F2F5C"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 14.222c3.866 0 7-3.236 7-5.444s-3.134-5.445-7-5.445-7 3.239-7 5.445 3.134 5.444 7 5.444Z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            stroke="#fff"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 11.111a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z"
                                        ></path>
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeWidth="1.5"
                                            d="m3.825 2.659 1.009 1.408M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="8"
                                        fill="none"
                                        viewBox="0 0 16 8"
                                    >
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M1.368 1c.234.45.588.866 1.04 1.236 1.266 1.038 3.299 1.71 5.59 1.71s4.324-.672 5.59-1.71c.452-.37.806-.787 1.04-1.236M9.831 3.947l.763 2.846M12.917 2.972 15 5.055M1 5.055l2.084-2.083M5.393 6.793l.763-2.846"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type={isShow ? "test" : "password"}
                                placeholder="Confirm Password"
                                name="confirm_password"
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                            />
                            <svg className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="16"
                                fill="none"
                                viewBox="0 0 15 16"
                            >
                                <path
                                    fill="#1F2F5C"
                                    stroke="#1F2F5C"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M12.9 7.3H1.7A.7.7 0 0 0 1 8v6.3a.7.7 0 0 0 .7.7h11.2a.7.7 0 0 0 .7-.7V8a.7.7 0 0 0-.7-.7Z"
                                ></path>
                                <path
                                    stroke="#1F2F5C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M3.8 7.3V4.5a3.5 3.5 0 0 1 7 0v2.8"
                                ></path>
                                <path
                                    stroke="#fff"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M7.3 10.1v2.1"
                                ></path>
                            </svg>
                            {
                                isShow
                                    ?

                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="15"
                                        fill="none"
                                        viewBox="0 0 16 15"
                                    >
                                        <path
                                            fill="#1F2F5C"
                                            fillRule="evenodd"
                                            stroke="#1F2F5C"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 14.222c3.866 0 7-3.236 7-5.444s-3.134-5.445-7-5.445-7 3.239-7 5.445 3.134 5.444 7 5.444Z"
                                            clipRule="evenodd"
                                        ></path>
                                        <path
                                            fill="#fff"
                                            stroke="#fff"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M8 11.111a2.333 2.333 0 1 0 0-4.667 2.333 2.333 0 0 0 0 4.667Z"
                                        ></path>
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeWidth="1.5"
                                            d="m3.825 2.659 1.009 1.408M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                        ></path>
                                    </svg>
                                    :
                                    <svg onClick={() => setIsShow(!isShow)} className='input-secondary-svg'
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="8"
                                        fill="none"
                                        viewBox="0 0 16 8"
                                    >
                                        <path
                                            stroke="#1F2F5C"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M1.368 1c.234.45.588.866 1.04 1.236 1.266 1.038 3.299 1.71 5.59 1.71s4.324-.672 5.59-1.71c.452-.37.806-.787 1.04-1.236M9.831 3.947l.763 2.846M12.917 2.972 15 5.055M1 5.055l2.084-2.083M5.393 6.793l.763-2.846"
                                        ></path>
                                    </svg>
                            }
                        </div>
                        <div className="app-form-group">
                            <Submit />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePassword