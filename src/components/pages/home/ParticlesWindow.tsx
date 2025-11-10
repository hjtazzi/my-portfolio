import { lazy, Suspense } from 'react';

import WindowLoading from './WindowLoading';

const BubbleParticles = lazy(() => import('./BubbleParticles'));


const ParticlesWindow = () => {

  return (
    <div className='w-full lg:w-1/2 relative isolate overflow-hidden flex flex-col items-center justify-center mt-12 lg:mt-0'>
      <div className='w-full lg:w-1/2 relative overflow-hidden aspect-square rounded-lg border border-primary-500 backdrop-blur-lg mix-blend-screen
                      bg-transparent bg-linear-150 from-violet-500/7 to-sky-600/7 from-15% to-85% opacity-0 animate-fade-l animation-delay-[600ms]'>
        <Suspense key={'Home/ParticlesWindow'} fallback={<WindowLoading />}>
          <BubbleParticles />
        </Suspense>
      </div>
    </div>
  )
}

export default ParticlesWindow;
