import React from 'react';
const SubBoard = ({ number, title, content, children, url }) => {
  return (
    <div className="p-3 md:col-span-3">
      <div
        className={`${
          number === 6 ? 'bg-primary' : 'bg-[#332A6A]'
        } flex h-full flex-col p-10 items-center rounded-2xl bg-[#332A6A] md:p-7`}
      >
        <div
          className={`${
            number === 6 ? 'bg-[#332A6A]' : 'bg-primary'
          } flex items-center justify-center md:w-6 md:h-6 md:text-lg w-12 h-12 text-xl rounded-full`}
        >
          {number}
        </div>
        <div>
          <h3 className="mb-2.5 text-xl text-center font-semibold">{title}</h3>
          <p className={`${
            number === 6 ? 'text-[#000550] text-xl md:text-md' : 'text-white/90 text-md md:text-md'
          } text-center font-medium`}>
            {content}
          </p>
          <a href='#' className="underline text-primary">{url}</a>
        </div>
      </div>
      {children}
    </div>
  );
};
export const GuideWidget = () => {
  return (
    <div className="my-28">
      <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-5xl">
        HOW TO BUY VAULTFI GUIDE
      </h3>
      <div className="hidden md:grid items-stretch md:grid-cols-12 my-28 ">
        <SubBoard
          content={'Visit our website:'}
          number={1}
          url={"Presale.vault-finance.com"}
        />
        <div></div>
        <SubBoard content={'Enter the amount you want to buy'} number={4} />
        <img src='assets/images/arrow.png' width={60} className='m-auto'/>
        <SubBoard
          content={
            'Confirm the transaction on your wallet, make sure you have enough ETH to cover gas fee'
          }
          number={5}
        />
        <img src='assets/images/arrow.png' width={60} className='m-auto rotate-90 col-start-2 col-end-3'/>
        <img src='assets/images/arrow.png' width={60} className='m-auto -rotate-90 col-start-6 col-end-7'/>
        <img src='assets/images/arrow.png' width={60} className='m-auto rotate-90 col-start-10 col-end-11'/>
        <SubBoard content={'Connect your wallet'} number={2} />
        <img src='assets/images/arrow.png' width={60} className='m-auto'/>
        <SubBoard
          content={'Choose your desired currency to buy with (ETH, USDC, USDT)'}
          number={3}
        />
        <div></div>
        <SubBoard
          content={'Congratulations, you own VaultFi tokens now!'}
          number={6}
        ></SubBoard>
        <p className="text-sm text-center font-medium text-white/90 my-3 col-end-12 col-start-9">
          Note: For USDT & USDC, you need to first approve and then send, which
          means there are 2 transactions that you need to approve.
        </p>
      </div>
      <div className="md:hidden grid items-stretch grid-cols-1 md:grid-cols-3 my-28 ">
        <SubBoard
          content={'Visit our website: Presale.vault-finance.com'}
          number={1}
        />
        <img src='assets/images/arrow.png' width={60} className='rotate-90 m-auto'/>
        <SubBoard content={'Connect your wallet'} number={2} />
        <img src='assets/images/arrow.png' width={60} className='rotate-90 m-auto'/>
        <SubBoard
          content={'Choose your desired currency to buy with (ETH, USDC, USDT)'}
          number={3}
        />
        <img src='assets/images/arrow.png' width={60} className='rotate-90 m-auto'/>
        <SubBoard content={'Enter the amount you want to buy'} number={4} />
        <img src='assets/images/arrow.png' width={60} className='rotate-90 m-auto'/>
        <SubBoard
          content={
            'Confirm the transaction on your wallet, make sure you have enough ETH to cover gas fee'
          }
          number={5}
        />
        <img src='assets/images/arrow.png' width={60} className='rotate-90 m-auto'/>
        <SubBoard
          content={'Congratulations, you own VaultFi tokens now!'}
          number={6}
        ></SubBoard>
      </div>
    </div>
  );
};
