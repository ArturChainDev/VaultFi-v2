import React, { useState, useRef, useEffect } from 'react';
// import '../../../App.css';

const AccordionItem = ({ id, title, children, isOpen, toggle, isUsed }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);
  useEffect(() => {
    if (!isUsed) {
      setContentHeight(contentRef.current.scrollHeight);
      return;
    }
    setContentHeight(isOpen ? contentRef.current.scrollHeight + 20 : 0);
  }, [isOpen, isUsed]);

  return (
    <div className="flex flex-col p-5 rounded-2xl bg-[#332A6A] cursor-pointer">
      <div className="flex pb-4 text-white justify-between" onClick={() => toggle(id)}>
        <span className="font-medium text-xl select-none" id={`heading${id}`}>
          {title}
        </span>
        <div className="flex flex-shrink-0 rotate-180 !rotate-0">
          {
            isUsed ? <img loading="lazy" src="/arrow.svg" alt="" id={"arrow"} className={isOpen ? `-rotate-180` : ``} /> :
              <img loading="lazy" src="/arrow.svg" alt="" id={"arrow"} className={`-rotate-180`} />
          }

        </div>
      </div>
      <div
        id={`collapse${id}`}
        className="space-y-8  mt-2.5 accordion-content"
        style={{
          maxHeight: `${contentHeight}px`,
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export const QuestionSection = () => {
  const [openId, setOpenId] = useState(null);
  const [isUsed, setUsed] = useState(false);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
    setUsed(true);
  };

  return (

    <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-5">
      <div className="flex flex-col gap-3 md:gap-5">
        <AccordionItem
          id="One"
          title="What makes VaultFi so unique and revolutionary?"
          isOpen={openId === 'One'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <p>
            VaultFi aims to lead the new era of DeFi 3.0, backed by revenue-generating businesses. At the heart
            of VaultFi's strategy is the "Vault" system, a revolutionary solution designed to sustainably
            generate high Annual Percentage Yield (APY) for the community.
          </p>
          <p>
            Recognizing the challenges faced by previous DeFi projects, VaultFi has developed a clear roadmap
            that integrates revenue-generating projects with several diversified sources of yield, aimed at
            resilience and APY sustainability.
          </p>
          <p>
            This model, combined with phases of strategic growth - and integrating Web3 projects via the
            Multi-vault diversification system, positions VaultFi as a pioneering, robust ecosystem in DeFi 3.0.
            Furthermore, it is led by a doxxed team with 20+ years of real-life business, marketing, and mergers
            & acquisitions experience.
          </p>
        </AccordionItem>
        <AccordionItem
          id="Two"
          title="What are the core goals of VaultFi?"
          isOpen={openId === 'Two'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <p>
            <span className="font-semibold">Sustainability: </span>
            To create a DeFi ecosystem that is capable of sustaining high Annual Percentage Yields(APY) over
            the long term without the common pitfalls of market fluctuations and operational risks.
          </p >
          <p>
            <span className="font-semibold">Transparency and Community Focus:</span>
            To maintain open and clear communication with the community, ensuring that holders are well-informed
            and involved in the project's development.
          </p>
          <p>
            <span className="font-semibold">Market Resilience: </span>
            VaultFi's financial model involves multiple sources of revenue and diversifying its asset base to
            buffer against market volatility.
          </p>
        </AccordionItem>
        <AccordionItem
          id="Four"
          title="Where will I be able to exchange and trade my VaultFi tokens?"
          isOpen={openId === 'Four'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <p>
            VaultFi will be listed on UniSwap upon launch, and will also be trading on centralized exchanges in
            the short term.
          </p>
        </AccordionItem>
      </div>
      <div className="flex flex-col gap-3 md:gap-5">
        <AccordionItem
          id="Three"
          title="How can the APY be sustainable?"
          isOpen={openId === 'Three'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <div>
            <h5>VaultFi aims to maintain a sustainable APY through several innovative strategies: </h5>
          </div>
          <p>
            <span className="font-semibold">Diversified Yield Sources: </span>
            VaultFi introduces various sources of yield beyond the traditional sell tax. This includes
            integrating projects from its Web3 incubator, CoinRock Ventures, into its portfolio, which helps
            diversify and enhance the returns.
          </p>
          <p>
            <span className="font-semibold">Tax Revenue System: </span>
            In the initial phase, VaultFi employs a tax revenue system where a percentage of each sell
            transaction is funneled into the treasury. This constant inflow helps support the treasury's
            capacity to provide yield, regardless of market conditions.
          </p>
          <p>
            <span className="font-semibold">Phased Growth Strategy: </span>
            The roadmap of VaultFi is structured into phases that gradually build up the ecosystem's robustness.
            Each phase introduces more assets and strategies for yield generation, reducing reliance on any
            single source and spreading risk.
          </p>
          <p>
            <span className="font-semibold">Multi-Vault Diversification: </span>
            In later phases, VaultFi plans to further diversify its APY sources by incorporating multiple Vaults
            that include a variety of digital assets and projects. This not only spreads risk but also creates
            more opportunities for earning returns.
          </p>
          <p>
            <span className="font-semibold">Active Treasury Management: </span>
            The treasury's active management ensures that funds are allocated efficiently to sustain APY. This
            includes investing in profitable ventures and managing assets in a way that balances growth with
            yield provision.
          </p>
          <p>
            These strategies are meticulously designed to help VaultFi avoid the common pitfalls of high APY
            promises that other DeFi projects face, aiming for long-term sustainability and resilience.
          </p>
        </AccordionItem>
      </div>
    </div>

  );
};

export default QuestionSection;
