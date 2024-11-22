import { StaticImageData } from "next/image";

export type DetailsItem = {
  id: string;
  heading: string;
  heading_2?: string;
  heading_3?: string;
  description: string;
  image: StaticImageData;
  href?: string;
  isBlured: boolean;
  meta_heading?: string;
  meta_description: string;
  date?: string;
  description_2?: string;
  description_3?: string;
  image_2?: StaticImageData;
  image_3?: StaticImageData;
  image_width?: string;
};
