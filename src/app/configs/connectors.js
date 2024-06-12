import { InjectedConnector } from '@web3-react/injected-connector';
import { createConfig, configureChains } from 'wagmi';
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { mainnet, sepolia, polygon } from 'wagmi/chains';

import {
    injectedWallet,
    argentWallet,
    trustWallet,
    ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';

const projectId = 'b9dacde9577e9aa82c83cff5a8aee900';

export const { chains, publicClient, webSocketPublicClient } = configureChains(
    [ mainnet],
    [ publicProvider() ]
);

const { wallets } = getDefaultWallets({
    appName: 'VaultFi',
    projectId,
    chains,
});

const connectors = connectorsForWallets([
    ...wallets,
    {
        groupName: 'Other',
        wallets: [
            argentWallet({ projectId, chains }),
            trustWallet({ projectId, chains }),
            ledgerWallet({ projectId, chains }),
            injectedWallet({ chains }),
        ]
    }
]);

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
    webSocketPublicClient,
});

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 1337, 31337, 80001, 11155111] });
