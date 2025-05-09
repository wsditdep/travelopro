import React from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'
import data_not_found from "@/public/not_found.png";
import Image from 'next/image';
import moment from 'moment';
import 'moment-timezone';

const RechargeHistory = ({ history, authUser, authenticatedUser, allCommission, userCommission }) => {

    return (
        <>
            <div className='background-color page_animation'>
                <section className="withdrawal-hostory-section recharge-history-section">
                    <Breadcrumb
                        authUser={authUser}
                        title="RECHARGE HISTORY"
                        link="/dashboard/recharge"
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                    />
                    <div className="all-recharges">
                        {
                            history?.length === 0
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
                                history?.map((data, index) => (
                                    <div className="recharge-history-wrapper" key={index}>
                                        <div className={data?.recharge_type === "credit" ? "recharge-history-parent green_lite" : "recharge-history-parent red_lite"}>
                                            <div className="recharge-history-childs">
                                                <div className="exchange-history">
                                                    <i className="fa fa-exchange"></i>
                                                </div>
                                            </div>
                                            <div className="recharge-history-childs">
                                                {
                                                    data?.recharge_type === "credit"
                                                        ?
                                                        <>
                                                            <p>Recharged Amount: ${data?.amount}</p>
                                                            <h3>${data?.amount} has been crediteds to your account</h3>
                                                            <h6>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('DD/MM/YYYY, HH:mm:ss')}</h6>
                                                        </>
                                                        :
                                                        <>
                                                            <p>Debited Amount: ${data?.amount}</p>
                                                            <h3>${data?.amount} has been debited from your account</h3>
                                                            <h6>{moment.tz(data?.createdAt, process.env.NEXT_PUBLIC_TIMWZONE).format('DD/MM/YYYY, HH:mm:ss')}</h6>
                                                        </>
                                                }
                                            </div>
                                            <div className="recharge-history-childs">
                                                <p className={data?.recharge_type === "credit" ? "green" : "red"}>{data?.recharge_type}</p>
                                            </div>
                                        </div>
                                    </div>
                                )).reverse()
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default RechargeHistory