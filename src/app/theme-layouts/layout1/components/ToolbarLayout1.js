import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
  selectFuseCurrentLayoutConfig,
  selectToolbarTheme,
} from "app/store/fuse/settingsSlice";
import { selectFuseNavbar } from "app/store/fuse/navbarSlice";
import AdjustFontSize from "../../shared-components/AdjustFontSize";
import LanguageSwitcher from "../../shared-components/LanguageSwitcher";
import NavbarToggleButton from "../../shared-components/NavbarToggleButton";
import MobileDetect from "mobile-detect";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function ToolbarLayout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);
  const toolbarTheme = useSelector(selectToolbarTheme);

  const md = new MobileDetect(window.navigator.userAgent);
  const isMobile = md.mobile();

  return (
    // <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx("flex relative z-20 shadow-md", props.className)}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? toolbarTheme.palette.background.paper
              : toolbarTheme.palette.background.default,
        }}
        position="static"
      >
        <Toolbar className="p-0 min-h-52 md:min-h-64">
          <div className="flex flex-1 px-16">
            {config.navbar.display && config.navbar.position === "left" && (
              <>
                <Hidden lgDown>
                  {(config.navbar.style === "style-3" ||
                    config.navbar.style === "style-3-dense") && (
                      <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                    )}

                  {config.navbar.style === "style-1" && !navbar.open && (
                    <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                  )}
                </Hidden>

                <Hidden lgUp>
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                </Hidden>
              </>
            )}

            <Hidden lgDown>
              <div className="flex flex-col gap-2  justify-center p-20 pb-10">
                <Typography className="whitespace-normal text-xl font-semibold tracking-tight leading-7 md:leading-snug truncate" color={"#cca44d"}>
                  {"VaultFi: Pioneering DeFi 3.0."}
                </Typography>
                <Typography className="whitespace-normal text-lg tracking-tight leading-7 md:leading-snug truncate" color={"#cca44d"}>
                  {"With APY backed by revenue-generating businesses"}
                </Typography>
              </div>
            </Hidden>
          </div>
          {/* <div className="w-[50px] h-[20px]"> */}
          <img
            className="px-1 w-[50px] md:w-[40px]"
            src="assets/icons/right-arrow.svg"
            alt="rightArrow"
          />
          {/* </div> */}
          <div className="flex items-center px-8 h-full overflow-x-auto pr-24 md:pr-32">
            {/* <Hidden lgDown>
                  <LanguageSwitcher />
                <AdjustFontSize />              
   
                  </Hidden> */}

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
                          <Button
                            onClick={openConnectModal}
                            variant="contained"
                            color="primary"
                          >
                            Connect Wallet
                          </Button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          <Button
                            onClick={openChainModal}
                            variant="outlined"
                            color="primary"
                          >
                            Wrong network
                          </Button>
                        );
                      }

                      return (
                        <div style={{ display: "flex", gap: 12 }}>
                          <Button
                            onClick={openChainModal}
                            sx={{ display: "flex", alignItems: "center" }}
                            variant="outlined"
                            color="primary"
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
                            variant="outlined"
                            color="primary"
                          >
                            {account.displayName}
                          </Button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <>
              <Hidden lgDown>
                {!navbar.open && (
                  <NavbarToggleButton className="w-40 h-40 p-0 mx-0" />
                )}
              </Hidden>

              <Hidden lgUp>
                <NavbarToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
              </Hidden>
            </>
          )}
        </Toolbar>
      </AppBar>
    // </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
