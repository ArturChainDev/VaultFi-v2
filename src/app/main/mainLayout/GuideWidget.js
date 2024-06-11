import React from 'react';
const SubBoard = ({ number, title, content, children }) => {
  return (
    <div className="p-3">
      <div
        className={`${
          number === 6 ? 'bg-primary' : 'bg-[#332A6A]'
        } flex h-full flex-col p-10 items-center rounded-2xl bg-[#332A6A] md:p-7`}
      >
        <div
          className={`${
            number === 6 ? 'bg-[#332A6A]' : 'bg-primary'
          } w-6 rounded-full`}
        >
          {number}
        </div>
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
      <h3 class="text-center text-3xl font-extrabold italic uppercase md:text-5xl">
        HOW TO BUY VAULTFI GUIDE
      </h3>
      <div className="hidden md:grid items-stretch grid-cols-1 md:grid-cols-3 my-28 ">
        <SubBoard
          content={'Visit our website: Presale.vault-finance.com'}
          number={1}
        />
        <SubBoard content={'Enter the amount you want to buy'} number={4} />
        <SubBoard
          content={
            'Confirm the transaction on your wallet, make sure you have enough ETH to cover gas fee'
          }
          number={5}
        />
        <SubBoard content={'Connect your wallet'} number={2} />
        <SubBoard
          content={'Choose your desired currency to buy with (ETH, USDC, USDT)'}
          number={3}
        />
        <SubBoard
          content={'Congratulations, you own VaultFi tokens now!'}
          number={6}
        ></SubBoard>
        <p class="text-sm text-center font-medium text-white/50 my-3 col-end-4 col-start-3">
          Note: For USDT & USDC, you need to first approve and then send, which
          means there are 2 transactions that you need to approve.
        </p>
      </div>
      <div className="md:hidden grid items-stretch grid-cols-1 md:grid-cols-3 my-28 ">
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
            'Confirm the transaction on your wallet, make sure you have enough ETH to cover gas fee'
          }
          number={5}
        />
        <SubBoard
          content={'Congratulations, you own VaultFi tokens now!'}
          number={6}
        ></SubBoard>
      </div>
    </div>
  );
};
