import { } from 'react';

import { classCombiner } from '../../utils';
import SmallLoading from './SmallLoading';


const LoadingFallback = ({ full = false }: { full?: boolean; }) => {
  return (
    <div className={classCombiner(`Loading fixed top-0 left-0 z-9995 isolate overflow-hidden w-screen h-[calc(var(--real-vh,1vh)*100)] min-h-dvh
                    pointer-events-none bg-transparent border border-transparent m-0`, full ? "p-0 z-9999" : "px-2 md:px-6 py-16 md:py-20")}>
      <div className={classCombiner(`relative w-full h-full flex items-center justify-center border border-transparent backdrop-blur-md
                      pointer-events-auto cursor-progress m-0 p-0`, full ? "bg-primary-700" : "bg-primary-600/85")}>
        <SmallLoading />
      </div>
    </div>
  )
}

export default LoadingFallback;
