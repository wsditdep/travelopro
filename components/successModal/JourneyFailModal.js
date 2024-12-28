"use client";

import Image from 'next/image';
import React from 'react';
import booking_fail from "@/public/costar_assets/popUp_vector/booking_fail.svg"
import popup_bg from "@/public/costar_assets/images/popup_bg.svg";

const JourneyFailModal = ({ setIsModal }) => {

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={booking_fail}
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
                    <h3>BOOKING FAILED</h3>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>CLOSE</button>
                        <button className='btn2' onClick={() => setIsModal(false)}>TRY AGAIN </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JourneyFailModal