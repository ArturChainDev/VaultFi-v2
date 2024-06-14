import React, { memo } from 'react';
export const TokenomicWidget = () => {
  return (
    <section className="container mt-20 md:pt-20 text-center" id="tokenomics">
      <img loading="lazy" src="/bg/tokenomics-desktop.png" alt="" className="hidden md:block mx-auto" />
      <img loading="lazy" src="/bg/tokenomics-mobile.png" alt="" className="md:hidden mx-auto" />
    </section>
  );
};
