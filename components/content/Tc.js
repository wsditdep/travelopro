"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb';



const Tc = ({ data, authenticatedUser, allCommission, userCommission }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "tc")[0];
        setInfo(infoData);
    }, []);
    return (
        <>
            <div className='term-condition-page-wrapper'>
                <Breadcrumb
                    title={"TERMS & CONDITIONS"}
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

export default Tc