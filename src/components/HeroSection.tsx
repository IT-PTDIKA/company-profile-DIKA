"use client"

import { Button, Input as InputAntd } from 'antd'

import Image from 'next/image'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import WhatsAppDika from "../assets/image/whatsApp.png"
import WhatsAppDikaDesktop from "../assets/image/hallodikawhatsapp.png"
import {useRouter} from "next/navigation"

interface IProps {
    className?: string
    title?: string
    heading?: string
    description: string
    image: string | any
    searchKarir?: true | any
    buttonText?: true | any
}
export default function HeroSection(props: IProps) {
    const {className, description, image, title, heading, searchKarir, buttonText} = props
    const router = useRouter()
    return (
    <section className={`bg-[rgb(27,165,227)] text-white overflow-hidden ${className} -z-50 h-screen flex items-end`}>
        <div className="px-11 w-full">
            <div className="flex flex-col-reverse md:flex-row md:space-x-8 justify-between items-center">
                {/* Left Column */}
                <div className="flex-1 order-1 md:order-2  text-center mx-auto md:w-full ">
                    <Image src={image} alt="Hero Section" width={0} height={0} className="object-contain translate-x-0 h-auto md:translate-y-16  w-full md:h-[620px]  mx-auto text-center bg-transparent" />
                </div>
                {/* Left Column */}
                <div className="flex-1 md:mb-0 text-center md:text-left order-1 md:order-2 ">
                    <h1 className={`pb-2 ${title ? " text-3xl md:text-5xl font-bold" : "hidden"}`}>
                        {title}
                    </h1>
                    {searchKarir && (
                        <div className=' w-full h-[10px]'>
                            <InputAntd 
                                addonBefore={<SearchOutlined className='text-white' />} 
                                placeholder='Cari pekerjaan sesuai dengan keterampilan disini...' 
                                className='rounded-lg w-10/12 border-solid border border-white h-auto custom-placeholder' 
                                disabled
                            />
                        </div>
                    )}
                    <p className={`pb-2 ${heading ? "text-sm md:text-xl font-bold" : "hidden"}`}>
                        {heading}
                    </p>
                    <p className="text-sm md:text-xl pb-2">
                        {description}
                    </p>
                    {buttonText && (<Button className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-bold w-full md:w-auto">
                        DISKUSIKAN SEKARANG
                    </Button>)}
                    <div className='relative'>
                        <Image src={WhatsAppDika} alt={"WhatsApp Dika"} className="object-fill bg-transparent fixed top-3/4 right-0 z-50 cursor-pointer md:hidden block" width={100} height={100} onClick={() => window.open("https://wa.me/628118886325","_blank")} />
                        <Image src={WhatsAppDikaDesktop} alt={"WhatsApp Dika"} className="object-fill bg-transparent fixed top-3/4 right-0 z-50 cursor-pointer md:block hidden" width={250} height={250} onClick={() => window.open("https://wa.me/628118886325","_blank")} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
