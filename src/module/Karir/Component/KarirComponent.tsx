import {Select, SelectProps} from 'antd'

import { EnvironmentOutlined } from "@ant-design/icons";
import HeroFooter from "@/components/HeroFooter";
import HeroSection from "@/components/HeroSection";
import Image from "next/image"
import KarirDika from "../../../assets/image/heroKarir.png"
import React from 'react'

type LabelRender = SelectProps['labelRender'];
interface IProps {
    dataKarir?: any[]
    handleOpenModaDetailJobs: () => void
    selectedDetailJobs: any
}
export default function KarirComponent(props:IProps) {
    const {dataKarir, handleOpenModaDetailJobs, selectedDetailJobs} = props

    const handleChange = (value: string) =>{
        console.log("value", value)
    }
    const labelRender:  LabelRender = (props:any) =>{
        const {label, value} = props
        if(label){
            return value
        }
        return <span>Urutan</span>
    }
  return (
    <main>
        <HeroSection title={"Temukan Pekerjaan Impian Kamu Sekarang Juga!"} description="" heading="" image={KarirDika} searchKarir={true}/>
        <section className='h-auto py-8 px-11 '>
            <div className='flex justify-between mb-4 flex-wrap'>
                <h1 className='font-bold text-xl md:text-3xl lowercase tracking-widest'>Lowongan Pekerjaan Terbaru</h1>
                <Select labelRender={labelRender} placeholder={<span className="text-black font-bold">Urutan</span>} 
                allowClear style={{width:200}} 
                onChange={handleChange} 
                options={[
                { 
                    label: <span>Urutan</span>, title: "Urutan", 
                    options:[
                    {
                        label: <span>Paling Baru</span>, 
                        value: "Paling Baru"
                    },
                    {
                        label: <span>Paling Lama</span>, 
                        value: "Paling Lama"
                    }
                    ]}
                ]}/>
            </div>
            <div className="grid grid-cols-2 gap-6 px-4 sm:px-8 justify-center md:grid-cols-3 lg:grid-cols-4">
                {dataKarir?.map((item: any, index: number) => (
                    <div
                    className="flex flex-col rounded-lg shadow-lg border-solid border w-full bg-[#FFFFFF]"
                    key={index}
                    >
                        <div className="h-auto w-full">
                            {/* Gambar */}
                            <Image
                            src={item?.gambar}
                            alt={"Karir Agent Desk Collection"}
                            width={0}
                            height={0}
                            className="rounded-t-lg object-contain w-full h-auto"
                            />

                            {/* Konten */}
                            <div className="p-2 md:p-4 flex flex-col">
                            <h1 className="rounded-md text-left md:text-center bg-[#00B8FF] text-white  md:mx-auto text-sm w-9/12 px-2 py-1">
                                {item?.tangalKarir}
                            </h1>
                            <h1 className="text-[#747A82] text-sm md:uppercase lowercase leading-none md:leading-6 pt-3 pb-2">
                                LOWONGAN PEKERJAAN
                            </h1>
                            <div className="font-bold text-sm md:text-lg text-wrap h-10  truncate">{item?.pekerjaan}</div>

                            <div className="flex justify-between flex-wrap items-center">
                                <span className="text-sm sm:text-lg flex items-center">
                                <EnvironmentOutlined className="text-lg pr-1" /> {item?.lokasi}
                                </span>
                            </div>
                                <div
                                        onClick={() => {
                                            handleOpenModaDetailJobs();
                                            selectedDetailJobs({
                                            pekerjaan: item?.pekerjaan,
                                            lokasi: item?.lokasi,
                                            tangalKarir: item?.tangalKarir,
                                            gambar: item?.gambar,
                                            });
                                        }}
                                        className="underline text-sm font-bold text-[#007CCE] decoration-[#FFDB0C] underline-offset-4 cursor-pointer text-right w-full pt-4 flex justify-end items-end h-10"
                                        >
                                        SELENGKAPNYA
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
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
