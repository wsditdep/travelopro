"use client";

import { createUser } from "@/app/actions/user/action";
import { toast } from 'react-hot-toast';
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useState } from "react";
import SignUpSuccessModal from "../successModal/SignUpSuccessModal";
import SignUpFailModal from "../successModal/SignUpFailModal";

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait... <i className="fa fa-circle-notch rotating-spinner"></i></> : "SIGN UP"}</button>
        </>
    )
}

const SignUp = () => {

    const [isModal, setIsModal] = useState(false);
    const [isFailModal, setIsFailModal] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const [isAgree, setIsAgree] = useState(false);

    const handleForm = async (formData) => {

        if (!isAgree) {
            return toast.error("Please read and accept terms & conditions");
        }

        try {
            const response = await createUser(formData);

            if (response.status === 201) {
                setIsModal(true)
            } else {
                toast.error(response.message);
                setIsFailModal(true);
            }

        } catch (error) {
            console.log(error)
            setIsFailModal(true);
        }
    }

    return (
        <>
            <div className='background-color'>
                {
                    isModal
                        ?
                        <SignUpSuccessModal
                            setIsModal={setIsModal}
                        />
                        :
                        <></>
                }
                {
                    isFailModal
                        ?
                        <SignUpFailModal
                            setIsModal={setIsFailModal}
                        />
                        :
                        <></>
                }
                <div className="sign-up-section">
                    <div className="back-function-wrapper">
                        <div className="back-function-child">
                            <Link href="/signin">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 34.703 41.155"
                                >
                                    <path
                                        id="Path_338"
                                        d="M34.4 65.911a3.745 3.745 0 0 1-1.292 4.6L9.363 84.593 33.1 98.676a3.745 3.745 0 0 1 1.292 4.6 2.7 2.7 0 0 1-3.877 1.533L1.6 87.658a3.737 3.737 0 0 1 0-6.131l28.92-17.149a2.7 2.7 0 0 1 3.88 1.533"
                                        data-name="Path 338"
                                        transform="translate(0 -64.015)"
                                    ></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="back-function-child">
                            <h3>Already have an account? </h3>
                        </div>
                    </div>
                    <div className="signup-heading">
                        <h1>Let’s Get Started</h1>
                        <p>Create an account to continue using</p>
                    </div>
                    <div className="app-global-form">
                        <form action={handleForm}>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type="text"
                                    placeholder="Create a username"
                                    name="username"
                                    required
                                />
                                <svg className="input-primary-svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="14"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        fill="#1F2F5C"
                                        d="M.001 13.717c0 .156.13.283.292.283h13.413a.29.29 0 0 0 .292-.283v-.338c.006-.102.02-.611-.315-1.174a2.76 2.76 0 0 0-.912-.91q-.716-.453-1.816-.653c-.005 0-.55-.072-1.106-.215-.97-.247-1.054-.466-1.055-.469a.3.3 0 0 0-.025-.062c-.007-.04-.027-.194.01-.607.096-1.047.657-1.666 1.109-2.163.142-.157.277-.305.38-.45.447-.627.488-1.34.49-1.384 0-.09-.01-.163-.032-.231-.044-.137-.127-.222-.187-.284l-.041-.044c-.005-.005-.017-.02-.006-.09.04-.26.063-.477.075-.684.02-.37.036-.921-.06-1.458a2 2 0 0 0-.062-.304q-.151-.556-.487-.948C9.919 1.207 8.98.22 6.255.015A9 9 0 0 0 5.14.021c-.088.005-.21.01-.322.04-.282.073-.357.251-.377.351-.032.165.025.294.063.38.006.011.013.027 0 .066a1.3 1.3 0 0 1-.264.27c-.029.025-.712.615-.75 1.384-.101.586-.093 1.498.026 2.128.007.035.018.086 0 .121-.128.116-.274.247-.274.545.002.03.043.743.49 1.37.104.145.238.293.38.45.452.497 1.014 1.116 1.109 2.163.037.413.018.566.01.607a.3.3 0 0 0-.025.062c0 .002-.085.221-1.05.468-.557.143-1.105.216-1.122.218-.712.12-1.315.334-1.79.634-.393.248-.7.555-.914.912a2.2 2.2 0 0 0-.328 1.186z"
                                    ></path>
                                </svg>
                                <input
                                    type="hidden"
                                    name="role"
                                    value="user"
                                />
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type="number"
                                    placeholder="Phone Number"
                                    name="phone_number"
                                    required
                                />
                                <svg className="input-primary-svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 13 16"
                                >
                                    <path
                                        fill="#1F2F5C"
                                        stroke="#1F2F5C"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M1 10.1h11.2v4.2a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7z"
                                    ></path>
                                    <path
                                        stroke="#1F2F5C"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M12.2 10.1V1.7a.7.7 0 0 0-.7-.7H1.7a.7.7 0 0 0-.7.7v8.4"
                                    ></path>
                                    <path stroke="#fff" strokeLinecap="round" d="M6 12.55h2"></path>
                                </svg>
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type={isShow ? "text" : "password"}
                                    placeholder="Create login password"
                                    name="password"
                                    required
                                />
                                {
                                    isShow
                                        ?
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                                                d="m3.825 2.66 1.009 1.407M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                            ></path>
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type={isShow ? "text" : "password"}
                                    placeholder="Re-type login password"
                                    name="cpassword"
                                    required
                                />
                                {
                                    isShow
                                        ?
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                                                d="m3.825 2.66 1.009 1.407M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                            ></path>
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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

                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type={isShow ? "text" : "password"}
                                    placeholder="Create withdrawal password"
                                    name="withdrawal_pin"
                                    required
                                />
                                {
                                    isShow
                                        ?
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                                                d="m3.825 2.66 1.009 1.407M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                            ></path>
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type={isShow ? "text" : "password"}
                                    placeholder="Re-type withdrawal password"
                                    name="cwithdrawal_pin"
                                    required
                                />
                                {
                                    isShow
                                        ?
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                                                d="m3.825 2.66 1.009 1.407M12.52 2.832 11.513 4.24M8.003 1v2.333"
                                            ></path>
                                        </svg>
                                        :
                                        <svg onClick={() => setIsShow(!isShow)} className="input-secondary-svg"
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
                            </div>
                            <div className="app-form-group app-form-group-include-conf">
                                <input
                                    type="text"
                                    placeholder="Referral Code"
                                    name="ref_code"
                                    required
                                />
                                <svg className="input-primary-svg"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#1F2F5C"
                                        stroke="#1F2F5C"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 1h-3.889v3.889H15zM15 11.111h-3.889V15H15zM4.889 11.111H1V15h3.889zM4.889 1H1v3.889h3.889z"
                                    ></path>
                                    <path
                                        stroke="#1F2F5C"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M1.778 8h8.555M13.445 8h.777M8 13.056v.777M8 5.278v5.444M8 1.778v.778"
                                    ></path>
                                </svg>
                            </div>
                            <div className="app-form-group">
                                <Submit />
                            </div>
                            <div className="form-copyright">
                                <div className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        onChange={() => setIsAgree(!isAgree)}
                                    />
                                    <p>By clicking Login or Sign Up button, I agree to the <span>Terms & Conditions</span> and <span>Privacy Policy</span>. </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default SignUp