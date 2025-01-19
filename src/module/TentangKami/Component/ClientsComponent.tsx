import HeroFooter from '@/components/HeroFooter'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import InformasiPerusahaan from "../../../assets/image/informasiperusahaan.png"
import React from 'react'

interface IProps {
    dataClients: any[]
} 
export default function ClientsComponent(props:IProps) {
    const {dataClients} = props
  return (
    <main>
        <HeroSection title={'Menghadirkan Solusi Terbaik Bersama Klien dari Berbagai Sektor Industri.'} description={""} image={InformasiPerusahaan} classNameFirstChild="pt-28 md:py-24" classNameImageFirstChild="translate-y-4 -translate-x-3 md:-translate-y-20"/>
        <section className='pt-10 md:py-16 bg-white px-14'>
            <div className='flex basis-full items-center flex-wrap justify-between md:mx-3 gap-5 md:gap-16 flex-row'>
                {dataClients?.map((item:any, index: number)=>{
                    return (
                        <div key={index}>
                            <Image src={item.image} alt={item.alt} width={0} height={0} className='object-contain md:object-contain md:w-[200px] md:h-[200px] w-10 h-10 p-2' />
                        </div>
                        
                    )
                })}
            </div>
        </section>
        <section className='h-[300px] relative dark:bg-white'>
            <div className='mx-auto'>
                <HeroFooter/>
            </div>
        </section>
    </main>
  )
}
