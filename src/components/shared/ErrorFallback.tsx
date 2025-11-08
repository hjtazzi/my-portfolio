import { } from 'react';

import { AppPaths } from '../../app/constants';
import useWindowSize from '../../hooks/useWindowSize';
import HeadFactory from '../factory/HeadFactory';
import HighlighterFactory from '../factory/HighlighterFactory';
import LinkFactory from '../factory/LinkFactory';

import { txtErr } from '../../assets/imgs/ASCII';


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
      message: "InternalServerError 😅"
    });
  };`;


const ErrorFallback = () => {
  const { isAtLeast } = useWindowSize();


  return (
    <>
      <HeadFactory title='Something Went Wrong' />
      <div className='ErrorPage h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar py-2'>
        <div className='container mx-auto min-h-full flex flex-col md:flex-row gap-4 p-4'>
          <div className='w-full md:w-1/2 flex flex-col md:items-center md:justify-center py-4'>
            <pre className='text-sm md:text-xl font-bold font-mono text-primary-50 leading-none select-none'>{txtErr}</pre>
          </div>

          <div className='w-full md:w-1/2 flex flex-col md:justify-center gap-8'>
            <div className='overflow-x-auto custom-scrollbar text-sm md:text-base'>
              <HighlighterFactory showLineNumbers>
                {!isAtLeast.md ? codeStringSm.trim() : codeStringLg.trim()}
              </HighlighterFactory>
            </div>

            <div>
              <p className='text-primary-50 flex gap-0.5 text-sm md:text-base ml-0.5'>
                <span>//</span>
                <span>Go back to the home page and explore more cool stuff! 🔍</span>
              </p>

              <LinkFactory to={AppPaths.Home} varName='homePage' className='text-orange-600'>/Home</LinkFactory>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorFallback;
