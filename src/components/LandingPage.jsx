import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import SocialProof from './SocialProof';
import TestimonialHighlight from './TestimonialHighlight';
import Features from './Features';
import UseCases from './UseCases';
import ExperienceCTA from './ExperienceCTA';
import TranslationFeature from './TranslationFeature';
import StunningSteps from './StunningSteps';
import CustomerStories from './CustomerStories';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <SocialProof />
            <TestimonialHighlight />
            <Features />
            <UseCases />
            <ExperienceCTA />
            <TranslationFeature />
            <StunningSteps />
            <CustomerStories />
            <FAQ />
            <FinalCTA />
            <Footer />
        </>
    );
};

export default LandingPage;
