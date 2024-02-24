import { userId } from '@/lib/constants/userId';
import fetcher from '@/lib/fetcher';

import { GetResponseUser } from './type';

export const getUser = async () => {
  const response = await fetcher<GetResponseUser>({
    url: `/user/${userId}`,
    next: {
      revalidate: 60 * 60 * 24 * 3,
    },
  });

  return response;
};
