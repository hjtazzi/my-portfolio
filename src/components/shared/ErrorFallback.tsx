import { } from 'react';

import { AppPaths } from '../../app/constants';
import useWindowSize from '../../hooks/useWindowSize';
import HeadFactory from '../factory/HeadFactory';
import HighlighterFactory from '../factory/HighlighterFactory';
import LinkFactory from '../factory/LinkFactory';

import { txtErr } from '../../data';


const codeStringLg = `
export const handleError = (err, req, res, next) => {
  res.status(500).json({
    status: 500,
    message: "InternalServerError 😅",
    suggestion: [
      "Check your recent commits",
      "Read the logs (if you dare)",
      "Or just grab some coffee ☕",
    ],
  });
};`;

const codeStringSm = `
export const handleError =
  (err, req, res, next) => {
    res.status(500).json({
      status: 500,
      message: "InternalServerError 😅",
    });
  };`;


const ErrorFallback = () => {
  const { isAtLeast } = useWindowSize();


  return (
    <>
      <HeadFactory title='Something Went Wrong' />
      <div className='relative h-full overflow-y-auto custom-scrollbar mx-auto p-2'>
        <div className='min-h-full flex flex-col md:flex-row gap-12 md:gap-6'>
          <div className='w-full md:w-1/2 flex items-center md:justify-center mt-12 md:mt-0'>
            <pre className='text-sm md:text-xl font-mono font-bold leading-none select-none p-1'>{txtErr}</pre>
          </div>

          <div className='w-full md:w-1/2 flex flex-col md:justify-center gap-12 mb-4 md:mb-0'>
            <div className='overflow-x-auto custom-scrollbar p-1 text-sm md:text-base select-none'>
              <HighlighterFactory showLineNumbers>
                {!isAtLeast.md ? codeStringSm.trim() : codeStringLg.trim()}
              </HighlighterFactory>
            </div>

            <div className='p-1'>
              <div className='text-primary-100 flex gap-2 text-xs md:text-sm mb-2'>
                <p>//</p>
                <p>Go back to the home page and explore more cool stuff! 🔍</p>
              </div>

              <LinkFactory to={AppPaths.Home} variant={'code'} varName='homePage'>
                /Home
              </LinkFactory>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorFallback;
