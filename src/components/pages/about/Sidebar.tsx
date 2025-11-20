import { } from 'react';
import { RiArrowRightSLine } from "react-icons/ri";

import type { AppState } from '../../../types';
import { classCombiner } from '../../../utils';
import { useAppState } from '../../../hooks/useAppContext';

import SidebarLayout from '../../layouts/SidebarLayout';


export type TSidebarItem = {
  key: string;
  title: Record<AppState['language'], string>;
}


interface Sidebar {
  mode: "desktop" | "mobile";
  items: TSidebarItem[];
  scrollTo: (id: string) => void;
}


const Sidebar = ({ mode, items, scrollTo }: Sidebar) => {
  const { language: lang } = useAppState();



  return (
    <SidebarLayout title='README.md' initOpen={mode === "desktop"} activeLeftIcon='files'
      btnClassName={mode === "mobile" && 'border-b-0'} className={mode === "mobile" && 'border-b'}>
      <ul className={classCombiner(`flex flex-col gap-0 py-2`, mode === "mobile" && 'border-t border-primary-500 bg-primary-700/85')}>
        {items.map(item => (
          <li key={item.key} onClick={() => scrollTo(item.key)}
            className={classCombiner(`w-full flex items-center cursor-pointer gap-1.5 text-sm text-primary-100 px-4 py-1.5 transition-colors
              hover:bg-primary-500 active:bg-primary-500 hover:text-primary-50 active:text-primary-50`)}>
            <span className='text-base -ml-1'><RiArrowRightSLine /></span>
            <span lang={lang} className='line-clamp-1 text-left'>{item.title[lang]}</span>
          </li>
        ))}
      </ul>
    </SidebarLayout>
  )
}

export default Sidebar;
