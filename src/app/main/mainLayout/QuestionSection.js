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
    <div className="bg-[#332A6A] rounded-md mb-4 p-4 md:p-4">
      <div className="flex items-center justify-between cursor-pointer " onClick={() => toggle(id)}>
        <h2
          className="bg-gray-100 p-2 text-2xl"
          id={`heading${id}`}
        >
          {title}
        </h2>
        <div className='w-[40px]'>
          {
            isUsed ? <img src="assets/icons/arrow-down.png" width={35} id={"arrow"} className={isOpen ? `-rotate-180` : ``} /> :
              <img src="assets/icons/arrow-down.png" width={35} id={"arrow"} className={`-rotate-180`} />
          }
        </div>
      </div>
      <div
        id={`collapse${id}`}
        className="accordion-content text-left md:px-3"
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
    <div
      className="accordion animation-element bounce-up centered-mobile in-view md:flex md:gap-4"
      id="accordionExample"
    >
      <div className='md:w-1/2'>
        <AccordionItem
          id="One"
          title="What makes VaultFi so unique and revolutionary?"
          isOpen={openId === 'One'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <p>
            VaultFi aims to lead the new era of DeFi 3.0, backed by
            revenue-generating businesses. At the heart of VaultFi's strategy is
            the "Vault" system, a revolutionary solution designed to sustainably
            generate high Annual Percentage Yield (APY) for the community.
          </p>
          <br />
          <p>
            Recognizing the challenges faced by previous DeFi projects, VaultFi
            has developed a clear roadmap that integrates revenue-generating
            projects with several diversified sources of yield, aimed at
            resilience and APY sustainability.
          </p>
          <br />
          <p>
            This model, combined with phases of strategic growth - and integrating
            Web3 projects via the Multi-vault diversification system, positions
            VaultFi as a pioneering, robust ecosystem in DeFi 3.0. Furthermore, it
            is led by a doxxed team with 20+ years of real-life business,
            marketing, and mergers & acquisitions experience.
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
            <strong>Sustainability:</strong> To create a DeFi ecosystem that is
            capable of sustaining high Annual Percentage Yields (APY) over the
            long term without the common pitfalls of market fluctuations and
            operational risks.
          </p>
          <br />
          <p>
            <strong>Transparency and Community Focus:</strong> To maintain open
            and clear communication with the community, ensuring that holders are
            well-informed and involved in the project's development.
          </p>
          <br />
          <p>
            <strong>Market Resilience:</strong> VaultFi's financial model involves
            multiple sources of revenue and diversifying its asset base to buffer
            against market volatility.
          </p>
        </AccordionItem>
      </div>

      <div className='md:w-1/2'>
        <AccordionItem
          id="Three"
          title="How can the APY be sustainable?"
          isOpen={openId === 'Three'}
          toggle={toggleAccordion}
          isUsed={isUsed}
        >
          <h5>
            VaultFi aims to maintain a sustainable APY through several innovative
            strategies:
          </h5>
          <p>
            <strong>Diversified Yield Sources:</strong> VaultFi introduces various
            sources of yield beyond the traditional sell tax. This includes
            integrating projects from its Web3 incubator, CoinRock Ventures, into
            its portfolio, which helps diversify and enhance the returns.
          </p>
          <br />
          <p>
            <strong>Tax Revenue System:</strong> In the initial phase, VaultFi
            employs a tax revenue system where a percentage of each sell
            transaction is funneled into the treasury. This constant inflow helps
            support the treasury's capacity to provide yield, regardless of market
            conditions.
          </p>
          <br />
          <p>
            <strong>Phased Growth Strategy:</strong> The roadmap of VaultFi is
            structured into phases that gradually build up the ecosystem's
            robustness. Each phase introduces more assets and strategies for yield
            generation, reducing reliance on any single source and spreading risk.
          </p>
          <br />
          <p>
            <strong>Multi-Vault Diversification:</strong> In later phases, VaultFi
            plans to further diversify its APY sources by incorporating multiple
            Vaults that include a variety of digital assets and projects. This not
            only spreads risk but also creates more opportunities for earning
            returns.
          </p>
          <br />
          <p>
            <strong>Active Treasury Management:</strong> The treasury's active
            management ensures that funds are allocated efficiently to sustain
            APY. This includes investing in profitable ventures and managing
            assets in a way that balances growth with yield provision.
          </p>
          <br />
          <p>
            These strategies are meticulously designed to help VaultFi avoid the
            common pitfalls of high APY promises that other DeFi projects face,
            aiming for long-term sustainability and resilience.
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
            VaultFi will be listed on UniSwap upon launch, and will also be trading on centralized exchanges in the short term.
          </p>
        </AccordionItem>
      </div>
    </div>
  );
};

export default QuestionSection;
