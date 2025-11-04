import { } from 'react';
import { Outlet } from 'react-router-dom';

import ErrorBoundary from './app/ErrorBoundary';
import MainLayout from './components/layouts/MainLayout';


const App = () => {

  return (
    <ErrorBoundary>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ErrorBoundary>
  );
}

export default App;
