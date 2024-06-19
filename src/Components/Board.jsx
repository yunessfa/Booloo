import CardBg from "../assets/CardBg.png";
import HalfDonat from "../assets/HalfDonat.webp";

export default function Board() {
  return (
    <div className="relative">
      <img
        src={HalfDonat}
        className="hidden  md:block w-[20%] md:w-[13%] absolute top-6  md:left-0"
      />
      <div className="relative mx-auto mt-48 w-[90%] md:w-[60%] lg:w-[40%]">
        <img src={CardBg} className="w-full" />
        <div className="absolute top-0 w-full">
          <div className="flex items-center justify-around mx-auto my-4 w-[90%] text-center">
            <p className="text-[20px] md:text-[24px] lg:text-[32px] text-[#E1B400] ">
              Rank
            </p>
            <p className="text-[20px] md:text-[24px] lg:text-[32px] text-[#E1B400] ">
              Wallet
            </p>
            <p className="text-[20px] md:text-[24px] lg:text-[32px] text-[#E1B400] ">
              Users Invited
            </p>
            <p className="text-[20px] md:text-[24px] lg:text-[32px] text-[#E1B400] ">
              Ref Reward
            </p>
          </div>

          {Array(6)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="flex  items-center justify-around w-[90%] mx-auto bg-[#DAB63C33] my-4 border-2 border-[#DAB63C]"
              >
                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#F2E9B8] text-center w-[100%] sm:w-[10%] sm:ml-10 ">
                  912
                </p>
                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#97FB18] text-center w-[100%] sm:w-[25%] ">
                  YOU
                </p>
                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#F2E9B8] text-center w-[100%] sm:w-[25%] ">
                  3
                </p>
                <p className="text-[16px] md:text-[20px] lg:text-[24px] text-[#F2E9B8] text-center w-[100%] sm:w-[25%] ">
                  11,112
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
