type Props = {
  id?: string;
  bgImage?: string; // optional; if omitted, plain background
  bgClass?: string; // optional background utility class (e.g., bg-white)
  eyebrow: string;
  heading: string;
  subtext?: string;
  paddingClass?: string;
};

export default function FullBleedDivider({ id, bgImage, bgClass = "bg-white", eyebrow, heading, subtext, paddingClass = "py-20" }: Props) {
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
      <div className={`relative mx-auto px-6 text-center ${paddingClass}`} style={{ maxWidth: "1200px" }}>
        <div className={`${eyebrowColor} uppercase tracking-wide -mb-2 -mt-2.5`} style={{fontFamily: 'Castoro', fontWeight: 400, fontSize: '28px'}}>{eyebrow}</div>
        <h2 className={`${headingColor} leading-tight mb-4`} style={{fontFamily: 'Montserrat', fontWeight: 400, fontSize: '36px'}}>
          {heading}
        </h2>
        {subtext ? (
          <p className={`${subtextColor} max-w-4xl mx-auto`}>{subtext}</p>
        ) : null}
      </div>
    </section>
  );
}

