"use client";

import { submitJourney } from '@/app/actions/journey/action';
import toast from "react-hot-toast";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";
import { fetchProduct } from "@/app/actions/journey/data";
import Loader from "../loader/Loader";
import { useRouter } from "next/navigation";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import JourneySuccessModal from '../successModal/JourneySuccessModal';
import Image from 'next/image';

function Submit() {

    const { pending } = useFormStatus();

    return (
        <>

            <button type="submit" className={pending ? "btn global-primary-btn managedDisabled" : "btn global-primary-btn"}> {
                pending ?
                    <><i className="fa fa-circle-notch rotating-spinner"></i></>
                    :
                    `SUBMIT`
            }
            </button>
        </>
    )
}

const SubmitJourney = ({ authUser, authenticatedUser, allCommission, userCommission }) => {

    const { push } = useRouter();

    const [info, setInfo] = useState({
        sales: "",
        popularity: "",
        date: "",
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [myState, setMyState] = useState({});
    const [loading, setLoading] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isNextData, setIsNextData] = useState(false);

    const [rating, setRating] = useState(3);

    const handleClick = (index) => {
        setRating(index + 1);
    };

    const handleForm = async () => {
        try {
            const response = await submitJourney();

            if (response.status === 201) {
                if (response?.isNextJourney) {
                    setIsNextData(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, [3000])
                } else {
                    setIsSuccess(true);
                    setIsPressed(true);
                    // toast.success(response.message);
                    setTimeout(() => {
                        push("/dashboard/journey");
                    }, [2000]);
                }
            } else {
                toast.error(response.message);
                setIsPressed(true);
                push("/dashboard/recharge");
            }

        } catch (error) {
            setIsPressed(false);
            console.log(error)
        }
    }

    const handleProduct = async () => {
        setLoading(true);
        try {
            const response = await fetchProduct();
            setMyState(response.data);
            setLoading(false);

            const infoFromLocal = JSON.parse(localStorage.getItem("journeyInfo"));
            if (infoFromLocal === null) {
                const getRandomSales = () => Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
                const getRandomPopularity = () => Math.floor(Math.random() * (100 - 90 + 1)) + 90;

                const getRandomDate = () => {
                    const currentDate = new Date();
                    const day = String(currentDate.getDate()).padStart(2, '0');
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const year = currentDate.getFullYear();
                    return `${day}-${month}-${year}`;
                };

                const newInfo = {
                    _id: response?.data?.product?._id,
                    sales: getRandomSales(),
                    popularity: getRandomPopularity(),
                    date: getRandomDate()
                };

                setInfo(newInfo);
                localStorage.setItem("journeyInfo", JSON.stringify(newInfo));
            } else if (infoFromLocal?._id === response?.data?.product?._id) {
                const newInfo = {
                    _id: infoFromLocal?._id,
                    sales: infoFromLocal?.sales,
                    popularity: infoFromLocal?.popularity,
                    date: infoFromLocal?.date
                };
                setInfo(newInfo);
            } else {
                const getRandomSales = () => Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
                const getRandomPopularity = () => Math.floor(Math.random() * (100 - 90 + 1)) + 90;

                const getRandomDate = () => {
                    const currentDate = new Date();
                    const day = String(currentDate.getDate()).padStart(2, '0');
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                    const year = currentDate.getFullYear();
                    return `${day}-${month}-${year}`;
                };

                const newInfo = {
                    _id: response?.data?.product?._id,
                    sales: getRandomSales(),
                    popularity: getRandomPopularity(),
                    date: getRandomDate()
                };

                setInfo(newInfo);
                localStorage.setItem("journeyInfo", JSON.stringify(newInfo));
            }

        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        handleProduct();
    }, []);

    return (
        <>
            <div className='background-color'>
                {
                    isSuccess
                        ?
                        <JourneySuccessModal setIsModal={setIsSuccess} />
                        :
                        <></>
                }
                {
                    loading
                        ?
                        <Loader />
                        :
                        <></>
                }
                {
                    isNextData
                        ?
                        <div className="fetchNextData">
                            <h3>Please wait....Matching next data <i className="fa fa-spinner"></i></h3>
                        </div>
                        :
                        <></>
                }
                <section className="journey-section">
                    <Breadcrumb
                        link="/dashboard/journey"
                        title=""
                        authUser={authUser}
                        authenticatedUser={authenticatedUser}
                        allCommission={allCommission}
                        userCommission={userCommission}
                    />
                    <div className='submit-journey-page-wrapper'>
                        <div className='plam-rating-parent'>
                            <div className='plam-rating-child'>
                                <h3>Rating</h3>
                            </div>
                            <div className='plam-rating-child'>
                                <ul>
                                    {Array.from({ length: 5 }, (v, i) => (
                                        <li key={i} onClick={() => handleClick(i)}>
                                            <i className={`fa fa-star ${i < rating ? 'rated' : ''}`}></i>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='products-details-wrapper'>
                            <div className='products-details-parent'>
                                <div className='products-details-child'>
                                    <Image
                                        src={myState?.product?.url ?? ""}
                                        alt='product'
                                        height={100}
                                        width={100}
                                        sizes="(max-width: 768px) 50vw, 100px"
                                        quality={90}
                                    />
                                </div>
                                <div className='products-details-child'>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 18 15"
                                            >
                                                <path
                                                    fill="#848484"
                                                    d="M2.84 5.489a.5.5 0 0 0 .185-.036l8.012-3.193-.366.852a.502.502 0 0 0 .922.396l.844-1.964.002-.004.015-.042.007-.023.006-.024.004-.026.004-.023.002-.026.001-.023V1.33l-.002-.025-.003-.024-.003-.025-.007-.026q-.001-.01-.005-.022l-.016-.046-.02-.045-.011-.02-.014-.023-.015-.021-.014-.019-.016-.02-.016-.017-.018-.016L12.3.963l-.02-.015-.019-.015-.024-.015-.018-.01-.044-.023L10.21.041a.502.502 0 0 0-.397.921l.852.367L2.654 4.52a.502.502 0 0 0 .186.968M1.003 10.57a.596.596 0 0 1 1.192 0v3.427H1.003zm4.64-2.11a.59.59 0 0 1 .596-.596.6.6 0 0 1 .422.174.6.6 0 0 1 .174.421v5.538H5.643zm4.64-1.769a.597.597 0 0 1 1.192 0v7.306h-1.191zm4.641-2.463a.596.596 0 0 1 1.192 0v9.769h-1.192zm.596-1.599a1.6 1.6 0 0 0-1.6 1.599v9.769h-1.442V6.691a1.6 1.6 0 0 0-1.599-1.598A1.6 1.6 0 0 0 9.281 6.69v7.306H7.838V8.459c0-.427-.166-.829-.468-1.13a1.59 1.59 0 0 0-1.13-.468c-.428 0-.83.166-1.131.468a1.59 1.59 0 0 0-.469 1.13v5.538H3.198V10.57a1.6 1.6 0 0 0-1.6-1.6A1.6 1.6 0 0 0 0 10.57v3.928c0 .277.225.502.502.502h16.115a.5.5 0 0 0 .502-.502V4.229a1.6 1.6 0 0 0-1.6-1.599"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.sales}</h3>
                                            <p>Sales</p>
                                        </div>
                                    </div>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 15 18"
                                            >
                                                <path
                                                    stroke="#848484"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.25"
                                                    d="M11.58 11.065a4.035 4.035 0 0 1-3.354 3.354"
                                                ></path>
                                                <path
                                                    stroke="#848484"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.25"
                                                    d="M3.194 4.628C1.987 6.438 1 8.512 1 10.448c0 1.737.693 3.404 1.927 4.633A6.6 6.6 0 0 0 7.581 17c1.745 0 3.419-.69 4.653-1.92a6.54 6.54 0 0 0 1.927-4.633c0-4.056-2.82-7.177-5.108-9.447L6.327 6.703z"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.popularity} %</h3>
                                            <p>Popularity</p>
                                        </div>
                                    </div>
                                    <div className='products-details-sub-child'>
                                        <div className='products-details-grand-child'>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 17 17"
                                            >
                                                <path
                                                    fill="#848484"
                                                    d="M13.73 17H3.27A3.27 3.27 0 0 1 0 13.73V4.578a3.27 3.27 0 0 1 3.27-3.27h10.46A3.27 3.27 0 0 1 17 4.578v9.154A3.27 3.27 0 0 1 13.73 17M3.27 2.615a1.96 1.96 0 0 0-1.962 1.962v9.154a1.96 1.96 0 0 0 1.961 1.961h10.462a1.96 1.96 0 0 0 1.961-1.961V4.577a1.96 1.96 0 0 0-1.961-1.962z"
                                                ></path>
                                                <path
                                                    fill="#848484"
                                                    d="M13.73 14.385h-2.615a.654.654 0 0 1-.654-.654v-2.616a.654.654 0 0 1 .654-.654h2.616a.654.654 0 0 1 .654.654v2.616a.654.654 0 0 1-.654.654m-1.96-1.308h1.307v-1.308h-1.308zM16.346 6.538H.654a.654.654 0 0 1 0-1.307h15.692a.654.654 0 1 1 0 1.307M5.23 3.923a.654.654 0 0 1-.653-.654V.654a.654.654 0 0 1 1.308 0v2.615a.654.654 0 0 1-.654.654M11.77 3.923a.654.654 0 0 1-.655-.654V.654a.654.654 0 1 1 1.308 0v2.615a.654.654 0 0 1-.654.654"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div className='products-details-grand-child'>
                                            <h3>{info?.date?.toLocaleString()}</h3>
                                            <p>Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-name-and-value'>
                            <h2>{myState?.product?.productName}</h2>
                            <div className='boder-line-div'></div>
                            <div className="product-info-wrapper">
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Data Value</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3>$ {myState?.product?.productPrice?.toFixed(2) ?? ""}</h3>
                                    </div>
                                </div>
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Commission</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3>$ {myState?.commission?.toFixed(2) ?? ""}</h3>
                                    </div>
                                </div>
                                <div className="product-info-parent">
                                    <div className="product-info-childs">
                                        <p>Packages Details</p>
                                    </div>
                                    <div className="product-info-childs">
                                        <h3>CS{myState?.product?._id?.slice(-4)}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='boder-line-div'></div>
                        </div>
                        <div className="product-review">
                            <label>Review</label>
                            <input
                                placeholder="Write your comment"
                            />
                            <i className='fa fa-angle-left'></i>
                        </div>
                        <div className="submit-btn">
                            <form action={handleForm} translate="no">
                                {
                                    isPressed
                                        ?
                                        <div className="isPressedValidation">
                                            <p>Processing Please Wait <i className="fa fa-circle-notch rotating-spinner"></i></p>
                                        </div>
                                        :
                                        myState?.product?.url
                                        ?
                                        <Submit />
                                        :
                                        ""
                                }
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default SubmitJourney;