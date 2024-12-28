"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';


const Faq = ({ data, authenticatedUser, allCommission, userCommission }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "faqs")[0];
        setInfo(infoData);
    }, []);
    return (
        <>
            <div className='faq-page-wrapper'>
                <Breadcrumb
                    title={"FAQ"}
                    link="/dashboard"
                    isColor={true}
                    isWhite={false}
                    authUser={authenticatedUser}
                    authenticatedUser={authenticatedUser}
                    allCommission={allCommission}
                    userCommission={userCommission}
                />
                <section className="content-section">
                    <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
                </section>
            </div>

        </>
    )
}

export default Faq