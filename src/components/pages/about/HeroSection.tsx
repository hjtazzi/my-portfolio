import { memo, type ReactNode } from 'react';

import { useAppState } from '../../../hooks/useAppContext';
import useRevealClass from '../../../hooks/useRevealClass';

import DescriptionFactory from '../../factory/DescriptionFactory';
import ChangeLangFactory from '../../factory/ChangeLangFactory';
import MetaInfo from './MetaInfo';

import { ResumeData } from '../../../data';
import profileImage from '../../../assets/imgs/profile.webp';


const HeroSection = memo(({ children, id }: { children: ReactNode; id: string; }) => {
  const { language: lang } = useAppState();
  const { bio } = ResumeData[lang];



  return (
    <article lang={lang} className='relative flex flex-col w-full h-full m-0 p-0'>
      <div id={id} className='w-full flex max-md:flex-row-reverse flex-nowrap gap-0'>
        <div className={`flex flex-col items-start justify-start md:flex-1 max-w-75 lg:bg-primary-700 p-0 md:pt-12 ${lang === "en" ? 'md:pr-2 lg:pr-6' : 'md:pl-2 lg:pl-6'} select-none`}>
          <div className={`overflow-hidden w-24 md:w-full flex-1 flex items-end justify-end bg-blue-500/25 p-2 md:p-3 max-md:rounded-b-full max-md:mx-px md:-mt-px ${lang === "en" ? 'md:rounded-r-full' : 'md:rounded-l-full'}`}>
            <img src={profileImage} alt="ProfileImage"
              ref={useRevealClass({ className: ['max-md:animate-fade-d', 'md:animate-fade-r'] })}
              className='opacity-0 animation-delay-[0] w-full md:w-40 aspect-square object-cover overflow-hidden rounded-full border border-primary-500 shadow-[0_0_6px_-1px_var(--color-primary-600)]' />
          </div>
        </div>

        <div className='flex-1 flex flex-col px-4 md:px-6'>
          <div className='min-h-12 flex items-start md:items-center md:justify-end pt-2 max-md:pb-6'>
            <ChangeLangFactory />
          </div>
          <div className='flex-1 flex flex-col gap-1 md:gap-4 justify-center text-shadow-primary-900 text-shadow-md'>
            <div ref={useRevealClass({ className: ['animate-fade-r'] })} className='opacity-0 animation-delay-[150ms]'>
              <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap'>{`${bio.firstName} ${bio.lastName}`}</h1>
            </div>

            <div ref={useRevealClass({ className: ['animate-fade-r'] })} className='opacity-0 animation-delay-[300ms]'>
              <h2 className='text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap text-blue-500'>{bio.jobTitle}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full flex-1 flex flex-col lg:flex-row'>
        <div className='hidden lg:block flex-1 max-w-75 lg:bg-primary-700 px-4 md:px-6 pt-8'>
          <MetaInfo />
        </div>

        <div className='max-w-6xl flex flex-col gap-4 flex-1 px-4 md:px-6 pt-6 pb-12 text-sm md:text-base leading-normal md:leading-relaxed'>
          <div ref={useRevealClass({ className: ['animate-fade-u'] })}
            className='opacity-0 animation-delay-[350ms]'>
            <DescriptionFactory
              description={bio.aboutYourself.description}
              details={bio.aboutYourself.details}
            />
          </div>

          <div className='block lg:hidden'>
            <MetaInfo />
          </div>

          {children}
        </div>
      </div>
    </article>
  )
});

export default HeroSection;
