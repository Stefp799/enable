import type { MarketingBlockStyle, MarketingBlockContent } from "../types";
import type { ReactNode } from "react";

type Props = {
  style?: MarketingBlockStyle;
  content: MarketingBlockContent;
  imagePosition?: 'left' | 'right';
  children?: ReactNode;
};

const defaultStyle: MarketingBlockStyle = {
  sectionClass: "py-16 bg-white",
  containerClass: "mx-auto px-6",
  gridClass: "grid md:grid-cols-2 gap-10 items-center",
  imageWrapClass: "",
  imageClass: "w-full rounded-2xl shadow object-cover",
  overlayImageClass: "",
  textWrapClass: "md:mr-[50px] text-left",
  topLineClass:
    "font-montserrat-condensed text-green-600 text-[18px] leading-tight font-light mb-3",
  headingClass:
    "font-montserrat-condensed text-3xl sm:text-4xl font-normal leading-tight text-black mb-6",
  bodyClass: "font-montserrat-condensed text-black mb-4",
  emphasizeLineClass:
    "text-black text-[18px] leading-tight font-semibold mb-4",
  emphasizeLine2Class:
    "text-black text-[18px] leading-tight -mt-2.5 mb-6",
  ctaWrapClass: "flex justify-center",
  ctaClass:
    "flex items-center justify-center rounded-lg px-6 py-3 text-white font-semibold bg-green-600 hover:bg-green-700",
};

export const MarketingBlock1Style: MarketingBlockStyle = { ...defaultStyle };

export const MarketingBlock2Style: MarketingBlockStyle = {
  ...defaultStyle,
  sectionClass: "py-16 bg-white",
  imageWrapClass: "",
  imageClass: "w-full rounded-2xl shadow object-cover",
  overlayImageClass: "",
  topLineClass:
    "font-montserrat-condensed text-black text-[18px] leading-tight font-light mb-3",
  headingClass:
    "font-montserrat-condensed text-3xl sm:text-4xl font-normal leading-tight text-black mb-6",
  bodyClass: "font-montserrat-condensed text-black mb-4",
  emphasizeLineClass:
    "text-black text-[18px] leading-tight font-semibold mb-4",
  emphasizeLine2Class:
    "text-black text-[18px] leading-tight -mt-2.5 mb-6",
};

export default function MarketingBlock({ style, content, imagePosition = 'left', children }: Props) {
  const s = { ...defaultStyle, ...(style || {}) } as Required<MarketingBlockStyle>;
  const id = content.id || "";

  return (
    <section id={id} className={s.sectionClass}>
      <div className={s.containerClass} style={{ maxWidth: "1140px" }}>
        <div className={s.gridClass}>
          {imagePosition === 'left' ? (
            <>
              <div className={s.imageWrapClass}>
                {s.overlayImageClass ? (
                  <img src={content.imageSrc} alt={content.imageAlt || ""} className={s.overlayImageClass} />
                ) : (
                  <img src={content.imageSrc} alt={content.imageAlt || ""} className={s.imageClass} />
                )}
              </div>
              <div className={s.textWrapClass}>
                <p className={s.topLineClass}>{content.topLine}</p>
                <h2 className={s.headingClass}>{content.heading}</h2>
                <p className={s.bodyClass}>{content.body}</p>
                <p className={s.emphasizeLineClass}>{content.line1}</p>
                <p className={s.emphasizeLine2Class}>
                  <span className="font-semibold">{content.line2}</span>
                </p>
                {children}
                <div className={s.ctaWrapClass}>
                  <a href={content.ctaHref} className={s.ctaClass}>
                    {content.ctaText}
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={s.textWrapClass}>
                <p className={s.topLineClass}>{content.topLine}</p>
                <h2 className={s.headingClass}>{content.heading}</h2>
                <p className={s.bodyClass}>{content.body}</p>
                <p className={s.emphasizeLineClass}>{content.line1}</p>
                <p className={s.emphasizeLine2Class}>
                  <span className="font-semibold">{content.line2}</span>
                </p>
                {children}
                <div className={s.ctaWrapClass}>
                  <a href={content.ctaHref} className={s.ctaClass}>
                    {content.ctaText}
                  </a>
                </div>
              </div>
              <div className={s.imageWrapClass}>
                {s.overlayImageClass ? (
                  <img src={content.imageSrc} alt={content.imageAlt || ""} className={s.overlayImageClass} />
                ) : (
                  <img src={content.imageSrc} alt={content.imageAlt || ""} className={s.imageClass} />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
