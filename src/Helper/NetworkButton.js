import React, { useEffect, useState } from "react";
import axios from "axios";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { injected, useInactiveListener } from "./connectors";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Modal, Container } from 'react-bootstrap';
import { chain_info } from "./chain";

var qs = require('qs');

const RPC_URLS = {
  56: "https://bsc-dataseed.binance.org/",
  97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
};

export const walletconnect = new WalletConnectConnector({
  rpc: RPC_URLS,
  qrcode: true,
});



const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

const api_url = "https://arctoken.net/nft/";

export function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}



const NetworkButton = () => {

  const context = useWeb3React();
  const [showmodal, setShowmodal] = useState(false);

  const handleClose = () => setShowmodal(false);
  const handleShow = () => setShowmodal(true);

  const { connector, account, activate, deactivate, error , chainId } = context;
  const [activatingConnector, setActivatingConnector] = useState();

  const activating = (connection) => connection === activatingConnector;
  const connected = (connection) => connection === connector;
  const disabled = !!activatingConnector || connected(injected) || connected(walletconnect) || !!error;


  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  useInactiveListener(!!activatingConnector);

  



  useEffect(() => {
    const login = async () => {
      if (account ) {
        
        setShowmodal(false);
        let args = {
          "address": account,
        }
        let reponse = await axios.post(`${api_url}auth-request`, qs.stringify(args), headers);
        if (typeof reponse.data !== 'undefined' && reponse.data !== '') {
          if (reponse.data.error === 'ok') {
            toast.success('Successfully Login!');
          }
          else {
            deactivate(injected);
            deactivate(walletconnect);

          }
        }
        else {
          deactivate(injected);
          deactivate(walletconnect);
        }
      }
      else {
        deactivate(injected);
        deactivate(walletconnect);
        
      }
    }
    login();
  }, [account, deactivate])


  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  return (
    <>
      <ToastContainer />
      {(!connected(injected) && !connected(walletconnect))
        &&
        <>
          <button
            type="button"
            className="connect-wallet desktop-connect"
            disabled={disabled}
            onClick={
              (e) => handleShow(e)
            }
          >
            Connect Wallet
          </button>

          <button
            type="button"
            className="connect-wallet mobile-connect"
            disabled={disabled}
            onClick={
              (e) => handleShow(e)
            }
          >
            Connect Wallet
          </button>
        </>
      }

      {(activating(injected) || activating(walletconnect)) && <p className="btn loading">loading...</p>}
      {!error && (connected(injected) || connected(walletconnect)) && (
        <>
          <button type="button" className="connect-wallet desktop-connect" onClick={() => {
            if (connected(walletconnect)) {
              (connector).close();
            }
            deactivate();
          }} >
            {`${account.toString().slice(0, 5)}...${account.toString().slice(-5)}`}
          </button>
          <button type="button" className="connect-wallet mobile-connect" onClick={() => {
            if (connected(walletconnect)) {
              (connector).close();
            }
            deactivate();
          }} >
            {`${account.toString().slice(0, 5)}...${account.toString().slice(-5)}`}
          </button>
          
         
        </>
        

      )}
      {connected(injected)  && typeof chain_info[chainId] === 'undefined'  && <button className="connect-wallet desktop-connect" type="button" variant="primary">Connect BSC Mainnet</button>}

      <Modal show={showmodal} onHide={handleClose} size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Body>
          <Container fluid>
            <div className="text-center">
              <figure>
                <img
                  className="h-24"
                  height="100px"
                  width="100px"
                  src="https://images.ctfassets.net/9sy2a0egs6zh/4zJfzJbG3kTDSk5Wo4RJI1/1b363263141cf629b28155e2625b56c9/mm-logo.svg"
                  alt="metamask"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <button className="btn btn-info " onClick={() => {
                    setActivatingConnector(injected);
                    activate(injected);
                  }}>
                    MetaMask
                  </button>
                </h2>
              </div>
            </div>
            <div className="text-center">
              <figure>
                <img
                  className="h-24"
                  height="100px"
                  width="100px"
                  src="https://docs.walletconnect.com/img/walletconnect-logo.svg"
                  alt="wallet connect"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <button className="btn btn-lg btn-info" onClick={() => {
                    setActivatingConnector(walletconnect);
                    activate(walletconnect);
                  }}>
                    Wallet Connect
                  </button>
                </h2>
              </div>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NetworkButton;
