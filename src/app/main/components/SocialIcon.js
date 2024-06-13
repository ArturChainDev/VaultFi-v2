import React from 'react'
export const SocialIcon = () => {
    return(
        <div className="flex">
          <div className="flex smd:hidden mt-10 mb-[1.5cm] mx-auto">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                position: "relative",
                maxWidth: "280px",
                gap: "20px",
                "& > :not(style) + :not(style)": {
                  ml: 2,
                },
              }}
            >
              <a
                href="https://twitter.com/vaultfi_io"
                style={{
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

              </a>
              <a
                href="https://vault-finance.com/"
                style={{
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
              </a>
              <a
                href="https://t.me/VaultFiVerify"
                style={{
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
              </a>
              <a
                href="https://docs.vault-finance.com/"
                style={{
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
              </a>
            </div>
          </div>
        </div>
    )
}