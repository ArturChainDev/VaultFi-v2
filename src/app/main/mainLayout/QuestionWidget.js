import React, { useState } from 'react';
import { QuestionSection } from './QuestionSection';

export const QuestionWidget = () => {
  const [selectNumber, setSelectNumbr] = useState(0);
  const [isDropDown, setDropDown] = useState(false);
  const onClick = (id) => {
    if (selectNumber === id) {
      setDropDown(!isDropDown);
    } else {
      setSelectNumbr(id);
      setDropDown(true);
    }
  };
  return (
    <div className="md:grid md:grid-cols-2 gap-10 text-white/90">
      <div className="col-lg-5">
        <div className="flex flex-col">
          <div className="flex flex-col items-start mt-3">
            <span className="text-left uppercase font-semibold text-primary text-xl py-10">
              Frequently asked questions
            </span>
            <h2 className="pb-10 text-left uppercase text-4xl">
              Have any questions?
              <br />
              Find answers here.
            </h2>
            <div className="flex">
              <a
                id="telegram-button"
                href=" https://t.me/VaultFiVerify"
                target="_blank"
                className="uppercase px-[10px] py-[23px] border-[3px] text-2xl border-primary text-primary hover:bg-primary hover:text-white/70"
              >
                Join the telegram
              </a>
            </div>
          </div>
          <div className="text-center flex py-10 ">
            <a
              className="social_icon me-4"
              href="https://twitter.com/vaultfi_io"
              target="_blank"
            >
              <img src="assets/images/x.svg" alt="X" />
            </a>
            <a
              className="social_icon"
              href=" https://t.me/VaultFiVerify"
              target="_blank"
            >
              <img src="assets/images/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <QuestionSection />
      </div>
    </div>
  );
};
