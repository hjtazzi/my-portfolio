import { useRef, useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

import { useAppState } from '../../hooks/useAppContext';
import useAutoMaxHeight from '../../hooks/useAutoMaxHeight';
import { classCombiner } from '../../utils';
import type { TDescription } from '../../types';


interface DescriptionFactory extends TDescription {
  className?: string;
  btnClassName?: string;
}


const DescriptionFactory = ({ description, details, className, btnClassName }: DescriptionFactory) => {
  const { language: lang } = useAppState();
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { maxHeight } = useAutoMaxHeight({ contentRef, open: openDetails });


  return (
    <div className='flex flex-col gap-0'>
      <p className={classCombiner(`w-full whitespace-pre-line`, className)}>{description}</p>

      {!!details && <>
        <div ref={contentRef} style={{ maxHeight: `${maxHeight}px` }}
          className={classCombiner(`w-full overflow-hidden origin-top duration-300 transition-[max-height]`)}>
          <p className={classCombiner(`w-full whitespace-pre-line`, className)}>{details}</p>
        </div>

        <div className='w-full flex justify-end pt-1.5'>
          <button onClick={() => setOpenDetails(prev => !prev)} className={classCombiner(
            `inline-flex items-center gap-1 cursor-pointer transition-colors text-xs md:text-sm text-primary-200 hover:text-primary-50 leading-none`, btnClassName)}>
            {lang === "en" ? (
              <span className="">{`see ${openDetails ? 'less' : 'more'}`}</span>
            ) : (
              <span className="">{`مشاهده ${openDetails ? 'کمتر' : 'بیشتر'}`}</span>
            )}
            <span className={`text-base transition ${openDetails && '-rotate-180'}`}><RiArrowDownSLine /></span>
          </button>
        </div>
      </>}
    </div>
  )
}

export default DescriptionFactory;
