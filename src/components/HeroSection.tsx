const HeroSection = () => {
  return (
    <section className="py-20 px-6" style={{backgroundColor: 'rgba(173, 216, 230, 0.1)'}}>
      <div className="mx-auto" style={{maxWidth: '1260px'}}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8" style={{maxWidth: 'calc(100% - 20px)'}}>
            <h1 className="text-4xl lg:text-5xl font-medium leading-tight">
              <span className="enable-text-gradient">Zoho Consulting Partner</span>
              <br />
              <span className="text-gray-800">& CRM-AI Integration Experts</span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
              Drive Business Growth with Tailored Zoho Solutions
            </h2>

            <p className="text-black leading-relaxed" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '18px'}}>
              Enable Solutions helps small to mid-sized businesses transform complex tasks into simple ones. Our Zoho consulting and CRM AI integration specialists strengthen forecasting, data control, and automation—driving solid growth and reliable outcomes for your operations. Ready to transform? Contact our Zoho experts today.
            </p>

            <div className="flex justify-center" style={{marginTop: '70px'}}>
              <button className="enable-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
                Schedule A Meeting
              </button>
            </div>

          </div>

          {/* Right Column - Hero Video */}
          <div className="relative" style={{maxWidth: 'calc(100% - 20px)', marginTop: '-110px'}}>
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{minHeight: '540px', transform: 'scale(1.08)'}}>
              <video
                className="w-full h-full"
                style={{objectFit: 'cover', minHeight: '540px'}}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/images/Enable-hero-v2v2424.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection