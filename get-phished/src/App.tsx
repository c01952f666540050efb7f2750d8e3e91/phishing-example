import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useAccount } from "wagmi";
import { config } from './config';
//import { Profile } from "./profile";
import { Account } from "./account";
import { WalletOptions } from "./wallet-options";

const queryClient = new QueryClient();


function App() {
  return (
    <>
      <div>
        <h1>Get Phished</h1>
        <p>
          Here's how you get phished. Connect your wallet, and try to sign a transaction!
        </p>
      </div>
      
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <WalletOptions />
          <Account />
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}

export default App
