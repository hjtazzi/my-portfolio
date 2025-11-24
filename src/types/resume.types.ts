export type TDate = { y: number; m: number; d: number };

export type TDateRange = {
  start: Date;
  end: Date;
}


export type TDescription = {
  description: string;
  details: string | null;
}


export type TResumeData = {
  bio: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    aboutYourself: TDescription;
    birthdate: TDate;
    metaInfos: Record<string, string>;
    metaLinks: Record<string, string>;
  };
  experience: {
    title: string;
    company: string;
    employmentType?:
    | "FullTime" | "PartTime" | "SelfEmployed" | "Freelance" | "Contract" | "Internship"
    | "تمام‌وقت" | "پاره‌وقت" | "خویش‌فرما" | "فریلنس" | "قراردادی" | "کارآموزی";
    location: string;
    locationType?:
    | "OnSite" | "Hybrid" | "Remote"
    | "حضوری" | "ترکیبی" | "دورکاری";
    about: TDescription;
    startDate: TDate;
    endDate: TDate | "Present";
  }[];
  skills: {
    type: "bar" | "chip";
    title: string;
    skills: {
      skill: string;
      score: number;
    }[];
  }[];
  education: {
    university: string;
    degree:
    | "High School Diploma" | "Associate Degree (AS)" | "Bachelor’s Degree (BS)" | "Master’s Degree (MS)"
    | "دیپلم" | "فوق‌دیپلم" | "کارشناسی" | "کارشناسی ارشد";
    field: string;
    startDate: TDate;
    endDate: TDate | "Present";
  }[];
}
