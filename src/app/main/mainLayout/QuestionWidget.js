import React, { useState } from 'react';
import { QuestionBoard } from './QuestionBoard'

export const QuestionWidget = () => {
  const [selectNumber, setSelectNumbr] = useState(0);
  const [isDropDown, setDropDown] = useState(false);
  const onClick = (id) => {
    if(selectNumber === id){
        setDropDown(!isDropDown)
    } else {
        setSelectNumbr(id);
        setDropDown(true);
    }
  }
  return (
    <div class="container">
      <div class="md:grid md:grid-cols-2">
        <div class="col-lg-5">
          <div class="flex flex-col">
            <div class="sec_head mt-3 animation-element bounce-up centered-mobile mb-md-5 in-view">
              <span class="text-uppercase text-gold text-2xl">
                Frequently asked questions
              </span>
              <h2 class="mb-4 pb-2 text-uppercase text-4xl">
                Have any questions?
                <br />
                Find answers here.
              </h2>
              <a
                href=" https://t.me/VaultFiVerify"
                target="_blank"
                class="text-uppercase p-4 border-2 text-2xl border-gold text-gold"
              >
                Join the telegram
              </a>
            </div>
            <div class="text-md-start text-center animation-element bounce-up centered-mobile d-none d-md-block in-view">
              <a
                class="social_icon me-4"
                href="https://twitter.com/vaultfi_io"
                target="_blank"
              >
                <img src="images/x.svg" alt="X" />
              </a>
              <a
                class="social_icon"
                href=" https://t.me/VaultFiVerify"
                target="_blank"
              >
                <img src="images/telegram.svg" alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
        <div class="">
          <QuestionBoard
            id={1}
            onClick={(id, isDropDown) => onClick(id, isDropDown)}
            selectNumber={selectNumber}
            isDropDown={isDropDown}
            question={'What makes VaultFi so unique and revolutionary?'}
          >
            <p className="text-left text-xl p-1">
              VaultFi aims to lead the new era of DeFi 3.0, backed by
              revenue-generating businesses. At the heart of VaultFi's strategy
              is the "Vault" system, a revolutionary solution designed to
              sustainably generate high Annual Percentage Yield (APY) for the
              community.
            </p>
            <p className="text-left text-xl p-1">
              Recognizing the challenges faced by previous DeFi projects,
              VaultFi has developed a clear roadmap that integrates
              revenue-generating projects with several diversified sources of
              yield, aimed at resilience and APY sustainability.
            </p>
            <p className="text-left text-xl p-1">
              This model, combined with phases of strategic growth - and
              integrating Web3 projects via the Multi-vault diversification
              system, positions VaultFi as a pioneering, robust ecosystem in
              DeFi 3.0. Furthermore, it is led by a doxxed team with 20+ years
              of real-life business, marketing, and mergers & acquisitions
              experience.
            </p>
          </QuestionBoard>
          <QuestionBoard
            id={2}
            onClick={(id, isDropDown) => onClick(id, isDropDown)}
            selectNumber={selectNumber}
            isDropDown={isDropDown}
            question={'What are the core goals of VaultFi?'}
          >
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Sustainability:</span> To create a DeFi
              ecosystem that is capable of sustaining high Annual Percentage
              Yields (APY) over the long term without the common pitfalls of
              market fluctuations and operational risks.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">
                Transparency and Community Focus:
              </span>
              To maintain open and clear communication with the community,
              ensuring that holders are well-informed and involved in the
              project's development.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Market Resilience:</span>
              VaultFi's financial model involves multiple sources of revenue and
              diversifying its asset base to buffer against market volatility.
            </p>
          </QuestionBoard>
          <QuestionBoard
            id={3}
            question={'How can the APY be sustainable?'}
            onClick={(id, isDropDown) => onClick(id, isDropDown)}
            isDropDown={isDropDown}
            selectNumber={selectNumber}
          >
            <p className="text-left text-xl p-1">
              VaultFi aims to maintain a sustainable APY through several
              innovative strategies:
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Diversified Yield Sources:</span>{' '}
              VaultFi introduces various sources of yield beyond the traditional
              sell tax. This includes integrating projects from its Web3
              incubator, CoinRock Ventures, into its portfolio, which helps
              diversify and enhance the returns.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Tax Revenue System:</span> In the
              initial phase, VaultFi employs a tax revenue system where a
              percentage of each sell transaction is funneled into the treasury.
              This constant inflow helps support the treasury's capacity to
              provide yield, regardless of market conditions.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Phased Growth Strategy:</span> The
              roadmap of VaultFi is structured into phases that gradually build
              up the ecosystem's robustness. Each phase introduces more assets
              and strategies for yield generation, reducing reliance on any
              single source and spreading risk.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Multi-Vault Diversification:</span> In
              later phases, VaultFi plans to further diversify its APY sources
              by incorporating multiple Vaults that include a variety of digital
              assets and projects. This not only spreads risk but also creates
              more opportunities for earning returns.
            </p>
            <p className="text-left text-xl p-1">
              <span className="text-2xl">Active Treasury Management:</span> The
              treasury's active management ensures that funds are allocated
              efficiently to sustain APY. This includes investing in profitable
              ventures and managing assets in a way that balances growth with
              yield provision.
            </p>
            <p className="text-left text-xl p-1">
              These strategies are meticulously designed to help VaultFi avoid
              the common pitfalls of high APY promises that other DeFi projects
              face, aiming for long-term sustainability and resilience.
            </p>
          </QuestionBoard>
          <QuestionBoard
            id={4}
            onClick={(id, isDropDown) => onClick(id, isDropDown)}
            selectNumber={selectNumber}
            isDropDown={isDropDown}
            question={
              'Where will I be able to exchange and trade my VaultFi tokens?'
            }
          >
            <p className="text-left text-xl p-1">
              VaultFi will be listed on UniSwap upon launch, and will also be
              trading on centralized exchanges in the short term.
            </p>
          </QuestionBoard>
        </div>
      </div>
    </div>
  );
};
