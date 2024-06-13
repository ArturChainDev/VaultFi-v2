import React from 'react';
export const WhitePaperWidget = () => {
  return (
    <div
      className="flex flex-col items-center md:flex-row-reverse md:justify-between my-[150px]"
      id="whitepaper"
    >
      <div className="flex items-center justify-center w-full">
        <img
          src="/assets/images/background/VaultFi-Whitepaper.png"
          className="w-full m-10 md:m-0 md:max-w-[420px]"
        />
      </div>
      <div className="flex flex-col gap-2.5 md:gap-5 md:w-full md:items-start">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-5xl md:text-left">
        VAULTFI WHITEPAPER
        </h3>
        <p className="text-md text-center py-6 font-medium text-white/90 md:text-left md:text-base md:max-w-[600px]">
        Reading the VaultFinance Whitepaper is a great way to learn more about the unique VaultFi vision, roadmap and how the Vault system works. It highlights the groundbreaking innovations and explains in detail how it stands out from other crypto projects.
        </p>
        <a
          href="https://docs.vault-finance.com"
          target="_blank"
          className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto"
        >
          ACCESS THE WHITEPAPER
        </a>
      </div>
    </div>
  );
};
