import { fetchAuthenticatedUser, fetchCommission, fetchWithdrawal } from "@/app/actions/user/data"
import { auth } from "@/app/auth";
import SecurityCheck from "@/components/checkSecurityCode/CheckSecurityCode";

import dynamic from "next/dynamic";
import GlobalProgress from "@/components/global_progress/GlobalProgress";

const WithdrawalHistory = dynamic(() => import("@/components/history/WithdrawalHistory"), {
  loading: () => <GlobalProgress />
});

const page = async () => {
  const { user: logedinUser } = await auth();
  const user = await fetchAuthenticatedUser() || {};

  const withdrawals = await fetchWithdrawal() || [];

  const { allCommission, userCommission } = await fetchCommission();


  return (
    <>
      <WithdrawalHistory
        withdrawal={JSON.parse(JSON.stringify(withdrawals))}
        authUser={JSON.parse(JSON.stringify(user))}
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