import React, { memo } from 'react'
export const KeyMetrics = () => {
  return (
    <section className="container-sm mt-20 md:pt-20 break-words ">
      <h3 className="text-3xl md:text-5xl font-semibold uppercase text-white mb-10 italic">Key Metrics</h3>
      <div className="grid gap-2 grid-cols-2">
        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_1.svg" alt="" width="24" />
          <div>
            <p className="">Blockchain Network</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">Ethereum</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_2.svg" alt="" width="24" />
          <div>
            <p className="">Total Supply</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">5,000,000,000</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_3.svg" alt="" width="24" />
          <div>
            <p className="">Pre-sale Price</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">$0.0008</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_4.svg" alt="" width="24" />
          <div>
            <p className="">Launch Price</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">$0.001</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_5.svg" alt="" width="24" />
          <div>
            <p className="">Initial Market Cap</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">$794,550</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_6.svg" alt="" width="24" />
          <div>
            <p className="">Project Valuation</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">$4,500,000</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_3.svg" alt="" width="24" />
          <div>
            <p className="">Hard Cap</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">$1,200,000</h6>
          </div>
        </div>

        <div className="rounded-[12px] p-4 border border-[var(--purple)] bg-[var(--purple)] flex flex-col gap-6">
          <img loading="lazy" src="/bg/key_metrics_8.svg" alt="" width="24" />
          <div>
            <p className="">Token Launch</p>
            <h6 className="text-lg sm:text-xl family-poppins font-semibold text-white">June 2024</h6>
          </div>
        </div>
      </div>
    </section>

  );
}
