import React, { memo } from 'react';

export const GuideWidget = () => {
  return (
    <section className="container mt-20 md:pt-20 text-center" id="how-to-buy">
      <h3 className="text-3xl md:text-5xl font-semibold uppercase text-white mb-10 italic">
        HOW TO BUY VAULTFI GUIDE
      </h3>

      <img loading="lazy" src="/bg/buy-steps-desktop.svg" alt="" className="hidden md:block mx-auto" useMap="#desktopToBuy" />
      <img loading="lazy" src="/bg/buy-steps-mobile.svg" alt="" className="md:hidden mx-auto" useMap="#mobileToBuy" />

      {/* Maps to allow links to be clickable in image */}

      <map name="desktopToBuy">
        <area shape="rect" coords="0,0,340,140" href="/" alt="" />
      </map>

      <map name="mobileToBuy">
        <area shape="rect" coords="0,0,340,140" href="/" alt="" />
      </map>

    </section>
  );
};