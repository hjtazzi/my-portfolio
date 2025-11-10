import { } from 'react';
import { type ClassValue } from "clsx";

import { classCombiner } from '../../utils';


interface SmallLoading {
  className?: ClassValue[];
  scale?: number;
}


const SmallLoading = ({ className, scale = 1 }: SmallLoading) => {
  return (
    <div style={{ 'transform': `scale(${scale})` }}
      className={classCombiner('relative w-20 h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full gap-1.5 bg-primary-500 origin-center', className)}>

      <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[150ms]'></div>
      <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[300ms]'></div>
      <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[600ms]'></div>

      <div className='absolute z-10 inset-0 rounded-full bg-transparent border-2 border-transparent border-b-primary-100 animate-spin'></div>
    </div>
  )
}

export default SmallLoading;
