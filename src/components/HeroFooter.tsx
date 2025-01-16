'use client';
import React, {useState} from 'react';
import { Button } from 'antd';
import HeroImage from "../assets/image/heroFooter.png"
import Image from 'next/image';
import ModalFormHubungiKamiContainer from '@/module/Beranda/Container/ModalFormHubungiKamiContainer';
interface HeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: any;
  imageAlt?: string;
  backgroundColor?: string;
}

export default function HeroFooter({
  title = "Dapatkan Solusi DIKA!",
  description = "Temukan solusi outsourcing yang meningkatkan efisiensi dan pertumbuhan bisnis Anda.",
  buttonText = "diskusikan sekarang",
  imageSrc = HeroImage,
  imageAlt = "Professional Consultant",
  backgroundColor = "bg-transparent",
}: HeroProps) {
  const [openModalHubungiKami, setOpenModalHubungiKami] = useState<boolean>(false)
  const handleOpenModalHubungiKami = () =>{
    setOpenModalHubungiKami(true)
  }
  return (
   <>
    <div className={`md:w-4/5 w-full absolute  md:top-10 left-3 md:left-48 right-0 bottom-0 top-32 ${backgroundColor}  `}>
      <div className="flex items-end md:items-start justify-between p-5">
          <div className='bg-[rgba(0,184,255,1)] flex rounded-lg md:h-[315px] w-[95%] p-6'>
            <div className="text-white w-[50%] md:w-[70%] z-10 ">
              <h1 className="text-sm md:text-3xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-sm md:text-xl opacity-90 mt-1 md:mt-4">
                {description}
              </p>
              <Button 
                size='small'
                className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-[rgba(12, 37, 67, 1)] font-semibold px-2 py-3 md:px-4 md:py-4 text-sm md:text-lg rounded-sm md:rounded-lg md:mt-8 w-auto  md:uppercase mt-2 capitalize"
                onClick={handleOpenModalHubungiKami}
              >
                {buttonText}
              </Button>
            </div>
            <div className="h-auto w-auto relative z-10">
              <Image
                src={imageSrc}
                alt={imageAlt}
                className="object-cover md:translate-x-3 h-full md:h-auto md:-translate-y-16 w-auto"
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
    </div>
    {openModalHubungiKami && (
      <ModalFormHubungiKamiContainer onClose={()=>{
        setOpenModalHubungiKami(false)
      }}/>
    )}
   </>
  );
}