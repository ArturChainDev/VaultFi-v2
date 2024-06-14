import React, { lazy, useEffect } from 'react';
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
  useEffect(() => {

    const modifyHeader = () => {
      if (window.scrollY) {
        document.getElementById('header-socials').classList.add('!hidden');
        document.getElementById( 'mobile-nav-btn' ).classList.remove( '!px-4', '!py-3.5' )
      } else {
        document.getElementById('header-socials').classList.remove('!hidden')
        document.getElementById( 'mobile-nav-btn' ).classList.add( '!px-4', '!py-3.5' )
      }
    }
    document.addEventListener('scroll', modifyHeader)

    return () => {
      document.removeEventListener('scroll', modifyHeader)
    }
  }, [])
  return (
    <main className="flex">
      <div className="m-auto md:px-4 pt-2 md:pt-4 pb-5">
        <Header />
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
        <Footer />
        <div>
          <div className="backdrop"></div>
        </div>
      </div>
    </main>
  );
};
export default PresalePage;
