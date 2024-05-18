export type RouteType = { label: string; href: string };
export type SocialMediaType = { icon: string; href: string };
export type ServiceType = {
  title: string;
  description: string;
  icons: {
    label: string;
    icon: string;
  }[];
};
export type ResumeDataTye = {
  title: string;
  startDate?: string;
  endDate?: string;
  company?: string;
};

export type SkillType = {
  label: string;
  icon: string;
};

export type WorkType = {
  title: string;
  description: string;
  badges: string[];
  image: string;
  features: string[];
};
