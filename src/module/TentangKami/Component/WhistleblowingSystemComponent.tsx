import HeroFooter from '@/components/HeroFooter'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import InformasiPerusahaan from "../../../assets/image/informasiperusahaan.png"
import Link from 'next/link'
import React from 'react'
import whistleblowingsystem from "../../../assets/image/whistleblowingsystem.png"

export default function WhistleblowingSystemComponent() {
  return (
    <main>
      <HeroSection title={"Komitmen DIKA pada Integritas dan Transparansi."} description={""} image={InformasiPerusahaan} classNameFirstChild="py-36"  classNameImageFirstChild={"md:-translate-y-12 translate-y-4"}/>
      <section className='px-14 w-full h-auto pt-20 pb-10 dark:bg-white'>
        <h1 className='text-left text-[#0C2543] font-bold text-xl md:text-2xl mb-2'>Whistleblowing System PT Danamas Insan Kreasi Andalan (PT DIKA)</h1>
        <p className='text-justify text-black text-lg'>PT DIKA berkomitmen membangun lingkungan bisnis yang sehat, sesuai dengan budaya yang ada Dinamis, Integritas, Kekeluargaan, dan Andal. Untuk menjaga komitmen tersebut, kami memiliki sarana pelaporan:</p>
      </section>
      <section className='px-14 w-full pb-10 dark:bg-white'>
        <h1 className='text-[#0C2543] font-bold text-lg md:text-2xl text-justify md:text-left'>Whistleblowing System (WBS)</h1>
        <p className='text-lg text-[#0C2543] font-bold'>Jenis-jenis perbuatan yang tergolong fraud adalah:</p>
        <ul className='text-[#0C2543] px-6 text-lg' style={{listStyleType: "disc"}}>
            <li>Kecurangan;</li>
            <li>Penipuan;</li>
            <li>Penggelapan aset;</li>
            <li>Pembocoran informasi; dan</li>
            <li>Tindak pidana penyalahgunaan dana/jabatan.</li>
        </ul>
      </section>
      <section className='px-14 w-full pb-10 dark:bg-white'>
        <h1 className='text-[#0C2543] font-bold text-2xl'>Kerahasiaan Pelapor</h1>
        <p className='text-justify text-[#0C2543] text-lg'>Dalam penerapan whistleblowing system, PT DIKA  akan menjamin kerahasiaan identitas pelapor dan isi laporan yang disampaikan.</p>
      </section>
      <section className='w-full pb-10 dark:bg-white'>
        <h1 className='px-14 font-bold text-[#0C2543] text-2xl'>Alur WBS PT. DIKA</h1>
        <Image src={whistleblowingsystem} alt={"whistleblowingsystem"} className="object-contain w-screen h-auto bg-green-700" width={0} height={0}/>
      </section>
      <section className='px-14 w-full pb-10 dark:bg-white'>
        <h1 className='font-bold text-[#0C2543] text-2xl'>Pelaporan WBS</h1>
        <p className='text-lg text-[#0C2543] font-normal'>Pelaporan dapat mengisi form <Link href={"bit.ly/WBSDIKA"} replace className='text-font-bold text-[#0C2543] text-lg underline' target='_blank'>bit.ly/WBSDIKA</Link> dan menghubungi via email <Link href={"mailto:wbs@ptdika.com"} className='text-[#0C2543] text-lg font-bold underline' replace target='_blank'>wbs@ptdika.com</Link> atau via whatsapp <Link href={"https://wa.me/6282210954900"} className='text-[#0C2543] text-lg font-bold underline' replace target='_blank'>082210954900</Link> (chat only).</p>
      </section>
      <section className="h-[300px] relative dark:bg-white">
        <div className="mx-auto ">
            <HeroFooter />
        </div>
      </section>
    </main>
  )
}
