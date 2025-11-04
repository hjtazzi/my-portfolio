import { memo } from 'react';
import { VscGithub } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";

import { useAppState } from '../../hooks/useAppContext';
import useWindowSize from '../../hooks/useWindowSize';
import { classCombiner } from '../../utils';


const FooterLayout = memo(() => {
  const { isMobileMenu } = useAppState();
  const { isAtLeast } = useWindowSize();


  return (
    <div className={classCombiner(`Footer relative isolate overflow-hidden z-9997 w-full h-14 m-0 p-0 border-t border-t-primary-500
                  bg-primary-600/85 transition-colors ${(!isAtLeast.md && isMobileMenu) && 'bg-primary-700/85 delay-150'}`)}>
      <div className='flex w-full h-full text-primary-100'>
        <div className='flex items-center h-full md:w-1/6 px-3 md:px-6 flex-1 md:flex-initial border-r border-r-primary-500'>
          <span className='block text-sm whitespace-nowrap select-none'>find me in:</span>
        </div>

        <a href='https://linkedin.com/in/hojjat-azizi' target='_blank'
          className={classCombiner(`flex items-center justify-center h-full min-w-14 px-2 border-r border-r-primary-500
                        transition-colors hover:bg-primary-500 hover:text-primary-50`)}>
          <span className='text-xl md:text-2xl'><RiLinkedinLine /></span>
        </a>

        <i className='hidden md:block md:flex-1 opacity-0'></i>

        <a href='https://github.com/hjtazzi' target='_blank'
          className={classCombiner(`flex items-center justify-center h-full min-w-14 px-3 md:px-6 gap-2 border-l border-l-transparent md:border-l-primary-500
                    transition-colors hover:bg-primary-500 hover:text-primary-50`)}>
          <span className='hidden md:block text-sm whitespace-nowrap'>@hjtazzi</span>
          <span className='text-xl md:text-2xl'><VscGithub /></span>
        </a>
      </div>
    </div>
  )
})

export default FooterLayout;
