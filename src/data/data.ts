import type { AppState, TResumeData } from "../types";


export const Contacts = {
  github: "https://github.com/hjtazzi",
  linkedin: "https://linkedin.com/in/hojjat-azizi",
  email: "hjtazzi@gmail.com"
}

const Birthdate: TResumeData['bio']['birthdate'] = { y: 2002, m: 1, d: 31 };
const LanguagesSkills: TResumeData['skills'][0]['skills'] = [
  { skill: "TypeScript", score: 85 },
  { skill: "JavaScript", score: 90 },
  { skill: "PHP", score: 65 },
];
const BackendSkills: TResumeData['skills'][0]['skills'] = [
  { skill: "Node.js", score: 85 },
  { skill: "Express.js", score: 80 },
  { skill: "Nest.js", score: 65 },
  { skill: "REST API", score: 65 },
  { skill: "Mongoose.js", score: 80 },
  { skill: "WordPress", score: 85 },
];
const DatabasesSkills: TResumeData['skills'][0]['skills'] = [
  { skill: "MongoDB", score: 80 },
  { skill: "MySQL", score: 65 },
  // { skill: "Redis", score: 65 },
];
const FrontendSkills: TResumeData['skills'][0]['skills'] = [
  { skill: "React", score: 85 },
  { skill: "MUI", score: 80 },
  { skill: "TailwindCSS", score: 80 },
  { skill: "HTML/CSS", score: 90 },
  { skill: "SCSS", score: 85 },
];

export const ResumeData: Record<AppState["language"], TResumeData> = {
  en: {
    bio: {
      firstName: "Hojjat",
      lastName: "Azizi",
      jobTitle: "Backend Developer",
      birthdate: Birthdate,
      aboutYourself: {
        description: "I am a backend developer focused on gaining a deep understanding of systems, analyzing their behavior in different scenarios, and designing professional, simple, and efficient architectures and solutions. With a strong focus on the Node.js and TypeScript ecosystem, I enjoy building scalable, optimized, and maintainable architectures, continuously learning, and creating solutions that deliver real value.",
        details: `\nThroughout my career, I have consistently aimed to deeply understand systems, break down complex challenges into manageable parts, and design structures that are not only high-performing but also simple, maintainable, and scalable. Working on large projects and complex systems—from optimization and architectural design to implementing new features and performing precise debugging—has given me a sharp perspective on detail, quality, engineering standards, and the importance of making the right architectural decisions.\n\nMy interest in building stable architectures, optimizing performance, and working closely with infrastructure has shaped my future path toward Backend Architecture, System Design, DevOps, and scalable system development. My goal is to deepen my understanding of advanced software and infrastructure concepts so I can play a more impactful role in designing and building professional, reliable, and long-lasting products.`
      },
      metaInfos: {
        'Location': "Tehran, Iran",
        'Email': Contacts.email
      },
      metaLinks: {
        'LinkedIn': Contacts.linkedin,
        'GitHub': Contacts.github
      }
    },
    experience: [
      {
        title: "Full-Stack Developer",
        company: "Freelance",
        employmentType: "Contract",
        location: "Tehran, Iran",
        locationType: "Remote",
        about: {
          description: "As a full-stack developer, my primary responsibility was designing and implementing backend systems with a focus on data management, modular architecture, and query optimization. In addition to backend development, I handled full-cycle development, deployment, and optimization of several projects. My work centered on building specialized web applications and dashboards, debugging complex issues, and improving database performance and overall system structure.",
          details: `\nDuring this period, I worked on projects involving large datasets and complex processing flows, which required precise data-flow control, query optimization, efficient API design, and the implementation of stable architectures for both backend and frontend layers. One of the key projects involved a complete refactor of the frontend, designing a new architecture from scratch, optimizing request handling, reducing database load, and developing new backend features. Extensive use of complex forms, architectural best practices, and the need for high responsiveness created valuable technical challenges.\n\nThese experiences strengthened my skills in areas such as requirement analysis, choosing the right architecture and technologies, refactoring legacy systems, collaborating effectively with other developers, and managing the full development lifecycle. The variety of projects and diverse client needs also played a significant role in deepening my experience in full-stack development and enhancing my understanding of system behavior.`,
        },
        startDate: { y: 2024, m: 12 },
        endDate: "Present"
      },
      {
        title: "Full-Stack Developer",
        company: "Cyan.DM",
        employmentType: "FullTime",
        location: "Tehran, Iran",
        locationType: "OnSite",
        about: {
          description: "As a full-stack developer, I was responsible for designing and implementing backend services using Node.js/Express, building database structures with MongoDB, and developing custom WordPress/PHP-based websites. Alongside development, I also handled tasks such as codebase optimization, resolving system-level issues, and contributing to architectural decisions and technology selection.",
          details: `\nDuring this period, I designed and developed the entire backend of a complex web application from scratch—an application with high data volume and sensitive processing logic that required a modular architecture, efficient API design, optimized query management, and strict performance and scalability considerations. My role involved defining the database structure, designing models, managing data flow, and implementing features with a strong focus on reliability and system efficiency.\n\nThe diversity of projects, the need to choose proper architectures, and the challenge of solving complex problems under time constraints gave me a deeper understanding of large-scale systems, architectural principles, and data flow. This experience strengthened not only my technical expertise but also my collaborative skills, decision-making ability, and adaptability in dynamic environments.`
        },
        startDate: { y: 2023, m: 2 },
        endDate: { y: 2024, m: 11 }
      },
      {
        title: "Frontend Developer",
        company: "Freelance",
        location: "Tehran, Iran",
        about: {
          description: "As a freelance front-end developer, I worked remotely on various commercial, corporate, and technical projects. A major part of my work involved developing complete WordPress/PHP websites, creating dynamic and maintainable user interfaces with React, and implementing responsive layouts and performance optimizations to deliver a better user experience.",
          details: `\nWorking on full-featured WordPress/PHP websites and developing admin panels with React strengthened my skills in building optimized interfaces, structuring clean code, debugging issues, and improving loading performance. One of my key projects was a collaboration with the "Internet of Things and Data Science Expansion Organization", where I was responsible for developing a configuration panel for a specific microcontroller. This panel needed to be fully CSR-based with an extremely small output size, requiring a deep understanding of browser behavior, resource management, and precise code optimization.\n\nThese experiences gave me a stronger foundation in UI/UX principles, web system behavior, data flow, API integration, and front-end architecture and forming a solid starting point for my progression into more advanced backend development and software architecture.`
        },
        startDate: { y: 2022, m: 6 },
        endDate: { y: 2023, m: 1 }
      }
    ],
    skills: [
      {
        type: "bar",
        title: "Languages",
        skills: LanguagesSkills
      },
      {
        type: "bar",
        title: "Backend",
        skills: BackendSkills
      },
      {
        type: "bar",
        title: "Databases",
        skills: DatabasesSkills
      },
      {
        type: "bar",
        title: "Frontend/UI",
        skills: FrontendSkills
      },
    ],
    education: [
      {
        university: "Islamic Azad University",
        field: "Computer Software Engineering",
        degree: "Bachelor’s Degree (BS)",
        startDate: { y: 2020, m: 10 },
        endDate: { y: 2025, m: 6 }
      }
    ],
  },
  fa: {
    bio: {
      firstName: "حجت",
      lastName: "عزیزی",
      jobTitle: "توسعه‌دهنده بک‌اند",
      birthdate: Birthdate,
      aboutYourself: {
        description: "من یک توسعه‌دهنده بک‌اند هستم که درک عمیق سیستم‌ها، تحلیل رفتار آن‌ها در سناریوهای مختلف و طراحی معماری‌ها و راه‌حل‌های حرفه‌ای، ساده و کارآمد را محور کار خود قرار داده‌ام. با تمرکز بر اکوسیستم Node.js و TypeScript به ساخت معماری‌های مقیاس‌پذیر، بهینه و قابل توسعه علاقه دارم و همیشه در مسیر یادگیری مداوم و خلق راه‌حل‌های مفید حرکت می‌کنم.",
        details: `\nدر مسیر کاری خود همواره تلاش کرده‌ام سیستم‌ها را عمیقاً درک کنم، چالش‌های پیچیده را به بخش‌های قابل‌حل تقسیم کنم و ساختارهایی ایجاد کنم که علاوه بر عملکرد بالا، ساده، قابل نگهداری و توسعه‌پذیر باشند. تجربه کار روی پروژه‌های بزرگ و سیستم‌های پیچیده، از بهینه‌سازی و طراحی معماری گرفته تا توسعه قابلیت‌های جدید و خطایابی دقیق، باعث شده نگاه دقیقی به جزئیات، کیفیت، استانداردهای مهندسی و اهمیت تصمیم‌گیری درست در طراحی سیستم‌ها داشته باشم.\n\nعلاقه من به ساخت معماری‌های پایدار، بهینه‌سازی عملکرد و تعامل با زیرساخت باعث شده مسیر آینده‌ام را با تمرکز بر حوزه‌های Backend Architecture ،System Design ،DevOps و توسعه سیستم‌های مقیاس‌پذیر دنبال کنم. هدفم این است که با درک بهتر مفاهیم عمیق‌تر نرم‌افزار و زیرساخت، بتوانم در طراحی و ساخت محصولات حرفه‌ای‌تر و قابل اتکا نقش مؤثرتری داشته باشم.`
      },
      metaInfos: {
        'موقعیت مکانی': "ایران، تهران",
        'ایمیل': Contacts.email
      },
      metaLinks: {
        'LinkedIn': Contacts.linkedin,
        'GitHub': Contacts.github
      }
    },
    experience: [
      {
        title: "توسعه‌دهنده فول استک",
        company: "Freelance",
        employmentType: "قراردادی",
        location: "ایران، تهران",
        locationType: "دورکاری",
        about: {
          description: "به‌عنوان توسعه‌دهنده فول‌استک، مسئولیت اصلی من طراحی و توسعه بک‌اند با تمرکز بر مدیریت داده، معماری ماژولار و بهینه‌سازی Queryها بود. علاوه بر آن، در بسیاری از پروژه‌ها مسئولیت کامل توسعه، استقرار و بهینه‌سازی سیستم‌ها را نیز بر عهده داشتم. عمده فعالیت من روی توسعه وب‌اپلیکیشن‌ها و داشبوردهای تخصصی، رفع خطاها، و ارتقای عملکرد دیتابیس و ساختار سیستم‌ها متمرکز بود.",
          details: `\nدر این دوره روی پروژه‌هایی با داده‌های حجیم و ساختارهای پیچیده کار کردم که نیازمند کنترل دقیق جریان داده، بهینه‌سازی Queryها، طراحی APIهای کارآمد و پیاده‌سازی معماری پایدار برای بک‌اند و فرانت‌اند بودند. یکی از مهم‌ترین پروژه‌ها شامل ریفکتور کامل بخش فرانت‌اند، طراحی معماری جدید از صفر، بهینه‌سازی درخواست‌ها، کاهش بار دیتابیس و توسعه قابلیت‌های جدید در بک‌اند بود. استفاده گسترده از فرم‌ها، ضرورت استفاده از الگوهای معماری مناسب و نیاز به سرعت پاسخ‌گویی مناسب، چالش‌های فنی ارزشمندی ایجاد کرد.\n\nاین تجربه‌ها باعث شد در حوزه‌هایی مانند تحلیل نیاز، انتخاب معماری و تکنولوژی مناسب، Refactor سیستم‌های قدیمی، همکاری با توسعه‌دهندگان، مدیریت چرخه کامل توسعه مهارت بیشتری کسب کنم. تنوع پروژه‌ها و نیازهای مختلف مشتریان نیز نقش مهمی در عمیق‌تر شدن تجربه من در توسعه فول‌استک و درک بهتر رفتار سیستم‌ها داشت.`,
        },
        startDate: { y: 2024, m: 12 },
        endDate: "Present"
      },
      {
        title: "توسعه‌دهنده فول استک",
        company: "Cyan.DM",
        employmentType: "تمام‌وقت",
        location: "ایران، تهران",
        locationType: "حضوری",
        about: {
          description: "به‌عنوان یک توسعه‌دهنده فول‌استک، مسئولیت طراحی و توسعه بک‌اند با Node.js/Express، پیاده‌سازی دیتابیس با MongoDB و توسعه وب‌سایت‌های اختصاصی مبتنی بر WordPress/PHP را بر عهده داشتم. در کنار توسعه، وظایفی مانند بهینه‌سازی ساختار کد، رفع باگ‌های سیستمی، و مشارکت در تعیین معماری و انتخاب تکنولوژی‌ها نیز بخشی از فعالیت من بود.",
          details: `\nدر این دوره تجربه طراحی و توسعه‌ی کامل بک‌اند یک وب‌اپلیکیشن با داده‌های وسیع و منطق پیچیده را از صفر بر عهده داشتم؛ پروژه‌ای با حجم داده بالا و منطق پردازش حساس که نیازمند معماری ماژولار، طراحی APIهای کارآمد، مدیریت بهینه کوئری‌ها و تضمین پایداری و کارایی سیستم بود. در این پروژه، تصمیم‌گیری درباره ساختار دیتابیس، طراحی مدل‌ها، مدیریت جریان داده، و پیاده‌سازی قابلیت‌ها با تمرکز بر Performance و Scalability بر عهده من بود.\n\nتنوع پروژه‌ها، نیاز به انتخاب معماری‌های مناسب، و حل مشکلات پیچیده در زمان کوتاه، دید عمیق‌تری نسبت به سیستم‌های بزرگ، اصول معماری و جریان داده‌ها به من داد. این تجربه نه‌تنها مهارت‌های فنی مرا تقویت کرد، بلکه توانایی همکاری تیمی، مدیریت چالش‌ها و تصمیم‌گیری در شرایط متغیر را نیز ارتقا داد.`
        },
        startDate: { y: 2023, m: 2 },
        endDate: { y: 2024, m: 11 }
      },
      {
        title: "توسعه‌دهنده فرانت‌اند",
        company: "Freelance",
        location: "ایران، تهران",
        about: {
          description: "به‌عنوان یک توسعه‌دهنده فرانت‌اند فریلنس، به‌صورت ریموت در پروژه‌های مختلف فروشگاهی، شرکتی و فنی فعالیت داشتم. بخش بزرگی از کار من شامل توسعه وب‌سایت‌های کامل با WordPress/PHP، ساخت رابط‌های کاربری پویا و قابل نگهداری با React، و پیاده‌سازی ریسپانسیو و بهینه‌سازی عملکرد برای تجربه کاربری بهتر بود.",
          details: `\nتجربه کار بر روی وب‌سایت‌های کامل مبتنی بر WordPress/PHP و توسعه پنل‌های مدیریتی با React باعث شد مهارت‌های من در زمینه ساخت رابط‌های کاربری بهینه، ساختاردهی کد، رفع خطاها و بهبود سرعت لود تقویت شود. یکی از پروژه‌های مهم من، همکاری با «سازمان ترویج اینترنت اشیاء و علوم داده» بود؛ جایی که مسئولیت توسعه یک پنل تنظیمات برای یک میکروکنترلر خاص را بر عهده داشتم. این پنل باید به‌صورت کامل CSR و با حجم خروجی بسیار پایین اجرا می‌شد که نیازمند درک عمیق از رفتار مرورگر، مدیریت منابع، و بهینه‌سازی دقیق کد بود.\n\nتجربه‌های این دوره باعث شد شناخت عمیق‌تری نسبت به اصول UI/UX، سیستم‌های وب، جریان داده، تعامل با APIها و مبانی معماری فرانت‌اند پیدا کنم و مبنای محکمی برای حرکت من به سمت مسیر حرفه‌ای‌تر و عمیق‌تر در حوزه بک‌اند و معماری نرم‌افزار فراهم کرد.`
        },
        startDate: { y: 2022, m: 6 },
        endDate: { y: 2023, m: 1 }
      }
    ],
    skills: [
      {
        type: "bar",
        title: "زبان‌های برنامه‌نویسی",
        skills: LanguagesSkills
      },
      {
        type: "bar",
        title: "توسعهٔ بک‌اند",
        skills: BackendSkills
      },
      {
        type: "bar",
        title: "پایگاه‌های داده",
        skills: DatabasesSkills
      },
      {
        type: "bar",
        title: "توسعهٔ فرانت‌اند",
        skills: FrontendSkills
      },
    ],
    education: [
      {
        university: "دانشگاه آزاد اسلامی",
        field: "مهندسی نرم‌افزار کامپیوتر",
        degree: "کارشناسی",
        startDate: { y: 2020, m: 10 },
        endDate: { y: 2025, m: 6 }
      }
    ],
  }
}
