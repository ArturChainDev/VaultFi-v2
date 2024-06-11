import React from 'react';
export const TokenomicWidget = () => {
  return (
    <div className="flex flex-col gap-5 my-10" id="tokenomics">
      <div class="flex flex-col gap-2.5">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          VAULTFI TOKENOMICS
        </h3>
      </div>
      <div class="flex md:mt-10 pointer-events-none">
        <img src="/assets/chart-mobile-l7l6S6fl.svg" class="md:hidden w-full" />
        <img
          src="/assets/chart-desktop-Xm7aODpH.svg"
          class="hidden md:block w-full"
        />
      </div>
    </div>
  );
};
