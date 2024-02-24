import fetcher from '@/lib/fetcher';

import { getSkillsResponse } from './type';

export const getSkills = async () => {
  const response = await fetcher<getSkillsResponse>({
    url: '/skills',
    next: {
      tags: ['skills'],
      revalidate: 60 * 60 * 24 * 3,
    },
  });

  return response;
};
