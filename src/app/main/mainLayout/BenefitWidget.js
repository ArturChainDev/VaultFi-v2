import React from 'react';

const BenefitImage = ({ src }) => {
  return <img src={src} className="mb-5 w-36 md:w-48" />;
};

export const BenefitWidget = () => {
  return (
    <div className="flex flex-col gap-2.5 md:gap-10 my-20">
      <h3 className="text-center align-center text-3xl font-extrabold italic uppercase md:text-5xl">
        BENEFITS OF BUYING VAULTFI IN THE PRE-SALE
      </h3>
      <h3 className="mb-2.5 text-2xl text-center font-semibold">
        Lowest VaultFi Token Price
      </h3>
      <p className="text-md max-w-[820px] m-auto px-4 md:px-0 text-center font-medium text-white/90">
        During the pre-sale, you can buy VaultFi tokens at the lowest possible
        price before the token launches on centralized and decentralized
        exchanges. On top of that, VaultFi pre-sale buyers are eligible for the
        following FREE VaultFi merchandise…
      </p>
      <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
        <div className="flex flex-col gap-3 md:w-full">
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#332A6A] md:h-full">
            <BenefitImage
              src={
                '/assets/images/benefit/T-shirt-hoodie-hat-sneekers-blue.png'
              }
            />
            <h3 className="mb-2.5 text-xl text-center font-semibold">
              FREE "OG VaultFi VIP KIT" Hat + T-shirt + Hoodie + Sneakers
            </h3>
            <p className="text-md text-center font-medium text-white/70">
              When you buy over $10,000 in VaultFi tokens, you are eligible to
              receive the COMPLETE "OG VaultFi VIP" merchandise: the VaultFi
              hat, t-shirt, a special hoodie and customized VaultFi sneakers!
            </p>
          </div>
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#332A6A] md:h-full">
            <BenefitImage
              src={'/assets/images/benefit/T-shirt-hoodie-hat-blue.png'}
            />
            <h3 className="mb-2.5 text-xl text-center font-semibold">
              FREE "OG VaultFi" Hat + T-shirt + Hoodie
            </h3>
            <p className="text-md text-center font-medium text-white/70">
              When you buy over $5,000 in VaultFi tokens, you are eligible to
              receive the "OG VaultFi" merchandise: the VaultFi hat, t-shirt,
              and a special hoodie!
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center flex-shrink-0 px-10">
          <img src="/assets/images/tokens/token.svg" className="w-[150px]" />
        </div>
        <div className="flex flex-col gap-3 md:w-full">
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#332A6A] md:h-full">
            <BenefitImage src={'/assets/images/benefit/T-shirt-hat-blue.png'} />
            <h3 className="mb-2.5 text-xl text-center font-semibold">
              {' '}
              FREE VaultFi T-shirt + Hat{' '}
            </h3>
            <p className="text-md text-center font-medium text-white/70">
              When you buy over $1,000 in VaultFi tokens, you are eligible to
              receive the OG t-shirt and hat.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 rounded-2xl bg-[#332A6A] md:h-full">
            <BenefitImage src={'/assets/images/benefit/Hat-blue.png'} />
            <h3 className="mb-2.5 text-xl text-center font-semibold">
              FREE VaultFi Hat
            </h3>
            <p className="text-md text-center font-medium text-white/70">
              When you buy over $500 in VaultFi tokens, you are eligible to
              receive the "OG" hat.
            </p>
          </div>
        </div>
      </div>
      <p className="text-lg text-center font-medium text-white">
        Note: VaultFi will cover shipping & handling
      </p>
    </div>
  );
};
