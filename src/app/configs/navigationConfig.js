import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [

  {
    id: 'presale-claim',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'Presale',
    children: [
      {
        id: 'presale-component',
        title: 'Presale',
        type: 'item',
        icon: 'material-solid:access_time',
        url: '/presale',
      }
    ],
  },
];

export default navigationConfig;
