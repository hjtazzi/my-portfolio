import { } from 'react';

import SmallLoading from '../../shared/SmallLoading';


const WindowLoading = () => {
  return (
    <div className='absolute w-full h-full inset-0 z-99 flex items-center justify-center cursor-progress bg-primary-600/50'>
      <SmallLoading scale={0.75} className={['bg-primary-500/50']} />
    </div>
  )
}

export default WindowLoading;
