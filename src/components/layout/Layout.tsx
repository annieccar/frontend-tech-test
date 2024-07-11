import clsx from 'clsx';

import Footer from './Footer';
import Header from './Header';

import { useQuery } from 'react-query';

import getData from '../../utils/getData';

import Ad from '../../components/Ad';
import Carousel from '../../components/Carousel';
import Slider from '../../components/Slider';
import VideoPlayer from '../../pages/videos/[id]/[slug]';

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  // const { data: pageData } = useQuery(
  //   'pageData',
  //   () => Cms.getPageContent(KENTICO_HARDCODED_PAGES.HOME, { params: DEFAULT_LANGUAGE }),
  //   {
  //     initialData: children.props.page.components,
  //   },
  // );

  const components = children.props.page.components;

  const sliderData = getData(components, 'slider');
  const carouselData = getData(components, 'carousel');
  const adData = getData(components, 'ad');

  const video = components[4].Videos[3];

  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden">
        <Header />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          <Slider sliderData={sliderData} />
          <Carousel carouselData={carouselData} />
          <Ad adData={adData} />
          <VideoPlayer video={video} />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
