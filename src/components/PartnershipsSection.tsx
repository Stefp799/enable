const PartnershipsSection = () => {
  const partnerships = [
    { name: "Zoho", logo: "🎯" },
    { name: "Microsoft", logo: "🚀" },
    { name: "Google", logo: "🔧" },
    { name: "Salesforce", logo: "⚡" },
    { name: "HubSpot", logo: "💡" },
    { name: "AWS", logo: "☁️" }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-6" style={{maxWidth: '1260px'}}>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted Partners & Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with industry-leading platforms to deliver exceptional results for our clients
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partnerships.map((partner, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{partner.logo}</div>
                <div className="text-sm font-medium text-gray-700">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnershipsSection