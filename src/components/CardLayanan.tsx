import { Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Image from 'next/image'
import React from 'react'

interface IProps {
    dataOutsourcing: any[]
}
export default function CardLayanan({dataOutsourcing}: IProps) {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16">
                {dataOutsourcing?.map((service: any, index: any) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center justify-between ${
                            index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                        }`}
                    >
                        <div className="bg-gradient-to-tr from-[#FFFFFF] to-[#1AA4E3] rounded-lg w-full md:w-1/3 h-auto mb-8 md:mb-0">
                            <Image
                                src={service.image}
                                alt={service.title}
                                className="rounded-lg object-contain"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="w-full md:w-1/2 h-auto">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-left">
                                {service.title}
                            </h2>
                            <p className="text-black mb-6 text-center md:text-left">
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
                                        <span className="text-black font-bold">{subService}</span>
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
  )
}