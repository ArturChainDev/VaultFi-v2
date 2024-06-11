import React from 'react';

const TrueMark = () => {
  return <img src="/assets/checkmark-Vx8p9cc5.png" class="h-11" />;
};
const FalseMark = () => {
  return <img src="/assets/checkmark-Vx8p9cc5.png" class="h-11" />;
};

export const GamblingWidget = () => {
  return (
    <div>
      <div class="flex flex-col gap-2.5 md:gap-5">
        <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
          DISRUPTING THE DEFI SECTOR
        </h3>
        <div class="flex overflow-auto no-scrollbar">
          <div class="flex flex-col gap-1 md:w-full">
            <div class="flex gap-1 md:w-full">
              <div class="w-52 md:w-1/2"></div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <span class="font-medium text-center whitespace-nowrap">
                  VaultFi
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <span class="font-medium text-center whitespace-nowrap">
                  HEX
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <span class="font-medium text-center whitespace-nowrap">
                  AAVE
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <span class="font-medium text-center whitespace-nowrap">
                  OHM
                </span>
              </div>
              <div class="flex flex-col items-center justify-center w-28 py-3 px-5 gap-2.5">
                <span class="font-medium text-center whitespace-nowrap">
                  TIME
                </span>
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium rounded-tl-xl">
                Security Audit
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Economic Audit
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Treasury-backed APY
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Revenue-generating businesses to sustain the APY
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium">
                Doxxed leadership
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <FalseMark />
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                <TrueMark />
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium rounded-bl-xl">
                All-time high Market Cap
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary">
                Starting at $794,550
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $80 billion
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $8 billion
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $4 billion
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                $2 billion
              </div>
            </div>
            <div class="flex gap-1 md:w-full">
              <div class="flex items-center justify-center w-52 md:w-1/2 bg-[#332A6A] font-medium rounded-bl-xl">
                Growth Potential from VaultFi Starting Market Cap of $794,550
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-primary"></div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                Over 100,000x
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                Over 10,000x
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                Over 5,000x
              </div>
              <div class="flex items-center justify-center w-28 py-3 px-5 bg-[#332A6A]">
                Over 2,500x
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
