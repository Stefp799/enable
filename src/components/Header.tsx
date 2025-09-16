const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto px-6 py-4" style={{maxWidth: '1260px'}}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/Enable-Logo-v2.svg"
              alt="Enable Solutions"
              className="w-auto"
              style={{height: '38px'}}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8" style={{marginLeft: '150px', fontFamily: 'Montserrat, sans-serif', fontSize: '20px'}}>
            <a href="#services" className="text-gray-700 hover:text-enable-blue transition-colors">
              Services
            </a>
            <a href="#packages" className="text-gray-700 hover:text-enable-blue transition-colors">
              Packages
            </a>
            <a href="#zoho" className="text-gray-700 hover:text-enable-blue transition-colors">
              Zoho
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-enable-blue transition-colors">
              Pricing
            </a>
            <a href="#resources" className="text-gray-700 hover:text-enable-blue transition-colors">
              Resources
            </a>
          </nav>

          <button className="enable-gradient text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Schedule A Meeting
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header