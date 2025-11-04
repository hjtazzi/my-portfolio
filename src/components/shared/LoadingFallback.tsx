import { } from 'react';


const LoadingFallback = ({ full = false }: { full?: boolean; }) => {
  return (
    <div className={`Loading fixed top-0 left-0 z-9995 isolate overflow-hidden w-screen h-[calc(var(--real-vh,1vh)*100)] min-h-dvh
                    pointer-events-none bg-transparent border border-transparent m-0 ${full ? "p-0 z-9999" : "px-2 md:px-6 py-16 md:py-20"}`}>
      <div className={`relative w-full h-full flex items-center justify-center border border-transparent backdrop-blur-md
                      pointer-events-auto cursor-progress m-0 p-0 ${full ? "bg-primary-700" : "bg-primary-600/85"}`}>
        <div className='relative w-20 h-20 md:w-22 md:h-22 flex items-center justify-center rounded-full gap-1.5 bg-primary-500'>
          <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[150ms]'></div>
          <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[300ms]'></div>
          <div className='w-1 h-2 bg-primary-100 rounded-lg animate-wavey animation-delay-[600ms]'></div>

          <div className='absolute z-10 top-0 left-0 w-20 h-20 md:w-22 md:h-22 rounded-full bg-transparent 
                          border-2 border-transparent border-b-primary-100 animate-spin'></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingFallback;
