import { useState } from "react";
import HeadBG from "./assets/bghead.jpeg";
import BodyBG from "./assets/Body.webp";
import logo from "./assets/logo.gif";
import "./App.css";
import Header from "./Components/Header";
import TotalSupply from "./Components/TotalSupply";
import TotalRaised from "./Components/TotalRaised";
import Refral from "./Components/Refral";
import Airdrop from "./Components/Airdrop";
import Board from "./Components/Board";
import Footer from "./Components/Footer";

function App() {

  return (
    <>
      <div className="bg-black relative">
        <div>
          <Header />
          {/* <w3m-button/> */}
          <div className="">
            <img src={HeadBG} className="w-full" />
            <div className="flex flex-col items-center -mt-[40%] mb-[15%]">
              <img src={logo} className="w-[22%]" />
              <h1 className="text-[#F2E9B8] text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                WE HEIST THE JACKPOT!
              </h1>
              <h1 className="text-[#F2E9B8] text-xl sm:text-2xl md:text-3xl lg:text-5xl">
                Invite your freinds to be a BOOL00
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between lg:mx-[8%] my-[24px] px-4 lg:px-0">
          <div className="w-full lg:w-[50%] mb-8 lg:mb-0">
            <h2 className="text-[#F2E9B8] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]">
              $BOLO
            </h2>
            <p className="text-[#F2E9B8] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] xl:text-[32px] text-left mt-4">
              In the BOOLOO world, everyone will receive an airdrop of $BOLO
              tokens. You can claim your $BOLO by being part of whitelisted
              users from selected partner projects. Additionally, there will be
              numerous giveaways on our Twitter and our partners' social media
              channels, offering even more chances to win. Our information on
              the presale and tokenomics will be out soon. Join us and be part
              of the BOOLOO community to enjoy these exciting opportunities!
            </p>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col items-center">
            <img
              src={BodyBG}
              className="w-[80%] md:w-[60%] lg:w-full"
              alt="Body Background"
            />
            <div className="bg-[#DAB63C33] border-[#DAB63C] border-2 px-4 py-2 mt-4 w-[80%] md:w-[60%] lg:w-[65%]">
              <p className="text-[12px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#F2E9B8] text-center break-all">
                0xcDbe12611F18B43098202d45928c905b34736C06
              </p>
            </div>
          </div>
        </div>
        <TotalSupply />
        <TotalRaised />
        <Refral />
        <Airdrop />
        <Board />
        <Footer />
      </div>
    </>
  );
}

export default App;
