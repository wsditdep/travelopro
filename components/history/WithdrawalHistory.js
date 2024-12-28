"use client";

import React, { useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import data_not_found from "@/public/not_found.png";
import Image from 'next/image';
import moment from 'moment';
import 'moment-timezone';

const WithdrawalHistory = ({ withdrawal, authUser, authenticatedUser, allCommission, userCommission }) => {

    const [allProducts, setAllProducts] = useState(withdrawal || []);
    const [statusType, setStatusType] = useState("all");


    const handleFilter = (filterType) => {
        if (filterType === "all") {
            setAllProducts(withdrawal)
            setStatusType("all");
        } else if (filterType === "pending") {
            const pendingProducts = withdrawal?.filter(product => product.status === "pending");
            setAllProducts(pendingProducts);
            setStatusType("pending");
        } else if (filterType === "completed") {
            const completedProducts = withdrawal?.filter(product => product.status === "approved");
            setAllProducts(completedProducts);
            setStatusType("completed");
        } else if (filterType === "freezed") {
            const completedProducts = withdrawal?.filter(product => product.status === "rejected");
            setAllProducts(completedProducts);
            setStatusType("freezed");
        }
    }

    return (
        <>
            <div className='background-color'>
                <Breadcrumb
                    authUser={authUser}
                    title="Withdraw History"
                    link="/dashboard/withdrawal"
                    authenticatedUser={authenticatedUser}
                    allCommission={allCommission}
                    userCommission={userCommission}
                />
                <div className="history-filter">
                    <ul>
                        <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}> View All</button></li>
                        <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                        <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                        <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>Freezed</button></li>
                    </ul>
                </div >
                <section className="withdrawal-history-section-wrapper">
                    <section className="withdrawal-hostory-section">
                        {
                            allProducts?.length === 0
                                ?
                                <div className="data-not-found">
                                    <Image
                                        src={data_not_found}
                                        height={100}
                                        width={100}
                                        alt="logo"
                                        unoptimized
                                    />
                                </div>
                                :
                                allProducts?.map((data, index) => (
                                    <div className="withdraw-history-info-card" key={index}>
                                        <div className="withdraw-history-info-card-amount">
                                            <div className="withdraw-history-info-card-amount-parent">
                                                <div className="withdraw-history-info-card-amount-childs">
                                                    <h3>$ {data?.withdrawal_amount}</h3>
                                                    <p>Withdraw Amount</p>
                                                </div>
                                                <div className="withdraw-history-info-card-amount-childs">
                                                    {
                                                        data?.status === "pending"
                                                            ?
                                                            <>
                                                                <button className='pending'>PENDING</button>
                                                                <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D.MM.YYYY, HH:mm:ss ')}</p>
                                                            </>
                                                            :
                                                            data?.status === "approved"
                                                                ?
                                                                <>
                                                                    <button className='complete'>COMPLETED</button>
                                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D.MM.YYYY, HH:mm:ss ')}</p>
                                                                </>
                                                                :
                                                                <>
                                                                    <button className='freeze'>FREEZED</button>
                                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('D.MM.YYYY, HH:mm:ss ')}</p>
                                                                </>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="withdrawal-info">
                                            <div className='withdrawal-info-parent'>
                                                <div className="withdrawal-info-childs">
                                                    <p>Recipient</p>
                                                    <h4>{data?.username}</h4>
                                                </div>
                                                <div className="withdrawal-info-childs">
                                                    <p>Wallet Address</p>
                                                    <h4>{data?.wallet_address}</h4>
                                                </div>
                                            </div>
                                            <div className='withdrawal-info-parent'>
                                                <div className="withdrawal-info-childs">
                                                    <p>Phone Number</p>
                                                    <h4>{data?.phone_number}</h4>
                                                </div>
                                                <div className="withdrawal-info-childs">
                                                    <p>Network</p>
                                                    <h4>{data?.network_type}, {data?.currency}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )).reverse()

                        }
                    </section>
                </section>
            </div>
        </>
    )
}

export default WithdrawalHistory