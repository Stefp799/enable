import { useState, useRef, useEffect } from 'react';
import DrawerNavigation from './DrawerNavigation';
import ZohoAppsDrawer from './ZohoAppsDrawer';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isZohoDrawerOpen, setIsZohoDrawerOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const zohoTimerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const clearZohoTimer = () => {
    if (zohoTimerRef.current) {
      clearTimeout(zohoTimerRef.current);
      zohoTimerRef.current = null;
    }
  };

  const startAutoCloseTimer = () => {
    clearTimer(); // Clear any existing timer
    timerRef.current = setTimeout(() => {
      setIsDrawerOpen(false);
      timerRef.current = null;
    }, 4000);
  };

  const startZohoAutoCloseTimer = () => {
    clearZohoTimer(); // Clear any existing timer
    zohoTimerRef.current = setTimeout(() => {
      setIsZohoDrawerOpen(false);
      zohoTimerRef.current = null;
    }, 4000);
  };

  const handleServicesClick = () => {
    if (isDrawerOpen) {
      // If already open, close it
      setIsDrawerOpen(false);
      clearTimer();
    } else {
      // Close Zoho drawer if open, then open Services drawer
      setIsZohoDrawerOpen(false);
      clearZohoTimer();
      setIsDrawerOpen(true);
      startAutoCloseTimer();
    }
  };

  const handleZohoClick = () => {
    if (isZohoDrawerOpen) {
      // If already open, close it
      setIsZohoDrawerOpen(false);
      clearZohoTimer();
    } else {
      // Close Services drawer if open, then open Zoho drawer
      setIsDrawerOpen(false);
      clearTimer();
      setIsZohoDrawerOpen(true);
      startZohoAutoCloseTimer();
    }
  };

  const handleDrawerInteraction = () => {
    // Reset timer when user interacts with drawer
    if (isDrawerOpen) {
      startAutoCloseTimer();
    }
  };

  const handleZohoDrawerInteraction = () => {
    // Reset timer when user interacts with Zoho drawer
    if (isZohoDrawerOpen) {
      startZohoAutoCloseTimer();
    }
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    clearTimer();
  };

  const handleCloseZohoDrawer = () => {
    setIsZohoDrawerOpen(false);
    clearZohoTimer();
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimer();
      clearZohoTimer();
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
              <div className="relative">
                <button
                  onClick={handleServicesClick}
                  className="text-gray-700 hover:text-enable-blue transition-colors cursor-pointer"
                >
                  Services
                </button>
              </div>
              <a href="#packages" className="text-gray-700 hover:text-enable-blue transition-colors">
                Packages
              </a>
              <div className="relative">
                <button
                  onClick={handleZohoClick}
                  className="text-gray-700 hover:text-enable-blue transition-colors cursor-pointer"
                >
                  Zoho Apps
                </button>
              </div>
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

      <ZohoAppsDrawer
        isOpen={isZohoDrawerOpen}
        onClose={handleCloseZohoDrawer}
        onMouseEnter={handleZohoDrawerInteraction}
        onMouseLeave={() => {}}
      />
    </>
  )
}

export default Header
