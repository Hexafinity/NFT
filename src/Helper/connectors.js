import { useEffect } from "react";
import { InjectedConnector } from "@web3-react/injected-connector";
import { chain_info } from "./chain";
import { useWeb3React } from "@web3-react/core";
// import { toast } from 'wc-toast';

const support_chain = Object.values(chain_info).map((value) => { return value.chainId });

export const POLLING_INTERVAL = 12000;
export const injected = new InjectedConnector({
  supportedChainIds: support_chain,
});


// export async function setupNetwork () {
//  try{
//     const provider = await web3Modal.connect();


    
//   }
//   catch(err){
//     console.log(err.message);
//   }
// }


export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };
      const handleChainChanged = (chainId) => {
        activate(injected);
      };
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId) => {
        activate(injected);
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}



