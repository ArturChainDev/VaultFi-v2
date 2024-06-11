import React from 'react';
export const TeammateWidget = () => {
  return (
    <div class="p-10 md:flex md:flex-col">
      <div class="">
        <h3 class="text-center text-xl text-gold font-extrabold uppercase">
          VAULTFI TOKENOMICS
        </h3>
        <h2 class="mb-4 pb-2 text-uppercase text-6xl">
          Read about the team <br />
          behind Pioneering DeFi 3.0
        </h2>
      </div>
      <div class="md:grid md:grid-cols-2">
        <div class="col-md-6 col-lg-5 p-10">
          <div class="flex flex-col items-center">
            <div class="p-4">
              <img
                src="assets/images/avatars/brian-hughes.jpg"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h3 class="text-center text-2xl text-gold font-extrabold uppercase">
              Matthias Mazur
            </h3>
            <h5 className="py-4 text-center text-xl">
              Co-Founder. Fully doxxed.
            </h5>
            <p className="text-left text-xl">
              Matthias Mazur is serial internet entrepreneur, author investor
              and founder of CoinRock Ventures, that builds and incubates crypto
              and Web3 projects, with 17 years of experience in building,
              acquiring, growing and selling digital businesses.
            </p><br/>
            <p className="text-left text-xl">
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
        <div class="col-md-6 col-lg-5 p-10">
          <div class="flex flex-col items-center">
            <div class="p-4">
              <img
                src="/assets/images/avatars/brian-hughes.jpg"
                style={{ borderRadius: '50%' }}
              />
            </div>
            <h3 class="text-center text-2xl text-gold font-extrabold uppercase">
              CaiusinabarreL
            </h3>
            <h5 className=" py-4 text-center text-xl">Co-Founder</h5>
            <p className="text-left text-xl">
              Caiusinabarrel is a seasoned management consultant whose
              experience at a Big 4 consulting firm spans across commercial due
              diligence, mergers and acquisitions, digital transformation,
              strategic growth, and project management office operations.
            </p><br/>
            <p className="text-left text-xl">
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
