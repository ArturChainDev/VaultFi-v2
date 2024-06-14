import React, { memo } from 'react';

export const GamblingWidget = () => {
  return (
    <section className="container mt-20 md:pt-20 text-center md:w-full w-[100vw]">
      <div className="flex flex-col gap-2.5 md:gap-5">
        <h3 className="text-3xl md:text-5xl font-semibold uppercase text-white mb-10 italic">
          DISRUPTING THE DEFI SECTOR
        </h3>

        <div className="flex overflow-auto w-full custom-scrollbar">
          <div className="flex flex-col gap-1 lg:w-full">
            <div className="flex gap-1 md:w-full">
              <div className="w-52 md:w-1/2"></div>
              <div className="compare-table-head">
                <img loading="lazy" src="/tokens/vaultfi.png" className="h-8" />
                <span className="font-medium text-center whitespace-nowrap"> VaultFi </span>
              </div>
              <div className="compare-table-head">
                <img loading="lazy" src="/tokens/hex.png" className="h-8" />
                <span className="font-medium text-center whitespace-nowrap"> HEX </span>
              </div>
              <div className="compare-table-head">
                <img loading="lazy" src="/tokens/aave-aave-logo.png" className="h-8" />
                <span className="font-medium text-center whitespace-nowrap"> AAVE </span>
              </div>
              <div className="compare-table-head">
                <img loading="lazy" src="/tokens/ohm.png" className="h-8" />
                <span className="font-medium text-center whitespace-nowrap"> OHM </span>
              </div>
              <div className="compare-table-head">
                <img loading="lazy" src="/tokens/time.png" className="h-8" />
                <span className="font-medium text-center whitespace-nowrap"> TIME </span>
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2 rounded-tl-xl">Security Audit</div>
              <div className="compare-table-data highlight">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>

              <div className="compare-table-data rounded-tr-xl">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2">Economic Audit</div>
              <div className="compare-table-data highlight">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>

              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2">Treasury-backed APY</div>
              <div className="compare-table-data highlight">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>

              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2">
                Revenue-generating businesses to sustain the APY
              </div>
              <div className="compare-table-data highlight">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>

              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2">Doxxed leadership</div>
              <div className="compare-table-data highlight">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
              <div className="compare-table-data">
                <img loading="lazy" src="/x-mark.svg" className="h-11" />
              </div>

              <div className="compare-table-data">
                <img loading="lazy" src="/checkmark.png" className="h-11" />
              </div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2">All-time high Market Cap</div>
              <div className="compare-table-data highlight">Starting at $794,550</div>
              <div className="compare-table-data">$80 billion</div>
              <div className="compare-table-data">$8 billion</div>
              <div className="compare-table-data">$4 billion</div>
              <div className="compare-table-data">$2 billion</div>
            </div>
            <div className="flex gap-1 md:w-full">
              <div className="compare-table-row-head  md:w-1/2 rounded-bl-xl">
                Growth Potential from VaultFi Starting Market Cap of $794,550
              </div>
              <div className="compare-table-data highlight"></div>
              <div className="compare-table-data">Over 100,000x</div>
              <div className="compare-table-data">Over 10,000x</div>
              <div className="compare-table-data">Over 5,000x</div>
              <div className="compare-table-data rounded-br-xl">Over 2,500x</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};