'use client';

import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from "next/link";
import LogoDika from "../assets/image/Dika.png"
import { useRouter } from 'next/navigation'

export function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter()
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
        <div className="px-11">
          <div className="flex items-center justify-between h-20 ">
            <div className="flex items-center">
              <span onClick={()=>router.push("/")}  className="flex items-center cursor-pointer">
                <div className="relative w-32 h-12 ml-2">
                  <Image
                    src={LogoDika}
                    alt="DIKA Logo"
                    className="object-contain"
                    width={300}
                    height={300}
                  />
                </div>
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <span onClick={()=>router.push("/")}  className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                Beranda
              </span>
              <div className="relative group">
                <span
                  className="px-4 py-2 flex items-center text-white hover:text-sky-100 cursor-pointer"
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
                    <span onClick={()=>router.push("/outsourcing")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Outsourcing
                    </span>
                    <span onClick={()=>router.push("/teknologi")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Teknologi
                    </span>
                  </div>
                </div>
              </div>
              <span onClick={()=>router.push("/karir")} className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                Karir
              </span>
              <span onClick={()=>router.push("/blog")} className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                Blog
              </span>
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
                    <span onClick={()=> router.push("/informasiperusahaan")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Profil Perusahaan
                    </span>
                    <span onClick={()=> router.push("/clients")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Clients
                    </span>
                    <span  onClick={()=> router.push("/antifraud")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Anti Fraud
                    </span>
                    <span onClick={()=> router.push("/whistleblowingsystem")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Whistleblowing System
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-100 focus:outline-none cursor-pointer"
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
              <span onClick={()=> router.push("/")}  className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Beranda
              </span>
              <div>
                <span
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-layanan' ? null : 'mobile-layanan')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Layanan
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-layanan' ? 'rotate-180' : ''}`} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-layanan' ? 'block' : 'hidden'}`}>
                  <span onClick={()=> router.push("/outsourcing")} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                    Outsourcing
                  </span>
                  <span onClick={()=> router.push("/teknologi")}  className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                    Teknologi
                  </span>
                </div>
              </div>
              <span onClick={()=> router.push("/karir")} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Karir
              </span>
              <span onClick={()=> router.push("/blog")} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Blog
              </span> 
              <div>
                <span 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-tentang' ? null : 'mobile-tentang')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer"
                >
                  Tentang Kami
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-tentang' ? 'rotate-180' : ''}`} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-tentang' ? 'block' : 'hidden'}`}>
                   <span onClick={()=> router.push("/informasiperusahaan")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Profil Perusahaan
                    </span>
                    <span onClick={()=> router.push("/clients")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Clients
                    </span>
                    <span onClick={()=> router.push("/antifraud")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Anti Fraud
                    </span>
                    <span onClick={()=> router.push("/whistleblowingsystem")}   className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Whistleblowing System
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div>
        {children}
      </div>
    </>
  );
}