import React from 'react';
import Hero from './Hero';
import Category from './Category';
import LatestNews from './LatestNews';
import OperatorSpotlight from './OperatorSpotlight';
import ContactUs from './ContactUs';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Hero />
      <Category />
      <LatestNews />
      <OperatorSpotlight />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
