import React from 'react';
import Header from '../components/Header';
import { PageBuilder } from '../lib';
import { servicesPageData } from '../data/pageData';

const Services: React.FC = () => {
  return (
    <div>
      <Header />
      <PageBuilder data={servicesPageData} />
    </div>
  );
};

export default Services;