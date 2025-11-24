import { memo, useEffect, useState, type RefObject } from 'react';
import { MdWorkOutline } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";

import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';
import { convertEnDigitsToFa, diffDate, formatDate } from '../../../utils';
import { ResumeData } from '../../../data';

import DescriptionFactory from '../../factory/DescriptionFactory';


interface WorkExperience {
  id: string;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}


const WorkExperience = memo(({ id, scrollContainerRef }: WorkExperience) => {
  const { language: lang, currentDate } = useAppState();
  const { experience } = ResumeData[lang];
  const [root, setRoot] = useState<HTMLElement | null>(scrollContainerRef?.current);


  useEffect(() => {
    if (scrollContainerRef?.current)
      setRoot(scrollContainerRef.current);
  }, [scrollContainerRef]);



  return (
    <div id={id} className='pt-6 md:pt-8 flex flex-col gap-0'>
      <h2 ref={useRevealClass({
        root,
        className: ['animation-delay-[75ms]', 'animate-fade-r'],
        triggerOnLoadCheck: true,
        isLoadStyle: { animationDelay: '450ms' }
      })}
        className='opacity-0 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xl font-semibold leading-none text-shadow-primary-900 text-shadow-md'>
        <span className='size-8 inline-flex items-center justify-center rounded-full bg-blue-600'><MdWorkOutline /></span>
        <span className=''>{lang === "en" ? 'Experience' : 'سوابق شغلی'}</span>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>

      {experience.map((exp, i) => {
        const startDate = new Date(Date.UTC(exp.startDate.y, exp.startDate.m - 1));
        const endDate = exp.endDate === "Present" ? currentDate! : new Date(Date.UTC(exp.endDate.y, exp.endDate.m - 1));
        const expDate = diffDate(startDate, endDate);

        return (
          <div key={i} ref={useRevealClass({
            root, threshold: 0.085,
            className: ['animation-delay-[150ms]', 'animate-fade-u'],
            triggerOnLoadCheck: true,
            isLoadStyle: { animationDelay: `${(i + 4) * 150}ms` }
          })}
            className='opacity-0 w-full flex gap-2 md:gap-3'>
            <div className='flex flex-col items-center'>
              <span className='size-8 inline-flex items-center justify-center rounded-full bg-primary-500'><LuBuilding2 /></span>
              <i className='block flex-1 w-px bg-primary-500'></i>
              {experience.length - 1 <= i && <span className='size-3 inline-flex rounded-full bg-primary-500'></span>}
            </div>

            <div className='flex-1 flex flex-col gap-1 pb-3'>
              <h4 className='min-h-8 flex items-center text-base'>{exp.title}</h4>

              <h5 className='text-xs md:text-sm text-primary-100'>{`${exp.company}${!!exp.employmentType ? ` . ${exp.employmentType}` : ''}`}</h5>

              <h5 className='text-xs md:text-sm text-primary-100'>
                {`${formatDate(exp.startDate, lang)} - ${exp.endDate === "Present" ? `${lang === "en" ? 'Present' : 'اکنون'}` : formatDate(exp.endDate, lang)}`}
                {` . ${expDate.years > 0 ? `${lang === "en" ? `${expDate.years} yrs` : `${convertEnDigitsToFa(expDate.years.toString())} سال`}` : ''}`}
                {` ${expDate.months > 0 ? `${lang === "en" ? `${expDate.months} mos` : `${convertEnDigitsToFa(expDate.months.toString())} ماه`}` : ''}`}
              </h5>

              <h5 className='text-xs md:text-sm text-primary-100 mb-2'>{`${exp.location}${!!exp.locationType ? ` . ${exp.locationType}` : ''}`}</h5>

              <DescriptionFactory
                description={exp.about.description}
                details={exp.about.details}
                className='text-primary-50 text-xs md:text-sm leading-normal'
              />
            </div>
          </div>
        )
      })}

      <div className='clear-both mb-2'></div>
    </div>
  )
});

export default WorkExperience;
