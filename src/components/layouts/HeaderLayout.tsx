import { memo, useEffect } from 'react';

import type { AppPaths } from '../../app/constants';
import { useAppDispatch, useAppState } from '../../hooks/useAppContext';
import useWindowSize from '../../hooks/useWindowSize';
import HeadMenuItem from './components/HeadMenuItem';
import { classCombiner, setIsMobileMenu } from '../../utils';


interface HeaderLayout {
  navItems: {
    key: string;
    path: AppPaths;
  }[];
  activeItem: string;
}


const HeaderLayout = memo(({ navItems, activeItem }: HeaderLayout) => {
  const { isMobileMenu } = useAppState();
  const dispatch = useAppDispatch()
  const { isAtLeast } = useWindowSize();


  const toggleMenu = () => {
    dispatch(setIsMobileMenu(!isMobileMenu))
  }

  const closeMenu = () => {
    if (isMobileMenu)
      dispatch(setIsMobileMenu(false))
  }

  useEffect(() => {
    if (isAtLeast.md && isMobileMenu)
      closeMenu();
  }, [isAtLeast.md, isMobileMenu]);


  return (
    <div className='Header relative isolate overflow-hidden z-9997 w-full h-14 flex m-0 p-0 bg-transparent border-b border-b-primary-500'>
      <div className={classCombiner(`flex items-center justify-between w-full md:w-1/6 m-0 px-3 md:px-6 gap-4 bg-primary-600/85
                      transition-colors duration-300 ${(!isAtLeast.md && isMobileMenu) && 'bg-primary-700/85'}`)}>
        <span className='block text-sm text-primary-100 whitespace-nowrap select-none'>Hojjat-Azizi</span>

        {!isAtLeast.md && (
          <button
            onClick={toggleMenu}
            className='relative inline-flex flex-col items-center justify-center gap-1 p-1 size-7 rounded-sm'
          >
            <span className={classCombiner(`block w-full h-0.5 bg-primary-100 rounded-full transition-all
                            ${isMobileMenu && '-rotate-45 translate-y-1.5 bg-primary-50'}`)}></span>
            <span className={classCombiner(`block w-full h-0.5 bg-primary-100 rounded-full transition-all
                            ${isMobileMenu && 'scale-0 opacity-0'}`)}></span>
            <span className={classCombiner(`block w-full h-0.5 bg-primary-100 rounded-full transition-all
                            ${isMobileMenu && 'rotate-45 -translate-y-1.5 bg-primary-50'}`)}></span>
          </button>
        )}
      </div>


      {/* Mobile Menu */}
      {!isAtLeast.md && (
        <div className={classCombiner(`fixed top-16.25 bottom-16.25 left-2.25 right-2.25 z-10 overflow-hidden bg-primary-600/85 backdrop-blur-lg origin-top
                        transition-[max-height,background-color] duration-300 ${isMobileMenu ? 'max-h-full bg-primary-700/85' : 'max-h-0 pointer-events-none'}`)}>
          <nav className='relative overflow-y-auto overflow-x-hidden custom-scrollbar w-full h-full min-h-68 bg-transparent pb-14'>
            <ul className='flex flex-col'>
              {navItems.map(({ key, path }) => {
                const isActive = key === activeItem;

                return <li key={`m-${path}`} className='select-none p-0 m-0' onClick={closeMenu}>
                  <HeadMenuItem
                    to={path}
                    variant={isActive ? 'mobileActive' : 'default'}
                    isMobile
                  >
                    {key}
                  </HeadMenuItem>
                </li>
              })}
            </ul>
          </nav>
        </div>
      )}

      {/* Desktop Menu */}
      {isAtLeast.md && (
        <nav className='relative overflow-x-auto overflow-y-hidden w-5/6 custom-scrollbar bg-transparent border-l border-l-primary-500'>
          <ul className='flex h-full'>
            {navItems.map(({ key, path }, i) => {
              const isActive = key === activeItem;
              const isLastItem = i === navItems.length - 1;

              const li = (
                <li key={`d-${path}`} className='flex h-full select-none' onClick={closeMenu}>
                  <HeadMenuItem
                    to={path}
                    variant={isActive ? 'active' : 'desktop'}
                    border={isLastItem ? 'left' : 'right'}
                  >
                    {key}
                  </HeadMenuItem>
                </li>
              );

              return isLastItem ? [<i key="spacer" className='flex-1'></i>, li] : [li];
            })}
          </ul>
        </nav>
      )}
    </div>
  )
})

export default HeaderLayout;
