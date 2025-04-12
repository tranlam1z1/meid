import React from 'react';
import '../css/HomePage.css';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import CustomerStatsSection from '../components/CustomerStatsSection';
import LinkedAppSection from '../components/LinkedAppSection';
import IntegratedServicesSection from '../components/IntegratedServicesSection';

function HomePage() {

    return (
        <>
            <HeroBanner />
            <AboutSection />
            <CustomerStatsSection />
            <LinkedAppSection />
            <IntegratedServicesSection />
            <NewsSection />
        </>
    );
}

export default HomePage;
