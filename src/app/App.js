import '@mock-api';
import BrowserRouter from '@fuse/core/BrowserRouter';
import FuseLayout from '@fuse/core/FuseLayout';
import FuseTheme from '@fuse/core/FuseTheme';
import { SnackbarProvider } from 'notistack';
import { useSelector } from 'react-redux';
import rtlPlugin from 'stylis-plugin-rtl';
// import createCache from '@emotion/cache';
// import { CacheProvider } from '@emotion/react';
import { selectCurrentLanguageDirection } from 'app/store/i18nSlice';
import { selectUser } from 'app/store/userSlice';
import themeLayouts from 'app/theme-layouts/themeLayouts';
import { selectMainTheme } from 'app/store/fuse/settingsSlice';
import FuseAuthorization from '@fuse/core/FuseAuthorization';
import settingsConfig from 'app/configs/settingsConfig';
import withAppProviders from './withAppProviders';
// import { AuthProvider } from './auth/AuthContext';
import { Web3ReactProvider } from '@web3-react/core';
import { RainbowKitProvider, darkTheme, lightTheme, cssStringFromTheme } from '@rainbow-me/rainbowkit';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig, chains } from './configs/connectors';
import getLibrary from './configs/getLibrary';


// const emotionCacheOptions = {
//   rtl: {
//     key: 'muirtl',
//     stylisPlugins: [rtlPlugin],
//     insertionPoint: document.getElementById('emotion-insertion-point'),
//   },
//   ltr: {
//     key: 'muiltr',
//     stylisPlugins: [],
//     insertionPoint: document.getElementById('emotion-insertion-point'),
//   },
// };

const App = () => {
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    // <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <FuseTheme theme={mainTheme} direction={langDirection}>
        <BrowserRouter>
          <FuseAuthorization
            userRole={user.role}
            loginRedirectUrl={settingsConfig.loginRedirectUrl}
          >
            <WagmiConfig config={wagmiConfig}>
              <Web3ReactProvider getLibrary={getLibrary}>
                <RainbowKitProvider chains={chains} theme={null}>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: `
                      :root {
                        ${cssStringFromTheme(darkTheme)}
                      }

                      html[data-dark] {
                        ${cssStringFromTheme(darkTheme, {
                        extends: lightTheme,
                      })}
                      }
                    `,
                    }}
                  />
                  <SnackbarProvider
                    maxSnack={5}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    classes={{
                      containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
                    }}
                  >
                    <FuseLayout layouts={themeLayouts} />
                  </SnackbarProvider>
                </RainbowKitProvider>

              </Web3ReactProvider>
            </WagmiConfig>
          </FuseAuthorization>
        </BrowserRouter>
      </FuseTheme>
    // </CacheProvider>
  );
};

export default withAppProviders(App)();
