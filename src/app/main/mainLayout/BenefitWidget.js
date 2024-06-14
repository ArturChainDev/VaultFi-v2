import React, { memo } from 'react';

export const BenefitWidget = () => {
  return (
    <section className="container-sm mt-20 md:pt-20">
      <h2 className=" text-3xl font-semibold uppercase md:text-5xl mb-10 italic">
        BENEFITS OF BUYING VAULTFI IN THE PRE-SALE
      </h2>

      <div className="space-y-3.5 max-w-[800px] mb-16">
        <h6 className="xxl underline font-semibold text-white">Lowest VaultFi Token Price</h6>
        <p>
          During the pre-sale, you can buy VaultFi tokens at the lowest possible price before the token launches on
          centralized and decentralized exchanges.
        </p>
        <p>On top of that, VaultFi pre-sale buyers are eligible for the following FREE VaultFi merchandise…</p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-3 md:w-full">
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/shirt-hoodie-hat-sneekers-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold">
              FREE "OG VaultFi VIP KIT" Hat + T-shirt + Hoodie + Sneakers
            </h3>
            <p className="text-center font-medium ">
              When you buy over $10,000 in VaultFi tokens, you are eligible to receive the COMPLETE "OG VaultFi VIP"
              merchandise: the VaultFi hat, t-shirt, a special hoodie and customized VaultFi sneakers!
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/shirt-hat-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold"> FREE VaultFi T-shirt + Hat</h3>
            <p className="text-center font-medium ">
              When you buy over $1,000 in VaultFi tokens, you are eligible to receive the OG t-shirt and hat.
            </p>
          </div>
          {/* $5000 offer, only in mobile */}
          <div className="flex md:hidden flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/shirt-hoodie-hat-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold">FREE "OG VaultFi" Hat + T-shirt + Hoodie</h3>
            <p className="text-center font-medium ">
              When you buy over $5,000 in VaultFi tokens, you are eligible to receive the "OG VaultFi" merchandise:
              the VaultFi hat, t-shirt, and a special hoodie!
            </p>
          </div>

        </div>
        <div className="hidden md:flex items-center flex-shrink-0 px-10">
          <img loading="lazy" src="tokens/vaultfi.png" className="w-[150px] m-auto" />
        </div>
        <div className="flex flex-col gap-3 md:w-full">
          {/* $1000 offer, only in mobile */}
          <div className="flex md:hidden flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/shirt-hat-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold"> FREE VaultFi T-shirt + Hat</h3>
            <p className="text-center font-medium ">
              When you buy over $1,000 in VaultFi tokens, you are eligible to receive the OG t-shirt and hat.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/shirt-hoodie-hat-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold">FREE "OG VaultFi" Hat + T-shirt + Hoodie</h3>
            <p className="text-center font-medium ">
              When you buy over $5,000 in VaultFi tokens, you are eligible to receive the "OG VaultFi" merchandise:
              the VaultFi hat, t-shirt, and a special hoodie!
            </p>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] lg:h-full lg:min-h-[480px]">
            <img loading="lazy" src="/freebies/hat-white.png" className="mb-5 w-40 md:w-56" />
            <h3 className="mb-2.5 text-lg text-center font-semibold"> FREE VaultFi Hat</h3>
            <p className="text-center font-medium ">
              When you buy over $500 in VaultFi tokens, you are eligible to receive the "OG" hat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
