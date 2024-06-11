import React from 'react'
export const ExpanationWidget = () => {
    return (
        <div class="flex flex-col gap-5">
            <div class="flex flex-col items-center">
                <img src="/assets/how-it-works-mobile-z_GzepUP.png" class="mb-5 w-full md:hidden" />
                <div class="flex flex-col gap-2.5 md:gap-5">
                    <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
                        HOW DOES IT WORK?
                    </h3>
                    <p class="text-sm text-center font-medium text-white/50 md:text-base max-w-[930px]">
                        VaultFinance is a Decentralized Finance (DeFi) project, with APY backed by revenue-generating businesses. <br /><br />
                        Recognizing the challenges faced by previous DeFi projects, VaultFi has developed a clear roadmap that introduces several diversified sources of yield, aimed at resilience and sustainability.<br /><br />
                        This strategy is implemented in 3 key phases
                    </p>
                </div>
                <img src="/assets/how-it-works-desktop-RCTB4s2H.png" class="my-10 w-full hidden md:block pointer-events-none" />
            </div>
            <div class="flex flex-col gap-3 md:grid md:grid-cols-3">
                <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
                    <h3 class="mb-2.5 text-xl text-center font-semibold">
                        Phase 1: Treasury
                    </h3>
                    <p class="text-sm text-center font-medium text-white/50">
                        The treasury funds the APY, which produces yield for a stable foundation.<br />
                        This phase is common and used by many DeFi protocols. However, VaultFi goes 2 steps further.
                    </p>
                </div>
                <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
                    <h3 class="mb-2.5 text-xl text-center font-semibold">
                        Phase 2: First Vault
                    </h3>
                    <p class="text-sm text-center font-medium text-white/50">
                        Integrating revenue-generating projects from CoinRock, our Web3 incubator and accelerator, strategically designed to boost the VaultFi APY by diversifying and enriching our sources of yield.
                    </p>
                </div>
                <div class="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
                    <h3 class="mb-2.5 text-xl text-center font-semibold">
                        Phase 3: Multi-Vault Diversification
                    </h3>
                    <p class="text-sm text-center font-medium text-white/50">
                        VaultFi will acquire stakes in various projects, users will be able to select from multiple VaultFi Vaults offering yields tied to different digital assets and narratives. This expands exposure options and is designed to handle market volatility.
                    </p>
                </div>
            </div>
        </div>
    );
}