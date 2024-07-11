import { Component } from './Interfaces';

const getData = (components, componentType: string): Component => {
  switch (componentType) {
    case 'slider':
      return components.filter(
        (component) => component._kenticoItemType === 'section_static_slider',
      )[0].items;
    case 'carousel':
      return components.filter(
        (component) => component._kenticoItemType === 'section_static_carousel',
      )[0].items;
    case 'ad':
      return components.filter((component) => component._kenticoItemType === 'section_static_ad');
  }
};

export default getData;
