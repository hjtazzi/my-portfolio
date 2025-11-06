import { } from 'react';
import { Link } from 'react-router-dom';

import { AppPaths } from '../app/constants';
import HeadFactory from '../components/factory/HeadFactory';
import LinkFactory from '../components/factory/LinkFactory';

import backgroundBlurs from '../assets/imgs/backgroundBlurs.svg';


const Home = () => {



  return (
    <>
      <HeadFactory title='Home' />
      <div className='HomePage h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar p-2'>
        <div className='container mx-auto min-h-full flex flex-col md:flex-row gap-12 md:gap-6'>
          <div className='w-full md:w-1/2 flex flex-col md:items-center md:justify-center mt-12 md:mt-0 mb-3 md:mb-0 px-3'>
            <div className='flex flex-col gap-16'>
              <div className='flex flex-col gap-1'>
                <p className='text-base py-1 ml-1 text-primary-100'>Hi all. I am</p>

                <Link to={AppPaths.AboutMe}>
                  <h1 className='text-5xl md:text-6xl py-2 flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 font-bold'>{
                    [["H", "o", "j", "j", "a", "t"], ["A", "z", "i", "z", "i"]].map((char, i) => (
                      <span key={i}>{
                        char.map((c, j) => (
                          <span key={`${i}${j}`} className='inline-block animate-rotate-char animation-delay-[150ms] md:animation-delay-[0] transition-transform origin-top hover:rotate-6'>
                            {c}
                          </span>
                        ))
                      }</span>
                    ))
                  }</h1>
                </Link>

                <h2 className='text-xl md:text-3xl py-2 text-blue-600 font-bold'>{`> Backend Developer`}</h2>
              </div>

              <div className='flex flex-col items-start gap-1'>
                <div className='text-primary-100 flex gap-2 text-sm md:text-base mb-1.5'>
                  <p>//</p>
                  <p>connect with me 🚀</p>
                </div>

                <LinkFactory to={'https://linkedin.com/in/hojjat-azizi'} varName='linkedIn'
                  className='text-sm' target='_blank' rel='noopener noreferrer'>@LinkedIn</LinkFactory>
                <LinkFactory to={'https://github.com/hjtazzi'} varName='gitHub'
                  className='text-sm' target='_blank' rel='noopener noreferrer'>@GitHub</LinkFactory>
                <LinkFactory to={'mailto:hjtazzi@gmail.com'} varName='email'
                  className='text-sm' target='_blank' rel='noopener noreferrer'>@Email</LinkFactory>
              </div>
            </div>
          </div>

          {/* <div className='w-full md:w-1/2 flex'>r</div> */}
        </div>

        <img
          src={backgroundBlurs}
          className='w-full md:w-1/2 h-auto absolute block -z-10 origin-top -top-4 left-4
                    scale-150 md:scale-125 animate-pulse [animation-duration:6s]' />
      </div>
    </>
  )
}

export default Home;
