import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </Web3sdkioProvider>
  );
}

export default MyApp;
