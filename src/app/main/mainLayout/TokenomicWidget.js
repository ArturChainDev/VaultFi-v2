import React from 'react';
export const TokenomicWidget = () => {
  return (
    <div className="flex flex-col gap-5 my-16 pt-16" id="tokenomics">
      <div className="flex flex-col gap-2.5">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
        </h3>
      </div>
      <div className="flex md:mt-10 pointer-events-none">
        <img
          src="/assets/images/charts/VaultFi Presale Site - Tokenomics.png"
          className="hidden md:block w-full"
        />
        <img
          src="/assets/images/charts/VaultFi Presale Site - Tokenomics mobile.png"
          className="md:hidden w-full"
        />
      </div>
    </div>
  );
};
