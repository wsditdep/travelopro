"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import data_not_found from "@/public/not_found.png";
import Link from "next/link";
import moment from 'moment';
import 'moment-timezone';

const History = ({ data, membership, authUser, authenticatedUser, allCommission, userCommission }) => {

    const [allProducts, setAllProducts] = useState(data || []);
    const [statusType, setStatusType] = useState("all");


    const handleFilter = (filterType) => {
        if (filterType === "all") {
            setAllProducts(data)
            setStatusType("all");
        } else if (filterType === "pending") {
            const pendingProducts = data?.filter(product => product.status === "pending");
            setAllProducts(pendingProducts);
            setStatusType("pending");
        } else if (filterType === "completed") {
            const completedProducts = data?.filter(product => product.status === "completed");
            setAllProducts(completedProducts);
            setStatusType("completed");
        } else if (filterType === "freezed") {
            const completedProducts = data?.filter(product => product.status === "freezed");
            setAllProducts(completedProducts);
            setStatusType("freezed");
        }
    }

    useEffect(() => {
        setAllProducts(data);
    }, []);

    return (
        <>
            <div className='background-color'>
                <div className="history-section">
                    <Breadcrumb
                        authUser={authUser}
                        title="Dealing Records"
                        link="/dashboard"
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                    />
                    <div className="history-filter">
                        <ul>
                            <li><button onClick={() => handleFilter("all")} className={statusType === "all" ? "history-active" : ""}>View All</button></li>
                            <li><button onClick={() => handleFilter("pending")} className={statusType === "pending" ? "history-active" : ""}>Pending</button></li>
                            <li><button onClick={() => handleFilter("completed")} className={statusType === "completed" ? "history-active" : ""}>Completed</button></li>
                            <li><button onClick={() => handleFilter("freezed")} className={statusType === "freezed" ? "history-active" : ""}>Freezed</button></li>
                        </ul>
                    </div >
                    <div className="journey-history-card-wrapper">
                        {
                            data?.length === 0
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
                                    <div className="dealing-record-card-wrapper" key={index}>
                                        <div className="dealing-record-status-wrapper">
                                            <div className="dealing-record-status-parent">
                                                <div className="dealing-record-status-child">
                                                    <h3>{data?.productName}</h3>
                                                    <p>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('MM.D.YYYY, HH:mm:ss')}</p>
                                                </div>
                                                <div className="dealing-record-status-child">
                                                    {
                                                        data?.status === "completed"
                                                            ?
                                                            <button className="complete">COMPLETED</button>
                                                            :
                                                            <button className="pending">PENDING</button>
                                                    }
                                                </div>
                                            </div>
                                            <div className="dealing-record-card-parent">

                                                <div className="dealing-record-card-childs">
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Data Value</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            <h3>$ {data?.productPrice?.toFixed(2)}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Commission</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            {
                                                                data?.isJourneyProduct
                                                                    ?
                                                                    <h3>$ {(data?.productPrice * membership?.ticket_commission)?.toFixed(2)}</h3>
                                                                    :
                                                                    <h3>$ {(data?.productPrice * membership?.commission_rate)?.toFixed(2)}</h3>

                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="dealing-record-info-parent">
                                                        <div className="dealing-record-info-childs">
                                                            <p>Packages Details</p>
                                                        </div>
                                                        <div className="dealing-record-info-childs">
                                                            <h3>CS{data?._id.slice(-4)}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="dealing-record-card-childs">
                                                    {
                                                        data && data.url && (
                                                            <Image
                                                                src={data.url}
                                                                height={100}
                                                                width={100}
                                                                alt="logo"
                                                                sizes="(max-width: 768px) 50vw, 100px"
                                                                quality={90}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            data?.status === "pending"
                                                ?
                                                <div className="pending-submit-btn">
                                                    <Link href="/dashboard/journey/submitJourney">
                                                        <button className="btn global-primary-btn mt1">SUBMIT BOOKING</button>
                                                    </Link>
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default History
