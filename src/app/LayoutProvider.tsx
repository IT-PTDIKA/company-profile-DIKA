'use client';

import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from "next/link";
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
        <div className="mx-auto">
          <div className="flex items-center justify-between h-20 ">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative w-32 h-12 ml-2">
                  <Image
                    src={LogoDika}
                    alt="DIKA Logo"
                    className="object-contain"
                    width={300}
                    height={300}
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="px-4 py-2 text-white hover:text-sky-100">
                Beranda
              </Link>
              <div className="relative group">
                <span
                  className="px-4 py-2 flex items-center text-white hover:text-sky-100"
                  onMouseEnter={() => setActiveDropdown('layanan')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Layanan
                  <DownOutlined className="ml-1 h-4 w-4" />
                </span>
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-sky-400 to-sky-500 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === 'layanan' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('layanan')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    <Link href="/outsourcing" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Outsourcing
                    </Link>
                    <Link href="/teknologi" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Teknologi
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="#" className="px-4 py-2 text-white hover:text-sky-100">
                Karir
              </Link>
              <Link href="#" className="px-4 py-2 text-white hover:text-sky-100">
                Blog
              </Link>
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
                    <Link href="/informasiperusahaan" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Profil Perusahaan
                    </Link>
                    <Link href="/clients" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Clients
                    </Link>
                    <Link href="/antifraud" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Anti Fraud
                    </Link>
                    <Link href="/whistleblowingsystem" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Whistleblowing System
                    </Link>
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
              <Link href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Beranda
              </Link>
              <div>
                <span
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-layanan' ? null : 'mobile-layanan')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Layanan
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-layanan' ? 'rotate-180' : ''}`} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-layanan' ? 'block' : 'hidden'}`}>
                  <Link href="/outsourcing" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Outsourcing
                  </Link>
                  <Link href="/teknologi" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                    Teknologi
                  </Link>
                </div>
              </div>
              <Link href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Karir
              </Link>
              <Link href="#" className="block px-3 py-2 rounded-md text-white hover:bg-sky-600">
                Blog
              </Link>
              <div>
                <span 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-tentang' ? null : 'mobile-tentang')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Tentang Kami
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-tentang' ? 'rotate-180' : ''}`} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-tentang' ? 'block' : 'hidden'}`}>
                   <Link href="/informasiperusahaan" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Profil Perusahaan
                    </Link>
                    <Link href="/clients" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Clients
                    </Link>
                    <Link href="/antifraud" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Anti Fraud
                    </Link>
                    <Link href="/whistleblowingsystem" className="block px-4 py-2 text-sm text-white hover:bg-sky-600">
                      Whistleblowing System
                    </Link>
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