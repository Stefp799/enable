const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto px-6" style={{maxWidth: '1260px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - 1/3 - Testimonial Image */}
          <div className="lg:col-span-1">
            <img
              src="/images/Testimonial-sec-img01.webp"
              alt="Testimonial"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - 2/3 - Content */}
          <div className="lg:col-span-2">
            <div className="text-gray-600 text-lg">
              {/* Content will be added here */}
              <p>Testimonial content will go here...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection