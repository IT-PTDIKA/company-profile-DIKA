import { Button } from 'antd'
import Image from 'next/image'
import React from 'react'

interface IProps {
    className?: string
    title?: string
    heading?: string
    description: string
    image: string | any
}
export default function HeroSection(props: IProps) {
    const {className, description, image, title, heading} = props
  return (
    <section className={`bg-[#1AA4E3] text-white overflow-hidden ${className} -z-50 min-h-screen flex items-center`}>
        <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
               {/* Right Column */}
                <div className="flex-1 order-2 md:order-1">
                    <Image src={image} alt="Hero Section" width={610} height={610} className="object-contain mx-auto md:mx-0" />
                </div>
               
                {/* Left Column */}
                <div className="flex-1 mb-8 md:mb-0 text-center md:text-left order-1 md:order-2">
                    <h1 className={`${title ? "text-4xl md:text-5xl font-bold mb-6" : "hidden"}`}>
                        {title}
                    </h1>
                    <p className={`${heading ? "text-sm md:text-xl font-bold mb-6" : "hidden"}`}>
                        {heading}
                    </p>
                    <p className="text-xl mb-8">
                        {description}
                    </p>
                    <Button className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-bold">
                        DISKUSIKAN SEKARANG
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}
