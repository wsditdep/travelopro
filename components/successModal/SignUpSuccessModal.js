"use client";

import Image from 'next/image';
import React from 'react';
import register_sucess from "@/public/costar_assets/images/register-sucess.svg";
import popup_bg from "@/public/costar_assets/images/popup_bg.svg";
import { useRouter } from 'next/navigation';

const SignUpSuccessModal = ({ setIsModal }) => {
    const router = useRouter()

    const sendToLogin = () => {
        return router.push("/signin")
    }
    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={register_sucess}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                    <Image
                        src={popup_bg}
                        height={100}
                        width={100}
                        alt="modal"
                        unoptimized
                    />
                </div>
                <div className="success-modal-wrapper-content">
                    <h3>REGISTRATION SUCESS</h3>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        <button className='btn2' onClick={() => sendToLogin()}>LOG ME IN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpSuccessModal