import { } from 'react';
import { Link } from 'react-router-dom';

import { classCombiner } from '../utils';
import { Contacts } from '../data';
import { messageCode } from '../assets/imgs/ASCII';

import HeadFactory from '../components/factory/HeadFactory';


const contactInfo: { key: string; value: string; link: string | null }[] = [
  {
    key: "Name",
    value: "Hojjat Azizi",
    link: null,
  },
  {
    key: "Location",
    value: "Tehran, Iran",
    link: null,
  },
  {
    key: "Email",
    value: Contacts.email,
    link: `mailto:${Contacts.email}`,
  },
  {
    key: "GitHub",
    value: "@GitHub",
    link: Contacts.github,
  },
  {
    key: "LinkedIn",
    value: "@LinkedIn",
    link: Contacts.linkedin,
  }
];


const ContactMe = () => {
  const lineClasses = `flex items-center min-h-8 whitespace-nowrap transition-colors rounded-sm text-base py-1 px-1 gap-0
    opacity-0 active:bg-primary-500 hover:bg-primary-500`


  return (
    <>
      <HeadFactory title='ContactMe' />
      <div className='ContactMePage h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar py-2 bg-blurs'>
        <div className='container mx-auto min-h-full flex flex-col md:flex-row gap-4 p-4'>
          <div className='w-full md:w-1/2 flex flex-col md:items-center md:justify-center'>
            <div className='flex flex-col min-w-3/5 gap-2'>
              <p className='text-primary-50 flex gap-0.5 text-sm md:text-base mb-1.5 ml-0.5'>
                <span>//</span>
                <span>available for collaboration, coffee, or code ☕</span>
              </p>

              <div className='overflow-x-auto custom-scrollbar text-base md:text-xl'>
                <div className='flex flex-col w-max min-w-full overflow-hidden'>
                  <p className={classCombiner(lineClasses, `animate-fade-l animation-delay-[150ms]`)}>
                    <span className='text-slate-500 italic min-w-2 mr-3 text-right text-[0.9em]'>{`1`}</span>
                    <span className='text-sky-300 mr-1.5'>{`export`}</span>
                    <span className='text-sky-300 mr-1.5'>{`const`}</span>
                    <span className='text-orange-600 mr-1.5'>{`myContact`}</span>
                    <span className='text-pink-200 mr-1.5'>{`=`}</span>
                    <span className='text-orange-200'>{`{`}</span>
                  </p>

                  {contactInfo.map((info, i) => {
                    const child = (link: boolean = false) => <>
                      <span className='text-slate-500 italic min-w-2 mr-8 text-right text-[0.9em]'>{i + 2}</span>
                      <span className='text-orange-600'>{info.key}</span>
                      <span className='text-pink-200 mr-1.5'>{`:`}</span>
                      <span className='text-emerald-400'>{`"`}</span>
                      <span className={`text-emerald-400 font-semibold ${link && 'underline underline-offset-4'}`}>{info.value}</span>
                      <span className='text-emerald-400'>{`"`}</span>
                      <span className='text-orange-200'>{`,`}</span>
                    </>

                    if (typeof info.link === "string")
                      return (
                        <Link to={info.link} key={info.key} style={{ 'animationDelay': `${(i + 2) * 150}ms` }}
                          className={classCombiner(lineClasses, `animate-fade-l`)} target='_blank' rel='noopener noreferrer'>
                          {child(true)}
                        </Link>)

                    return (
                      <p key={info.key} style={{ 'animationDelay': `${(i + 2) * 150}ms` }}
                        className={classCombiner(lineClasses, `animate-fade-l`)}>
                        {child()}
                      </p>)
                  })}

                  <p className={classCombiner(lineClasses, `animate-fade-l animation-delay-[150ms]`)}>
                    <span className='text-slate-500 italic min-w-2 mr-3 text-right text-[0.9em]'>{`7`}</span>
                    <span className='text-orange-200'>{`};`}</span>
                  </p>
                </div>
              </div>

              <p className='text-primary-50 flex gap-0.5 text-sm md:text-base mt-1.5 ml-1'>
                {`> ready to connect...`}
              </p>
            </div>
          </div>

          <div className='w-full md:w-1/2 flex items-center md:justify-center mt-12 md:mt-0'>
            <pre className='text-[7px] md:text-xs font-bold font-mono leading-none select-none p-1'>{messageCode}</pre>
          </div>
        </div>
      </div >
    </>
  )
}

export default ContactMe;
