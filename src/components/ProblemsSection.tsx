const ProblemsSection = () => {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage: 'url(/images/CTA-bg2-scaled.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="mx-auto px-6" style={{maxWidth: '1260px'}}>
        <div className="grid lg:grid-cols-2 gap-24 items-center justify-center">
          {/* Left Column - Problems We Solve Title */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="inline-block px-6 py-3 rounded-lg text-white font-semibold text-xl"
              style={{backgroundColor: 'rgba(9, 247, 129, 0.9)'}}
            >
              Problems We Solve
            </div>
          </div>

          {/* Right Column - Problem List */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div
                className="px-4 py-2 rounded-lg text-white font-medium text-lg"
                style={{backgroundColor: 'rgba(128, 128, 128, 0.8)'}}
              >
                Pipeline chaos
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div
                className="px-4 py-2 rounded-lg text-white font-medium text-lg"
                style={{backgroundColor: 'rgba(128, 128, 128, 0.8)'}}
              >
                Reporting blind spots
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div
                className="px-4 py-2 rounded-lg text-white font-medium text-lg"
                style={{backgroundColor: 'rgba(128, 128, 128, 0.8)'}}
              >
                Broken integrations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemsSection