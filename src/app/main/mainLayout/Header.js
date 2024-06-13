import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from '../components/Button';
import { useSelector } from "react-redux";

import {
  selectFuseCurrentLayoutConfig,
  selectToolbarTheme,
} from "app/store/fuse/settingsSlice";
export const Header = () => {
  const toolbarTheme = useSelector(selectToolbarTheme);
  return (
    <div className="flex flex-col">
      <div className="relative flex items-center justify-between z-30">
        <a
          aria-current="page"
          href="/presale"
        >
          <img
            className="logo-icon"
            src="assets/images/logo/vault_logo.png"
            alt="logo"
            width={'200px'}
          />
        </a>
        <div className="hidden md:flex">
          <div className="text-md flex items-center md:gap-8 gap-4">
            <a
              href="presale/#roadmap"
              className="text-gold hover:text-white whitespace-nowrap px-3 py-1 bg-white/20 rounded-md"
            >
              Growth Potential
            </a>
            <a
              href="presale/#tokenomics"
              className="text-white/50 hover:text-white whitespace-nowrap"
            >
              Tokenomics
            </a>
            <a
              href="presale/#how-to-buy"
              className="text-white/50 hover:text-white whitespace-nowrap"
            >
              How to Buy
            </a>
            <a
              href="presale/#faq"
              className="text-white/50 hover:text-white whitespace-nowrap"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center gap-2 px-3">
          <a
            href="#"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='30'%20height='31'%20viewBox='0%200%2030%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_628_617)'%3e%3cpath%20d='M29.8334%2015.1107C29.8334%2023.3024%2023.1918%2029.944%2015.0001%2029.944C6.80837%2029.944%200.166748%2023.3024%200.166748%2015.1107C0.166748%206.91897%206.80837%200.277344%2015.0001%200.277344C23.1918%200.277344%2029.8334%206.91897%2029.8334%2015.1107Z'%20fill='url(%23paint0_linear_628_617)'/%3e%3cpath%20opacity='0.05'%20d='M4.70499%2014.7146C10.7533%2011.9742%2017.857%209.00083%2018.9509%208.57066C21.3628%207.62207%2022.4145%208.59143%2022.2499%2010.1378C22.0474%2012.0328%2021.0877%2017.5471%2020.4973%2021.4979C20.1517%2023.8097%2018.8997%2024.518%2017.4869%2023.6213C16.4152%2022.9412%2012.7306%2020.5286%2011.7612%2019.7038C11.1004%2019.1416%2010.6398%2018.5112%2011.1085%2017.8689C11.2457%2017.6813%2011.5966%2017.303%2011.7916%2017.1147C12.7699%2016.1668%2012.6379%2015.9629%2011.4549%2016.8091C11.314%2016.91%2010.4967%2017.5026%2010.1607%2017.7265C9.33744%2018.2754%208.5802%2018.305%207.29637%2017.8689C6.24617%2017.5122%205.2375%2017.237%204.60115%2016.9619C3.72228%2016.5814%203.38556%2015.3124%204.70499%2014.7146Z'%20fill='black'/%3e%3cpath%20opacity='0.07'%20d='M5.23661%2014.8067C10.8525%2012.2962%2017.7589%209.41923%2018.7691%209.01206C21.1899%208.03454%2022.0806%208.61452%2021.8203%2010.5035C21.5785%2012.2524%2020.7204%2017.6636%2020.1189%2021.2911C19.7644%2023.4263%2018.729%2023.8966%2017.3807%2023.0244C16.5359%2022.48%2013.1361%2020.2401%2012.3114%2019.5882C11.6735%2019.0846%2011.0127%2018.5032%2011.7848%2017.6614C12.0429%2017.3803%2013.4684%2016.0045%2014.5341%2014.981C15.152%2014.3869%2014.9317%2014.094%2014.1863%2014.6042C12.8194%2015.541%2010.5833%2017.0235%2010.1843%2017.2928C9.42406%2017.8045%208.70984%2017.9276%207.4668%2017.5368C6.48706%2017.2282%205.54069%2016.9293%205.04749%2016.7373C3.94537%2016.3101%203.93054%2015.3904%205.23661%2014.8067Z'%20fill='black'/%3e%3cpath%20d='M5.7687%2014.9008C10.953%2012.6202%2017.6613%209.83968%2018.5877%209.45476C21.0166%208.44757%2021.762%208.64041%2021.3904%2010.8713C21.1234%2012.4748%2020.3536%2017.7829%2019.7395%2021.0871C19.3753%2023.0465%2018.558%2023.2787%2017.2734%2022.431C16.6556%2022.023%2013.5369%2019.9605%2012.8598%2019.4762C12.242%2019.0349%2011.3898%2018.5038%2012.4585%2017.4581C12.839%2017.0858%2015.3318%2014.705%2017.2742%2012.8523C17.5286%2012.6091%2017.2089%2012.2093%2016.9152%2012.4044C14.2971%2014.1406%2010.6674%2016.5503%2010.2054%2016.864C9.50744%2017.3379%208.83698%2017.5552%207.63399%2017.2096C6.72471%2016.9486%205.83694%2016.6371%205.49132%2016.5184C4.16003%2016.0615%204.47598%2015.4697%205.7687%2014.9008Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_628_617'%20x1='4.51143'%20y1='4.62203'%20x2='25.4887'%20y2='25.5993'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2333BEF0'/%3e%3cstop%20offset='1'%20stop-color='%230A85D9'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0_628_617'%3e%3crect%20width='30'%20height='30'%20fill='white'%20transform='translate(0%200.110352)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              className="w-[20px] h-[20px]"
            />
          </a>
          <a
            href="#"
            target="_blank"
            className="flex items-center justify-center"
          >
            <img
              src="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twitter-x-seeklogo.com-4%201'%20clip-path='url(%23clip0_400_24928)'%3e%3cg%20id='Group'%3e%3cpath%20id='Vector'%20d='M15.0001%2029.7289C23.1337%2029.7289%2029.7273%2023.1346%2029.7273%2015.0002C29.7273%206.86575%2023.1337%200.271484%2015.0001%200.271484C6.86653%200.271484%200.272949%206.86575%200.272949%2015.0002C0.272949%2023.1346%206.86653%2029.7289%2015.0001%2029.7289Z'%20fill='black'/%3e%3cg%20id='layer1'%3e%3cpath%20id='path1009'%20d='M5.92815%206.4668L12.9676%2015.88L5.88379%2023.5333H7.47819L13.6802%2016.8325L18.691%2023.5333H24.1164L16.6808%2013.5908L23.2744%206.4668H21.68L15.9685%2012.6379L11.3536%206.4668H5.92815ZM8.27279%207.64123H10.7652L21.7715%2022.3589H19.2791L8.27279%207.64123Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_400_24928'%3e%3crect%20width='30'%20height='30'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              className="w-[20px] h-[20px]"
            />
          </a>
        </div>

        <div className="flex gap-1 md:gap-1.5">
          <div className="relative">

            <ConnectButton.Custom
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            >
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          <Button onClick={openConnectModal} >
                            Connect Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button
                            onClick={openChainModal}
                          >
                            Wrong network
                          </Button>
                        );
                      }

                      return (
                        <ThemeProvider theme={toolbarTheme}>
                          <div style={{ display: "flex", gap: 12 }}>
                            <Button
                              onClick={openChainModal}
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: "hidden",
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? "Chain icon"}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </Button>

                            <Button
                              onClick={openAccountModal}
                            >
                              {account.displayName}
                            </Button>
                          </div>
                        </ThemeProvider>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>

          </div>
        </div>
      </div>
      <div className="flex md:hidden px-3 py-3 no-scrollbar">
        <div className="flex items-center gap-2 mx-auto">
          <a
            href="presale/#roadmap"
            className="px-3 py-1 text-sm text-gold bg-white/20 hover:opacity-90 rounded-md hover:text-white whitespace-nowrap"
          >
            Growth Potential
          </a>
          <a
            href="presale/#tokenomics"
            className="text-sm text-white/50 hover:text-white whitespace-nowrap"
          >
            Tokenomics
          </a>
          <a
            href="presale/#how-to-buy"
            className="text-sm text-white/50 hover:text-white whitespace-nowrap"
          >
            How to Buy
          </a>
          <a
            href="presale/#faq"
            className="text-sm text-white/50 hover:text-white whitespace-nowrap"
          >
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};
