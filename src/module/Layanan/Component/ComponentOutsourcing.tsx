"use client"

import CardLayanan from "@/components/CardLayanan";
import HeroSection from "@/components/HeroSection";
import Outsourcing from "../../../assets/image/comproDika.png"
import React from 'react'

interface IProps {
    dataOutsourcing: any[]
}
export default function ComponentOutsourcing({dataOutsourcing}: IProps) {
    return (
    <main>
        <HeroSection title={"Solusi Outsourcing Terbaik Bagi Bisnis Anda"} description="PT DIKA menyediakan berbagai solusi outsourcing untuk memenuhi kebutuhan bisnis Anda. Dengan sumber daya manusia yang handal dan performa terbaik sebagai solusi terpadu untuk mengembangkan bisnis Anda." image={Outsourcing} buttonText={true}/>
        <CardLayanan dataOutsourcing={dataOutsourcing} className="bg-gradient-to-tr from-[#FFFFFF] to-[#1AA4E3]"/>
    </main>
    )
}
