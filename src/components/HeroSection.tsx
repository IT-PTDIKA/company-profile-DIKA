import { Button, Input as InputAntd } from 'antd'

import Image from 'next/image'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'

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
    return (
    <section className={`bg-[#1AA4E3] text-white overflow-hidden ${className} -z-50 h-screen flex items-end`}>
        <div className="px-11 w-full">
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-8 justify-between">
                {/* Left Column */}
                <div className="flex-1 order-1 md:order-2  pt-20 text-center md:text-left">
                    <Image src={image} alt="Hero Section" width={610} height={850} className="object-contain translate-y-6 ml-0 md:ml-[-80px]" />
                </div>
                
                {/* Left Column */}
                <div className="flex-1 mb-8 md:mb-0 text-center md:text-left order-1 md:order-2 items-end  h-full">
                    <h1 className={`${title ? "text-4xl md:text-5xl font-bold mb-6" : "hidden"}`}>
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
                    <p className={`${heading ? "text-sm md:text-xl font-bold mb-6" : "hidden"}`}>
                        {heading}
                    </p>
                    <p className="text-xl mb-8">
                        {description}
                    </p>
                    {buttonText && (<Button className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-bold w-full md:w-auto">
                        DISKUSIKAN SEKARANG
                    </Button>)}
                </div>
            </div>
        </div>
    </section>
    )
}
