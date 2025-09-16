import React, { useState } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
  color: string;
}

interface InteractiveAccordionProps {
  items: AccordionItem[];
  className?: string;
}

const InteractiveAccordion: React.FC<InteractiveAccordionProps> = ({
  items,
  className = "h-96"
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className={`flex ${className} overflow-hidden rounded-lg shadow-lg`}>
      {items.map((item, index) => {
        const isHovered = hoveredItem === item.id;
        const isAnyHovered = hoveredItem !== null;

        // Calculate width: hovered gets 50%, others share remaining 50%
        const width = isHovered
          ? '50%'
          : isAnyHovered
            ? `${50 / (items.length - 1)}%`
            : `${100 / items.length}%`;

        return (
          <div
            key={item.id}
            className="relative transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
            style={{
              width,
              backgroundColor: item.color,
              backgroundImage: item.backgroundImage ? `url(${item.backgroundImage})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative h-full p-6 flex flex-col justify-center text-white">
              {/* Vertical title for collapsed state */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}>
                <h3 className="text-xl font-bold transform -rotate-90 whitespace-nowrap">
                  {item.title}
                </h3>
              </div>

              {/* Expanded content */}
              <div className={`transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <h4 className="text-lg font-medium mb-4 opacity-90">{item.subtitle}</h4>
                <p className="text-base leading-relaxed opacity-80">
                  {item.description}
                </p>

                {/* Learn More button */}
                <button className="mt-6 px-6 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg hover:bg-opacity-30 transition-all duration-200 font-medium">
                  Learn More
                </button>
              </div>
            </div>

            {/* Number indicator */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveAccordion;