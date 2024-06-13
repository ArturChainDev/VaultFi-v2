import React from 'react';
export const TeammateWidget = () => {
  return (
    <div className="p-3 md:py-10 md:flex md:flex-col text-white/90">
      <div className="flex flex-col md:items-start items-center">
        <h3 className="md:text-left text-center text-xl text-primary font-semibold uppercase pb-10">
          MEET THE TEAM BEHIND VAULTFINANCE
        </h3>
        <h3 className="text-center text-3xl font-extrabold italic uppercase md:text-5xl md:text-left">
          Read about the team <br />
          behind Pioneering DeFi 3.0
        </h3>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-10">
        <div className="col-md-6 col-lg-5 md:pt-10 pt-14">
          <div className="flex flex-col md:items-start items-center">
            <div className="px-0 py-4 md:px-4">
              <img
                src="assets/images/avatars/Matthias-Mazur.png"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h3 className="text-center text-2xl md:text-4xl text-primary font-black uppercase">
              Matthias Mazur
            </h3>
            <h5 className="py-4 text-center text-xl">
              Co-Founder. Fully doxxed.
            </h5>
            <p className="md:text-left text-center text-md">
              Matthias Mazur is serial internet entrepreneur, author investor
              and founder of CoinRock Ventures, that builds and incubates crypto
              and Web3 projects, with 17 years of experience in building,
              acquiring, growing and selling digital businesses.
            </p>
            <br />
            <p className="md:text-left text-center text-md">
              He has been involved in digital marketing since the early 2000s,
              and has built over a dozen internet-based businesses which have
              collectively generated over $200 million in revenue since retiring
              from professional tennis in 2007. He is retired financially, and
              currently oversees a portfolio business that generated $30
              million/year with over 150 employees and staff across all
              companies.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 md:pt-10 pt-14">
          <div className="flex flex-col md:items-start items-center">
            <div className="px-0 py-4 md:px-4">
              <img
                src="/assets/images/avatars/CaiusinabarreL.png"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h3 className="text-center text-2xl md:text-4xl text-primary font-black uppercase">
              CaiusinabarreL
            </h3>
            <h5 className="py-4 text-center text-xl">Co-Founder</h5>
            <p className="md:text-left text-center text-md">
              Caiusinabarrel is a seasoned management consultant whose
              experience at a Big 4 consulting firm spans across commercial due
              diligence, mergers and acquisitions, digital transformation,
              strategic growth, and project management office operations.
            </p>
            <br />
            <p className="md:text-left text-center text-md">
              With experience in guiding Fortune 500 companies and startups
              alike, he has established himself as a trusted strategist with a
              deep understanding of Web3, portfolio management, quantitative
              analysis, digital assets, and a deep understanding of various Web3
              narratives, which has led to the cultivation of a highly
              successful portfolio and strategic investments in Web3 and DeFi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
