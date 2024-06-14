import React from 'react'
export const SummaryWidget = () => {
    return (
        <section className="container-sm mt-20 md:pt-20 ">
            <img src="/bg/VaultFi-wheel.png" alt="" className="scale-150 sm:scale-[1.2] py-20" />
            <h2 className="mt-10 text-3xl font-semibold uppercase md:text-5xl italic">
                VaultFi: Pioneering DeFi 3.0, with APY backed by revenue-generating businesses.
            </h2>

            <div className="flex flex-col gap-4 mt-10">
                <p>
                    At the heart of VaultFi's strategy is the Vault system, a revolutionary solution designed to sustainably
                    generate high Annual Percentage Yield (APY).
                </p>

                <p>
                    Recognizing the challenges faced by previous DeFi projects, VaultFi has developed a clear roadmap that
                    introduces several diversified sources of yield, aimed at resilience and sustainability.
                </p>

                <p>
                    The VaultFi roadmap includes integrating revenue-generating projects from CoinRock Ventures, our
                    cutting-edge Web3 incubator and accelerator, as well as acquiring stakes in robust projects, broadening
                    the VaultFi yield-generating APY strategies to include a variety of revenue-generating assets.
                </p>

                <p>
                    Users will be able to choose from multiple VaultFi Vaults, each offering yields tied to different digital
                    assets, projects and narratives, thus expanding their exposure options.
                </p>
            </div>
        </section>
    );
} 