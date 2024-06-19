import Coins from "../assets/Coins.webp";
import CardBg from "../assets/CardBg.png";

export default function TotalRaised() {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between mx-[4%] lg:mx-[8%] py-8 pt-[10%]">
      <div className="w-full 2xl:w-[40%] xl:w-[30%] md:w-[50%]">
        <img
          src={Coins}
          alt=""
        />
      </div>

      <div className="relative w-full lg:w-auto mt-8 lg:mt-0">
        <img
          src={CardBg}
          className=" w-full lg:w-[692px] h-[499px] -z-50"
          alt="Card Background"
        />
        <div className="absolute top-2 w-full">
          <div className="flex flex-col items-center">
            <p className="text-white text-[32px] sm:text-[48px] lg:text-[64px] text-center mx-auto">
              TOTAL RAISED
            </p>
            <p className="text-[#E1B400] text-[24px] sm:text-[28px] lg:text-[32px]">
              58.4 ETH
            </p>

            <div className="  hidden md:flex   items-center mt-4">
              <div className="flex gap-4 lg:gap-8 mb-0">
                <p className="text-[#F2E9B8] text-[16px] sm:text-[18px] lg:text-[20px] -ml-[20%]">
                  GUARANTEED
                </p>
                <p className="text-[#E1B400] text-[16px] sm:text-[18px] lg:text-[20px]">
                  50 ETH
                </p>
              </div>
              <div className="flex gap-8">
                <p className="text-[#F2E9B8] text-[16px] sm:text-[18px] lg:text-[20px]">
                  OVER SUBSCRIPTION
                </p>
                <p className="text-[#E1B400] text-[16px] sm:text-[18px] lg:text-[20px]">
                  120 ETH
                </p>
              </div>
            </div>

            <div className="w-[80%] bg-[#DAB63C33] border-2 border-[#DAB63C] h-[34px] mt-4">
              <div
                className="bg-[#DAB63C99] h-[31px]"
                style={{ width: "45%" }}
              ></div>
            </div>

            <div className="w-full flex justify-around items-center mt-[24px] gap-4 lg:gap-0">
              <div className="flex items-center justify-between px-4 bg-[#DAB63C0D] border-2 border-[#DAB63C] w-[30%] py-2">
                <p className="text-[#F2E9B8] text-[24px] sm:text-[28px] lg:text-[32px]">
                  0.5
                </p>
                <p className="text-[#F2E9B8] text-[24px] sm:text-[28px] lg:text-[32px]">
                  ETH
                </p>
              </div>
              <div className="bg-[#DAB63C66] border-2 border-[#DAB63C] w-[25%] py-2">
                <p className="text-[#97FB18] text-[24px] sm:text-[28px] lg:text-[32px] text-center">
                  DEPOSIT
                </p>
              </div>
            </div>

            <div className="flex  items-center justify-around w-full mt-4 gap-8 lg:gap-0">
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <p className="text-[#F2E9B8] text-[20px] sm:text-[22px] lg:text-[24px]">
                  MIN DEPOSIT
                </p>
                <p className="text-[#E1B400] text-[24px] sm:text-[28px] lg:text-[32px]">
                  0.03 ETH
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <p className="text-[#F2E9B8] text-[20px] sm:text-[22px] lg:text-[24px]">
                  MAX DEPOSIT
                </p>
                <p className="text-[#E1B400] text-[24px] sm:text-[28px] lg:text-[32px]">
                  3 ETH
                </p>
              </div>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <p className="text-[#F2E9B8] text-[20px] sm:text-[22px] lg:text-[24px]">
                  HARD CAP
                </p>
                <p className="text-[#E1B400] text-[24px] sm:text-[28px] lg:text-[32px]">
                  120 ETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
