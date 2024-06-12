import React from 'react';
export const TokenomicWidget = () => {
  return (
    <div className="flex flex-col gap-5 my-16 pt-16" id="tokenomics">
      <div class="flex flex-col gap-2.5">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
        </h3>
      </div>
      <div class="flex md:mt-10 pointer-events-none">
        <img
          src="/assets/images/charts/VaultFi Presale Site - Tokenomics.png"
          class="hidden md:block w-full"
        />
        <img
          src="/assets/images/charts/VaultFi Presale Site - Tokenomics mobile.png"
          class="md:hidden w-full"
        />
      </div>
    </div>
  );
};
