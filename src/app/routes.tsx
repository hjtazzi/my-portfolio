import { lazy } from 'react';
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';

import App from '../App';
import WithSuspense from '../components/shared/ComponentWithSuspense';
import NotFoundFallback from '../components/shared/NotFoundFallback';
import ErrorFallback from '../components/shared/ErrorFallback';

const HomePage = lazy(() => import("../pages/Home"));
const AboutPage = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const ContactMe = lazy(() => import("../pages/ContactMe"));


const routes = createHashRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<WithSuspense component={<HomePage />} />} />
      <Route path='home' element={<WithSuspense component={<HomePage />} />} />

      <Route path='about-me' element={<WithSuspense component={<AboutPage />} />} />

      <Route path='projects' element={<WithSuspense component={<Projects />} />} />

      <Route path='contact-me' element={<WithSuspense component={<ContactMe />} />} />

      <Route path="err" element={<ErrorFallback />} />
      <Route path="404" element={<NotFoundFallback />} />
      <Route path="*" element={<NotFoundFallback />} />
    </Route>
  )
);

export default routes;
