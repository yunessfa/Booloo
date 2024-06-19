import Donat from "../assets/Donat.webp";

export default function TotalSupply() {
  return (
    <div className="flex flex-wrap items-start justify-center lg:justify-start lg:ml-[8%] relative pb-8 px-4 lg:px-0 mt-48">
      <div className="flex flex-col items-start justify-center gap-8 w-full lg:w-[60%]">
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">Total Supply</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#F2E9B8]">690,000,000 $BOLO</p>
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">51% Presale</p>
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">30% Liquidity Treasury</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#F2E9B8]">
            Liquidity, Incentive, Partnership, Contents, Growth
          </p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">9% Community Rewards</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#F2E9B8]">
            Referral bonus + Active Communities Bonus
          </p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">5% Marketing</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#F2E9B8]">
            Campaigns, Grow awareness and community members
          </p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl md:text-5xl text-[#E1B400]">5% AIRDROP</p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] text-[#F2E9B8]">
            TO HOLDERS OF PARTNER NFTs
          </p>
        </div>
      </div>
      <img src={Donat} className="w-[70%] md:w-[50%] lg:w-[35%] mt-8 lg:mt-0 lg:absolute lg:right-[10%]" alt="Donat" />
    </div>
  );
}
