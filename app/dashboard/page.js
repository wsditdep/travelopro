import Sidebar from "@/components/sidebar/Sidebar";
import { auth } from "../auth";
import { fetchAuthenticatedUser, fetchCommission } from "../actions/user/data";
import Image from "next/image";
import Link from "next/link";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";
import logo from "@/public/costar_assets/logos/logo.png"
import dash_img from "@/public/costar_assets/images/dash_img.png"
import UniqueProperties from "@/components/sliders/Uniqueproperties";
import homeIcon from "@/public/costar_assets/icons/homeIcon.png"
import dataOptimization from "@/public/costar_assets/icons/data_optIcon.png"
import dealingRecord from "@/public/costar_assets/icons/dealingIcon.png"
import profileIcon from "@/public/costar_assets/icons/profileIcon.png"
import Properties from "@/components/sliders/Properties";
import agentIcon from "@/public/costar_assets/icons/agentIcon.png"
import lendersIcon from "@/public/costar_assets/icons/lendersIcon.png"
import appraisersIcon from "@/public/costar_assets/icons/appraisersIcon.png"
import investmentIcon from "@/public/costar_assets/icons/investmentIcon.png"
import occupiersIcon from "@/public/costar_assets/icons/occupiersIcon.png"
import Membership from "@/components/sliders/Membership";
import user_profile from "@/public/costar_assets/images/user_profile.jpg"

export const dynamic = "force-dynamic"

const page = async () => {

    const { user } = await auth();

    const authenticatedUser = await fetchAuthenticatedUser() || {};
    const { allCommission, userCommission } = await fetchCommission();

    return (
        <>
            <div className='background-color'>
                <div className="dashboard-wrapper">
                    <div className="dashboard-wrapper-inner-wrapper">
                        <div className="dashboard-top-navbar">
                            <div className="dashboard-top-navbar-parent">
                                <div className="dashboard-top-navbar-childs">
                                    <Image
                                        src={logo}
                                        height={100}
                                        width={100}
                                        alt="white"
                                        unoptimized
                                    />
                                </div>
                                <div className="dashboard-top-navbar-childs">
                                    <Sidebar
                                        session={JSON.parse(JSON.stringify(authenticatedUser))}
                                        authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
                                        allCommission={JSON.parse(JSON.stringify(allCommission))}
                                        userCommission={JSON.parse(JSON.stringify(userCommission))}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="profile-welcome">
                            <div className="profile-child">
                                <Link href="/dashboard/profile">
                                    {
                                        authenticatedUser?.url === null
                                            ?
                                            <Image
                                                src={user_profile}
                                                alt="logo"
                                                height={100}
                                                width={100}
                                                style={{ opacity: "0.5" }}
                                            />
                                            :
                                            <Image
                                                src={authenticatedUser?.url ?? ""}
                                                alt="logo"
                                                height={100}
                                                width={100}
                                            />
                                    }
                                </Link>
                            </div>
                            <div className="profile-child">
                                <h2>Welcome back,</h2>
                                <p>{authenticatedUser?.username ?? ""}</p>
                            </div>
                        </div>
                        <Link href="/dashboard/journey">
                            <div className="lucky-spin-wrapper">
                                <button className="btn global-primary-btn">SHOW OPTIMIZATION</button>
                            </div>
                        </Link>
                    </div>
                    <div className="dash-image-wrapper">
                        <div className="travel-with-Img">
                            <Image
                                src={dash_img}
                                height={100}
                                width={100}
                                alt="white"
                                unoptimized
                            />
                        </div>
                        <h1>#1 Commercial<br />Traval Booking <br />Company</h1>
                    </div>
                    <div className="dashboard-quick-actions">
                        <div className="quick-action-heading">
                            <h2>Quick Actions</h2>
                        </div>
                        <div className="dashboard-quick-actions-parent">
                            <Link href="/dashboard">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={homeIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Home</p>
                            </Link>
                            <Link href="/dashboard/journey">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={dataOptimization}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Data Optimization</p>
                            </Link>
                            <Link href="/dashboard/history">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={dealingRecord}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Dealing Records</p>
                            </Link>
                            <Link href="/dashboard/profile">
                                <div className="dashboard-quick-actions-inner-childs">
                                    <Image
                                        src={profileIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                        unoptimized
                                    />
                                </div>
                                <p>Profile</p>
                            </Link>
                        </div>
                    </div>
                    <Properties />
                    <UniqueProperties />
                    <div className="commercial-data-wrapper">
                        <div className="commercial-data-heading">
                            <h2>Commercial traval data
                                for a wide range of applications</h2>
                            <p>Whether you’re buying, selling, or leasing a property, <br />
                                representing tenants, valuing assets, originating loans <br />
                                or managing diverse portfolios, Travelopro has got you covered.</p>
                        </div>
                        <div className="commercial-facilities-wrapper">
                            <div className="facilities-parent">
                                <div className="facilities-child">
                                    <Image
                                        src={agentIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="facilities-child">
                                    <h3>Brokers & Agents</h3>
                                    <p>Find new opportunities to grow your business
                                        and inform client advice.</p>
                                </div>
                            </div>
                            <div className="facilities-parent">
                                <div className="facilities-child">
                                    <Image
                                        src={lendersIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="facilities-child">
                                    <h3>Lenders</h3>
                                    <p>Gain an advantage at every stage of the commercial
                                        real estate lending process.</p>
                                </div>
                            </div>
                            <div className="facilities-parent">
                                <div className="facilities-child">
                                    <Image
                                        src={appraisersIcon}
                                        alt="icon"
                                        height={100}
                                        width={80}
                                    />
                                </div>
                                <div className="facilities-child">
                                    <h3>Appraisers</h3>
                                    <p>Streamline the appraisal process, enhance accuracy,
                                        and provide valuable insights to support evaluations.</p>
                                </div>
                            </div>
                            <div className="facilities-parent">
                                <div className="facilities-child">
                                    <Image
                                        src={investmentIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="facilities-child">
                                    <h3>Owners & Investors</h3>
                                    <p>Make investment, disposition, and asset management
                                        decisions with confidence.</p>
                                </div>
                            </div>
                            <div className="facilities-parent">
                                <div className="facilities-child">
                                    <Image
                                        src={occupiersIcon}
                                        alt="icon"
                                        height={100}
                                        width={100}
                                    />
                                </div>
                                <div className="facilities-child">
                                    <h3>Occupiers</h3>
                                    <p>Manage your firm’s portfolio and take strategic
                                        decisions backed by market data..</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="membership-type-wrapper">
                        <div className="membership-type-heading">
                            <h2>What sets Travelopro apart?</h2>
                            <p>The Travelopro membership program offers users a way to earn exclusive commissions by completing bookings.
                                <br /> <br />
                                With each booking completed, users accumulate points that help
                                them progress to higher membership levels, unlocking even greater commission benefits.</p>
                        </div>
                        <Membership
                            allCommission={JSON.parse(JSON.stringify(allCommission))}
                        />
                        <div className="platform-logo">
                            <Image
                                src={logo}
                                alt="logo"
                                height={100}
                                width={100}
                                unoptimized
                            />
                        </div>
                        <div className="copyrightAndLink-wrapper">
                            <div className="copyrightAndLink-parent">
                                <div className="copyrightAndLink-child">
                                    <h4>©2024 Travelopro</h4>
                                </div>
                                <div className="copyrightAndLink-child">
                                    <div className="copyrightAndLink-sub-child">
                                        <Link href="/dashboard/content/about">
                                            <p>About</p>
                                        </Link>
                                    </div>
                                    <div className="copyrightAndLink-sub-child">
                                        <Link href="/dashboard/content/tc">
                                            <p>Terms & Conditions</p>
                                        </Link>
                                    </div>
                                    <div className="copyrightAndLink-sub-child">
                                        <Link href="/dashboard/content/faq">
                                            <p>FAQ</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SecurityCheck
                        user={JSON.parse(JSON.stringify(user))}
                        authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
                    />
                </div>
            </div>
            <SecurityCheck
                user={JSON.parse(JSON.stringify(user))}
                authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
            />
        </>
    )
}

export default page