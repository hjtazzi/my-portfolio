import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCircleLine, RiLink } from "react-icons/ri";

import type { TDateRange } from '../../../types';
import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';
import { calcDateRange, convertEnDigitsToFa, diffDate, mergeDateIntervals } from '../../../utils';
import { ResumeData } from "../../../data";


const MetaInfo = () => {
  const { language: lang, currentDate } = useAppState();
  const { bio: { metaInfos, metaLinks, birthdate }, experience } = ResumeData[lang];
  const [totalExp, setTotalExp] = useState<{ years: number; months: number; } | null>(null);
  const [age, setAge] = useState<number>(-1);


  useEffect(() => {
    let isMounted = true;

    if (isMounted && !!currentDate) {
      const ranges: TDateRange[] = experience.map(exp => ({
        start: new Date(Date.UTC(exp.startDate.y, exp.startDate.m - 1)),
        end: exp.endDate === "Present" ? currentDate : new Date(Date.UTC(exp.endDate.y, exp.endDate.m - 1))
      }));
      const { years, months } = calcDateRange(mergeDateIntervals(ranges));

      setTotalExp({ years, months });
      setAge(diffDate(new Date(Date.UTC(birthdate.y, birthdate.m - 1, birthdate.d)), currentDate).years);
    }

    return () => {
      isMounted = false;
    }
  }, [currentDate]);



  return (
    <div ref={useRevealClass({ className: ['animate-fade-u'] })}
      className='opacity-0 animation-delay-[350ms] flex flex-col gap-3'>
      <ul className='flex flex-col gap-1'>
        {(!!currentDate && !!totalExp) && (
          <li className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap'>
            <span className='text-xs'><RiCircleLine /></span>

            <span>
              {`${lang === "en" ? 'Experience:' : 'سابقه کاری:'}`}
              {` ${totalExp.years > 0 ? `${lang === "en" ? `${totalExp.years} yrs` : `${convertEnDigitsToFa(totalExp.years.toString())} سال`}` : ''}`}
              {` ${totalExp.months > 0 ? `${lang === "en" ? `${totalExp.months} mos` : `${convertEnDigitsToFa(totalExp.months.toString())} ماه`}` : ''}`}
            </span>
          </li>
        )}

        {(!!currentDate && age > 0) && (
          <li className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap'>
            <span className='text-xs'><RiCircleLine /></span>

            <span>
              {`${lang === "en" ? 'Age:' : 'سن:'}`}
              {` ${lang === "en" ? `${age} years old` : `${convertEnDigitsToFa(age.toString())} سال`}`}
            </span>
          </li>
        )}

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
            <Link to={value} target='_blank' rel='noopener noreferrer'
              className='max-lg:flex-1 inline-flex items-center gap-1.5 text-sm text-primary-50 whitespace-nowrap transition-colors hover:text-sky-400 active:text-sky-400'>
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
