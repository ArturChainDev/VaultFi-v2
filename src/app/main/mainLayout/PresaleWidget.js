import React from 'react';
export const PressaleWidget = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-8">
      <div className="flex flex-col gap-2.5  md:flex-row md:items-start">
        <h1 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl md:text-left md:w-3/5">
          Pioneering the New Era of DeFi 3.0.
        </h1>
        <p className="text-center text-sm md:text-left md:text-xl md:w-2/5 font-light">
          <span className="text-white/60">
            VaultFinance is revolutionizing DeFi (Decentralized Finance), with
            APY backed by revenue-generating businesses.
          </span>
          <span className="font-semibold">
            &nbsp; VaultFi has undergone 2 security audits, 1 economic audit,
            and is led by a doxxed team.
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
          <div className="flex flex-col gap-2.5 md:gap-5 md:flex-row md:items-start">
            <div className="flex flex-col gap-5 md:w-1/3">
              <div className="bg-[#080531] rounded-2xl" id="presale-form">
                <div className="p-5 md:p-8 space-y-4">
                  <div className="space-y-3">
                    <p className="font-bold uppercase text-fire text-center italic text-[48px]/[55px] w-full truncate bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90 text-transparent bg-clip-text">
                      $547,140
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs text-white/50">
                        91.19% of minimum goal raised
                      </p>
                      <div className="relative h-2 overflow-hidden rounded-xl bg-white/20">
                        <div
                          className="absolute inset-0 h-full bg-gradient-to-r from-[#FFD600] to-[#FFEC86]/90"
                          style={{ width: '91.19%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-right text-white/50">
                        $600,000
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-semibold text-center">
                        🔥 2631 Visitors in the last 24h
                      </p>
                      <p className="text-sm text-center text-white/50">
                        Listing price = $0.001
                      </p>
                    </div>
                    <hr className="border-white/10" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2.5">
                    <p className="text-sm text-center text-white/50">
                      1 VaultFi token = $0.0008
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col w-full gap-1.5">
                      <div className="flex items-center gap-4">
                        <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
                          <button className="p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 bg-white/10">
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/eth.svg"
                                alt="ETH"
                                className="object-contain w-4 h-4"
                              />
                            </div>
                            ETH
                          </button>
                          <button className="p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 bg-white/10">
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/usdt.svg"
                                alt="USDT"
                                className="object-contain w-4 h-4"
                              />
                              <img
                                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                                src="assets/images/chains/ethereum.svg"
                              />
                            </div>
                            USDT
                          </button>
                          <button className="p-2.5 flex gap-2.5 items-center justify-center hover:opacity-75 bg-primary">
                            <div className="relative flex">
                              <img
                                src="assets/images/tokens/usdc.webp"
                                alt="USDC"
                                className="object-contain w-4 h-4"
                              />
                              <img
                                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border-1 border-primary"
                                src="assets/images/chains/ethereum.svg"
                              />
                            </div>
                            USDC
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="from-token"
                        className="text-[11px] font-semibold uppercase text-white/50"
                      >
                        Amount in <span className="text-primary">USDC</span> you
                        pay
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          inputMode="numeric"
                          className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                          <img
                            src="assets/images/tokens/usdc.webp"
                            alt="USDC"
                            className="object-contain w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="from-token"
                        className="flex flex-wrap items-center text-[11px] font-semibold uppercase text-white/50"
                      >
                        <p className="my-auto">VaultFi token amount you receive</p>
                        <span
                          className="flex gap-1 ml-1"
                          style={{ color: 'rgb(253, 87, 247)' }}
                        >
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="opacity-50"
                          >
                            <path
                              d="M7.9987 1.92188C4.3187 1.92188 1.33203 4.90854 1.33203 8.58854C1.33203 12.2685 4.3187 15.2552 7.9987 15.2552C11.6787 15.2552 14.6654 12.2685 14.6654 8.58854C14.6654 4.90854 11.6787 1.92188 7.9987 1.92188ZM8.66536 13.2552H7.33203V11.9219H8.66536V13.2552ZM10.0454 8.08854L9.44536 8.70187C8.96536 9.18854 8.66536 9.58854 8.66536 10.5885H7.33203V10.2552C7.33203 9.52187 7.63203 8.85521 8.11203 8.36854L8.9387 7.52854C9.18536 7.28854 9.33203 6.95521 9.33203 6.58854C9.33203 5.85521 8.73203 5.25521 7.9987 5.25521C7.26536 5.25521 6.66536 5.85521 6.66536 6.58854H5.33203C5.33203 5.11521 6.52536 3.92187 7.9987 3.92187C9.47203 3.92187 10.6654 5.11521 10.6654 6.58854C10.6654 7.17521 10.4254 7.70854 10.0454 8.08854Z"
                              fill="white"
                            ></path>
                          </svg>
                        </span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          inputMode="numeric"
                          className="w-full p-5 pr-16 bg-transparent border rounded-lg border-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-5">
                          <img
                            src="/assets/images/tokens/token.svg"
                            alt="token"
                            className="object-contain w-6 h-6"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex w-6 mb-1.5">
                      <img
                        src="/assets/images/tokens/token.svg"
                        alt="token"
                        className="h-full"
                      />
                    </div>
                    <div className="text-center text-xs text-white/50">
                      In order to buy VaultFi tokens, please confirm the
                      transaction in your wallet. You may need to check the
                      wallet app if you're on mobile.
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-full px-3 py-5 font-semibold text-white uppercase rounded-lg bg-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed">
                    <span className="">Connect Wallet</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex md:w-2/3">
              <div className="flex flex-col items-center md:gap-10 w-full p-0 md:pb-14 md:p-7 bg-[#080531] rounded-2xl">
                <div className="flex w-full p-3 md:p-0 no-scrollbar">
                  <div className="flex w-fit md:w-full flex-shrink-0 py-1">
                    <div id="chart" className="flex relative">
                      <img
                        src="/assets/images/charts/VaultFiChart.png"
                        className="w-full h-auto"
                      />
                    </div>
                    <div
                      id="tooltip"
                      className="fixed p-2 pointer-events-none hidden -translate-x-1/2 -translate-y-full"
                      style={{
                        display: 'none',
                        left: '976.365px',
                        top: '243.08px',
                      }}
                    >
                      <div className="bg-white/30 rounded-md backdrop-blur-sm shadow-md p-2 py-1 md:p-2.5 -ml-0.5">
                        <p
                          id="tooltip-text"
                          className="text-white text-[10px] md:text-sm text-center"
                        >
                          $1,142,210
                        </p>
                        <p
                          id="tooltip-label"
                          className="mt-0.6 text-white/50 text-[10px] md:text-sm text-center"
                        >
                          Revenue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex items-center md:justify-center gap-3 md:gap-7 w-full p-3 md:p-0">
                  <div className="flex items-center gap-1 md:gap-3">
                    <div className="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#FF00FB]"></div>
                    <div className="text-[10px] md:text-sm font-medium">Users</div>
                  </div>
                  <div className="flex items-center gap-1 md:gap-3">
                    <div className="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#FFC700]"></div>
                    <div className="text-[10px] md:text-sm font-medium">
                      Revenue
                    </div>
                  </div>
                  <div className="flex items-center gap-1 md:gap-3">
                    <div className="h-1.5 w-1.5 md:h-3 md:w-3 rounded-full bg-[#8554FB]"></div>
                    <div className="text-[10px] md:text-sm font-medium">
                      Boxes opened
                    </div>
                  </div>
                  <div className="flex md:hidden items-center gap-1 ml-auto">
                    <div className="text-[10px] md:text-sm font-medium">Scroll</div>
                    <svg
                      width="13"
                      height="9"
                      viewBox="0 0 13 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.8536 4.85355C13.0488 4.65829 13.0488 4.34171 12.8536 4.14645L9.67157 0.964466C9.47631 0.769204 9.15973 0.769204 8.96447 0.964466C8.7692 1.15973 8.7692 1.47631 8.96447 1.67157L11.7929 4.5L8.96447 7.32843C8.7692 7.52369 8.7692 7.84027 8.96447 8.03553C9.15973 8.2308 9.47631 8.2308 9.67157 8.03553L12.8536 4.85355ZM0 5H12.5V4H0V5Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
