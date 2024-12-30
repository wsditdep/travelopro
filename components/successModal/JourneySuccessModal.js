"use client";

import Image from 'next/image';
import React from 'react';
import booking_sucess from "@/public/costar_assets/popUp_vector/booking_sucess.svg";
import popup_bg from "@/public/costar_assets/images/popup_bg.svg";
import { useRouter } from 'next/navigation';
;

const JourneySuccessModal = ({ setIsModal }) => {

    const router = useRouter();

    const showRecords = () => {
        router.push("/dashboard/history");
    }

    const backFunc = () => {
        router.push("/dashboard/journey");
    }

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={booking_sucess}
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
                    <h3>SUBMIT SUCCESSFUL</h3>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => backFunc()}>CLOSE</button>
                        <button className='btn2' onClick={() => showRecords()}>CHECK HISTORY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneySuccessModal;