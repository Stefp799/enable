import React from 'react';
import { PageData } from '../types';
import Hero from './Hero';
import Article from './Article';

interface PageBuilderProps {
  data: PageData;
  showHeroCTA?: boolean;
  heroClassName?: string;
  articleClassName?: string;
}

const PageBuilder: React.FC<PageBuilderProps> = ({
  data,
  showHeroCTA = false,
  heroClassName,
  articleClassName
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Hero
        data={data.hero}
        showCTA={showHeroCTA}
        className={heroClassName}
      />
      <Article
        data={data.article}
        className={articleClassName}
      />
    </div>
  );
};

export default PageBuilder;