import { VacancyCategory } from "@/utils/constants";

export type Vacancy = {
  id: string;
  heading: string;
  location: string;
  category: VacancyCategory;
  contact_phone?: string;
  contact_email?: string;
  contact_person?: string;
  isHot?: boolean;
  isFullTime: boolean;
  isRemote?: boolean;
  isMilitaryFree?: boolean;
  responsibilities?: string[];
  requirements?: string[];
  guarantees?: string[];
};
