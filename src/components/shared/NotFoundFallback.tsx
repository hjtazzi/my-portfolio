import { } from 'react';

import { AppPaths } from '../../app/constants';
import useWindowSize from '../../hooks/useWindowSize';
import { txt404 } from '../../assets/imgs/ASCII';

import HeadFactory from '../factory/HeadFactory';
import LinkFactory from '../factory/LinkFactory';
import HighlighterFactory from '../factory/HighlighterFactory';


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
      <div className='NotFoundPage h-full w-full overflow-y-auto overflow-x-hidden custom-scrollbar py-2'>
        <div className='container mx-auto min-h-full flex flex-col md:flex-row gap-4 p-4'>
          <div className='w-full md:w-1/2 flex flex-col md:items-center md:justify-center py-4'>
            <pre className='text-sm md:text-xl font-bold font-mono text-primary-50 leading-none select-none'>{txt404}</pre>
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

export default NotFoundFallback;
