"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import draw from "@/public/draw/draw.png";
import draw_backup from "@/public/draw/draw_backup.png";
import start from "@/public/draw/start.svg";
import coin from "@/public/draw/coin.svg";
import loading from "@/public/draw/loading.gif";
import { updateLuckyDraw } from "@/app/actions/user/action";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LuckyDraw = ({ user }) => {
    const [isDraw, setIsDraw] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [winAmount, setWinAmount] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false); // Track if the game is over

    const [isAnimation, setIsAnimation] = useState(false);

    const router = useRouter();

    // Default dataset for the draw
    const dataSet = [
        { id: 1, winningPrice: 20, animationTriggered: false, isWinner: false },
        { id: 2, winningPrice: 50, animationTriggered: false, isWinner: false },
        { id: 3, winningPrice: 0, animationTriggered: false, isWinner: false },
        { id: 4, winningPrice: 300, animationTriggered: false, isWinner: false },
        { id: 5, winningPrice: "", animationTriggered: false, isStartBtn: true, isWinner: false },
        { id: 6, winningPrice: 500, animationTriggered: false, isWinner: false },
        { id: 7, winningPrice: 1000, animationTriggered: false, isWinner: false },
        { id: 8, winningPrice: 0, animationTriggered: false, isWinner: false },
        { id: 9, winningPrice: 100, animationTriggered: false, isWinner: false },
    ];

    const [allList, setAllList] = useState(dataSet);

    const loopCountRef = useRef(0); // Track loop count without triggering re-renders
    const currentIndexRef = useRef(0); // Keep track of the current index
    const timeoutRef = useRef(null); // Track timeout to cancel/clear it if needed

    const updateBackend = async () => {

        try {
            const res = await updateLuckyDraw(winAmount);

            if (res.status === 201) {

            } else {
                toast.error(res.message);
            }

        } catch (error) {
            console.log(error)
        }
    }

    const startGame = () => {

        if (!user?.number_of_draws || user?.number_of_draws <= 0) {
            return toast.error("You have 0 chance for rewards");
        }

        setIsButtonDisabled(true);
        loopCountRef.current = 0; // Reset loop count
        currentIndexRef.current = 0; // Start from the first item
        setIsGameOver(false); // Reset the game over state
        animateDraw(); // Start animation
    };

    const animateDraw = () => {
        // Stop the loop if we have completed 5 loops
        if (loopCountRef.current >= 5) {
            clearTimeout(timeoutRef.current); // Clear any pending timeouts
            // Trigger final animation for the winning prize
            setIsGameOver(true); // Set the game as over
            // Reset all animationTriggered to false once the game is over
            setAllList((prevState) =>
                prevState.map((obj) => ({
                    ...obj,
                    animationTriggered: false, // Reset animationTriggered for all items
                }))
            );
            updateBackend(); // update backend
            return;
        }

        const currentIndex = currentIndexRef.current;

        // Trigger animation for the current item and reset others
        setAllList((prevState) =>
            prevState.map((obj) =>
                obj.id === allList[currentIndex].id
                    ? { ...obj, animationTriggered: true }
                    : { ...obj, animationTriggered: false } // Reset all other items
            )
        );

        // Move to the next item, or reset when we reach the end of the list
        if (currentIndex < allList.length - 1) {
            currentIndexRef.current++; // Increment to next index
        } else {
            currentIndexRef.current = 0; // Restart from the beginning
            loopCountRef.current++; // Increment the loop count after one full pass
        }

        // Delay to simulate animation and loop through the next item
        timeoutRef.current = setTimeout(animateDraw, 100); // Delay of 100ms between items
    };

    const replayGame = () => {
        setIsAnimation(true);
        // Reset all states to start a new game
        setIsDraw(false); // Hide the lucky draw UI
        setIsButtonDisabled(false); // Enable the "LUCKY DRAW" button
        setIsGameOver(false); // Reset game over state
        setAllList(dataSet); // Reset the dataset to its initial state

        router.refresh();

        setTimeout(() => {
            setIsAnimation(false);
            setIsDraw(true);
        }, [3000])
    };

    const closeGame = () => {
        setIsDraw(false);
        router.refresh();
    }

    useEffect(() => {
        if (Array.isArray(user?.winning_amount) && user?.winning_amount.length !== 0) {
            setWinAmount(user?.winning_amount[0]);
        } else {
            setWinAmount(0);
        }
    }, [user]);

    return (
        <>
            {
                isAnimation
                    ?
                    <div className="game-loading">
                        <Image
                            src={loading}
                            unoptimized
                            height={100}
                            width={100}
                            alt="gif"
                        />
                        <h2>Please wait....Loading...</h2>
                    </div>
                    :
                    <></>
            }
            <div className="lucky-draw-wrapper">
                <button className="draw-btn" onClick={() => setIsDraw(true)}>
                    <i className="fa fa-box"></i>
                </button>
                {isDraw && (
                    <>
                        <div className="close-game" onClick={() => closeGame()}><i className="fa fa-times" style={{color: "white"}}></i></div>
                        <div className="draw-wrapper-containers page_animation">
                            <div className="draw-complete-container">
                                <h1>REMAINING CHANCE: {user?.number_of_draws ?? "0"}</h1>
                                {
                                    isGameOver
                                        ?
                                        <div className="draw-complete-wrapper">
                                            {
                                                winAmount === 0
                                                    ?
                                                    <>
                                                        <h3>Better luck next time</h3>
                                                    </>
                                                    :
                                                    <>
                                                        <h3>Congratulation you have won ${winAmount}</h3>
                                                        <p>${winAmount} has been deposited to your account.</p>
                                                    </>
                                            }
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                            <div className="draw-wrapper-containers-inner">
                                <Image
                                    src={draw}
                                    alt="lucky"
                                    height={100}
                                    width={100}
                                    unoptimized
                                    className="luckey-image"
                                />
                                <div className="draw-wrapper-containers-inner-board">
                                    <Image
                                        src={draw_backup}
                                        alt="lucky"
                                        height={100}
                                        width={100}
                                        unoptimized
                                        className="luckey-image"
                                    />
                                    <div className="draw-wrapper-containers-inner-board-dice">
                                        {allList.map((data, index) => (
                                            <div
                                                key={index}
                                                className={`draw-childs ${data.animationTriggered ? "animateDrawBox" : ""} ${isGameOver && data.winningPrice === winAmount ? "animateDrawBoxWinner" : ""}`}
                                            >
                                                {data.winningPrice === 0 ? (
                                                    <h3>TRY AGAIN</h3>
                                                ) : data.winningPrice === "" ? null : (
                                                    <>
                                                        <Image
                                                            src={coin}
                                                            alt="lucky"
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                            className="coinImage"
                                                        />
                                                        <h3>${data.winningPrice}</h3>
                                                    </>
                                                )}

                                                {index === 4 && !data.winningPrice && (
                                                    !isButtonDisabled ? (
                                                        <Image
                                                            src={start}
                                                            alt="start"
                                                            height={100}
                                                            width={100}
                                                            unoptimized
                                                            className="start"
                                                            onClick={startGame}
                                                        />
                                                    ) : (
                                                        isGameOver
                                                            ?
                                                            <div className="replayBtn" onClick={() => replayGame()}>REPLAY</div>
                                                            :
                                                            <Image
                                                                src={loading}
                                                                alt="loading"
                                                                height={100}
                                                                width={100}
                                                                unoptimized
                                                            />
                                                    )
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default LuckyDraw;
