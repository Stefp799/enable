import { useState } from 'react';

interface DrawerNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DrawerNavigation = ({ isOpen, onClose, onMouseEnter, onMouseLeave }: DrawerNavigationProps) => {
  const menuItems = [
    { title: 'CRM Solutions', href: '/services/crm' },
    { title: 'Sales Automation', href: '/services/automation' },
    { title: 'Custom Development', href: '/services/development' },
    { title: 'Data Migration', href: '/services/migration' },
    { title: 'Training & Support', href: '/services/training' },
  ];

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
        className={`fixed left-0 w-[450px] shadow-2xl transform transition-transform duration-300 ease-in-out z-50 rounded-r-3xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          background: 'linear-gradient(to right, #1e1b4b, #00E5F0 75%)',
          top: '20vh',
          height: '60vh',
          borderTopRightRadius: '24px',
          borderBottomRightRadius: '24px'
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="pl-8 pr-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-black text-3xl mb-2" style={{color: '#000000', fontFamily: 'Montserrat, sans-serif', fontWeight: 600}}>Services</h2>
            <div className="w-16 h-0.5" style={{backgroundColor: '#000000'}}></div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-3 px-2 text-black transition-colors duration-200 text-right"
                style={{color: '#000000', fontFamily: 'Montserrat, sans-serif', fontWeight: 500}}
                onClick={() => {
                  onMouseEnter(); // Reset timer on click
                  onClose();
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.background = 'linear-gradient(to right, transparent 25%, #1e1b4b 25%)';
                  e.currentTarget.style.borderRadius = '12px';
                  e.currentTarget.style.backgroundClip = 'padding-box';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderRadius = '0px';
                }}
              >
                <span className="text-lg font-medium">{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default DrawerNavigation;