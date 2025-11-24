import { memo, useRef } from 'react';
import { Tooltip } from 'react-tooltip'
import { RiBardLine } from "react-icons/ri";
import { PiStarFour } from "react-icons/pi";
import { TbAntennaBars2, TbAntennaBars3, TbAntennaBars4, TbAntennaBars5 } from 'react-icons/tb';

import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';
import { classCombiner } from '../../../utils';
import { ResumeData } from '../../../data';


const Skills = memo(({ id }: { id: string; }) => {
  const { language: lang } = useAppState();
  const { skills } = ResumeData[lang];

  const tooltipClasses = useRef(classCombiner(`text-xs md:text-sm whitespace-nowrap leading-none p-1.5 pt-2 rounded-xs bg-primary-500 drop-shadow-sm drop-shadow-primary-900`,
    lang === "en" ? 'font-en' : 'font-fa'));



  return (
    <div id={id} className='pt-8 flex flex-col gap-0'>
      <h2 ref={useRevealClass({ className: ['animation-delay-[75ms]', 'animate-fade-r'] })}
        className='opacity-0 flex items-center gap-2 md:gap-3 mb-6 md:mb-8 text-xl font-semibold leading-none text-shadow-primary-900 text-shadow-md'>
        <span className='size-8 inline-flex items-center justify-center rounded-full bg-blue-600'><RiBardLine /></span>
        <span className=''>{lang === "en" ? 'Skills' : 'مهارت‌ها'}</span>

        <i className='block flex-1 h-px bg-primary-500'></i>
      </h2>

      {skills.map((group, i) => (
        <div key={i} ref={useRevealClass({ className: ['animation-delay-[150ms]', 'animate-fade-u'], threshold: 0.085 })}
          className='opacity-0 w-full flex gap-2 md:gap-3'>
          <div className='flex flex-col items-center'>
            <span className='size-8 inline-flex items-center justify-center rounded-full bg-primary-500'><PiStarFour /></span>
            <i className='block flex-1 w-px bg-primary-500'></i>
            {skills.length - 1 <= i && <span className='size-3 inline-flex rounded-full bg-primary-500'></span>}
          </div>

          <div className='flex-1 flex flex-col gap-0 pb-6 select-none'>
            <h4 className='min-h-8 flex items-center text-base md:text-[1.125rem]'>{group.title}</h4>

            <div className='flex flex-col gap-1 mt-2 md:mt-3 font-firaCode'>
              {group.type === "bar" ? (
                group.skills.map((skill, j) => (
                  <h5 key={j} ref={useRevealClass({ className: ['animation-delay-[300ms]', 'animate-fade-l'] })}
                    className='opacity-0 flex items-center gap-2 md:gap-3 text-primary-50'>
                    <span className='inline-flex items-center min-w-24 md:min-w-28'>{skill.skill}</span>

                    <i className='flex-1 h-px overflow-hidden rounded-full bg-primary-400 flex items-center justify-start'>
                      <i className='h-full bg-blue-600' style={{ width: `${skill.score}%` }}></i>
                    </i>

                    <span className={classCombiner(`cursor-pointer inline-flex items-center self-start text-xl md:text-2xl rounded-xs transition-colors hover:bg-primary-500 active:bg-primary-500`,
                      skill.score > 90 ? 'expert-skill' : skill.score > 70 ? 'advanced-skill' : skill.score > 40 ? 'intermediate-skill' : 'basic-skill')}>
                      {skill.score > 90 ? (
                        <TbAntennaBars5 />
                      ) : skill.score > 70 ? (
                        <TbAntennaBars4 />
                      ) : skill.score > 40 ? (
                        <TbAntennaBars3 />
                      ) : (
                        <TbAntennaBars2 />
                      )}
                    </span>
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

      <Tooltip anchorSelect='.expert-skill' place='top-end' offset={7} clickable={false} opacity={0.95} className={tooltipClasses.current}>
        {`${lang === "en" ? 'Expert' : 'حرفه‌ای'}`}
      </Tooltip>
      <Tooltip anchorSelect='.advanced-skill' place='top-end' offset={7} clickable={false} opacity={0.95} className={tooltipClasses.current}>
        {`${lang === "en" ? 'Advanced' : 'پیشرفته'}`}
      </Tooltip>
      <Tooltip anchorSelect='.intermediate-skill' place='top-end' offset={7} clickable={false} opacity={0.95} className={tooltipClasses.current}>
        {`${lang === "en" ? 'Intermediate' : 'متوسط'}`}
      </Tooltip>
      <Tooltip anchorSelect='.basic-skill' place='top-end' offset={7} clickable={false} opacity={0.95} className={tooltipClasses.current}>
        {`${lang === "en" ? 'Basic' : 'مقدماتی'}`}
      </Tooltip>

      <div className='clear-both mb-2'></div>
    </div>
  )
});

export default Skills;
