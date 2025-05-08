import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const Membership = dynamic(() => import("@/components/membership/Membership"), {
    loading: () => <GlobalProgress />
});

const page = async () => {
    const { user: logedinUser } = await auth();

    const user = await fetchAuthenticatedUser();
    const { allCommission, userCommission } = await fetchCommission();

    return (
        <>
         <div className="membership-section">
            <Membership
                authenticatedUser={JSON.parse(JSON.stringify(user))}
                userCommission={JSON.parse(JSON.stringify(userCommission))}
                allCommission={JSON.parse(JSON.stringify(allCommission))}
                membership={JSON.parse(JSON.stringify(allCommission))}
            />
            <SecurityCheck
                user={JSON.parse(JSON.stringify(logedinUser))}
                authenticatedUser={JSON.parse(JSON.stringify(user))}
            />
         </div>
        </>
    )
}

export default page