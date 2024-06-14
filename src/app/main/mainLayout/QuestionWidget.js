import React, { useState } from 'react';
import { QuestionSection } from './QuestionSection';

export const QuestionWidget = () => {

  return (
    <section className="container mt-20 md:pt-20" id="faq">
        <h2 className="mt-10 text-center mb-10 text-3xl font-semibold uppercase md:text-5xl italic">
            FREQUENTLY ASKED QUESTIONS
          </h2>
      <div className="">
        <QuestionSection />
      </div>
    </section>
  );
};
