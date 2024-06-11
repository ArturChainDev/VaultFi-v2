import React from 'react'
export const RewardsWidget = () => {
    return (
        <div class="flex flex-col items-center md:flex-row md:justify-between my-28">
            <div class="flex items-center justify-center w-full">
                <img src="assets/images/background/Vault Twitter V1.png" class="w-full md:max-w-[520px]" />
            </div>
            <div class="flex flex-col gap-2.5 md:gap-5">
                <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left">
                    DAILY STAKING REWARDS
                </h3>
                <p class="text-sm text-center font-medium text-white/50 md:text-left md:text-base md:max-w-[600px]">
                    Get paid every day based on the amount of VaultFi tokens you hold. Staking within the VaultFi ecosystem offers flexibility and immediate liquidity, making it accessible for everyone. Token holders can stake their tokens at any time without any minimum staking period, providing ease and convenience. After the pre-sale, you will be able to stake and manage tokens through your personal dashboard. Unstaking is straightforward and immediate, with no lock-up periods or waiting times, allowing users quick access to their coins whenever they choose to unstake.
                </p>
            </div>
        </div>
    );
}