import {CheckOutlined, HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Link from 'next/link'
import MisiDika from "../../../assets/image/misidika.png"
import React from 'react'
import TentangKami from "../../../assets/image/tentangkamii.png"
import ValueKami from "../../../assets/image/valueKami.png"
import VisiDika from "../../../assets/image/visidika.png"

export default function InformasiPerusahaanComponent() {
  return (
    <div>
      <HeroSection title={"PT DIKA"} heading={"Danamas Insan Kreasi Andalan"} description={"PT Danamas Insan Kreasi Andalan atau DIKA merupakan anak perusahaan dari Dana Pensiun Karyawan BCA yang didirikan di Jakarta pada tanggal 2 Mei 2012 dengan fokus bisnis pada sales dan operation outsourcing. Dengan pengalaman yang luas dan performa yang terbukti selama bertahun-tahun, DIKA yakin bisa menjadi mitra bisnis yang andal bagi klien."} image={TentangKami}/>
      <div className='w-full h-auto  px-3'>
            <h1 className='text-center text-2xl font-bold py-6 text-[#0C2543]'>Visi & Misi</h1>
        <div className='flex justify-between flex-wrap'>
            <div className='w-full md:w-1/3 '>
               <h1 className='font-bold text-[#0C2543] text-3xl text-center'>Visi</h1>
               <div className='my-3 w-full'>
                <Image src={VisiDika} alt={"Visi Dika"} className='object-contain mx-auto' width={200} height={200}/>
               </div>
               <p className='text-[#0C2543] text-lg text-left'>Menjadi One Stop Outsourcing Solutions yang andal dan terpercaya bagi mitra untuk mengembangkan bisnisnya.</p>
            </div>
            <div className='w-full md:w-1/3 '>
               <h1 className='font-bold text-[#0C2543] text-3xl text-center'>Misi</h1>
               <div className='my-3 w-full'>
                <Image src={MisiDika} alt={"Misi Dika"} className='object-contain mx-auto' width={200} height={200}/>
               </div>
               <p className='text-[#0C2543] text-lg text-left'>Mengembangkan sumber daya manusia untuk mencapai performa terbaik dan memberikan solusi terpadu bagi klien dalam mencapai tujuan perusahaan.</p>
            </div>
        </div>
        <h1 className='text-2xl text-[#0C2543] font-bold w-full text-center py-6'>Value Kami</h1>
        <div className='flex justify-center flex-wrap items-center h-auto gap-x-32 py-2 md:py-16'>
            <div className='h-[240px] w-[240px] rounded-lg  bg-gradient-to-tr from-[#FFFFFF] to-[#1AA4E3]'>
                <Image src={ValueKami} alt={"Value Kami"} className='object-contain mx-auto translate-x-5 -translate-y-3' width={200} height={200}/>
            </div>
            <div className='flex flex-col gap-y-4 pt-10 md:pt-0'>
                <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-black font-bold">Dinamis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-black font-bold">Integrasi</span>
                </div>
                <div className="flex items-center gap-2">
                 <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-black font-bold">Kekeluargaan</span>
                </div>
                <div className="flex items-center gap-2">
                 <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-black font-bold">Andal</span>
                </div>
            </div>
        </div>
        <div className="flex justify-between flex-wrap gap-8">
            <div className="w-full md:w-1/3 h-auto">
                    <div className="mb-2">
                        <span className="font-bold text-black"><HomeOutlined className="text-black text-2xl"/> Alamat Kantor</span>
                        <h6 className="font-normal text-lg pl-7">Jl. D. Tondano No.4, RT.11/RW.6, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat 10210</h6>
                    </div>
                    <div className="mb-2">
                        <span className="font-bold text-black "><PhoneOutlined className="text-black text-2xl"/> Alamat Kantor</span>
                        <h6 className="font-normal text-lg pl-7">(021) 5020-2121</h6>
                        <h6 className="font-normal text-lg pl-7">Halo DIKA: +62 811-8886-325</h6>
                    </div>
                    <div className="mb-2">
                        <span className="font-bold text-black "><MailOutlined className="text-black text-2xl"/> Email</span>
                        <h6 className="font-normal text-lg pl-7">halodika@ptdika.com</h6>
                    </div>
            </div>
            <div className="w-auto md:w-1/3 h-auto">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.436409382738!2d106.80650307351729!3d-6.206023193781777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7002244a0b1%3A0xffe4f7ca37e465f0!2sPT%20DIKA!5e0!3m2!1sid!2sid!4v1736504627553!5m2!1sid!2sid" className=" w-[350px] md:w-[520px]" height="450"></iframe>
            </div>
        </div>
      </div>
    </div>
  )
}
