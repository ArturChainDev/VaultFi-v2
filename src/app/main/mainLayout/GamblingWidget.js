import React from 'react';

const TrueMark = () => {
  return <img src="/assets/images/mark/checkmark.png" className="h-11" />;
};
const FalseMark = () => {
  return <img src="/assets/images/mark/crossmark.png" className="h-11" />;
};

export const GamblingWidget = () => {
  return (
    <div className='flex '>
      <div className="flex flex-col m-auto overflow-auto w-[90vw]  gap-2.5 md:gap-5">
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-5xl">
          DISRUPTING THE DEFI SECTOR
        </h3>
        <div className="flex overflow-auto">
          <div className="flex flex-col gap-1 md:w-full">
            <div className="flex gap-1 md:w-full">
              <div className="w-1/2"></div>
              <div className="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="assets/icons/vaultfi.png" width={50}/>
                <span className="font-medium text-center whitespace-nowrap">
                  VaultFi
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="assets/icons/hex.png" width={50}/>
                <span className="font-medium text-center whitespace-nowrap">
                  HEX
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="assets/icons/aave-logo.png" width={50}/>
                <span className="font-medium text-center whitespace-nowrap">
                  AAVE
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="assets/icons/ohm.png" width={50}/>
                <span className="font-medium text-center whitespace-nowrap">
                  OHM
                </span>
              </div>
              <div className="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <img src="assets/icons/time.png" width={50}/>
                <span className="font-medium text-center whitespace-nowrap">
                  TIME
                </span>
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium rounded-tl-xl">
                Security Audit
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
                x2
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium">
                Economic Audit
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium">
                Treasury-backed APY
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium">
                Revenue-generating businesses to sustain the APY
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium">
                Doxxed leadership
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div className="flex gap-1 w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium rounded-bl-xl">
                All-time high Market Cap
              </div>
              <div className="flex items-center justify-center w-28 overflow-hidden py-3 px-5 bg-primary">
                Starting at $794,550
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $80 billion
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $8 billion
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $4 billion
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $2 billion
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="flex items-center justify-center px-2 w-1/2 bg-[#332A6A] font-medium rounded-bl-xl">
                Growth Potential from VaultFi Starting Market Cap of $794,550
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-primary"></div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] overflow-hidden">
                Over 100,000x
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] overflow-hidden">
                Over 10,000x
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] overflow-hidden">
                Over 5,000x
              </div>
              <div className="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A] overflow-hidden">
                Over 2,500x
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
