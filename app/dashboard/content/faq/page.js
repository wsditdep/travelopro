import { fetchContent } from '@/app/actions/content/data'
import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import Faq from '@/components/content/Faq';

export const dynamic = "force-dynamic"

const page = async () => {
  const content = await fetchContent() || [];

  const { allCommission, userCommission } = await fetchCommission();
  const authenticatedUser = await fetchAuthenticatedUser() || {};

  return (
    <Faq
      data={JSON.parse(JSON.stringify(content))}
      authenticatedUser={JSON.parse(JSON.stringify(authenticatedUser))}
      allCommission={JSON.parse(JSON.stringify(allCommission))}
      userCommission={JSON.parse(JSON.stringify(userCommission))}
    />
  )
}

export default page