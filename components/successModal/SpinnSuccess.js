"use client";

import Image from 'next/image';
import React from 'react';
import register_sucess from "@/public/costar_assets/images/register-sucess.svg";
import popup_bg from "@/public/costar_assets/images/popup_bg.svg";
import { useRouter } from 'next/navigation';

const SpinnSuccess = ({ amount }) => {
    const router = useRouter()

    const sendBack = () => {
        return router.push("/dashboard")
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
                {
                        amount === "Try Again"
                            ?
                            <>
                                <h3>Sorry!</h3>
                                <p>
                                    Please try agin Later <br />
                                    Better luck next time!
                                </p>
                            </>
                            :
                            amount === "0"
                                ?
                                <>
                                    <h3>Sorry!</h3>
                                    <p>
                                        Please try agin Later <br />
                                        Better luck next time!
                                    </p>
                                </>
                                :
                                <>
                                    <h3>Congratulations -  You Win ${amount}!</h3>
                                    <p>
                                        ${amount} has been credited to your account!
                                    </p>
                                </>
                    }
                    <div className="close-modal">
                        <button className='btn1' onClick={()=> sendBack()}>CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpinnSuccess