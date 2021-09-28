import * as React from 'react';
import Layout from '../components/Layout';
import './index.css';
import HeroSection from '../components/HeroSection';
import Image from '../components/image';

// markup
const IndexPage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <Image />
      </Layout>
    </>
  );
};

export default IndexPage;
