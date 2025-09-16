import React from 'react';

interface Section {
  heading: string;
  content: string | string[];
  type: 'text' | 'html' | 'list' | 'quote';
  author?: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

interface ArticleData {
  sections: Section[];
}

interface PageData {
  hero: HeroData;
  article: ArticleData;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

interface PageTemplateProps {
  data: PageData;
}

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => {
  const { hero, article } = data;

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case 'html':
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content as string }} />
          </div>
        );

      case 'list':
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
            <ul className="space-y-3">
              {(section.content as string[]).map((item, listIndex) => (
                <li key={listIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-enable-blue rounded-full mt-2"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'quote':
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
            <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 italic">
              <p className="text-gray-800 text-lg mb-2">"{section.content}"</p>
              {section.author && (
                <cite className="text-gray-600 text-sm font-medium">— {section.author}</cite>
              )}
            </blockquote>
          </div>
        );

      default: // text
        return (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="py-28 px-6 relative"
        style={{
          backgroundImage: hero.backgroundImage ? `url(${hero.backgroundImage})` : undefined,
          backgroundColor: hero.backgroundImage ? undefined : 'rgba(173, 216, 230, 0.1)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {hero.backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        )}

        <div className="mx-auto relative z-10" style={{maxWidth: '1260px'}}>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className={`text-4xl lg:text-5xl font-medium leading-tight mb-6 ${
              hero.backgroundImage ? 'text-white' : 'text-gray-800'
            }`}>
              {hero.title}
            </h1>

            <h2 className={`text-2xl lg:text-3xl font-semibold mb-6 ${
              hero.backgroundImage ? 'text-white' : 'text-gray-800'
            }`}>
              {hero.subtitle}
            </h2>

            <p className={`text-lg leading-relaxed ${
              hero.backgroundImage ? 'text-white' : 'text-black'
            }`} style={{fontFamily: 'Montserrat, sans-serif', fontSize: '18px'}}>
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="mx-auto" style={{maxWidth: '1260px'}}>
          <div className="max-w-4xl mx-auto">
            {article.sections.map((section, index) => renderSection(section, index))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTemplate;