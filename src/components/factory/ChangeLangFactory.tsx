import { memo } from 'react';

import { classCombiner, setLanguage } from '../../utils';
import { useAppDispatch, useAppState } from '../../hooks/useAppContext';


const ChangeLangFactory = memo(() => {
  const dispatch = useAppDispatch();
  const { language: lang } = useAppState();


  return (
    <div className='flex overflow-hidden border border-primary-500 rounded-sm text-xs md:text-sm text-primary-200'>
      <button onClick={() => { if (lang === "fa") dispatch(setLanguage("en")) }}
        className={classCombiner(`cursor-pointer inline-flex items-center justify-center size-6 md:size-7 leading-none transition-colors hover:bg-primary-700 hover:text-primary-100`,
          lang === "en" && 'text-primary-100')}>en</button>
      <i className='inline-block w-px h-full min-h-6 md:min-h-7 bg-primary-500'></i>
      <button onClick={() => { if (lang === "en") dispatch(setLanguage("fa")) }}
        className={classCombiner(`cursor-pointer font-fa inline-flex items-center justify-center size-6 md:size-7 leading-none transition-colors hover:bg-primary-700 hover:text-primary-100`,
          lang === "fa" && 'text-primary-100')}>فا</button>
    </div>
  )
})

export default ChangeLangFactory;
