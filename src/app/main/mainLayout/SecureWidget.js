import React from 'react';
export const SecureWidget = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h2 className="text-center text-3xl font-extrabold italic uppercase md:text-6xl">

        100% SECURE
      </h2>
      <div className="flex flex-wrap gap-3 md:gap-5 md:flex-nowrap">
        <div className="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7">
          <img src="https://www.battlegroundps.org/wp-content/uploads/2021/02/Clean-Audit.jpg" className="mb-5 w-28 md:w-52" />
          <h3 className="mb-2.5 text-xl text-center font-semibold">
            Economic Audit
          </h3>
          <p className="text-sm text-center font-medium text-white/50">
            VaultFi is the only DeFi protocol that has been peer-reviewed by an international panel consisting of PhDs, CPAs, CFAs, financial analysts, auditors, quantitative analysts, accountants, mathematicians, and financial modelers.
          </p>
        </div>
        <a
          href="#"
          target="_blank"
          className="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7"
        >
          <img src="https://www.fintechfutures.com/files/2021/08/certik.png" className="mb-5 w-16 md:w-28" />
          <h3 className="mb-2.5 text-xl text-center font-semibold">
            Audited by Certik
          </h3>
          <p className="text-sm text-center font-medium text-white/50">
            VaultFi has been fully audited by Certik.
          </p>
        </a>
        <a
          href="#"
          target="_blank"
          className="flex flex-col items-center p-5 rounded-2xl bg-[#332A6A] md:p-7"
        >
          <img src="https://pbs.twimg.com/media/GPZ3ZV8WkAEJZa2?format=jpg&name=medium" className="mb-5 w-16 md:w-28" />
          <h3 className="mb-2.5 text-xl text-center font-semibold">
            Audited by PeckShield
          </h3>
          <p className="text-sm text-center font-medium text-white/50">
            VaultFi has been fully audited by PeckShield.
          </p>
        </a>
      </div>
    </div>
  );
};
