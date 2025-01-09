"use client"

import { CheckCircleTwoTone, CheckOutlined } from '@ant-design/icons'

import { Button } from 'antd'
import ComproDika from "../../../assets/image/comproDika.png"
import Footer from '@/components/Footer'
import Image from 'next/image'
import Lamp from "../../../assets/image/Lamp.png"
import PeopleOutSourchingOne from '../../../assets/image/peopleOutsourcing.png'
import React from 'react'

interface IProps {
    dataOutsourcing: any[]
}
export default function ComponentOutsourcing({dataOutsourcing}: IProps) {
    console.log("data", dataOutsourcing)
    return (
        <Footer>
        <div className="relative bg-[#0078D7]">
            <div className="flex justify-between items-center h-auto px-10 bg-orange-800">
                {/* Bagian Kiri */}
                <div className=" w-full lg:w-1/2 h-auto ">
                    <div className="absolute -top-10 left-0 z-0">
                        <Image
                        src={Lamp}
                        width={600}
                        height={600}
                        className="object-contain bg-transparent"
                        alt="Lamp Icon"
                        />
                    </div>
                    <div className="absolute top-24 left-0 z-10">
                        <Image
                        src={ComproDika}
                        width={600}
                        height={400}
                        className="object-contain bg-transparent"
                        alt="Company Logo"
                        />
                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="text-white text-left w-auto z-20 lg:w-1/2 h-auto bg-orange-600">
                <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-snug">
                    Solusi Outsourcing Terbaik Bagi Bisnis Anda
                </h1>
                <p className="text-lg lg:text-xl leading-relaxed">
                    PT DIKA menyediakan berbagai solusi outsourcing untuk memenuhi kebutuhan
                    bisnis Anda. Dengan sumber daya manusia yang handal dan performa terbaik
                    sebagai solusi terpadu untuk mengembangkan bisnis Anda.
                </p>
                <Button className="text-[#0C2543] bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] mt-8 px-6 py-3 font-bold rounded-lg">
                    Diskusikan Sekarang
                </Button>
                </div>
            </div>
            {/* Bagian Data Outsourcing */}
            {dataOutsourcing?.map((item: any, index: number) => {
                return (
                    <div className={`${index === 0 ? "mt-[50px]" : "my-20"}`} key={index}>
                        <div className="h-auto mx-14">
                            <div className="flex flex-wrap lg:flex-nowrap justify-between items-start">
                                {/* Deskripsi */}
            <div className="w-full lg:w-1/2 text-black mb-6 lg:mb-0">
              <h1 className="font-bold text-3xl mb-4">{item?.heading}</h1>
              <p className="text-lg mb-4">{item?.bodycontent}</p>
              <ul className="list-disc pl-4">
                {item?.jobsTitle?.map((title: string, indexTitle: number) => {
                  return (
                    <li
                      className="flex items-center text-lg font-medium mb-2"
                      key={indexTitle}
                    >
                      <CheckOutlined className="mr-2 text-[#FFCC0C]" />
                      {title}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Gambar */}
            <div className="w-full lg:w-auto h-[400px] bg-gradient-to-l from-[#00B8FF] to-[#C1EEFF] rounded-xl overflow-hidden flex items-center justify-center">
              <Image
                src={item?.image}
                alt={item?.heading || "Image"}
                width={400}
                height={600}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    );
            })}
        </div>
        </Footer>
    )
}
