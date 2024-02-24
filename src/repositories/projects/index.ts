import fetcher from '@/lib/fetcher';

import { GetProjectsResponse } from './type';

export const getProjects = async () => {
  const response = await fetcher<GetProjectsResponse>({
    url: '/projects',
    next: {
      revalidate: 60 * 60 * 24 * 3,
      tags: ['projects'],
    },
  });

  return response;
};
