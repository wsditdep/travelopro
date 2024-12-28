import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import Wheel from '@/components/luckyDraw/Wheel';

export const dynamic = "force-dynamic"

const page = async () => {
    const { user: logedinUser } = await auth();

    const user = await fetchAuthenticatedUser() || {};

    const { allCommission, userCommission } = await fetchCommission();

    return (
        <>
            <Wheel
                authenticatedUser={JSON.parse(JSON.stringify(user))}
                allCommission={JSON.parse(JSON.stringify(allCommission))}
                userCommission={JSON.parse(JSON.stringify(userCommission))}
            />
            <SecurityCheck
                user={JSON.parse(JSON.stringify(logedinUser))}
                authenticatedUser={JSON.parse(JSON.stringify(user))}
            />
        </>
    )
}

export default page