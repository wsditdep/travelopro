"use client";

import Link from "next/link";
import Sidebar from '@/components/sidebar/Sidebar';
import { useRouter } from "next/navigation";

const Breadcrumb = ({
    link,
    title,
    authUser,
    bg,
    isLink,
    isColor,
    isWhite,
    authenticatedUser,
    userCommission,
    allCommission
}) => {

    const router = useRouter();

    const backFunc = () => {
        return router.back();
    }

    return (
        <div className="breadcrumb-wrapper" style={{ background: bg !== "" ? bg : "" }}>
            <div className="breadcrumb-wrapper-parent">
                <div className="breadcrumb-wrapper-childs">
                    {
                        link === ""
                            ?
                            <i className="fa fa-less-than" onClick={() => backFunc()}></i>
                            :
                            <Link href={link}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 34.703 41.155"
                                >
                                    <path
                                        id="Path_338"
                                        d="M34.4 65.911a3.745 3.745 0 0 1-1.292 4.6L9.363 84.593 33.1 98.676a3.745 3.745 0 0 1 1.292 4.6 2.7 2.7 0 0 1-3.877 1.533L1.6 87.658a3.737 3.737 0 0 1 0-6.131l28.92-17.149a2.7 2.7 0 0 1 3.88 1.533"
                                        data-name="Path 338"
                                        transform="translate(0 -64.015)"
                                    ></path>
                                </svg>
                            </Link>
                    }
                </div>

                <div className="breadcrumb-wrapper-childs">
                    {
                        isLink
                            ?
                            <></>
                            :
                            <Sidebar
                                session={authUser}
                                isWhite={isWhite}
                                authenticatedUser={authenticatedUser}
                                allCommission={allCommission}
                                userCommission={userCommission}
                            />
                    }
                </div>

            </div>
            <div className="breadcrumb-wrapper-title">
                {
                    isColor
                        ?
                        <h3 style={{
                            color: "white"
                        }}>{title}</h3>
                        :
                        <h3>{title}</h3>
                }
            </div>
        </div>
    )
}

export default Breadcrumb;