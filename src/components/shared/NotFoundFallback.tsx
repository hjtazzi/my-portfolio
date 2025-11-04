import { } from 'react';

import { AppPaths } from '../../app/constants';
import useWindowSize from '../../hooks/useWindowSize';
import HeadFactory from '../factory/HeadFactory';
import HighlighterFactory from '../factory/HighlighterFactory';
import LinkFactory from '../factory/LinkFactory';

import { txt404 } from '../../data';


const codeStringLg = `
export const handle404 = (req: Request, res: Response) => {
  res.status(404).json({
    status: 404,
    message: "PageNotFoundError 😢",
    suggestions: [
      "Check the URL for typos",
      "Use the site navigation",
      "Go back to the homepage",
    ],
  });
};`;

const codeStringSm = `
export const handle404 =
  (req: Request, res: Response) => {
    res.status(404).json({
      status: 404,
      message: "PageNotFoundError 😢",
    });
  };`;


const NotFoundFallback = () => {
  const { isAtLeast } = useWindowSize();


  return (
    <>
      <HeadFactory title='Page Not Found' />
      <div className='relative h-full overflow-y-auto custom-scrollbar mx-auto p-2'>
        <div className='min-h-full flex flex-col md:flex-row gap-12 md:gap-6'>
          <div className='w-full md:w-1/2 flex items-center md:justify-center mt-12 md:mt-0'>
            <pre className='text-sm md:text-xl font-mono font-bold leading-none select-none p-1'>{txt404}</pre>
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

export default NotFoundFallback;
