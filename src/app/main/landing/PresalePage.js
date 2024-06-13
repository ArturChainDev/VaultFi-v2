import React, {lazy} from 'react';
import { SocialIcon } from '../components/SocialIcon';
import { Footer } from '../components/Footer';
import {
  Header,
  PresaleWidget,
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
    <div className="relative flex flex-col gap-5 md:gap-8 p-3 md:px-18 md:p-7 md:pt-2 mx-auto max-w-[1300px] ">
      <Header />
      <div >
        <PresaleWidget />
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
      <SocialIcon />
      <Footer />
    </div>
  );
};
export default PresalePage;
