import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import NextNProgress from 'nextjs-progressbar';

import { ViewportProvider } from '@onrewind/ui';

import Slider from '../components/Slider';
import Carousel from '../components/Carousel';

import '../styles.css';

import Layout from '$components/layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { webConfig, page } = pageProps;

  const components = page.components;

  const getData = (components: any[], componentType: string) => {
    switch (componentType) {
      case 'slider':
        return components.filter(
          (component: any) => component._kenticoItemType === 'section_static_slider',
        )[0].items;
      case 'carousel':
        return components.filter(
          (component: any) => component._kenticoItemType === 'section_static_carousel',
        )[0].items;
    }
  };

  const sliderData = getData(components, 'slider');
  const carouselData = getData(components, 'carousel');

  console.log('webConfig', webConfig);

  return (
    <>
      <DefaultSeo title="Origins Digital technical test" description="" />
      <QueryClientProvider client={queryClient}>
        <ViewportProvider>
          <NextNProgress color="var(--secondary)" />
          <Layout>
            <Component {...pageProps} />
            <Slider sliderData={sliderData} />
            <Carousel carouselData={carouselData} />
          </Layout>
        </ViewportProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
