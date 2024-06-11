import React from 'react';
const SubBoard = ({ number, title, content, children }) => {

  return (
    <div>
      <div className={`${number === 6 ? "bg-primary" : "bg-[#332A6A]"} flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7`}>
        <div className={`${number === 6 ? "bg-[#332A6A]" : "bg-primary"} w-6 rounded-full`}>{number}</div>
        <div>
          <h3 className="mb-2.5 text-xl text-center font-semibold">{title}</h3>
          <p className="text-sm text-center font-medium text-white/50">
            {content}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};
export const GuideWidget = () => {
  return (
    <div className="my-28">
      <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-6xl">
        HOW TO BUY VAULTFI GUIDE
      </h3>
      <div className="grid grid-cols-3 gap-20 my-28 px-10">
        <SubBoard
          content={'Visit our website: Presale.vault-finance.com'}
          number={1}
        />
        <SubBoard content={'Connect your wallet'} number={2} />
        <SubBoard
          content={'Choose your desired currency to buy with (ETH, USDC, USDT)'}
          number={3}
        />
        <SubBoard content={'Enter the amount you want to buy'} number={4} />
        <SubBoard
          content={
            ' Confirm the transaction on your wallet, make sure you have enough ETH to cover gas fee'
          }
          number={5}
        />
        <SubBoard
          content={'Congratulations, you own VaultFi tokens now!'}
          number={6}
        >
          <p class="text-sm text-center font-medium text-white/50 my-3">
            Note: For USDT & USDC, you need to first approve and then send,
            which means there are 2 transactions that you need to approve.
          </p>
        </SubBoard>
      </div>
    </div>
  );
};
