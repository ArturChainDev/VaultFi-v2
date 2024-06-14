import React from 'react'
export const RewardsWidget = () => {
    return (
        <section className="container mt-20 md:pt-20">
            <div className="flex flex-col items-center md:flex-row md:justify-between">
                <div className="md:w-7/12">
                    <img src="/bg/vault-bg.png" className="w-full scale-150 sm:scale-100 py-20 sm:py-0" />
                </div>
                <div className="md:w-5/12 flex flex-col gap-4 md:gap-5">
                    <h3 className="text-3xl md:text-5xl mb-5 font-semibold uppercase text-white italic">DAILY STAKING REWARDS</h3>
                    <p className="font-medium md:text-base md:max-w-[650px]">
                        Get paid every day based on the amount of VaultFi tokens you hold. Staking within the VaultFi ecosystem
                        offers flexibility and immediate liquidity, making it accessible for everyone.
                    </p>
                    <p>
                        Token holders can stake their tokens at any time without any minimum staking period, providing ease and
                        convenience. After the pre-sale, you will be able to stake and manage tokens through your personal
                        dashboard.{" "}
                    </p>
                    <p>
                        Unstaking is straightforward and immediate, with no lock-up periods or waiting times, allowing users
                        quick access to their coins whenever they choose to unstake.
                    </p>
                </div>
            </div>
        </section>
    );
}