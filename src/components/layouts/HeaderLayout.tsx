import { memo, useEffect, useRef } from 'react';

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

  const mobileScrollArea = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);


  const toggleMenu = () => {
    dispatch(setIsMobileMenu(!isMobileMenu))
  }

  const closeMenu = () => {
    if (isMobileMenu)
      dispatch(setIsMobileMenu(false))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!mobileScrollArea.current?.contains(e.target as Node))
      touchStartY.current = e.touches[0].clientY;
    else
      touchStartY.current = null;
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartY.current)
      return;
    const touchEndY = e.changedTouches[0].clientY;
    const changeY = touchStartY.current - touchEndY;

    if (changeY > 50)
      closeMenu();

    touchStartY.current = null;
  }

  useEffect(() => {
    if (isAtLeast.md && isMobileMenu) {
      closeMenu();
      touchStartY.current = null;
    }
  }, [isAtLeast.md, isMobileMenu]);


  return (
    <>
      <header className='Header relative isolate overflow-hidden z-9997 w-full h-14 flex m-0 p-0 bg-transparent border-b border-b-primary-500'>
        <div className={classCombiner(`flex items-center justify-between w-full md:w-1/6 md:min-w-38 m-0 px-4 md:px-6 gap-4 bg-primary-600/85 md:border-r border-primary-500
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

        {/* Desktop Menu */}
        {isAtLeast.md && (
          <nav className='relative overflow-x-auto overflow-y-hidden w-5/6 custom-scrollbar'>
            <ul className='flex h-full'>
              {navItems.map(({ key, path }, i) => {
                const isActive = key === activeItem;
                const isLastItem = i >= navItems.length - 1;

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
      </header>

      {/* Mobile Menu */}
      {!isAtLeast.md && (
        <div className={classCombiner(`fixed top-16 bottom-16 left-2.25 right-2.25 z-9996 overscroll-none overflow-hidden bg-primary-600/85 backdrop-blur-lg origin-top
                        transition-[max-height,background-color] duration-300 ${isMobileMenu ? 'max-h-full bg-primary-700/85' : 'max-h-0 pointer-events-none'}`)}>
          <nav onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} className='w-full h-full min-h-68 bg-transparent'>
            <div ref={mobileScrollArea} className='relative w-full max-h-full overscroll-none overflow-y-auto overflow-x-hidden custom-scrollbar pb-14'>
              <ul className='flex flex-col'>
                {navItems.map(({ key, path }) => {
                  const isActive = key === activeItem;

                  return <li key={`m-${path}`} onClick={closeMenu} className='select-none p-0 m-0'>
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
            </div>
          </nav>
        </div>
      )}
    </>
  )
})

export default HeaderLayout;
