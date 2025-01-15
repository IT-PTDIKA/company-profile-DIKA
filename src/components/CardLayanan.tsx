import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import HeroFooter from "./HeroFooter";
import Image from 'next/image'
import React from 'react'

interface IProps {
    dataOutsourcing: any[]
    className?: string
}
export default function CardLayanan({dataOutsourcing, className}: IProps) {
  return (
    <main>
        <section className="py-20">
        <div className=" mx-auto w-[85%] ">
            <div className="grid grid-cols-1">
                {dataOutsourcing?.map((service: any, index: any) => (
                    <div
                        key={index}
                        className={` pb-7 flex flex-col items-center justify-between ${
                            index % 2 === 0 ? 'md:flex-row-reverse ' : 'md:flex-row '
                        }`}
                    >
                        <div className={`${className} rounded-lg w-full md:w-1/3 h-auto mb-8 md:mb-0`}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                className=" object-contain"
                                width={400}
                                height={400}
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-auto">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-left">
                                {service.title}
                            </h2>
                            <p className="text-black mb-6 text-left text-lg">
                                {service.description}
                            </p>
                            <div
                                className={`${
                                    service.subServices !== null
                                        ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 text-black'
                                        : 'hidden'
                                }`}
                            >
                                {service?.jobsTitle?.map((subService: any, idx: number) => (
                                    <div key={idx} className="flex items-center space-x-2">
                                        <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                                        <span className="text-black font-bold text-lg">{subService}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-14">
                <Button
                    type="default"
                    className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-medium group"
                >
                    Lihat Dukungan Teknologi DIKA
                </Button>
            </div>
        </div>
        </section>
        <section className="h-[300px] relative">
            <div className="mx-auto ">
                <HeroFooter />
            </div>
        </section>
    </main>
  )
}
