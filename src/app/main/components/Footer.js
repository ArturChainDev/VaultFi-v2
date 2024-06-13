import React from 'react'
export const Footer = () => {
    return(
        <div className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex items-center w-[90vw] overflow-x-auto">
          <div className="flex grow shrink-0">
            Copyright ©2024 Vault Finance
          </div>
          <div className="flex grow shrink-0 px-12 justify-end">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                typography: "body1",
                gap: "5px",
                "& > :not(style) + :not(style)": {
                  ml: 2,
                },
              }}
            >
              <a
                href="mailto:hello@vault-finance.com"
                underline="none"
                style={{
                  color: "white !important",
                  opacity: "0.5",
                  background: "transparent !important",
                  borderBottom: "0 !important",
                }}
                target="_blank"
              >
                hello@vault-finance.com
              </a>
              <a
                href="https://vault-finance.com/private-policy.html"
                underline="none"
                style={{
                  color: "white !important",
                  opacity: "0.5",
                  background: "transparent !important",
                  borderBottom: "0 !important",
                }}
                target="_blank"
              >
                Privacy Policy
              </a>
              <a
                href="https://vault-finance.com/terms-of-use.html"
                underline="none"
                style={{
                  color: "white !important",
                  opacity: "0.5",
                  background: "transparent !important",
                  borderBottom: "0 !important",
                }}
                target="_blank"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
    );
}