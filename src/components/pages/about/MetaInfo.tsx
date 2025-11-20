import { } from 'react';
import { Link } from 'react-router-dom';
import { RiCircleLine, RiLink } from "react-icons/ri";

import { useAppState } from '../../../hooks/useAppContext';
import { ResumeData } from "../../../data";


const MetaInfo = () => {
  const { language: lang } = useAppState();
  const { bio: { metaInfos, metaLinks } } = ResumeData[lang];

  return (
    <div className='flex flex-col gap-3'>
      <ul className='flex flex-col gap-1'>
        {Object.entries(metaInfos).map(([key, value]) => (
          <li key={key} className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap'>
            <span className='text-xs'><RiCircleLine /></span>
            <span>{`${key}: ${value}`}</span>
          </li>
        ))}
      </ul>

      <ul className='flex flex-col gap-1'>
        <li className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap'>
          <span className='text-xs'><RiCircleLine /></span>
          <span>{lang === "en" ? 'Profiles:' : 'پروفایل‌ها:'}</span>
        </li>

        {Object.entries(metaLinks).map(([key, value]) => (
          <li key={key} className='px-3 inline-flex items-center'>
            <Link to={value} className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap transition-colors hover:text-sky-400 active:text-sky-400'>
              <span className='text-xs'><RiLink /></span>
              <span>{key}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MetaInfo;
