import { DoubleRightOutlined, FacebookOutlined, InstagramOutlined, LinkOutlined, LinkedinOutlined, RightOutlined, TikTokOutlined } from '@ant-design/icons';

import React from 'react'

interface IProps {
    children: any
} 
export default function Footer(props: IProps) {
    const {children} = props
    return (
    <>
        {children}
       <div className='bg-[#0C2543] h-auto pt-20 px-3 pb-10 mb:pb-0'>
            <div className='flex justify-between gap-16 flex-wrap'>
                <div className='flex basis-full md:basis-1/2 gap-0 md:gap-4 '>
                    <div className='basis-full md:basis-1/4 px-4 md:px-0'>
                        <h2 className='text-white font-bold mb-2'>Beranda</h2>
                        <h2 className='text-white font-bold mb-2'>Layanan</h2>
                        <ul className='list-none text-white'>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Outsourcing</span></li>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Teknologi</span></li>
                        </ul>
                    </div>
                    <div className='basis-full md:basis-1/4 px-4 md:px-0'>
                        <h2 className='text-white font-bold mb-2'>Karir</h2>
                        <h2 className='text-white font-bold mb-2'>Blog</h2>
                        <h2 className='text-white font-bold mb-2'>Tentang Kami</h2>
                        <ul className='list-none text-white'>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Informasi Perusahaan</span></li>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Clients</span></li>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Anti Fraud</span></li>
                            <li><RightOutlined className='font-bold text-sm md:text-lg mb-2'/><span>Whistleblowing System</span></li>
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-1/4 -mt-5 md:mt-0 '>
                    <h2 className='text-white font-bold'>Head Office</h2>
                    <p className='text-white'>Jl. D.Tonando No.4 Rt:011 Rw:06, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210</p>
                    <h2 className='text-white font-bold mt-3'>Hubungi Kami</h2>
                    <p className='text-white'>(021) 5020-2121</p>
                    <p className='text-white'>Halo Dika: +62 811-8886-325</p>
                </div>
            </div>
            <div className='mt-4  w-auto'>
                <p className='font-bold text-xl text-white text-center'>Follow Up on:</p>
                <div className='flex gap-3 justify-center mt-2'>
                    <FacebookOutlined className='text-xl font-medium bg-white rounded-xl p-3'/>
                    <TikTokOutlined className='text-xl font-medium bg-white rounded-xl p-3'/>
                    <InstagramOutlined className='text-lg font-medium bg-white rounded-xl p-3'/>
                    <LinkedinOutlined className='text-lg font-medium bg-white rounded-xl p-3'/>
                </div>
                    <p className='text-white text-center mt-2'>&copy; 2024 All Rights Reseverd PT. DIKA</p>
            </div>
        </div>
    </>
  )
}
