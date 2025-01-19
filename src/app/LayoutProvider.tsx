'use client';

import { CloseOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons"
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link'
import LogoDika from "../assets/image/Dika.png"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter()
 const searchParams = useSearchParams();
  console.log("searchParams",searchParams)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-screen z-50 bg-[rgb(27,165,227)] 
      `}>
        <div className="px-11">
          <div className="flex justify-between h-20 items-center">
            <div className="h-auto pb-0">
              <span onClick={()=>router.push("/")} className="flex items-center cursor-pointer">
                <div className="relative w-32 ml-2">
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
              <Link href={"/"} replace>
                <span onMouseEnter={() => setActiveDropdown('/')}
                  onMouseLeave={() => setActiveDropdown(null)} onClick={()=>router.push("/")}  className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                  Beranda
                </span>
              </Link>
              <div className="relative group">
               
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-sky-400 to-sky-500 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === 'layanan' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('layanan')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                  <Link href={"/outsourcing"} replace>
                     <span onClick={()=>router.push("/outsourcing")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Outsourcing
                    </span>
                  </Link>
                  <Link href={"/teknologi"} replace>
                      <span onClick={()=>router.push("/teknologi")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Teknologi
                    </span>
                  </Link>
                  </div>
                </div>
              </div>
              <Link href={"/karir"} replace>
                <span onMouseEnter={() => setActiveDropdown('/karir')} onMouseLeave={() => setActiveDropdown(null)} onClick={()=>router.push("/karir")} className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                Karir
                </span>
              </Link>
              <Link href={"/blog"} replace>
                  <span onMouseEnter={() => setActiveDropdown('/blog')} onMouseLeave={() => setActiveDropdown(null)} onClick={()=>router.push("/blog")} className="px-4 py-2 text-white hover:text-sky-100 cursor-pointer">
                Blog
              </span>
              </Link>
              <div className="relative group">
                <span 
                  className="px-4 py-2 flex items-center text-white hover:text-sky-100"
                   onMouseEnter={() => setActiveDropdown('tentang')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  Tentang Kami
                  <DownOutlined className="ml-1 h-4 w-4" />
                </span>
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-sky-400 to-sky-500 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                    activeDropdown === 'tentang' ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setActiveDropdown('tentang')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="py-1">
                    <Link href={"/informasiperusahaan"} replace>
                      <span onClick={()=> router.push("/informasiperusahaan")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Informasi Perusahaan
                      </span>
                    </Link>
                    <Link href={"/clients"} replace>
                      <span onClick={()=> router.push("/clients")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Clients
                      </span>
                    </Link>
                    <Link href={"/antifraud"} replace>
                      <span onClick={()=> router.push("/antifraud")} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Anti Fraud
                      </span>
                    </Link>
                    <Link href={"/whistleblowingsystem"} replace>
                       <span onClick={()=> router.push("/whistleblowingsystem")}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Whistleblowing System
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <span
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-sky-100 focus:outline-none cursor-pointer"
              >
                {isOpen ? (
                  <CloseOutlined className="h-6 w-6" />
                ) : (
                  <MenuOutlined className="h-6 w-6" />
                )}
              </span>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-r from-sky-400 to-sky-500">
            <Link href={"/"} replace>
                <span onMouseEnter={() => setActiveDropdown('/')}
                  onMouseLeave={() => setActiveDropdown(null)} onClick={()=>{
                     router.push("/")
                     setIsOpen(!isOpen)
                  }} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Beranda
              </span>
            </Link>
              <div>
                <span 
                  onMouseEnter={() => setActiveDropdown('mobile-layanan')}
                  onMouseLeave={() => setActiveDropdown(null)} onClick={() => setActiveDropdown(activeDropdown === 'mobile-layanan' ? null : 'mobile-layanan')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600"
                >
                  Layanan
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-layanan' ? 'rotate-180' : ''}`} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-layanan' ? 'block' : 'hidden'}`}>
                  <Link href={"/outsourcing"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/outsourcing')}
                    onMouseLeave={() => setActiveDropdown(null)}  onClick={()=> {
                      router.push("/outsourcing")
                      setIsOpen(!isOpen)
                    }} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                      Outsourcing
                    </span>
                  </Link>
                  <Link href={"/teknologi"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/teknologi')}
                    onMouseLeave={() => setActiveDropdown(null)} onClick={()=>{
                       router.push("/teknologi")
                       setIsOpen(!isOpen)
                    }} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                      Teknologi
                    </span>
                  </Link>
                </div>
              </div>
              <Link href={"/karir"} replace>
                <span onMouseEnter={() => setActiveDropdown('/karir')} onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                router.push("/karir")
                setIsOpen(!isOpen)
                }} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Karir
                </span>
              </Link>
              <Link href={"/blog"} replace>
                <span onMouseEnter={() => setActiveDropdown('/blog')} onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                  router.push("/blog")
                  setIsOpen(!isOpen)
                }} className="block px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer">
                Blog
              </span> 
              </Link>
              <div>
                <span 
                  onMouseEnter={() => setActiveDropdown('tentang')}
                  onMouseLeave={() => setActiveDropdown(null)} onClick={() => setActiveDropdown(activeDropdown === 'mobile-tentang' ? null : 'mobile-tentang')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-white hover:bg-sky-600 cursor-pointer"
                >
                  Tentang Kami
                  <DownOutlined className={`ml-1 h-4 w-4 transform transition-transform ${activeDropdown === 'mobile-tentang' ? 'rotate-180' : ''}`} onMouseEnter={() => setActiveDropdown('mobile-tentang')}
                  onMouseLeave={() => setActiveDropdown(null)} />
                </span>
                <div className={`pl-4 ${activeDropdown === 'mobile-tentang' ? 'block' : 'hidden'}`}>
                  <Link href={"/informasiperusahaan"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/informasiperusahaan')}
                    onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                      router.push("/informasiperusahaan")
                      setIsOpen(!isOpen)
                    }} className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Informasi Perusahaan
                    </span>
                  </Link>
                  <Link href={"/clients"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/clients')}
                    onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                      router.push("/clients")
                      setIsOpen(!isOpen)
                    }}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Clients
                    </span>
                  </Link>
                  <Link href={"/antifraud"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/antifraud')}
                    onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                      router.push("/antifraud")
                      setIsOpen(!isOpen)
                    }}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Anti Fraud
                    </span>
                  </Link>
                  <Link href={"/whistleblowingsystem"} replace>
                    <span onMouseEnter={() => setActiveDropdown('/whistleblowingsystem')}
                    onMouseLeave={() => setActiveDropdown(null)} onClick={()=> {
                      router.push("/whistleblowingsystem")
                      setIsOpen(!isOpen)
                    }}  className="block px-4 py-2 text-sm text-white hover:bg-sky-600 cursor-pointer">
                      Whistleblowing System
                    </span>
                  </Link>
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