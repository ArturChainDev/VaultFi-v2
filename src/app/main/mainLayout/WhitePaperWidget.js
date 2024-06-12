import React from 'react';
export const WhitePaperWidget = () => {
  return (
    <div
      class="flex flex-col items-center md:flex-row-reverse md:justify-between my-[150px]"
      id="whitepaper"
    >
      <div class="flex items-center justify-center w-full">
        <img
          src="/assets/images/background/VaultFi-Whitepaper.png"
          class="w-full m-10 md:m-0 md:max-w-[420px]"
        />
      </div>
      <div class="flex flex-col gap-2.5 md:gap-5 md:w-full md:items-start">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-5xl md:text-left">
        VAULTFI WHITEPAPER
        </h3>
        <p class="text-md text-center font-medium text-white/80 md:text-left md:text-base md:max-w-[600px]">
        Reading the VaultFinance Whitepaper is a great way to learn more about the unique VaultFi vision, roadmap and how the Vault system works. It highlights the groundbreaking innovations and explains in detail how it stands out from other crypto projects.
        </p>
        <a
          href="https://docs.vault-finance.com"
          target="_blank"
          class="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed md:px-7 md:w-auto"
        >
          ACCESS THE WHITEPAPER
        </a>
      </div>
    </div>
  );
};
