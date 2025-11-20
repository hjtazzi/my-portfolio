import { memo } from 'react';
import { RiBardLine } from "react-icons/ri";
import { PiStarFour } from "react-icons/pi";

import { useAppState } from '../../../hooks/useAppContext';
import { ResumeData } from '../../../data';


const Skills = memo(({ id }: { id: string; }) => {
  const { language: lang } = useAppState();
  const { skills } = ResumeData[lang];



  return (
    <div id={id} className='pt-8 flex flex-col gap-0'>
      <h2 className='flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xl font-semibold leading-none text-shadow-primary-900 text-shadow-md'>
        <span className='size-8 inline-flex items-center justify-center rounded-full bg-blue-600'><RiBardLine /></span>
        <span className=''>{lang === "en" ? 'Skills' : 'مهارت‌ها'}</span>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>

      {skills.map((group, i) => (
        <div key={i} className='w-full flex gap-2 md:gap-3'>
          <div className='flex flex-col items-center'>
            <span className='size-8 inline-flex items-center justify-center rounded-full bg-primary-500'><PiStarFour /></span>
            <i className='block flex-1 w-px bg-primary-500'></i>
          </div>

          <div className='flex-1 flex flex-col gap-0 pb-6'>
            <h4 className='min-h-8 flex items-center text-base md:text-[1.125rem]'>{group.title}</h4>

            <div className='flex flex-col gap-1 mt-2 md:mt-3 font-firaCode'>
              {group.type === "bar" ? (
                group.skills.map((skill, j) => (
                  <h5 key={j} className='flex items-center gap-3 text-primary-50'>
                    <span className='block min-w-24 md:min-w-28'>{skill.skill}</span>
                    <i className='flex-1 h-px overflow-hidden rounded-full bg-primary-400 flex items-center justify-start'>
                      <i className='h-full bg-blue-600' style={{ width: `${skill.score}%` }}></i>
                    </i>
                    {/* <span className='text-xl md:text-2xl leading-none'><TbAntennaBars4 /></span> */}
                  </h5>
                ))
              ) : (
                <h5 className='flex items-center gap-3 text-primary-50'>
                  {group.skills.map((skill, j) => (
                    <span key={j} className='inline-block'>{`${skill.skill}${j < group.skills.length - 1 ? ',' : ''}`}</span>
                  ))}
                </h5>
              )}
            </div>
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

export default Skills;
