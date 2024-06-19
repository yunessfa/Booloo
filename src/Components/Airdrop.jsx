import bg from "../assets/bgAirDrop.png";

export default function Airdrop() {
  return (
    <div className="w-full bg-black mt-32 relative sm:pb-">
      <img src={bg} className="w-[90%] lg:w-[80%] mx-auto -z-10" />
      <div className="flex flex-col items-center absolute top-[10%] lg:top-[12%] right-0 w-[90%] sm:w-[70%] lg:w-[50%] px-4 sm:px-0">
        <p className="text-[36px] sm:text-[48px] lg:text-[64px] text-[#FFFFFF] text-center">
          $BOLO AIRDROP
        </p>
        <p className="text-[#F2E9B8] text-[16px] sm:text-[20px] lg:text-[24px] text-center mt-4">
          Everyone can grab a tasty $BOLO!
        </p>
        <p className="text-[#F2E9B8] text-[16px] sm:text-[20px] lg:text-[24px] text-center mt-2">
          We’re here to bring a creative meme coin to Blast, aiming to snatch
          the jackpot!
        </p>
        <p className="text-[#F2E9B8] text-[16px] sm:text-[20px] lg:text-[24px] text-center mt-2">
          Claim yours now and add it to your deck.
        </p>
        <p className="text-[#F2E9B8] text-[16px] sm:text-[20px] lg:text-[24px] text-center mt-12">
          Invite friends and earn 10% of their claims
        </p>

        <div className="w-full sm:w-[70%] lg:w-[50%] mt-6">
          <div className="bg-[#DAB63C33] border-2 border-[#DAB63C] h-[34px]">
            <div
              className="bg-[#97FB18] h-[31px]"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-[12px] sm:text-[14px] text-[#E1B400]">
              9000,0000 / 9000,000
            </p>
            <p className="text-[12px] sm:text-[14px] text-[#E1B400]">100%</p>
          </div>
        </div>

        <div className="bg-[#DAB63C66] border-2 border-[#DAB63C] w-[60%] sm:w-[40%] lg:w-[20%] mt-11">
          <p className="text-[#F2E9B8] text-[16px] sm:text-[24px] lg:text-[32px] text-center py-2">
            CHECK CLAIMED
          </p>
        </div>
      </div>
    </div>
  );
}
