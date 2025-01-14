'use client';

import { Button } from 'antd';
import HeroImage from "../assets/image/heroFooter.png"
import Image from 'next/image';

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
  buttonText = "DISKUSIKAN SEKARANG",
  buttonLink = "#",
  imageSrc = HeroImage,
  imageAlt = "Professional Consultant",
  backgroundColor = "bg-[#00B8FF]"
}: HeroProps) {
  return (
    <div className={`w-4/5 h-auto  absolute top-20 left-36 right-0  ${backgroundColor}  overflow-hidden rounded-xl px-4`}>
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-white w-auto h-auto z-10 ">
            <h1 className="text-xl md:text-3xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mt-4">
              {description}
            </p>
            <Button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 text-lg rounded-lg mt-8"
              onClick={() => window.location.href = buttonLink}
            >
              {buttonText}
            </Button>
          </div>
          <div className=" h-[300px] md:h-[300px] flex justify-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className=" object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}