import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ButtonTop, ButtonBottom } from '../components/Button';
import { useSelector } from "react-redux";

import {
  selectFuseCurrentLayoutConfig,
  selectToolbarTheme,
} from "app/store/fuse/settingsSlice";
export const Header = () => {
  const toolbarTheme = useSelector(selectToolbarTheme);
  return (
    <section className="container md:sticky md:top-0 bg-[var(--blue)] py-2 z-10" >
          {/* <div className="flex flex-col flex-lg-row gap-5 items-center">  */ }
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 md:items-center justify-between">
            <div className="flex justify-between items-center md:contents">
              <a href="/" className="logo">
                <img src="/vault_logo.png" alt="vault-logo" height={ 70 } />
              </a>
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
                          <ButtonTop onClick={openConnectModal} >
                            Connect Wallet
                          </ButtonTop>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <ButtonTop
                            onClick={openChainModal}
                          >
                            Wrong network
                          </ButtonTop>
                        );
                      }

                      return (
                        <ThemeProvider theme={toolbarTheme}>
                          <div style={{ display: "flex", gap: 12 }}>
                            <ButtonTop
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
                            </ButtonTop>

                            {/* <ButtonTop
                              onClick={openAccountModal}
                            >
                              {account.displayName}
                            </ButtonTop> */}
                          </div>
                        </ThemeProvider>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            </div>
            <nav className="nav-list custom-scrollbar">
              <a href="#" className="active">
                Growth potential
              </a>
              <a href="#tokenomics">Tokenomics</a>
              <a href="#how-to-buy">How to Buy</a>
              <a href="#faq">FAQ</a>
            </nav>

            <div className="hidden lg:flex gap-2 items-center" id="header-socials">
              <a rel="noopener" href="https://twitter.com/vaultfi_io" target="_blank">
                <img src="/x.svg" alt="X" width="24" />
              </a>
              <a rel="noopener" href=" https://t.me/VaultFiVerify" target="_blank">
                <img src="/telegram.svg" width="24" alt="Telegram" />
              </a>
            </div>
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
                          <ButtonBottom onClick={openConnectModal} >
                            Connect Wallet
                          </ButtonBottom>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <ButtonBottom
                            onClick={openChainModal}
                          >
                            Wrong network
                          </ButtonBottom>
                        );
                      }

                      return (
                        <ThemeProvider theme={toolbarTheme}>
                          <div style={{ display: "flex", gap: 12 }}>
                            <ButtonBottom
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
                            </ButtonBottom>

                            <ButtonBottom
                              onClick={openAccountModal}
                            >
                              {account.displayName}
                            </ButtonBottom>
                          </div>
                        </ThemeProvider>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            

          </div>
        </section>
    
           
       
  );
};
