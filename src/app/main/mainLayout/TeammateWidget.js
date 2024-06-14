import React, { memo } from 'react';
export const TeammateWidget = () => {
  return (
    <section className="container-sm mt-20 md:mt-32 text-center team">
      <div className="md:mb-5 pb-5 text-center md:text-start">
        <span className="font-extrabold gold-text uppercase family-rubik text-xl">VaultFi Team</span>
        <h3 className="text-3xl md:text-5xl font-semibold uppercase text-white italic">
          MEET THE TEAM BEHIND VAULTFINANCE
        </h3>{" "}
      </div>
      <div className="flex flex-col items-start md:flex-row gap-20 lg:gap-40 mt-10 lg:mt-20">
        <div className="md:w-1/2 lg:w-2/5">
          <div className="user_card text-center md:text-start">
            <div className="user_holder flex justify-center md:justify-start">
              <img loading="lazy" src="/bg/Matthias-Mazur.png" />
            </div>
            <h3 className="font-bold text-3xl mt-6 mb-2 gold-text family-rubik">Matthias Mazur</h3>
            <h5 className="mb-8">Co-Founder. Fully doxxed.</h5>
            <p className="mb-4">
              Matthias Mazur is serial internet entrepreneur, author investor and founder of CoinRock Ventures, that
              builds and incubates crypto and Web3 projects, with 17 years of experience in building, acquiring,
              growing and selling digital businesses.
            </p>
            <p>
              He has been involved in digital marketing since the early 2000s, and has built over a dozen
              internet-based businesses which have collectively generated over $200 million in revenue since
              retiring from professional tennis in 2007. He is retired financially, and currently oversees a
              portfolio business that generated $30 million/year with over 150 employees and staff across all
              companies.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/5">
          <div className="user_card  text-center md:text-start">
            <div className="user_holder flex justify-center md:justify-start">
              <img loading="lazy" src="/bg/CaiusinabarreL.png" className="rounded-full" />
            </div>
            <h3 className="font-bold text-3xl mt-6 mb-2 gold-text family-rubik">Caiusinabarrel</h3>
            <h5 className="mb-8">Co-Founder</h5>
            <p className="mb-4">
              Caiusinabarrel is a seasoned management consultant whose experience at a Big 4 consulting firm spans
              across commercial due diligence, mergers and acquisitions, digital transformation, strategic growth,
              and project management office operations.
            </p>
            <p>
              With experience in guiding Fortune 500 companies and startups alike, he has established himself as a
              trusted strategist with a deep understanding of Web3, portfolio management, quantitative analysis,
              digital assets, and a deep understanding of various Web3 narratives, which has led to the cultivation
              of a highly successful portfolio and strategic investments in Web3 and DeFi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
