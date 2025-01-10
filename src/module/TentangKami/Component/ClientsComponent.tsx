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
       <HeroSection description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus interdum interdum."} image={InformasiPerusahaan}/>
        <section className='py-16 bg-white'>
            <div className='flex basis-full items-center flex-wrap justify-between mx-3 gap-16 flex-row'>
                {dataClients?.map((item:any, index: number)=>{
                    return (
                        <div key={index}>
                            <Image src={item.image} alt={item.alt} width={70} height={70} className='object-contain' />
                        </div>
                     
                    )
                })}
            </div>
        </section>
    </main>
  )
}
