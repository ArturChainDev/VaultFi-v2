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
    <div class="md:grid md:grid-cols-2 gap-10">
      <div class="col-lg-5">
        <div class="flex flex-col">
          <div class="flex flex-col items-start mt-3">
            <span class="text-left uppercase font-semibold text-primary text-xl py-10">
              Frequently asked questions
            </span>
            <h2 class="pb-10 text-left uppercase text-4xl">
              Have any questions?
              <br />
              Find answers here.
            </h2>
            <div className="flex">
              <a
                id="telegram-button"
                href=" https://t.me/VaultFiVerify"
                target="_blank"
                class="uppercase px-[10px] py-[23px] border-[3px] text-2xl border-primary text-primary hover:bg-primary hover:text-white/70"
              >
                Join the telegram
              </a>
            </div>
          </div>
          <div class="text-center flex py-10 ">
            <a
              class="social_icon me-4"
              href="https://twitter.com/vaultfi_io"
              target="_blank"
            >
              <img src="assets/images/x.svg" alt="X" />
            </a>
            <a
              class="social_icon"
              href=" https://t.me/VaultFiVerify"
              target="_blank"
            >
              <img src="assets/images/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
      <div class="">
        <QuestionSection />
      </div>
    </div>
  );
};
