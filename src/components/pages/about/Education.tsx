import { memo } from 'react';
import { LuGraduationCap, LuSchool } from "react-icons/lu";

import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';
import { formatDate } from '../../../utils';
import { ResumeData } from '../../../data';


const Education = memo(({ id }: { id: string; }) => {
  const { language: lang } = useAppState();
  const { education } = ResumeData[lang];



  return (
    <div id={id} className='pt-8 flex flex-col gap-0'>
      <h2 ref={useRevealClass({ className: ['animation-delay-[75ms]', 'animate-fade-r'] })}
        className='opacity-0 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xl font-semibold leading-none text-shadow-primary-900 text-shadow-md'>
        <span className='size-8 inline-flex items-center justify-center rounded-full bg-blue-600'><LuGraduationCap /></span>
        <span className=''>{lang === "en" ? 'Education' : 'تحصیلات'}</span>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>

      {education.map((uni, i) => (
        <div key={i} ref={useRevealClass({ className: ['animation-delay-[150ms]', 'animate-fade-u'], threshold: 0.085 })}
          className='opacity-0 w-full flex gap-2 md:gap-3'>
          <div className='flex flex-col items-center'>
            <span className='size-8 inline-flex items-center justify-center rounded-full bg-primary-500'><LuSchool /></span>
            <i className='block flex-1 w-px bg-primary-500'></i>
            {education.length - 1 <= i && <span className='size-3 inline-flex rounded-full bg-primary-500'></span>}
          </div>

          <div className='flex-1 flex flex-col gap-1 pb-4'>
            <h4 className='min-h-8 flex items-center text-base'>{uni.university}</h4>

            <h5 className='text-xs md:text-sm text-primary-100'>{`${uni.degree} - ${uni.field}`}</h5>

            <h5 className='text-xs md:text-sm text-primary-100'>
              {`${formatDate(uni.startDate, lang)} - ${uni.endDate === "Present" ? `${lang === "en" ? 'Present' : 'اکنون'}` : formatDate(uni.endDate, lang)}`}
            </h5>
          </div>
        </div>
      ))}

      <div className='clear-both mb-2'></div>
    </div>
  )
});

export default Education;
