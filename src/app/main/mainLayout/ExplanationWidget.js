import React from 'react';
export const ExpanationWidget = () => {
  return (
    <section className="container mt-20 md:pt-20 md:text-center ">
    <div className="space-y-5 max-w-[1024px] mx-auto mb-20">
      <h3 className="text-3xl md:text-5xl mb-5 font-semibold uppercase text-white italic">HOW DOES IT WORK?</h3>
      <p>
        VaultFinance is a Decentralized Finance (DeFi) project, with APY backed by revenue-generating businesses.
      </p>
      <p>
        Recognizing the challenges faced by previous DeFi projects, VaultFi has developed a clear roadmap that
        introduces several diversified sources of yield, aimed at resilience and sustainability.
      </p>
      <p>This strategy is implemented in 3 key phases.</p>
    </div>
    <div className="flex flex-col gap-16 md:gap-6 md:grid md:grid-cols-3">
      <div className="flex flex-col gap-16 md:gap-20 ">
        <img src="/bg/flywheel1.png" alt="" />
        <div className="flex flex-col items-center h-full p-5 rounded-2xl bg-[var(--purple)] md:p-7">
          <h3 className="mb-2.5 text-xl text-center font-semibold">Phase 1: Treasury</h3>
          <p className=" text-center font-medium ">
            The treasury funds the APY, which produces yield for a stable foundation. This phase is common and
            used by many DeFi protocols. However, VaultFi goes 2 steps further.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 md:gap-20 ">
        <img src="/bg/flywheel2.png" alt="" />
        <div className="flex flex-col items-center h-full p-5 rounded-2xl bg-[var(--purple)] md:p-7">
          <h3 className="mb-2.5 text-xl text-center font-semibold">Phase 2: First Vault </h3>
          <p className=" text-center font-medium ">
            Integrating revenue-generating projects from CoinRock, our Web3 incubator and accelerator,
            strategically designed to boost the VaultFi APY by diversifying and enriching our sources of yield.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-16 md:gap-20 ">
        <img src="/bg/flywheel3.png" alt="" />
        <div className="flex flex-col items-center h-full p-5 rounded-2xl bg-[var(--purple)] md:p-7">
          <h3 className="mb-2.5 text-xl text-center font-semibold">Phase 3: Multi-Vault Diversification</h3>
          <p className=" text-center font-medium ">
            VaultFi will acquire stakes in various projects, users will be able to select from multiple VaultFi
            Vaults offering yields tied to different digital assets and narratives. This expands exposure options
            and is designed to handle market volatility.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
};
