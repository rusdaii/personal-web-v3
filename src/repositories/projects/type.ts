import { SuccessResponseData } from '@/types/response';

export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  demo: string;
  github: string;
  skills: Skill[];
};

type Skill = {
  id: string;
  name: string;
};

export type GetProjectsResponse = SuccessResponseData<Project[]>;
