import React from 'react';
export const ExpanationWidget = () => {
  return (
    <div class="flex flex-col gap-5">
      <div class="flex flex-col items-center">
        {/* <img
          src="/assets/how-it-works-mobile-z_GzepUP.png"
          class="mb-5 w-full md:hidden"
        /> */}
        <div class="flex flex-col gap-2.5 md:gap-5">
          <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-5xl">
            HOW DOES IT WORK?
          </h3>
          <p class="text-md md:text-lg text-center font-medium text-white/80 md:text-base max-w-[850px]">
            VaultFinance is a Decentralized Finance (DeFi) project, with APY
            backed by revenue-generating businesses. <br />
            <br />
            Recognizing the challenges faced by previous DeFi projects, VaultFi
            has developed a clear roadmap that introduces several diversified
            sources of yield, aimed at resilience and sustainability.
            <br />
            <br />
            This strategy is implemented in 3 key phases
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-3 md:grid md:grid-cols-3 pt-5">
        <div className="flex flex-col items-center gap-3">
          <img
            src="assets/images/logo/FlyWheel1 def.png"
            className="max-w-[420px] md:w-full"
          />
          <div class="flex flex-col h-full items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Phase 1: Treasury
            </h3>
            <p class="text-md text-center font-medium text-white/80">
              The treasury funds the APY, which produces yield for a stable
              foundation.
              <br />
              This phase is common and used by many DeFi protocols. However,
              VaultFi goes 2 steps further.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src="assets/images/logo/FlyWheel2 def.png"
            className="max-w-[420px] md:w-full"
          />
          <div class="flex flex-col h-full items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Phase 2: First Vault
            </h3>
            <p class="text-md text-center font-medium text-white/80">
              Integrating revenue-generating projects from CoinRock, our Web3
              incubator and accelerator, strategically designed to boost the
              VaultFi APY by diversifying and enriching our sources of yield.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3">
          <img
            src="assets/images/logo/FlyWheel3 def.png"
            className="max-w-[420px] md:w-full"
          />
          <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
            <h3 class="mb-2.5 text-xl text-center font-semibold">
              Phase 3: Multi-Vault Diversification
            </h3>
            <p class="text-md text-center font-medium text-white/80">
              VaultFi will acquire stakes in various projects, users will be
              able to select from multiple VaultFi Vaults offering yields tied
              to different digital assets and narratives. This expands exposure
              options and is designed to handle market volatility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
