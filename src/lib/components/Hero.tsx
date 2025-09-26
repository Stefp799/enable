import React from 'react';
import { HeroData } from '../types';
import { LAYOUT_CONSTANTS } from '../index';

interface HeroProps {
  data: HeroData;
  showCTA?: boolean;
  className?: string;
}

const Hero: React.FC<HeroProps> = ({
  data,
  showCTA = false,
  className = "relative"
}) => {
  const { title, subtitle, description, ctaText, backgroundImage } = data;

  return (
    <section
      className={className}
      style={{
        height: LAYOUT_CONSTANTS.HERO_HEIGHT,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundColor: backgroundImage ? undefined : 'rgba(173, 216, 230, 0.1)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      )}

      <div className={`mx-auto relative z-10 h-full flex items-center ${LAYOUT_CONSTANTS.HORIZONTAL_PADDING}`} style={{maxWidth: LAYOUT_CONSTANTS.PAGE_MAX_WIDTH}}>
        <div className={`${LAYOUT_CONSTANTS.HERO_CONTENT_MAX_WIDTH} ${LAYOUT_CONSTANTS.HERO_TEXT_ALIGNMENT}`}>
          <h1 className={`text-4xl lg:text-5xl font-medium leading-tight mb-6 ${
            backgroundImage ? 'text-white' : 'text-gray-800'
          }`}>
            {title}
          </h1>

          {subtitle && (
            <h2 className={`text-2xl lg:text-3xl font-semibold mb-6 ${
              backgroundImage ? 'text-white' : 'text-gray-800'
            }`}>
              {subtitle}
            </h2>
          )}

          {description && (
            <p className={`text-lg leading-relaxed mb-8 ${
              backgroundImage ? 'text-white' : 'text-black'
            }`} style={{fontFamily: 'Montserrat, sans-serif', fontSize: '18px'}}>
              {description}
            </p>
          )}

          {showCTA && ctaText && (
            <button className="enable-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
              {ctaText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;