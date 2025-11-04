import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { AppPaths } from '../../app/constants';
import useRealViewportHeight from '../../hooks/useRealViewportHeight';

import HeaderLayout from './HeaderLayout';
import FooterLayout from './FooterLayout';


const navItems = [
  {
    key: "_Welcome",
    path: AppPaths.Home
  },
  {
    key: "_AboutMe",
    path: AppPaths.AboutMe
  },
  {
    key: "_Projects",
    path: AppPaths.Projects
  },
  {
    key: "_ContactMe",
    path: AppPaths.ContactMe
  },
]


interface MainLayout {
  children?: React.ReactNode;
}

const MainLayout = memo(({ children }: MainLayout) => {
  const { pathname } = useLocation();
  useRealViewportHeight();

  const findActiveItem = navItems.find(({ path }) => pathname.startsWith(path))
  const activeRoute = pathname === '/' ? navItems[0].key : findActiveItem?.key;


  return (
    <div className="MainLayout relative isolate overflow-hidden w-screen h-[calc(var(--real-vh,1vh)*100)] min-h-dvh flex 
                    items-center justify-center bg-transparent m-0 p-2 md:p-6">
      <div className="relative isolate overflow-hidden w-full h-full flex flex-col
                    bg-primary-600! border border-primary-500 rounded-lg m-0 p-0">

        <HeaderLayout navItems={navItems} activeItem={activeRoute ?? ""} />

        <div className='MainContent relative overflow-hidden block flex-1 h-[calc(100%-7rem)] w-full'>
          {children}
        </div>

        <FooterLayout />
      </div>
    </div>
  );
})

export default MainLayout;
