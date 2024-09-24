import { useMemo, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import "@solana/wallet-adapter-react-ui/styles.css";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import DonationComponent from './components/donation-component';
import CounterState from './components/counter-state';
import IncrementButton from './components/increment-button';
function App() {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo( () => clusterApiUrl( network ), [ network ] );

  const wallets = useMemo(
    () => [
      // if desired, manually define specific/custom wallets here (normally not required)
      // otherwise, the wallet-adapter will auto detect the wallets a user's browser has available
    ],
    [ network ],
  );
  return (
    <>
      <ConnectionProvider endpoint={ endpoint }>
        <WalletProvider wallets={ wallets } autoConnect>
          <WalletModalProvider>
            <WalletMultiButton style={ { margin: '10px', backgroundColor: 'blue' } }>
              Connect to your wallet
            </WalletMultiButton>
            <h1>Welcome to Goat airdrop</h1>
            <CounterState />
            <IncrementButton />
            <DonationComponent/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
