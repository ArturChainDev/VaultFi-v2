import React from 'react';
import {
  Header,
  PressaleWidget,
  SecureWidget,
  KeyMetrics,
  SummaryWidget,
  BenefitWidget,
  RewardsWidget,
  ExpanationWidget,
  GuideWidget,
  GamblingWidget,
  TokenomicWidget,
  WhitePaperWidget,
  TeammateWidget,
  QuestionWidget
} from '../mainLayout';
const PresalePage = () => {
  return (
    <div className="relative flex flex-col gap-5 md:gap-8 p-3 md:px-18 md:p-7 md:pt-2 max-w-[1300px] mx-auto !pb-28">
      <Header />
      <div >
        <PressaleWidget />
        <SecureWidget />
        <KeyMetrics />
        <SummaryWidget />
        <BenefitWidget />
        <RewardsWidget />
        <ExpanationWidget />
        <GuideWidget />
        <GamblingWidget />
        <TokenomicWidget />
        <WhitePaperWidget />
        <TeammateWidget />
        <QuestionWidget />
      </div>
    </div>
  );
};
export default PresalePage;
