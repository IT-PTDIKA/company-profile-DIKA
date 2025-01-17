import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, RightOutlined, TikTokOutlined } from '@ant-design/icons';

import Link from 'next/link';
import React from 'react'

interface IProps {
    children: any
} 
export default function Footer(props: IProps) {
    const {children} = props
    return (
    <>
        {children}
       <div className='bg-[#0C2543] h-screen md:h-auto pt-32 px-11 md:px-14 mb:pb-0'>
            <div className='flex justify-start md:justify-between gap-0 md:gap-16 flex-wrap'>
                <div className='flex basis-full md:basis-1/2 gap-0 md:gap-4  md:justify-between'>
                    <div className='w-[62%] md:basis-full md:px-0 '>
                        <h2 className='text-white font-bold mb-2'>Beranda</h2>
                        <h2 className='text-white font-bold mb-2'>Layanan</h2>
                        <ul className='list-none text-white'>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Outsourcing</span></li>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Teknologi</span></li>
                        </ul>
                    </div>
                    <div className='w-full md:basis-full px-0'>
                        <h2 className='text-white font-bold mb-2'>Karir</h2>
                        <h2 className='text-white font-bold mb-2'>Blog</h2>
                        <h2 className='text-white font-bold mb-2'>Tentang Kami</h2>
                        <ul className='list-none text-white'>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Informasi Perusahaan</span></li>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Clients</span></li>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Anti Fraud</span></li>
                            <li><RightOutlined className='font-bold text-sm mb-2 pr-1'/><span>Whistleblowing System</span></li>
                        </ul>
                    </div>
                </div>
                <div className='flex w-full md:w-1/4  md:mt-0  flex-wrap flex-row pt-5 md:pt-0'>
                    <div className='w-auto  h-auto text-justify'>
                        <h2 className='text-white font-bold'>Head Office</h2>
                        <span className='text-white'>Jl. D.Tonando No.4 Rt:011 Rw:06, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210</span>
                    </div>
                    <div className='w-full  h-auto'>
                        <h2 className='text-white font-bold mt-3'>Hubungi Kami</h2>
                        <p className='text-white'>(021) 5020-2121</p>
                        <p className='text-white'>Halo Dika: +62 811-8886-325</p>
                    </div>
                </div>
            </div>
            <div className='pt-8  w-auto'>
                <p className='font-bold text-xl text-white text-center'>Follow Up on:</p>
                    <div className='flex gap-3 justify-center mt-2'>
                        <Link href="https://www.facebook.com/ptdika.ptdika" target='_blank'>
                            <FacebookOutlined className='text-xl font-medium bg-white rounded-3xl p-3'/>
                        </Link>
                        <Link href={"https://www.tiktok.com/@ptdika_"} target='_blank'>
                            <TikTokOutlined className='text-xl font-medium bg-white rounded-3xl p-3'/>
                        </Link>
                        <Link href="https://www.instagram.com/ptdikaofficial" target='_blank'>
                            <InstagramOutlined className='text-lg font-medium bg-white rounded-3xl p-3'/>
                        </Link>
                        <Link href="https://www.instagram.com/ptdikaofficial" target='_blank'>
                            <LinkedinOutlined className='text-lg font-medium bg-white rounded-3xl p-3'/>
                        </Link>
                        
                    </div>
                <p className='text-white text-center mt-2'>&copy; 2024 All Rights Reseverd PT. DIKA</p>
            </div>
        </div>
    </>
  )
}
