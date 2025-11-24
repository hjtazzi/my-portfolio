import { memo, useRef, useState, type ReactNode } from 'react';
import { type ClassValue } from 'clsx';
import { VscFiles, VscSearch } from "react-icons/vsc";
import { RiArrowDownSFill } from "react-icons/ri";

import { classCombiner } from '../../utils';
import useAutoMaxHeight from '../../hooks/useAutoMaxHeight';


const leftIcons = {
  files: <VscFiles />,
  search: <VscSearch />
} as const;


interface SidebarLayout {
  title: string;
  children: ReactNode;
  initOpen?: boolean;
  activeLeftIcon?: keyof typeof leftIcons;
  className?: ClassValue;
  btnClassName?: ClassValue;
}


const LeftIconBar = memo(({ active }: { active: keyof typeof leftIcons; }) => {
  return (
    <div className='hidden xl:flex flex-col w-14 border-r border-r-primary-500'>
      {Object.entries(leftIcons).map(([key, icon]) => (
        <div key={key}
          className={classCombiner(`flex items-center justify-center h-14 border-b border-b-transparent text-primary-200`, key === active && 'text-primary-100')}>
          <span className='text-2xl'>{icon}</span>
        </div>
      ))}
    </div>
  )
});


const SidebarLayout = memo(({ title, children, initOpen = true, activeLeftIcon = "files", className, btnClassName }: SidebarLayout) => {
  const [openDropdown, setOpenDropdown] = useState<boolean>(initOpen);
  const [enableScroll, setEnableScroll] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { maxHeight } = useAutoMaxHeight({ contentRef, open: openDropdown });


  const toggleDropdown = () => {
    setEnableScroll(false);
    setOpenDropdown(prev => !prev);
  }

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target === dropdownRef.current && openDropdown)
      setEnableScroll(true);
  }



  return (
    <div className={classCombiner(`SidebarLayout w-full md:w-1/6 md:min-w-38 m-0 p-0 flex md:border-r border-primary-500 select-none`, className)}>
      <LeftIconBar active={activeLeftIcon} />

      <div className='relative w-full xl:w-[calc(100%-3.5rem)] h-full flex flex-col'>
        <button onClick={toggleDropdown}
          className={classCombiner(`w-full flex items-center min-h-12 border-b border-b-primary-500 px-4 gap-1.5 text-sm text-primary-50 cursor-pointer transition-colors
            hover:bg-primary-500 hover:text-primary-50 active:bg-primary-500 active:text-primary-50`, !openDropdown && 'text-primary-100', btnClassName)}>
          <span className={`text-base transition -ml-1 ${!openDropdown && '-rotate-90'}`}><RiArrowDownSFill /></span>
          <span className='line-clamp-1 text-left'>{title}</span>
        </button>

        <div ref={dropdownRef} onTransitionEnd={handleTransitionEnd} style={{ maxHeight: `${maxHeight}px` }}
          className={classCombiner(`w-full overflow-hidden origin-top duration-300 transition-[max-height]`)}>
          <div ref={contentRef}
            className={classCombiner(`w-full max-h-full custom-scrollbar overflow-x-hidden overflow-y-hidden`, enableScroll && 'overflow-y-auto')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
});

export default SidebarLayout;
