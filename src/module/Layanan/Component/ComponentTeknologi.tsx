import CardLayanan from '@/components/CardLayanan'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import SectionHero from "../../../assets/image/HeroSection.png"

interface IProps {
    dataOutsourcing: any[]
}
export default function ComponentTeknologi({dataOutsourcing}: IProps) {
  return (
    <main>
      <HeroSection title={"Dukungan Teknologi & Sistem Aplikasi"} description={"Program outsourcing DIKA didukung dengan teknologi dan sistem aplikasi untuk mempermudah memantau laporan, mengelola, serta mempercepat setiap proses pekerjaan yang dilakukan."} image={SectionHero} buttonText={true} classNameFirstChild="pt-24" classNameImageFirstChild="translate-y-14 md:-translate-y-10 -translate-x-3"/>
    <CardLayanan dataOutsourcing={dataOutsourcing} className='' label='Outsourcing'/>
    </main>
  )
}
