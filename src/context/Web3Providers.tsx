"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { config } from "../lib/wagmi/config";
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

const queryClient = new QueryClient()
export function Web3Providers(props: { children: ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    modalSize="compact"
                >
                    {props.children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}
