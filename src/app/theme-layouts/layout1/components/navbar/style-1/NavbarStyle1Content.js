import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import clsx from "clsx";
import { memo } from "react";
import NavbarToggleButton from "../../../../shared-components/NavbarToggleButton";
import UserNavbarHeader from "../../../../shared-components/UserNavbarHeader";
import Navigation from "../../../../shared-components/Navigation";
import { Typography } from "@mui/material";

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  "& ::-webkit-scrollbar-thumb": {
    boxShadow: `inset 0 0 0 20px ${theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.24)"
      : "rgba(255, 255, 255, 0.24)"
      }`,
  },
  "& ::-webkit-scrollbar-thumb:active": {
    boxShadow: `inset 0 0 0 20px ${theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.37)"
      : "rgba(255, 255, 255, 0.37)"
      }`,
  },
}));

const StyledContent = styled(FuseScrollbars)(({ theme }) => ({
  overscrollBehavior: "contain",
  overflowX: "hidden",
  overflowY: "auto",
  WebkitOverflowScrolling: "touch",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 40px, 100% 10px",
  backgroundAttachment: "local, scroll",
}));

function NavbarStyle1Content(props) {
  return (
    <Root
      className={clsx(
        "flex flex-auto flex-col overflow-hidden h-full",
        props.className
      )}
    >
      <StyledContent
        className="flex flex-1 flex-col min-h-0"
        option={{ suppressScrollX: true, wheelPropagation: false }}
      >
        <UserNavbarHeader />

        {/* <Navigation layout="vertical" /> */}
        <div className="bg-[#1e293b] gap-5 smd:mt-[60px] mt-5 flex border-[#1e293b] rounded-[5px] mx-auto p-5 px-10">
          <img
            width={20}
            src="assets/icons/down-arrow.svg"
            alt="downArrow"
          />
          <Typography className="whitespace-normal text-xl font-semibold tracking-tight leading-7 truncate" color={"#cca44d"}>
            {"Follow the Steps Below"}
          </Typography>
        </div>

        <div className="flex flex-col gap-[25px] justify-center p-[30px]">
          <Typography className="whitespace-normal text-lg tracking-tight leading-7 truncate" color={"#cca44d"}>
            <span className="font-semibold underline underline-offset-2">Step 1:</span>{" Click on \"Connect Wallet\"."}
          </Typography>
          <Typography className="whitespace-normal text-lg tracking-tight leading-7 truncate" color={"#cca44d"}>
            <span className="font-semibold underline underline-offset-2">Step 2:</span>{" Once your wallet is connected, select the number of tokens you wish to purchase."}
          </Typography>
          <Typography className="whitespace-normal text-lg tracking-tight leading-7truncate" color={"#cca44d"}>
            <span className="font-semibold underline underline-offset-2">Step 3:</span>{" After purchasing, you can create your referral code and share it with others to receive 5% in bonus extra tokens."}
          </Typography>
        </div>
        <div className="h-[100vh] justify-center">
          <div className="flex flex-0 items-center justify-center smd:py-48 py-36 opacity-10">
            <img
              className="w-full max-w-64"
              src="assets/images/logo/logo.svg"
              alt="footer logo"
            />
          </div>
        </div>
        <div className="hidden smd:flex">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              position: "fixed",
              width: "280px",
              maxWidth: "280px",
              minWidth: "280px",
              bottom: "25px",
              typography: "body1",
              "& > :not(style) + :not(style)": {
                ml: 2,
              },
            }}
          >
            <Link
              href="https://twitter.com/vaultfi_io"
              sx={{
                background: "transparent !important",
                borderBottom: "0 !important",
              }}
              target="_blank"
            >
              <img
                className="w-full"
                style={{ width: "22px" }}
                src="assets/images/social-icons/x_white.svg"
                alt="footer logo"
              />

            </Link>
            <Link
              href="https://vault-finance.com/"
              sx={{
                background: "transparent !important",
                borderBottom: "0 !important",
              }}
              target="_blank"
            >
              <img
                className="w-full"
                style={{ width: "25px" }}
                src="assets/images/social-icons/website_white.svg"
                alt="footer logo"
              />
            </Link>
            <Link
              href="https://t.me/VaultFiVerify"
              sx={{
                background: "transparent !important",
                borderBottom: "0 !important",
              }}
              target="_blank"
            >
              <img
                className="w-full"
                style={{ width: "25px" }}
                src="assets/images/social-icons/telegram_white.svg"
                alt="footer logo"
              />
            </Link>
            <Link
              href="https://docs.vault-finance.com/"
              sx={{
                background: "transparent !important",
                borderBottom: "0 !important",
              }}
              target="_blank"
            >
              <img
                className="w-full"
                style={{ width: "25px" }}
                src="assets/images/social-icons/doc_white.svg"
                alt="footer logo"
              />
            </Link>
          </Box>
        </div>
      </StyledContent>
    </Root >
  );
}

export default memo(NavbarStyle1Content);
