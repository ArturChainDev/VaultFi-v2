import { lazy } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import MaxAllocationWidget from "../widgets/MaxAllocationWidget";
import { selectFuseCurrentLayoutConfig } from 'app/store/fuse/settingsSlice';
import FooterLayout1 from "app/theme-layouts/layout1/components/FooterLayout1";
import AllocationPurchasedWidget from "../widgets/AllocationPurchasedWidget";
import TotalUsersWidget from "../widgets/TotalUsersWidget";
import TokenPriceWidget from "../widgets/TokenPriceWidget";
import ReferralWidget from "../widgets/ReferralWidget";
// import TokenRequestWidget from "../widgets/TokenRequestWidget";
import { Box, Link } from "@mui/material";

const TokenRequestWidget = lazy(() => import('../widgets/TokenRequestWidget'));

function PresalePage() {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div style={{ minHeight: `calc(100vh - 143px)` }}>
        <div className="hidden lg:block">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <MaxAllocationWidget />
            </motion.div>

            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <TokenPriceWidget />
            </motion.div>

            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <TotalUsersWidget />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-2 ">
              <TokenRequestWidget />
            </motion.div>
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <ReferralWidget />
            </motion.div>
          </motion.div>
        </div>

        <div className="block lg:hidden">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-2 ">
              <TokenRequestWidget />
            </motion.div>
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <MaxAllocationWidget />
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
            variants={container}
            initial="hidden"
            animate="show"
          >

            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <TokenPriceWidget />
            </motion.div>

            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <TotalUsersWidget />
            </motion.div>
            <motion.div variants={item} className="sm:col-span-2 lg:col-span-1 ">
              <ReferralWidget />
            </motion.div>
          </motion.div>

        </div>
        <div className="flex">
          <div className="flex smd:hidden mt-10 mb-[1.5cm] mx-auto">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
                width: "280px",
                maxWidth: "280px",
                minWidth: "280px",
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
        </div>
      </div>
      {config.footer.display && (
        <FooterLayout1 className={config.footer.style === 'fixed' && 'absolute bottom-0'} />
      )}
    </>
  );
}

export default PresalePage;
