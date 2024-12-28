import Image from 'next/image';
import React from 'react';
import logoutPic from "@/public/costar_assets/popUp_vector/logout_vect.svg";
import popup_bg from "@/public/costar_assets/images/popup_bg.svg";
import { logout } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';

const ConfirmModal = ({ setIsModal }) => {

    const router = useRouter();

    const logoutfunc = async () => {
        await logout();
        setIsModal(false)
        router.push("/");
    }

    return (
        <div className="success-modal-wrapper">
            <div className="success-modal-wrapper-inner">
                <div className="success-modal-wrapper-image">
                    <Image
                        src={logoutPic}
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
                    <h3>LEAVING SOON...?</h3>
                    <div className="close-modal">
                        <button className='btn1' onClick={() => setIsModal(false)}>NO</button>
                        <button className='btn2' onClick={() => logoutfunc()}>YES, I DO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal