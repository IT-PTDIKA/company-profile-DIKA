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
        <section className='h-auto py-8 '>
            <div className='flex justify-between mb-4 px-11'>
                <h1 className='font-bold text-3xl'>Lowongan Pekerjaan Terbaru</h1>
                <Select labelRender={labelRender} placeholder={<span className="text-black font-bold">Urutan</span>} allowClear style={{width:200}} onChange={handleChange} options={[
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
            <div className="flex flex-wrap gap-6 px-11 justify-center">
                {dataKarir?.map((item: any, index: number) => (
                    <div className="flex flex-col  rounded-lg shadow-lg border-solid border bg-[#FFFFFF]" key={index}>
                        <div className="h-[440px] w-[400px]">
                            <Image src={item?.gambar} alt={"Karir Agent Desk Collection"} width={400} height={300} className=' rounded-lg'/>
                            <div className="p-2 flex flex-col">
                                <h1 className="rounded-lg text-center bg-[#00B8FF] text-white w-1/2">{item?.tangalKarir}</h1>
                                <h1 className="text-[#747A82] text-sm uppercase leading-6 pt-3">LOWONGAN PEKERJAAN</h1>
                                <span className="font-bold text-xl text-wrap text-ellipsis overflow-y-hidden">{item?.pekerjaan}</span>
                                <div className="flex justify-between pt-3">
                                    <span className="text-xl flex items-center"><EnvironmentOutlined className="text-lg" /> {item?.lokasi}</span>
                                    <span onClick={()=>{
                                        handleOpenModaDetailJobs()
                                        if(item?.pekerjaan === item?.pekerjaan){
                                            selectedDetailJobs({
                                                pekerjaan : item?.pekerjaan,
                                                lokasi : item?.lokasi,
                                                tangalKarir : item?.tangalKarir,
                                                gambar: item?.gambar
                                            })
                                        }
                                    }} className="underline text-lg font-bold text-[#007CCE] decoration-[#FFDB0C] underline-offset-4 cursor-pointer uppercase">selengkapnya</span>
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
