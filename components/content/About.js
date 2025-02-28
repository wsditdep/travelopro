"use client";

import React, { useEffect, useState } from 'react'
import Breadcrumb from '../breadcrumb/Breadcrumb'

const About = ({ data, allCommission, userCommission, authenticatedUser }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "about")[0];
        setInfo(infoData);
    }, []);

    return (
        <>

            <div className='about-us-page-wrapper'>
                <Breadcrumb
                    title={"About Us"}
                    link="/dashboard"
                    authUser={authenticatedUser}
                    authenticatedUser={authenticatedUser}
                    allCommission={allCommission}
                    userCommission={userCommission}
                />
                <div className='about-page-details-wrapper'>
                    <section className="content-section">
                        <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default About