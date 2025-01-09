'use client';

import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';

import Image from 'next/image';
import LogoDika from "../assets/image/Dika.png"

export function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 bg-[#1AA4E3]
      `}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <div className="relative w-32 h-12">
                  <Image
                    src={LogoDika}
                    alt="DIKA Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="px-4 py-2 text-white hover:text-sky-100">
                Beranda
              </a>
              <div className="relative group">
                <button 
                  className="px-4 py-2 flex items-center text-white hover:text-sky-100"
                  onMouseEnter={() => setActiveDropdown('layanan')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Layanan
                  <DownOutlined className="ml-1 h-4 w-4" />
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-sky-400 to-sky-500 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === 'layanan' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('layanan')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Outsourcing
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Payroll Management
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Training
                    </a>
                  </div>
                </div>
              </div>
              <a href="#" className="px-4 py-2 text-white hover:text-sky-100">
                Karir
              </a>
              <a href="#" className="px-4 py-2 text-white hover:text-sky-100">
                Blog
              </a>
              <div className="relative group">
                <button 
                  className="px-4 py-2 flex items-center text-white hover:text-sky-100"
                  onMouseEnter={() => setActiveDropdown('tentang')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Tentang Kami
                  <DownOutlined className="ml-1 h-4 w-4" />
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-sky-400 to-sky-500 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === 'tentang' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('tentang')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Profil Perusahaan
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Visi & Misi
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Kontak
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-100 focus:outline-none"
              >
                {isOpen ? (
                  <CloseOutlined className="h-6 w-6" />
                ) : (
                  <MenuOutlined className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-sky-400 to-sky-500">
              <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Beranda
              </a>
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-layanan' ? null : 'mobile-layanan')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Layanan
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-layanan' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 ${activeDropdown === 'mobile-layanan' ? 'block' : 'hidden'}`}>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Outsourcing
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Payroll Management
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Training
                  </a>
                </div>
              </div>
              <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Karir
              </a>
              <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Blog
              </a>
              <div>
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-tentang' ? null : 'mobile-tentang')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Tentang Kami
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-tentang' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 ${activeDropdown === 'mobile-tentang' ? 'block' : 'hidden'}`}>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Profil Perusahaan
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Visi & Misi
                  </a>
                  <a href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Kontak
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-20">
        {children}
      </div>
    </>
  );
}