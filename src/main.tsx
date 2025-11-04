import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import ContextProvider from './app/AppContext.tsx';
import routes from './app/routes.tsx';

import "./styles/main.css";


createRoot(document.getElementById('root') as HTMLElement)
  .render(
    <StrictMode>
      <HelmetProvider>
        <ContextProvider>
          <RouterProvider router={routes} />
        </ContextProvider>
      </HelmetProvider>
    </StrictMode>,
  );
