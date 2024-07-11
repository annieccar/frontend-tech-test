import { InitConfig } from '@origins-digital/types/ott';
import clsx from 'clsx';

import Ad from '../../components/Ad';
import Carousel from '../../components/Carousel';
import Slider from '../../components/Slider';
import VideoPlayer from '../../pages/videos/[id]/[slug]';
import getData from '../../utils/getData';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  webConfig: InitConfig;
}

function Layout({ children, webConfig }: LayoutProps): JSX.Element {
  const components = children?.props.page.components;

  const headerData = webConfig.header;
  const footerData = webConfig.footer;

  const sliderData = getData(components, 'slider');
  const carouselData = getData(components, 'carousel');
  const adData = getData(components, 'ad');

  const video = components[4].Videos[3];

  return (
    <>
      <div className="flex min-h-screen w-full flex-col gap-10 overflow-hidden p-2 bg-black">
        <Header headerData={headerData} />
        <main
          className={clsx('mx-auto flex w-full flex-grow flex-col content-spacer overflow-hidden')}
        >
          <h1 className="text-facebook text-2xl m-4">Slider Component: </h1>
          <Slider sliderData={sliderData} />
          <h1 className="text-facebook text-2xl m-4">Carousel Component: </h1>
          <Carousel carouselData={carouselData} />
          <h1 className="text-facebook text-2xl m-4">Ad Component: </h1>
          <Ad adData={adData} />
          <h1 className="text-facebook text-2xl m-4">Video Player Component: </h1>
          <VideoPlayer video={video} />
          {children}
        </main>
        <Footer footerData={footerData} />
      </div>
    </>
  );
}

export default Layout;
