import React ,{memo} from 'react';
export const SecureWidget = () => {
  return (
    <section className="container mt-20 md:pt-20">
      <div className="flex flex-col gap-5 md:gap-10 ">
        <h2 className="text-center text-3xl mb-5 font-semibold uppercase md:text-5xl italic">
          {" "}
          2 Security Audits.
          <br className="md:hidden flex"/> 1 Economic Audit.{" "}
        </h2>
        <div className="flex flex-wrap gap-3 md:gap-5 md:flex-nowrap">
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] md:p-7 lg:w-3/5">
            <div className="md:h-[180px] flex items-center">
              {" "}
              <img loading="lazy" src="/bg/Clean-Audit.png" className="mb-5 w-36 md:w-56" />
            </div>
            <h3 className="mb-2.5 text-xl text-center font-semibold">Economic Audit</h3>
            <p className=" text-center font-medium  family-poppins">
              VaultFi is the only DeFi protocol that has been peer-reviewed by some of the most accomplished names in the finance and consulting world: an international independent panel consisting of PhDs, CPAs, CFAs, financial analysts, auditors, quantitative analysts, accountants, mathematicians, and financial modelers - including current and former members from KPMG, JPMorgan Chase, PwC, Ernst & Young, Deloitte, Yale University, and others.

            </p>
            <div className="flex flex-wrap gap-4 items-end justify-center pt-10">
              <img loading="lazy" src="/bg/bakertilly.png" alt="" className="h-8" />
              <img loading="lazy" src="/bg/jpmorganchase.png" alt="" className="h-5" />
              <img loading="lazy" src="/bg/deloitte.png" alt="" className="h-5" />
              <img loading="lazy" src="/bg/ey.png" alt="" className="h-8" />
              <img loading="lazy" src="/bg/kpmg.png" alt="" className="h-8" />
              <img loading="lazy" src="/bg/pwc.png" alt="" className="h-8" />
              <img loading="lazy" src="/bg/yale.png" alt="" className="h-8" />
            </div>
          </div>
          <div className="flex flex-col items-center p-5 rounded-2xl bg-[var(--purple)] md:pt-10 md:p-3 lg:w-1/5 w-full h-auto">
            <div className="md:h-[200px] md:pt-6 md:pb-10 flex items-center">
              <img loading="lazy" src="/bg/certik.png" className="mb-5 w-36 md:w-40" />
            </div>
            <h3 className="mb-2.5 md:pt-9 text-xl text-center font-semibold">Audited by Certik</h3>
            <p className=" text-center font-medium  family-poppins">VaultFi has been fully audited by Certik.</p>
          </div>
          <div className="flex flex-col items-center  p-5 rounded-2xl bg-[var(--purple)] md:pt-10 md:p-3 lg:w-1/5 w-full h-auto">
            <div className="md:h-[200px]  md:pt-6 md:pb-10 flex items-center">
              <img loading="lazy" src="/bg/peckshield.png" className="mb-5 h-14 block mx-auto" />{" "}
            </div>
            <h3 className="mb-2.5 md:pt-8 text-xl text-center font-semibold"> Audited by PeckShield </h3>
            <p className=" text-center font-medium  family-poppins">
              VaultFi has been fully audited by PeckShield.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};