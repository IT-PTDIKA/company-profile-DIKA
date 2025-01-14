"use client"

import {Button, Form as FormANTD} from "antd"
import {CheckOutlined, HomeOutlined, MailOutlined, PhoneOutlined} from "@ant-design/icons";
import { Field, Form } from 'react-final-form'

import HeroSection from '@/components/HeroSection'
import Image from 'next/image'
import Input from "@/components/Input";
import MisiDika from "../../../assets/image/misidika.png"
import React from 'react'
import TentangKami from "../../../assets/image/tentangkamii.png"
import ValueKami from "../../../assets/image/valueKami.png"
import VisiDika from "../../../assets/image/visidika.png"

interface IProps {
  handleSubmit: (_vals:any) => void  
} 
export default function InformasiPerusahaanComponent(props: IProps) {
  const {handleSubmit} = props
  return (
    <main>
      <HeroSection title={"PT DIKA"} heading={"Danamas Insan Kreasi Andalan"} description={"PT Danamas Insan Kreasi Andalan atau DIKA merupakan anak perusahaan dari Dana Pensiun Karyawan BCA yang didirikan di Jakarta pada tanggal 2 Mei 2012 dengan fokus bisnis pada sales dan operation outsourcing. Dengan pengalaman yang luas dan performa yang terbukti selama bertahun-tahun, DIKA yakin bisa menjadi mitra bisnis yang andal bagi klien."} image={TentangKami}/>
      <section className='px-11 pt-11'>
        <h1 className='text-center text-3xl font-bold text-[#0C2543]'>Visi & Misi</h1>
        <div className='flex justify-between flex-wrap items-start py-24'>
            <div className='w-full md:w-1/3 '>
               <h1 className='font-bold text-[#0C2543] text-3xl text-center'>Visi</h1>
               <div className='my-3 w-full'>
                <Image src={VisiDika} alt={"Visi Dika"} className='object-contain mx-auto' width={200} height={200}/>
               </div>
               <p className='text-[#0C2543] text-lg text-left'>Menjadi One Stop Outsourcing Solutions yang andal dan terpercaya bagi mitra untuk mengembangkan bisnisnya.</p>
            </div>
            <div className='w-full md:w-1/3 '>
               <h1 className='font-bold text-[#0C2543] text-3xl text-center'>Misi</h1>
               <div className='my-3 w-full'>
                <Image src={MisiDika} alt={"Misi Dika"} className='object-contain mx-auto' width={200} height={200}/>
               </div>
               <p className='text-[#0C2543] text-lg text-left'>Mengembangkan sumber daya manusia untuk mencapai performa terbaik dan memberikan solusi terpadu bagi klien dalam mencapai tujuan perusahaan.</p>
            </div>
        </div>
        
      </section>
      <section >
        <div className=" mx-auto">
          <h1 className='text-3xl text-[#0C2543] font-bold w-full text-center'>Value Kami</h1>
          <div className='flex justify-center flex-wrap items-center h-auto gap-x-32 py-2 md:py-16'>
              <div className='h-[350px] w-[350px] rounded-lg  bg-gradient-to-tr from-[#FFFFFF] to-[#1AA4E3]'>
                  <Image src={ValueKami} alt={"Value Kami"} className='object-contain mx-auto translate-x-5 -translate-y-7' width={300} height={300}/>
              </div>
              <div className='flex flex-col gap-y-4 pt-10 md:pt-0'>
                  <div className="flex items-center gap-2">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-2xl text-[#0C2543] font-bold">Dinamis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-2xl text-[#0C2543] font-bold">Integrasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-2xl text-[#0C2543] font-bold">Kekeluargaan</span>
                  </div>
                  <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-2xl text-[#0C2543] font-bold">Andal</span>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-11 flex justify-between items-center flex-wrap">
          <div className="w-full md:w-1/3 flex items-center justify-center flex-col ">
              <div className="w-full bg-white">
                <h1 className="font-bold text-black"><HomeOutlined className="text-black text-2xl text-left"/> Alamat Kantor</h1>
                <div className="pl-7">
                  <span>Jl. D. Tondano No.4, RT.11/RW.6, Bend. Hilir, Kecamatan Tanah Abang, Kota Jakarta Pusat 10210</span>
                </div>
                <h1 className="font-bold text-black"><PhoneOutlined className="text-black text-2xl text-left"/> Nomor Telepon</h1>
                <div className="pl-7">
                  <span>(021) 5020-2121</span>
                  <span>Halo DIKA: +62 811-8886-325</span>
                </div>
                <h1 className="font-bold text-black"><MailOutlined className="text-black text-2xl"/> Email</h1>
                <div className="pl-7">
                  <span>halodika@ptdika.com</span>
                </div>
              </div>
          </div>
          <div className="w-auto md:w-auto  flex items-center justify-center ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.436409382738!2d106.80650307351729!3d-6.206023193781777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7002244a0b1%3A0xffe4f7ca37e465f0!2sPT%20DIKA!5e0!3m2!1sid!2sid!4v1736504627553!5m2!1sid!2sid" className="w-[350px] md:w-[520px]" height="450"></iframe>
          </div>
        </div>
      </section>
      <section className=" bg-gradient-to-l from-[#FFFFFF] to-[#1AA4E3] h-screen flex items-center justify-center">
        <div className="mx-auto w-[500px] rounded-lg">
          <Form
            keepDirtyOnReinitialize
            onSubmit={handleSubmit}
            // subscription={{ values: true }}
          >
            {(formProps) => {
              const { handleSubmit, dirty, form, invalid } = formProps
          
              return (
                <FormANTD
                  layout="vertical"
                  onFinish={handleSubmit}
                >
                  <div className="w-full bg-gray-100 p-5 h-auto rounded-md">
                    <h1 className="text-left font-bold text-3xl pb-2">Hubungi Kami</h1>
                    <p className="text-sm font-normal">Temukan solusi outsourcing terbaik untuk kebutuhan bisnis Anda! Isi formulir di bawah ini, dan tim kami akan segera menghubungi Anda.</p>
                    <div className="w-full flex flex-col items-center justify-center pt-3">
                        <div className="w-full">
                          <Field
                            name="nama_lengkap"
                            component={Input}
                            className=" w-full"
                            label={<span>Nama Lengkap <span className="text-red-600 text-sm">*</span></span>}
                            placeholder="Isi Nama Perusahaan"
                            isFormItem
                            allowClear
                            showError={dirty}
                          />
                        </div>
                        <div className="w-full -mt-4">
                          <Field
                            name="nama_perusahaan"
                            component={Input}
                            className=" w-full"
                            label={<span>Nama Perusahaan <span className="text-red-600 text-sm">*</span></span>}
                            placeholder="Isi Nama Perusahaan"
                            isFormItem
                            allowClear
                            showError={dirty}
                          />
                        </div>
                        <div className="w-full flex justify-between">
                          <Field
                            name="email"
                            component={Input}
                            label={<span>Alamat Email <span className="text-red-600 text-sm">*</span></span>}
                            isFormItem
                            allowClear
                            placeholder="Isi Alamat Email"
                            className="w-full"
                            showError={dirty}
                          />
                          <Field
                            name="phone"
                            component={Input}
                            label={<span>No. Handpone <span className="text-red-600 text-sm">*</span></span>}
                            isFormItem
                            placeholder="No. Handphone"
                            className="w-full"
                            showError={dirty}
                          />
                        </div>
                        <div className="!w-full">
                          <Field
                            name="pesan"
                            component={Input}
                            placeholder="Tulis Pesan Anda"
                            label={<span>Tulis Pesan Anda <span className="text-red-600 text-sm">*</span></span>}
                            className="h-[100px] w-full"
                            isFormItem
                            allowClear
                            textArea
                            showError={dirty}
                          />
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                      <Button
                        htmlType="submit"
                        onMouseEnter={() => false}
                        disabled={invalid}
                        className=" mx-auto text-white bg-[#8F9FB2] w-1/3"
                      >
                        kirim
                      </Button>
                    </div>
                  </div>
                </FormANTD>
              )
            }}
          </Form>
        </div>
      </section>
    </main>
  )
}
