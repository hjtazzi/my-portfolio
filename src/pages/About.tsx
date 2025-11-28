import { useEffect, useRef } from 'react';

import { useAppDispatch, useAppState } from '../hooks/useAppContext';
import useWindowSize from '../hooks/useWindowSize';
import { getAccurateNow, setCurrentDate } from '../utils';

import HeadFactory from '../components/factory/HeadFactory';
import LoadingFallback from '../components/shared/LoadingFallback';

import Sidebar, { type TSidebarItem } from '../components/pages/about/Sidebar';
import HeroSection from '../components/pages/about/HeroSection';
import WorkExperience from '../components/pages/about/WorkExperience';
import Skills from '../components/pages/about/Skills';
import Education from '../components/pages/about/Education';

import profileImage from '../assets/imgs/profile.webp';


const sidebarItems: TSidebarItem[] = [
  {
    key: "overview",
    title: {
      en: "Overview",
      fa: "درباره من"
    }
  },
  {
    key: "experience",
    title: {
      en: "Experience",
      fa: "سوابق شغلی"
    }
  },
  {
    key: "skills",
    title: {
      en: "Skills",
      fa: "مهارت‌ها"
    }
  },
  {
    key: "education",
    title: {
      en: "Education",
      fa: "تحصیلات"
    }
  }
];


const About = () => {
  const dispatch = useAppDispatch();
  const { currentDate } = useAppState();
  const { isAtLeast } = useWindowSize();

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = useRef((id: string) => {
    const container = containerRef.current;
    if (!container)
      return;

    const el = container.querySelector(`#${id}`);
    if (!el)
      return;

    const containerTop = container.getBoundingClientRect().top;
    const sectionTop = el.getBoundingClientRect().top;

    const offset = sectionTop - containerTop;

    container.scrollTo({
      top: container.scrollTop + offset,
      behavior: "smooth",
    });
  });


  useEffect(() => {
    let isMounted = true;

    const getCurrentDate = async () => {
      if (!isMounted)
        return;

      try {
        const dateNow = await getAccurateNow();
        dispatch(setCurrentDate(dateNow));
      } catch (_) { }
    }

    if (currentDate === null)
      getCurrentDate();

    return () => {
      isMounted = false;
    }
  }, [currentDate]);



  if (!currentDate)
    return <>
      <HeadFactory title='About Me' />
      <LoadingFallback full={false} />
    </>


  return (
    <>
      <HeadFactory title='About Me' />
      <div className='AboutMePage h-full w-full flex flex-col md:flex-row overflow-hidden m-0 p-0'>
        {isAtLeast.md && <Sidebar mode='desktop' items={sidebarItems} scrollTo={scrollToSection.current} />}

        <div ref={containerRef} className='w-full md:w-5/6 h-full flex flex-col overflow-y-auto overflow-x-hidden custom-scrollbar'>
          {!isAtLeast.md && <Sidebar mode='mobile' items={sidebarItems} scrollTo={scrollToSection.current} />}

          <HeroSection id={sidebarItems[0].key} profileImage={profileImage}>
            <WorkExperience id={sidebarItems[1].key} scrollContainerRef={containerRef} />
            <Skills id={sidebarItems[2].key} />
            <Education id={sidebarItems[3].key} />
          </HeroSection>
        </div>
      </div>
    </>
  )
}

export default About;
