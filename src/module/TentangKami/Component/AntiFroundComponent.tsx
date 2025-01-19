import HeroFooter from '@/components/HeroFooter'
import HeroSection from '@/components/HeroSection'
import InformasiPerusahaan from "../../../assets/image/informasiperusahaan.png"
import Link from 'next/link'
import React from 'react'

export default function AntiFroundComponent() {
  return (
    <main>
        <HeroSection title={"Komitmen DIKA pada Integritas dan Transparansi."} image={InformasiPerusahaan} description='' classNameFirstChild="py-36" classNameImageFirstChild={"md:-translate-y-12 translate-y-4"}/>
        <div className='px-16 w-full h-auto pt-20 pb-32 dark:bg-white'>
            <h1 className='text-left text-2xl text-[#0C2543] font-bold pb-5'>Anti Fraud</h1>
            <p className='text-justify text-lg text-[#0C2543] font-normal'>Komitmen PT DIKA menjalankan bisnis yang adil, jujur, terbuka dan transparan. Dalam rangka memperkuat sistem tata kelola perusahaan yang baik, PT DIKA menyatakan berkomitmen dalam penerapan budaya anti fraud. <Link href={"https://bit.ly/WBSDIKA"} replace target='_blank' className='text-left font-bold underline text-[#007CCE]'>Klik di sini</Link> untuk mengunduh dokumen deklarasi anti fraud kami.</p>
        </div>
        <section className='h-[300px] relative dark:bg-white'>
            <div className='mx-auto'>
                <HeroFooter/>
            </div>
        </section>
    </main>
  )
}
