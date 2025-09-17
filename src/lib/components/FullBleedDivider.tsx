type Props = {
  id?: string;
  bgImage?: string; // optional; if omitted, plain background
  bgClass?: string; // optional background utility class (e.g., bg-white)
  eyebrow: string;
  heading: string;
  subtext?: string;
};

export default function FullBleedDivider({ id, bgImage, bgClass = "bg-white", eyebrow, heading, subtext }: Props) {
  const eyebrowColor = bgImage ? "text-[#b8875b]" : "text-black";
  const headingColor = bgImage ? "text-[#b8875b]" : "text-black";
  const subtextColor = bgImage ? "text-white/90" : "text-black";
  return (
    <section
      id={id}
      className={`relative overflow-hidden ${bgClass}`}
      style={bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : undefined}
    >
      {bgImage ? <div className="absolute inset-0 bg-black/70" /> : null}
      <div className="relative mx-auto px-6 py-20 text-center" style={{ maxWidth: "1200px" }}>
        <div className={`${eyebrowColor} uppercase tracking-wide text-sm font-semibold mb-4 -mt-2.5`}>{eyebrow}</div>
        <h2 className={`font-montserrat-condensed ${headingColor} text-3xl sm:text-5xl font-normal leading-tight mb-4`}>
          {heading}
        </h2>
        {subtext ? (
          <p className={`${subtextColor} max-w-4xl mx-auto`}>{subtext}</p>
        ) : null}
      </div>
    </section>
  );
}
