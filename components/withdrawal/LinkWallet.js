"use client";

import { useFormStatus } from "react-dom";
import { createWallet } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import Image from "next/image";
import white_bg from "@/public/costar_assets/images/link-wallet-shadow.svg"
import colorfull_bg from "@/public/costar_assets/images/colorfull_bg.svg"

function Submit({ user }) {
    const { pending } = useFormStatus();
    return (
        <>
            {
                user?.network_type !== null
                    ?
                    <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait... <i className="fa fa-circle-notch rotating-spinner"></i></> : "Update Details"}</button>
                    :
                    <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait... <i className="fa fa-circle-notch rotating-spinner"></i></>: "LINK WALLET"}</button>
            }
        </>
    )
}

const LinkWallet = ({ user, authenticatedUser, allCommission, userCommission }) => {

    const { push, refresh } = useRouter();

    const [selectedCurrencyOption, setSelectedCurrencyOption] = useState("USDT");
    const [selectedNetworkOption, setSelectedNetworkOption] = useState("TRC 20");

    const handleOptionChange = (e) => {
        setSelectedCurrencyOption(e.target.value);
    };

    const handleNetworkOptionChange = (e) => {
        setSelectedNetworkOption(e.target.value);
    };

    const handleForm = async (formData) => {
        try {

            formData.append("id", user?._id);
            formData.append("currency", selectedCurrencyOption);
            formData.append("network_type", selectedNetworkOption);

            const response = await createWallet(formData);

            if (response.status === 201) {
                toast.success(response.message);
                push('/dashboard/withdrawal');
                refresh();
                return;
            } else {
                return toast.error(response.message);
            }

        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        setSelectedCurrencyOption(user?.currency ?? "USDT")
        setSelectedNetworkOption(user?.network_type ?? "TRC 20")
    }, [])

    return (
        <>
            <div className="colorfull-bg page_animation" style={{
                backgroundImage: `url(${colorfull_bg.src})`,
            }}>
            </div>
            <Breadcrumb
                authUser={user}
                title="Link Wallet"
                link="/dashboard"
                authenticatedUser={authenticatedUser}
                allCommission={allCommission}
                userCommission={userCommission}
            />
            <div className="linkwallet-section">
                <div className="card-vector-image-wrapper">
                    <div className="vector-image-note">
                        <h3>Link Wallet</h3>
                        <p>Link your wallet and
                            make translation easy!</p>
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
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="wallet_name"
                                defaultValue={user?.wallet_name ?? ""}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
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
                        </div>
                        <div className="app-form-group app-form-group-include-conf">
                            <input
                                type="text"
                                placeholder="Phone Number"
                                name="wallet_phone"
                                defaultValue={user?.wallet_phone ?? ""}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
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
                                type="text"
                                placeholder="Enter wallet address"
                                name="wallet_address"
                                defaultValue={user?.wallet_address ?? ""}
                                required
                                onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}
                            />
                            <svg className="input-primary-svg"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="14"
                                fill="none"
                                viewBox="0 0 15 14"
                            >
                                <path
                                    stroke="#1F2F5C"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="1.5"
                                    d="M12.143 1H2.857a1.238 1.238 0 1 0 0 2.476H8.43"
                                ></path>
                                <path
                                    fill="#1F2F5C"
                                    d="M13.381 2.857H2.238L1 2.238v9.905C1 13.169 1.831 14 2.857 14h10.524c.684 0 1.238-.554 1.238-1.238V4.095c0-.684-.554-1.238-1.238-1.238m-1.238 6.81a1.238 1.238 0 1 1 0-2.476 1.238 1.238 0 0 1 0 2.476"
                                ></path>
                            </svg>
                        </div>
                        <div className="app-form-group app-form-group-radio">
                            <label>Currency</label>
                            <div className="app-form-group-radio-parent">
                                <div className="app-form-group-radio-childs">
                                    <p>USDT</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="USDT"
                                        checked={selectedCurrencyOption === "USDT"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>USDC</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="USDC"
                                        checked={selectedCurrencyOption === "USDC"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>ETH</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="ETH"
                                        checked={selectedCurrencyOption === "ETH"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>BTC</p>
                                    <input
                                        type="radio"
                                        name="currency"
                                        value="BTC"
                                        checked={selectedCurrencyOption === "BTC"}
                                        onChange={(e) => handleOptionChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="app-form-group app-form-group-radio">
                            <label>Network</label>
                            <div className="app-form-group-radio-parent">
                                <div className="app-form-group-radio-childs">
                                    <p>TRC 20</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="TRC 20"
                                        checked={selectedNetworkOption === "TRC 20"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>ERC 20</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="ERC 20"
                                        checked={selectedNetworkOption === "ERC 20"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                                <div className="app-form-group-radio-childs">
                                    <p>BTC</p>
                                    <input
                                        type="radio"
                                        name="network_type"
                                        value="BTC"
                                        checked={selectedNetworkOption === "BTC"}
                                        onChange={(e) => handleNetworkOptionChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        {
                            user?.network_type !== null
                                ?
                                <></>
                                :
                                <div className="app-form-group">
                                    <Submit user={user} />
                                </div>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default LinkWallet