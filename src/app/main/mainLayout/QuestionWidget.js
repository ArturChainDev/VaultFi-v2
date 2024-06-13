import React, { useState } from 'react';
import { QuestionSection } from './QuestionSection';

export const QuestionWidget = () => {

  return (
    <div className="md:grid gap-10 text-white/90" id="faq">
        <div className="flex items-center justify-center mt-3">
          <h3 className="text-center text-3xl my-10 font-extrabold italic uppercase md:my-2 md:text-5xl">
            FREQUENTLY ASKED QUESTIONS
          </h3>
      </div>
      <div className="">
        <QuestionSection />
      </div>
    </div>
  );
};
