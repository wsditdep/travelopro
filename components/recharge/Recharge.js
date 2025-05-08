"use client";

import Breadcrumb from '../breadcrumb/Breadcrumb';
import Link from 'next/link';
import { useState } from 'react';
import balance_card from "@/public/costar_assets/images/balance-card.svg"
import Image from 'next/image';
import card_vect from "@/public/costar_assets/images/card_vect.png"

const Recharge = ({ user, authenticatedUser, allCommission, userCommission }) => {
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

    const handleAddFundsClick = () => {
        if (window.LC_API && typeof window.LC_API.open_chat_window === 'function') {
            window.LC_API.open_chat_window();
        } else {
            console.error("Live Chat widget not initialized or method not found.");
        }
    };

    return (
        <>
            <div className='background-color'>
                <section className="journey-section transaction-pages">
                    <Breadcrumb
                        link="/dashboard"
                        title="RECHARGE"
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
                                <Link href="/dashboard/rechargeHistory">
                                    <i className="fa fa-clock-rotate-left"></i>
                                    <p>Recharge History</p>
                                </Link>
                            </div>
                        </div>

                        <div className="transaction-amount">
                            <h3>Recharge Amount</h3>
                            <input
                                type="number"
                                placeholder="Enter the recharge amount"
                                value={amountData === 0 ? "" : amountData}
                                onChange={handleInputChange}
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
                            <button className="btn global-primary-btn mt2" onClick={() => handleAddFundsClick()}>Recharge</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Recharge;
