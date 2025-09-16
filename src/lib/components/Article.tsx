import React from 'react';
import { ArticleData, Section } from '../types';

interface ArticleProps {
  data: ArticleData;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({
  data,
  className = "py-16 px-6"
}) => {
  const renderSection = (section: Section, index: number) => {
    const { heading, content, type, author } = section;

    // Don't render sections with empty heading and content
    if (!heading && !content) return null;

    switch (type) {
      case 'html':
        return (
          <div key={index} className="mb-8">
            {heading && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
            )}
            <div dangerouslySetInnerHTML={{ __html: content as string }} />
          </div>
        );

      case 'list':
        return (
          <div key={index} className="mb-8">
            {heading && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
            )}
            <ul className="space-y-3">
              {(content as string[]).map((item, listIndex) => (
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
            {heading && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
            )}
            <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-6 italic">
              <p className="text-gray-800 text-lg mb-2">"{content}"</p>
              {author && (
                <cite className="text-gray-600 text-sm font-medium">— {author}</cite>
              )}
            </blockquote>
          </div>
        );

      default: // text
        return (
          <div key={index} className="mb-8">
            {heading && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{heading}</h2>
            )}
            {content && (
              <p className="text-gray-700 leading-relaxed">{content}</p>
            )}
          </div>
        );
    }
  };

  return (
    <section className={className}>
      <div className="mx-auto" style={{maxWidth: '1260px'}}>
        <div className="max-w-4xl mx-auto">
          {data.sections.map((section, index) => renderSection(section, index))}
        </div>
      </div>
    </section>
  );
};

export default Article;