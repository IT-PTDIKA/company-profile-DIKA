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
  buttonText = "diskusi sekarang",
  buttonLink = "#",
  imageSrc = HeroImage,
  imageAlt = "Professional Consultant",
  backgroundColor = "bg-[#00B8FF]"
}: HeroProps) {
  return (
    <div className={`w-4/5 h-auto md:h-[330px]  absolute -bottom-16 md:top-20 left-10 md:left-36 right-0  ${backgroundColor}  overflow-hidden rounded-lg`}>
      <div className=" mx-auto">
        <div className="flex items-center justify-between p-2 ">
          <div className="text-white h-full w-[70%]">
            <h1 className="text-sm md:text-3xl font-bold leading-tight">
              {title}
            </h1>
            <p className="text-sm md:text-xl opacity-90 mt-1 md:mt-4">
              {description}
            </p>
            <Button 
              size='small'
              className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-[rgba(12, 37, 67, 1)] font-semibold px-2 py-3 md:px-8 md:py-6 text-sm md:text-lg rounded-sm md:rounded-lg md:mt-8 w-auto lowercase md:uppercase mt-2"
              onClick={() => window.location.href = buttonLink}
            >
              {buttonText}
            </Button>
          </div>
          <div className="h-full w-[50%]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="object-cover translate-x-8 md:translate-x-7 translate-y-8 md:-translate-y-5"
              width={0}
              height={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}