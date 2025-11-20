import { memo } from 'react';
import { MdWorkOutline } from "react-icons/md";
import { LuBuilding2 } from "react-icons/lu";

import { useAppState } from '../../../hooks/useAppContext';
import { ResumeData } from '../../../data';

import DescriptionFactory from '../../factory/DescriptionFactory';


const WorkExperience = memo(({ id }: { id: string; }) => {
  const { language: lang } = useAppState();
  const { experience } = ResumeData[lang];



  return (
    <div id={id} className='pt-8 flex flex-col gap-0'>
      <h2 className='flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xl font-semibold leading-none text-shadow-primary-900 text-shadow-md'>
        <span className='size-8 inline-flex items-center justify-center rounded-full bg-blue-600'><MdWorkOutline /></span>
        <span className=''>{lang === "en" ? 'Experience' : 'سوابق شغلی'}</span>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>

      {experience.map((exp, i) => (
        <div key={i} className='w-full flex gap-2 md:gap-3'>
          <div className='flex flex-col items-center'>
            <span className='size-8 inline-flex items-center justify-center rounded-full bg-primary-500'><LuBuilding2 /></span>
            <i className='block flex-1 w-px bg-primary-500'></i>
          </div>

          <div className='flex-1 flex flex-col gap-1 pb-3'>
            <h4 className='min-h-8 flex items-center text-base'>{exp.title}</h4>

            <h5 className='text-xs md:text-sm text-primary-100'>{`${exp.company}${!!exp.employmentType ? ` . ${exp.employmentType}` : ''}`}</h5>
            {/* <h5 className='text-xs md:text-sm text-primary-100'>Aug 2024 - Present . 1 yr 4 mos</h5> */}
            <h5 className='text-xs md:text-sm text-primary-100 mb-2'>{`${exp.location}${!!exp.locationType ? ` . ${exp.locationType}` : ''}`}</h5>

            <DescriptionFactory
              description={exp.about.description}
              details={exp.about.details}
              className='text-primary-50 text-xs md:text-sm leading-normal'
            />
          </div>
        </div>
      ))}

      <div className='w-full flex gap-2'>
        <div className='flex flex-col items-center min-w-8'>
          <span className='size-3 inline-flex rounded-full bg-primary-500'></span>
        </div>
      </div>
    </div>
  )
});

export default WorkExperience;
