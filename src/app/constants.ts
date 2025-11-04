

export const AppPaths = {
  Home: '/home',
  AboutMe: '/about-me',
  Projects: '/projects',
  ContactMe: '/contact-me',

  Error: '/err',
  NotFound: '/404',
} as const;

export type AppPaths = (typeof AppPaths)[keyof typeof AppPaths];
