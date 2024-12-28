import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import { auth } from '@/app/auth';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import ChangePassword from '@/components/recovery/ChangePassword';

export const dynamic = "force-dynamic"

const page = async () => {

  const { user: logedinUser } = await auth();
  const user = await fetchAuthenticatedUser();

  const { allCommission, userCommission } = await fetchCommission();
  const authenticatedUser = await fetchAuthenticatedUser() || {};

  return (
    <>
      <ChangePassword
        authUser={JSON.parse(JSON.stringify(user))}
        authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
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