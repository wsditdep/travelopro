"use client";

import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Image from 'next/image';
import { useState } from 'react';
import ConfirmModal from '../successModal/ConfirmModal';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { uploadProfile } from '@/app/actions/profile/action';
import Loader from '../loader/Loader';
import profileCard from "@/public/costar_assets/images/profile_card.svg"
import user_profile from "@/public/costar_assets/images/user_profile.jpg"

const Profile = ({ user, authenticatedUser, userCommission, allCommission }) => {

    const router = useRouter();

    const copyToClipboard = (val) => {
        navigator.clipboard.writeText(val);
        return toast.success(`Copied - (${val})`);
    }

    const [isConfirm, setIsConfirm] = useState(false);
    const [file, setFile] = useState(null);
    const [pending, setPending] = useState(false);

    const handleForm = async (selectedFile) => {
        if (!selectedFile) {
            return toast.error("Please choose an image!");
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_IMAGE_UPLOAD_PRESET);

        // upload image to cloudinary::begin
        try {
            setPending(true);
            const cloud_res = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`, {
                method: "POST",
                body: formData
            });

            const cloud_data = await cloud_res.json();

            if (cloud_res.ok) {
                // Save in database::begin
                try {
                    const formData = new FormData();
                    formData.append("public_id", cloud_data.public_id);
                    formData.append("url", cloud_data.url);

                    const response = await uploadProfile(formData);

                    if (response.status === 201) {
                        router.refresh();
                        setFile(null);  // Reset file after successful upload
                        setPending(false);
                        return toast.success(response.message);
                    } else {
                        setPending(false);
                        throw new Error("Failed to upload profile image!");
                    }
                } catch (error) {
                    setPending(false);
                    console.error(error);
                }
                // Save in database::end
            } else {
                setPending(false);
                throw new Error("Failed to upload profile image!");
            }

        } catch (error) {
            setPending(false);
            console.error(error);
        }
        // upload image to cloudinary::end
    };

    return (
        <>
            <div className='background-color page_animation'>
                <Breadcrumb
                    title="PROFILE"
                    link="/dashboard"
                    authenticatedUser={authenticatedUser}
                    userCommission={userCommission}
                    allCommission={allCommission}
                />
                {
                    isConfirm
                        ?
                        <ConfirmModal
                            setIsModal={setIsConfirm}
                        />
                        :
                        <></>
                }
                {
                    pending ? <Loader /> : <></>
                }

                <section className="profile-section">
                    <div className='profile-inner-wrapper'>
                        <div className='profile-details-parent'>
                            <div className='profile-details-child'>
                                <Image
                                    src={profileCard}
                                    alt='card'
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                                <form>
                                    <div className='profile-details-user-child'>
                                        {
                                            file === null
                                                ?
                                                <Image
                                                    src={user?.url === null ? user_profile : user?.url}
                                                    width={100}
                                                    height={100}
                                                    alt="choosen file"
                                                    className={user?.url === null ? "image-pre" : ""}
                                                    unoptimized
                                                    onClick={() => document.getElementById('file-upload').click()}
                                                />
                                                :
                                                <Image
                                                    src={URL.createObjectURL(file)}
                                                    width={100}
                                                    height={100}
                                                    alt="file"
                                                    unoptimized
                                                    onClick={() => document.getElementById('file-upload').click()}s
                                                />

                                        }
                                        <input
                                            id="file-upload"
                                            type="file"
                                            accept=".png, .jpg, .jpeg, .gif"
                                            onChange={(e) => {
                                                setFile(e.target.files[0]);
                                                handleForm(e.target.files[0]);
                                            }}
                                            hidden
                                        />
                                        <div className="profile-info">
                                            <h3>{user?.username}</h3>
                                            <div className='invite-copy-code-parent' onClick={() => copyToClipboard(user?.invitation_code ?? "")}>
                                                <div className='invite-copy-code-child'>
                                                    <h4>{user?.invitation_code}</h4>
                                                </div>
                                                <div className='invite-copy-code-child'>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 12 12"
                                                    >
                                                        <path
                                                            fill="#fff"
                                                            d="M7.12 12H1.17A1.17 1.17 0 0 1 0 10.829V4.88a1.17 1.17 0 0 1 1.171-1.17H7.12a1.17 1.17 0 0 1 1.17 1.17v5.949A1.17 1.17 0 0 1 7.12 12M1.17 4.58a.3.3 0 0 0-.3.3v5.949a.3.3 0 0 0 .3.301h5.95a.3.3 0 0 0 .3-.301V4.88a.3.3 0 0 0-.3-.3z"
                                                        ></path>
                                                        <path
                                                            fill="#fff"
                                                            d="M10.83 8.289H7.859a.435.435 0 1 1 0-.87h2.973a.3.3 0 0 0 .301-.301V1.17a.3.3 0 0 0-.301-.301H4.882a.3.3 0 0 0-.301.3v2.974a.435.435 0 1 1-.87 0V1.171A1.17 1.17 0 0 1 4.881 0h5.95A1.17 1.17 0 0 1 12 1.17v5.95a1.173 1.173 0 0 1-1.17 1.169"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='profile-details-child'>
                                <div className='profile-details-sub-child'>
                                    <h3>$ {user?.balance?.toFixed(2) ?? ""}</h3>
                                    <p>My Balance</p>
                                </div>
                                <div className='profile-details-sub-child'>
                                    <h3>{user?.membership_level}</h3>
                                    <p>Membership</p>
                                </div>
                                <div className='profile-details-sub-child'>
                                    <h3>$ {user?.today_commission?.toFixed(2) ?? ""}</h3>
                                    <p>Commission</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={() => setIsConfirm(true)} className="btn global-primary-btn">LOG OUT</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile;