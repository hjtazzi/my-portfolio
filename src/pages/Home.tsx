import { } from 'react';
import { Link } from 'react-router-dom';

import { AppPaths } from '../app/constants';
import { useAppDispatch } from '../hooks/useAppContext';
import useWindowSize from '../hooks/useWindowSize';
import { setIsMobileMenu } from '../utils';
import { Contacts } from '../data';

import HeadFactory from '../components/factory/HeadFactory';
import LinkFactory from '../components/factory/LinkFactory';

import ParticlesWindow from '../components/pages/home/ParticlesWindow';


const Home = () => {
  const dispatch = useAppDispatch();
  const { isAtLeast } = useWindowSize();


  return (
    <>
      <HeadFactory title='Home' />
      <div className='HomePage h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar py-2 bg-blurs'>
        <div className='container mx-auto min-h-full flex flex-col lg:flex-row gap-4 p-4'>
          <div className='w-full lg:w-1/2 flex flex-col lg:items-center lg:justify-center'>
            <div className='flex flex-col min-w-3/5 gap-16'>
              <div className='flex flex-col items-start gap-1 text-shadow-primary-600 text-shadow-md'>
                <p className='text-base py-1 ml-0.5 text-primary-50 opacity-0 animate-fade-r animation-delay-[150ms]'>Hi all. I am</p>

                <Link to={AppPaths.AboutMe} className='opacity-0 animate-fade-r animation-delay-[300ms]'>
                  <h1 className='text-5xl md:text-6xl py-2 flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 md:font-bold whitespace-nowrap'>{
                    [["H", "o", "j", "j", "a", "t"], ["A", "z", "i", "z", "i"]].map((chars, i) => (
                      <span key={i}>{
                        chars.map((c, j) => (
                          <span key={`${i}${j}`}
                            className='inline-block transition-transform origin-top animate-rotate-char animation-delay-[300ms] hover:rotate-6'
                          >{c}</span>
                        ))
                      }</span>
                    ))
                  }</h1>
                </Link>

                <h2 className='text-xl md:text-3xl py-2 text-blue-500 font-bold opacity-0 animate-fade-r animation-delay-[450ms]'>
                  <span className='animate-bounce-x inline-block'>{`>`}</span>
                  <span>{` Backend Developer`}</span>
                </h2>
              </div>

              <div className='flex flex-col items-start gap-1 opacity-0 animate-fade-r animation-delay-[600ms]'>
                <p className='text-primary-50 flex gap-0.5 text-sm md:text-base mb-1.5 ml-0.5'>
                  <span>//</span>
                  <span>connect with me 🚀</span>
                </p>

                <LinkFactory to={Contacts.linkedin} varName='linkedIn'
                  className='text-sm text-orange-300' target='_blank' rel='noopener noreferrer'>@LinkedIn</LinkFactory>
                <LinkFactory to={Contacts.github} varName='gitHub'
                  className='text-sm text-orange-300' target='_blank' rel='noopener noreferrer'>@GitHub</LinkFactory>
                <LinkFactory to={`mailto:${Contacts.email}`} varName='email'
                  className='text-sm text-orange-300' target='_blank' rel='noopener noreferrer'>@Email</LinkFactory>

                <p className='text-primary-50 flex flex-wrap gap-0.5 text-sm select-none md:hidden! mt-1.5 ml-0.5'>
                  <span>//</span>
                  <span>for navigation, try:</span>
                  <button
                    onClick={() => dispatch(setIsMobileMenu(true))}
                    className='cursor-pointer py-1.5 px-1.5 -mt-1.5 transition-colors bg-transparent hover:bg-primary-500 active:bg-primary-500 rounded-sm'>
                    <span className="text-orange-300">openMenu</span>
                    <span className="text-orange-200">{`();`}</span>
                  </button>
                </p>
              </div>
            </div>
          </div>

          {isAtLeast.lg && <ParticlesWindow />}
        </div>
      </div>
    </>
  )
}

export default Home;
