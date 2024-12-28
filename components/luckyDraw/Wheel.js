"use client";

import React, { useEffect, useState } from 'react'
import WheelComponent from './WheelComponent';
import { updateLuckyDraw } from '@/app/actions/user/action';
import { useRouter } from 'next/navigation';
import SpinnSuccess from '../successModal/SpinnSuccess';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Wheel = ({ authenticatedUser, allCommission, userCommission }) => {

    const router = useRouter();

    const [isSuccess, setIsSuccess] = useState(false);
    const [isProcess, setIsProcess] = useState(true);

    const initialWinner = authenticatedUser?.winning_amount === undefined || authenticatedUser?.winning_amount?.length === 0 || authenticatedUser?.number_of_draws === null
        ? 'Try Again'
        : String(authenticatedUser?.winning_amount[authenticatedUser?.used_number_of_draws]);

    const [winner, setWinner] = useState(initialWinner);

    const segments = [
        '500',
        '10',
        'Try Again',
        '5',
        '20',
        '80',
        '0',
        '100',
        '300',
        '150',
    ];

    const segColors = [
        "#022244",
        "#fff",
        "#022244",
        "#fff",
        "#022244",
        "#fff",
        "#022244",
        "#fff",
        "#022244",
        "#fff",
    ];

    const onFinished = async (winner) => {

        setIsProcess(false);

        const res = await updateLuckyDraw(winner)

        if (res.status === 201) {
            setIsSuccess(true);
        } else {
            setIsSuccess(false);
            console.log("Error!")
        }

    };

    return (
        <>

            <Breadcrumb
                title="Rewards"
                link="/dashboard"
                authUser={authenticatedUser}
                authenticatedUser={authenticatedUser}
                allCommission={allCommission}
                userCommission={userCommission}
            />
            <div className="spinner-outer-wrapper">
                {
                    isSuccess ? <SpinnSuccess amount={winner} /> : <></>
                }
                <div id="wheelCircle">
                    <WheelComponent
                         segments={segments}
                        segColors={segColors}
                        winningSegment={String(winner) ?? "Try Again"}
                        onFinished={(winner) => onFinished(winner)}
                        primaryColor="black"
                        primaryColoraround="#ffffffb4"
                        contrastColor="white"
                        buttonText="Spin"
                        isOnlyOnce={false}
                        size={220}
                        upDuration={1000}
                        downDuration={2000}
                        isProcess={isProcess}
                        setIsProcess={setIsProcess}
                        authenticatedUser={authenticatedUser}
                    />
                </div>
            </div>
        </>
    )
}

export default Wheel