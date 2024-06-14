import React from 'react'
export const Footer = () => {
    return(
      <footer>
      <div className="flex w-full justify-center mt-16 gap-4 *:w-[25px]">

        <a href="https://twitter.com/vaultfi_io" target="_blank">
          <img
            className="w-full"
            src="/icons/x_white.svg"
            alt="footer logo"
          />
        </a>
        <a href="https://vault-finance.com/" target="_blank">
          <img
            className="w-full"
            src="/icons/website_white.svg"
            alt="footer logo"
          />
        </a>
        <a href="https://t.me/VaultFiVerify" target="_blank">
          <img
            className="w-full"
            src="/icons/telegram_white.svg"
            alt="footer logo"
          />
        </a>
        <a href="https://docs.vault-finance.com/" target="_blank">
          <img
            className="w-full"
            src="/icons/doc_white.svg"
            alt="footer logo"
          />
        </a>
      </div>
      <div className="min-h-48 md:min-h-64 px-8 sm:px-12 py-0 flex flex-col md:flex-row gap-4 items-center overflow-x-auto text-white/70 text-center md:text-left mt-10 md:mt-0">
        <div className="flex  md:grow md:shrink-0 ">Copyright ©2024 Vault Finance</div>
        <div className="flex flex-col gap-4 md:flex-row md:grow md:shrink-0 px-12 justify-end">
          <a className="" href="mailto:hello@vault-finance.com" target="_blank">
            hello@vault-finance.com
          </a>
          <a className="" href="https://vault-finance.com/private-policy.html" target="_blank">
            Privacy Policy
          </a>
          <a className="" href="https://vault-finance.com/terms-of-use.html" target="_blank">
            Terms of Use
          </a>

        </div>
      </div>
    </footer>
    );
}