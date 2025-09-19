import { useState, useRef, useEffect } from 'react';
import DrawerNavigation from './DrawerNavigation';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoCloseTimer = () => {
    clearTimer(); // Clear any existing timer
    timerRef.current = setTimeout(() => {
      setIsDrawerOpen(false);
      timerRef.current = null;
    }, 4000);
  };

  const handleServicesClick = () => {
    if (isDrawerOpen) {
      // If already open, close it
      setIsDrawerOpen(false);
      clearTimer();
    } else {
      // Open drawer and start 5-second timer
      setIsDrawerOpen(true);
      startAutoCloseTimer();
    }
  };

  const handleDrawerInteraction = () => {
    // Reset timer when user interacts with drawer
    if (isDrawerOpen) {
      startAutoCloseTimer();
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    clearTimer();
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto px-6 py-4" style={{maxWidth: '1140px'}}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="/images/Enable-Logo-v2.svg"
                  alt="Enable Solutions"
                  className="w-auto"
                  style={{height: '38px'}}
                />
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8" style={{marginLeft: '150px', fontFamily: 'Montserrat, sans-serif', fontSize: '16px'}}>
              <button
                onClick={handleServicesClick}
                className="text-gray-700 hover:text-enable-blue transition-colors cursor-pointer"
              >
                Services
              </button>
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

            <div className="flex items-center gap-4">
              <a
                href="tel:+15555551234"
                className="enable-gradient inline-flex items-center text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                aria-label="Call (555) 555-1234"
              >
                Call (555) 555-1234
              </a>
            </div>
          </div>
        </div>
      </header>

      <DrawerNavigation
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onMouseEnter={handleDrawerInteraction}
        onMouseLeave={() => {}}
      />
    </>
  )
}

export default Header
