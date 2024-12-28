"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useState } from 'react';
import { withdrawal } from '@/app/actions/user/action';
import toast from 'react-hot-toast';
import { useFormStatus } from "react-dom";
import balance_card from "@/public/costar_assets/images/balance-card.svg"
import Image from 'next/image';
import card_vect from "@/public/costar_assets/images/card_vect.png"
import WithdrawalSuccessModal from '../successModal/WithdrawalSuccessModal';
import link_wallet from "@/public/costar_assets/images/link_wallet.png"
import WithdrawalFailModal from '../successModal/WithdrawalFailModal';

function Submit() {
    const { pending } = useFormStatus();
    return (
        <>
            {
                <button type="submit" disabled={pending} className="btn global-primary-btn">{pending ? <> Please wait... <i className="fa fa-circle-notch rotating-spinner"></i></> : "WITHDRAW"}</button>
            }
        </>
    )
}

const Withdrawal = ({ user, withdrawalInfo, authenticatedUser, allCommission, userCommission }) => {

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const amounts = [
        { value: "$ 50.00", numericValue: 50 },
        { value: "$ 100.00", numericValue: 100 },
        { value: "$ 300.00", numericValue: 300 },
        { value: "$ 1000.00", numericValue: 1000 },
        { value: "$ 3000.00", numericValue: 3000 },
        { value: "Others", numericValue: 0 }
    ];

    const [amountData, setAmountData] = useState(0);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, numericValue) => {
        setActiveIndex(index);
        setAmountData(numericValue);
    };

    const handleInputChange = (event) => {
        setAmountData(Number(event.target.value));
        setActiveIndex(null);
    };

    const handleForm = async (formData) => {
        try {
            const response = await withdrawal(formData);
            
            if (response.status === 201) {
                toast.success(response.message);
                setIsSuccess(true);
            } else {
                setIsError(true)
                toast.error(response.message);
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='background-color'>
                {
                    isSuccess
                        ?
                        <WithdrawalSuccessModal setIsModal={setIsSuccess} />
                        :
                        <></>
                }
                {
                    isError
                        ?
                        <WithdrawalFailModal setIsModal={setIsError} />
                        :
                        <></>
                }
                <section className="journey-section transaction-pages">
                    <Breadcrumb
                        link="/dashboard"
                        title="WITHDRAW"
                        authUser={user}
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                    />
                    <div className="journey-info-wrapper">
                        <div className='balance-card-img'>
                            <Image
                                src={balance_card}
                                alt='card'
                                height={100}
                                width={100}
                            />
                            <div className='money-card-vector'>
                                <Image
                                    src={card_vect}
                                    alt='vector'
                                    height={100}
                                    width={100}
                                    unoptimized
                                />
                            </div>
                            <div className='user-balance-parent'>
                                <div className='user-balance-child'>
                                    <h3>$ {user?.balance?.toFixed(2) ?? ""}</h3>
                                </div>
                                <div className='user-balance-child'>
                                    <p className='border'>Total Balance</p>
                                </div>
                            </div>
                            <div className="transaction-history">
                                <Link href="/dashboard/withdrawalHistory">
                                    <i className="fa fa-clock-rotate-left"></i>
                                    <p>Withdrawal History</p>
                                </Link>
                            </div>
                        </div>

                        {
                            user?.network_type === null
                                ?
                                <>
                                    <div className="link-wallet-wrapper">
                                        <div className="link-wallet">
                                            <Image
                                                src={link_wallet}
                                                alt='wallet'
                                                height={100}
                                                width={100}
                                                unoptimized
                                            />
                                        </div>
                                        <div className="link-wallet-info">
                                            <h1>Hmm.. you haven’t link <br />
                                                your wallet yet</h1>
                                            <p>Would you like to link wallet now?</p>
                                        </div>
                                        <div className="amount-submit-btn">
                                            <Link href="/dashboard/withdrawal/linkwallet">
                                                <button className="btn global-primary-btn">Link Wallet now</button>
                                            </Link>
                                        </div>
                                    </div>
                                </>
                                :
                                <form action={handleForm}>
                                    <div className="transaction-amount">
                                        <h3>Withdraw Amount</h3>
                                        <input
                                            type="number"
                                            placeholder="Enter the withdrawal amount"
                                            value={amountData === 0 ? "" : amountData}
                                            onChange={handleInputChange}
                                            name="amount"
                                            step="any"
                                            required
                                        />
                                    </div>
                                    <div className="amount-options">
                                        <div className="amount-option-parent">
                                            {amounts.map((amount, index) => (
                                                <div
                                                    className={`amount-option-childs ${activeIndex === index ? 'active-deposit-btn' : ''}`}
                                                    key={index}
                                                    onClick={() => handleClick(index, amount.numericValue)}
                                                >
                                                    <h3>{amount.value}</h3>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="transaction-amount">
                                        <h3>Withdraw Password</h3>
                                        <input
                                            type="number"
                                            placeholder="Enter the withdrawal password"
                                            name="withdrawal_pin"
                                            required
                                        />
                                    </div>
                                    <div className="withdrawal-details">
                                        <div className='withdrawal-to-boder'>
                                            <div className="withdrawal-to">
                                                <h3>Withdraw To</h3>
                                            </div>
                                        </div>
                                        <div className='withdrawal-details-wrapper'>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Recipient</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_name}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Phone Number</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_phone}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Wallet Address</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.wallet_address}</h3>
                                                </div>
                                            </div>
                                            <div className="withdrawal-details-parent">
                                                <div className="withdrawal-details-child">
                                                    <p>Network</p>
                                                </div>
                                                <div className="withdrawal-details-child">
                                                    <h3>{user?.network_type}, {user?.currency}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="amount-submit-btn">
                                        <Submit />
                                    </div>
                                </form>
                        }
                    </div>
                </section >
            </div>
        </>
    )
}

export default Withdrawal