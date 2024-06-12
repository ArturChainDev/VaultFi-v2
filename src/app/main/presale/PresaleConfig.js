//import i18next from 'i18next';
import React, { lazy } from 'react';

// import en from './i18n/en';
// import tr from './i18n/tr';
// import ar from './i18n/ar';
// import Presale from './Presale';

// i18next.addResourceBundle('en', 'examplePage', en);
// i18next.addResourceBundle('tr', 'examplePage', tr);
// i18next.addResourceBundle('ar', 'examplePage', ar);

// const PresaleConfig = {
//   settings: {
//     layout: {
//       config: {},
//     },
//   },
//   routes: [
//     {
//       path: 'presale',
//       element: <Presale />,
//     },
//   ],
// };

// export default PresaleConfig;

/**
 * Lazy load Example
 */


const PresalePage = lazy(() => import('../landing/PresalePage'));

const PresaleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'presale',
      element: <PresalePage />,
    },
  ],
};

export default PresaleConfig;
