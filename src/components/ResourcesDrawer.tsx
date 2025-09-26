import { useState } from 'react';

interface ResourcesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ResourcesDrawer = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: ResourcesDrawerProps) => {
  const menuItems = [
    { title: 'Get a Free Trial', href: '/resources/zoho-crm-free-trial' },
    { title: 'Blog', href: '/resources/blog' },
    { title: 'About Us', href: '/resources/about' },
    { title: 'Contact Us', href: '/resources/contact' },
  ];

  // Calculate dynamic height: header (96px) + padding (32px) + (items * 44px each)
  const dynamicHeight = 96 + 32 + (menuItems.length * 44);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 w-[450px] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 rounded-r-3xl overflow-hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          top: '20vh',
          height: `${dynamicHeight}px`,
          borderTopRightRadius: '24px',
          borderBottomRightRadius: '24px',
          backgroundColor: 'white'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Green Header Band */}
        <div className="bg-green-500 text-white py-6 pr-6 text-right">
          <a
            href="/resources"
            className="font-medium text-2xl hover:opacity-80 transition-opacity"
            style={{fontFamily: 'Montserrat, sans-serif'}}
            onClick={onClose}
          >
            Resources
          </a>
        </div>

        <div className="pr-6 pt-3 pb-8">

          {/* Menu Items */}
          <nav className="space-y-0">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-white transition-all duration-200 rounded-lg hover:bg-green-500 text-right"
                style={{fontFamily: 'Montserrat, sans-serif', fontWeight: 400}}
                onClick={() => {
                  onMouseEnter(); // Reset timer on click
                  onClose();
                }}
              >
                <span className="text-xl">{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default ResourcesDrawer;