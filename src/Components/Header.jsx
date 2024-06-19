import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAccount, useDisconnect } from "wagmi";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Header() {
  const { open } = useWeb3Modal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="flex items-center justify-between py-4 px-4 bg-[#19150AB2] w-full h-auto absolute">
      <img
        src={logo}
        className="ml-4 sm:ml-8 w-8 md:w-[10%] lg:w-[5%]"
        alt="Logo"
      />
      <div className="hidden lg:flex items-center justify-center gap-4 sm:gap-9">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2E9B8] cursor-pointer">
          About
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2E9B8] cursor-pointer">
          Presale
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2E9B8] cursor-pointer">
          Airdrop
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2E9B8] cursor-pointer">
          Referral
        </p>
        <div className="bg-[#DAB63C33] mx-4 sm:mx-8 py-2 px-4 sm:py-4 sm:px-7 border-2 border-[rgba(218, 182, 60, 1)]" onClick={open}>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F2E9B8] cursor-pointer">
            CONNECT WALLET
          </p>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#F2E9B8] text-sm sm:text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#19150AB2] flex flex-col items-center gap-4 py-4">
          <p className="text-xl text-[#F2E9B8] cursor-pointer">About</p>
          <p className="text-xl text-[#F2E9B8] cursor-pointer">Presale</p>
          <p className="text-xl text-[#F2E9B8] cursor-pointer">Airdrop</p>
          <p className="text-xl text-[#F2E9B8] cursor-pointer">Referral</p>
          <div
            className="bg-[#DAB63C33] py-2 px-4 border-2 border-[rgba(218, 182, 60, 1)]"
          >
            <p className="text-xl text-[#F2E9B8] cursor-pointer">
              CONNECT WALLET
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
