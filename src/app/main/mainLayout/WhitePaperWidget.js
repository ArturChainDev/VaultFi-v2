import React from 'react';
export const WhitePaperWidget = () => {
  return (
    <section className="container-sm mt-20 md:pt-20">
    <div className="flex flex-col items-center md:flex-row md:justify-between gap-6 gap-y-20">
      <div className="md:w-6/12 space-y-5">
        <h3 className="text-3xl mb-5 md:text-5xl font-semibold uppercase text-white italic ">VAULTFI WHITEPAPER</h3>
        <p>
          Reading the VaultFinance Whitepaper is a great way to learn more about the unique VaultFi vision,
          roadmap and how the Vault system works. It highlights the groundbreaking innovations and explains in
          detail how it stands out from other crypto projects.
        </p>
        <a href="https://docs.vault-finance.com" target="_blank" className="btn w-fit !px-10 !py-5 !mt-12">
          ACCESS THE WHITEPAPER
        </a>
      </div>
      <div className="md:w-5/12">
        <img src="/bg/whitepaper.png" alt="" />
      </div>
    </div>
  </section>
  );
};
