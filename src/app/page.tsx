"use client"

import { ArrowLeftOutlined, ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react"

import Adira from "../assets/image/adira.png"
import AirAsia from "../assets/image/airasia.png"
import Apple from "../assets/image/apple.png"
import BUMN from "../assets/image/bumn.png"
import BankBRI from "../assets/image/bankBri.png"
import BankBTN from "../assets/image/bankBTPN.png"
import { Button } from "antd";
import CollectionnOutsourcing from "../assets/image/CollectionOutsourcing.png"
import Garuda from "../assets/image/garuda.png"
import Gopay from "../assets/image/gopay.png"
import HROutsourcing from "../assets/image/HR_Outsourcing.png"
import HeroFooter from "@/components/HeroFooter";
import HeroSection from "@/components/HeroSection";
import HirringServiceQuality from "../assets/image/hirringParther.png"
import HomePage from "../assets/image/headerhomepage.png"
import ITOutsourcing from "../assets/image/ITOutsourcing.png"
import Image from "next/image";
import KepercayaanDika from "../assets/image/KepercayaanDika.png"
import KerjaSamaDika from "../assets/image/ClientsDika.png"
import KlienKami from "../assets/image/ClientsKami.png"
import Link from "next/link";
import OperatingOutsourcing from "../assets/image/Operating_Outsourcing.png"
import PetaDika from "../assets/image/petaDika.png"
import PinDika from "../assets/image/CoverageDika.png"
import SalesOutsourcing from "../assets/image/Sales_Outsourcing.png"
import SectionHero from "../assets/image/HeroSection.png"
// Our Client
import Shoope from "../assets/image/shoppe.png"
import canon from "../assets/image/canon.png"
import chubb from "../assets/image/chubb.png"
import colliers from "../assets/image/colliers.png"
import efishery from "../assets/image/eFishery.png"
import grap from "../assets/image/grab.png"
import myRepublic from "../assets/image/MyRepublic.png"
import ruangguru from "../assets/image/ruangguru.png"
import sayurBox from "../assets/image/Sayur_Box.png"
import schneider from "../assets/image/Schneider.png"
import tiketcom from "../assets/image/tiketcom.png"
import {useRouter} from "next/navigation"

export default function Home() {
const logos = [
  { src: Adira, alt: "Adira" },
  { src: AirAsia, alt: "AirAsia" },
  { src: BankBRI, alt: "Bank BRI" },
  { src: BankBTN, alt: "Bank BTN" },
  { src: Gopay, alt: "Gopay" },
  { src: chubb, alt: "Chubb" },
  { src: Adira, alt: "Adira" },
  { src: AirAsia, alt: "AirAsia" },
  { src: BankBRI, alt: "Bank BRI" },
  { src: BankBTN, alt: "Bank BTN" },
  { src: Gopay, alt: "Gopay" },
  { src: chubb, alt: "Chubb" },
  { src: Adira, alt: "Adira" },
  { src: AirAsia, alt: "AirAsia" },
  { src: BankBRI, alt: "Bank BRI" },
  { src: BankBTN, alt: "Bank BTN" },
  { src: Gopay, alt: "Gopay" },
  { src: chubb, alt: "Chubb" },
  { src: Adira, alt: "Adira" },
  { src: AirAsia, alt: "AirAsia" },
  { src: BankBRI, alt: "Bank BRI" },
  { src: BankBTN, alt: "Bank BTN" },
  { src: Gopay, alt: "Gopay" },
  { src: chubb, alt: "Chubb" },
];
const clientTwo = [
  { src: Shoope, alt: "Shoppe" },
  { src: grap, alt: "Grap" },
  { src: myRepublic, alt: "MyRepublic" },
  { src: sayurBox, alt: "SayurBox" },
  { src: schneider, alt: "Schneider" },
  { src: tiketcom, alt: "Tiketcom" },
  { src: Shoope, alt: "Shoppe" },
  { src: grap, alt: "Grap" },
  { src: myRepublic, alt: "MyRepublic" },
  { src: sayurBox, alt: "SayurBox" },
  { src: schneider, alt: "Schneider" },
  { src: tiketcom, alt: "Tiketcom" },
  { src: Shoope, alt: "Shoppe" },
  { src: grap, alt: "Grap" },
  { src: myRepublic, alt: "MyRepublic" },
  { src: sayurBox, alt: "SayurBox" },
  { src: schneider, alt: "Schneider" },
  { src: tiketcom, alt: "Tiketcom" },
  { src: Shoope, alt: "Shoppe" },
  { src: grap, alt: "Grap" },
  { src: myRepublic, alt: "MyRepublic" },
  { src: sayurBox, alt: "SayurBox" },
  { src: schneider, alt: "Schneider" },
  { src: tiketcom, alt: "Tiketcom" },
];
const clientThree = [
  { src: canon, alt: "Cannon" },
  { src: colliers, alt: "colliers" },
  { src: ruangguru, alt: "ruangguru" },
  { src: efishery, alt: "efishery" },
  { src: schneider, alt: "Schneider" },
  { src: AirAsia, alt: "AirAsia" },
  { src: canon, alt: "Cannon" },
  { src: colliers, alt: "colliers" },
  { src: ruangguru, alt: "ruangguru" },
  { src: efishery, alt: "efishery" },
  { src: schneider, alt: "Schneider" },
  { src: AirAsia, alt: "AirAsia" },
  { src: canon, alt: "Cannon" },
  { src: colliers, alt: "colliers" },
  { src: ruangguru, alt: "ruangguru" },
  { src: efishery, alt: "efishery" },
  { src: schneider, alt: "Schneider" },
  { src: AirAsia, alt: "AirAsia" },
];
  const testimonials = [
    {
      name: 'Steve Jobs',
      role: 'CEO Apple',
      image: Apple,
      quote: 'I was impresed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia, I was impresed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia.'
    },
    {
      name: 'Prabowo Subianto',
      role: 'President',
      image: Garuda,
      quote: 'I was impressed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia.'
    },
    {
      name: 'Gibran Rakabuming',
      role: 'Vice President',
      image: Garuda,
      quote: 'I was impressed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia.'
    },
    {
      name: 'Erick Tohir',
      role: 'Minister',
      image: BUMN,
      quote: 'I was impressed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia.'
    }
  ];  
  const router = useRouter();
  const scrollBottom = () =>{
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }
  return (
    <main>
     {/* Hero Section */}
      <HeroSection title={"Solusi Outsourcing Sesuai Kebutuhan Bisnis Anda"} description={"Bersama DIKA, Raih Keunggukan Bisnis dengan Solusi Sumber Daya yang Inovatif."} image={HomePage} buttonText={true}/>
       {/* Services Section */}
      <section className="py-8 bg-white">
        <div className="px-6 w-full ">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            DIKA Siap Melayani Berbagai Kebutuhan Perusahaan Anda
          </h2>
          <div className="flex flex-col mx-auto md:flex-row w-full md:w-1/2 md:justify-between ">
            {/* Sales Outsourcing */}
            <div className="flex justify-center flex-row gap-16 md:w-1/2  md:justify-evenly ">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 bg-gray-100">
                    <Image
                      src={SalesOutsourcing}
                      alt="SalesOutsourcing"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    Sales
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">Outsourcing</p>
                </div>

                {/* Operation Outsourcing */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex flex-col items-center text-center">
                    
                  </div>
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 bg-gray-100">
                    <Image
                      src={OperatingOutsourcing}
                      alt="OperatingOutsourcing"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    Operation
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">Outsourcing</p>
                </div>
            </div>
            <div className="flex justify-between pt-10 md:pt-0 flex-row gap-2 md:w-3/4 md:justify-around ">
                {/* Human Resource Outsourcing */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 bg-gray-100">
                    <Image
                      src={HROutsourcing}
                      alt="HROutsourcing"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    Human Resource
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">Outsourcing</p>
                </div>

                {/* Collection Outsourcing */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 bg-gray-100">
                    <Image
                      src={CollectionnOutsourcing}
                      alt="CollectionOutsourcing"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    Collection
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">Outsourcing</p>
                </div>

                {/* IT Outsourcing */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 bg-gray-100">
                    <Image
                      src={ITOutsourcing}
                      alt="ITOutsourcing"
                      width={300}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">
                    IT
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600">Outsourcing</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-sky-50">
        <div className="px-11 md:h-screen">
          <h2 className="text-xl md:text-3xl font-bold text-center text-gray-900 pb-12 md:mb-0">
            Hadir di Berbagai Wilayah Indonesia
          </h2>
           {/* Updated map container */}
          <div className="w-full aspect-[2/1] max-h-[80vh]">
            <Image
              src={PetaDika}
              alt="PetaDika"
              className="object-contain select-none"
              width={0}
              height={0}
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Area Coverage */}
            <div className="flex flex-col items-center text-center ">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
               <Image src={PinDika} alt="PinDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-sky-600 mb-2">50+ Area</h3>
              <p className="text-gray-600 text-lg">Yang tersebar diseluruh Indonesia</p>
            </div>

            {/* Client Count */}
            <div className="flex flex-col items-center text-center ">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Image src={KerjaSamaDika} alt="KerjaSamaDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-sky-600 mb-2">100+ Client</h3>
              <p className="text-gray-600 text-lg">Sudah bekerjasama dengan kami</p>
            </div>
            {/* Client Count */}
            <div className="flex flex-col items-center text-center ">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Image src={KepercayaanDika} alt="KepercayaanDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-sky-600 mb-2">100 %</h3>
              <p className="text-gray-600 text-lg">Terpercaya, Fleksibel, dan Efektif</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-l from-[#1AA4E3] to-[#1AA4E3] text-white h-screen flex items-center">
        <div className="mx-auto px-11 z-10 h-screen flex items-end">
          <div className="flex flex-wrap items-center justify-between">
            {/* Heading and Left Content */}
            <div className="w-full md:w-1/2 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                Bagaimana DIKA Memberikan Solusi yang Tepat untuk Anda?
              </h1>
              <div className="flex justify-between pb-0 md:pb-8 flex-row md:flex-row">
                <div className="w-1/2">
                  <div className="flex items-center">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-lg md:text-2xl text-white">Profesional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-lg md:text-2xl text-white">Finansial Kuat</span>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex items-center">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-lg md:text-2xl text-white">Kinerja Baik</span>
                  </div>
                  <div className="flex items-center">
                    <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                    <span className="text-lg md:text-2xl text-white">Jangkauan Luas</span>
                  </div>
                </div>
              </div>
              <Button
                type="default"
                className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-medium  w-full md:w-auto mt-6 md:mt-0"
              >
                Pelajari lebih lanjut
                <ArrowRightOutlined className="ml-2" />
              </Button>
            </div>

            {/* Right Content - Team Image */}
            <div className="w-full md:w-1/2 flex justify-center items-end  h-full">
              <div className="w-full">
                <Image
                  src={KlienKami}
                  alt="DIKA Professional Team"
                  className="object-contain w-full h-auto"
                  width={0}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Dipercaya Klien di Berbagai Industri
          </h2>
          <div className="text-center">
            <Button type="default" className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-medium" onClick={scrollBottom}>Lihat Lebih Banyak <ArrowRightOutlined className="w-5 h-5" /></Button>
          </div>
          <Swiper
            className="w-full h-[100px] flex items-center justify-center px-4 hover:cursor-pointer"
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1, // Waktu minimum untuk running text yang kontinu
              disableOnInteraction: false,
            }}
            speed={2000} // Kecepatan pergerakan
            modules={[Autoplay]}
          >
            {[...logos, ...logos].map((logo, index) => (
              <SwiperSlide
                key={`logos-${index}`}
                className="flex items-center justify-center w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper untuk clientTwo */}
          <Swiper
            className="w-full h-[100px] flex items-center justify-center  px-4 hover:cursor-pointer"
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={4000} // Kecepatan berbeda
            modules={[Autoplay]}
          >
            {[...clientTwo, ...clientTwo].map((logo, index) => (
              <SwiperSlide
                key={`clientTwo-${index}`}
                className="flex items-center justify-center w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper untuk clientThree */}
          <Swiper
            className="w-full h-[100px] flex items-center justify-center px-4 hover:cursor-pointer"
            spaceBetween={30}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={3000} // Kecepatan berbeda
            modules={[Autoplay]}
          >
            {[...clientThree, ...clientThree].map((logo, index) => (
              <SwiperSlide
                key={`clientTwo-${index}`}
                className="flex items-center justify-center w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={70}
                  height={70}
                  className="object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto px-11">
          <h2 className="text-3xl font-bold text-center text-gray-900 pb-1 md:pb-12">
            Yang Mereka Katakan Tentang DIKA
          </h2>
          <div className="relative ">
            <Swiper
              className="w-full h-[185px] flex items-center justify-center hover:cursor-pointer"
              navigation={{
                nextEl: '.swiper-button-next-1',
                prevEl: '.swiper-button-prev-1',
              }}
              scrollbar={{
                draggable: true,
                el: '.swiper-scrollbar-1',
              }}
              spaceBetween={16}
              slidesPerView={1} 
              centeredSlides={false} // Tidak di tengah, mulai dari kiri
              loop={false} // Tidak berulang
              breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
              }}
              modules={[Navigation, Scrollbar]}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <SwiperSlide key={index} className="flex-none w-[185px]">
                  <div className="border-solid border-2 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-[180px] flex flex-col justify-between">
                    <div className="h-[100px] overflow-y-hidden">
                      <span className="text-[#818891] text-wrap text-justify">
                        {testimonial.quote}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="flex-shrink-0">
                        {testimonial.image && (
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-sky-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Scrollbar */}
            <div className="absolute bottom-2 right-20 md:right-32 w-[80%] md:w-[90%] h-2 bg-gray-300 rounded-lg swiper-scrollbar-1">
              <div className="swiper-scrollbar-drag bg-[#818891] h-2 rounded-lg w-[90%]"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2">
              <div className="swiper-button-prev-1">
                <ArrowLeftOutlined className="py-2 px-2 bg-black text-white rounded-2xl" />
              </div>
              <div className="swiper-button-next-1">
                <ArrowRightOutlined className="py-2 px-2 bg-black text-white rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="px-11">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <div className="w-full md:w-1/3">
              <h1 className="text-lg md:text-3xl font-bold text-gray-900 leading-snug">
                Lowongan Pekerjaan Terbaru
              </h1>
              <Button
                type="default"
                onClick={()=>router.push("/karir")}
                className="mt-6 bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-6 py-5 rounded-md font-medium flex items-center gap-2 w-full md:w-auto"
              >
                Lihat Lebih Banyak <ArrowRightOutlined className="w-5 h-5" />
              </Button>
            </div>

            {/* Swiper Section */}
            <div className="w-full lg:w-2/3 relative">
            <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            scrollbar={{ 
              draggable: true,
              el: '.swiper-scrollbar-2',
            }}
            slidesPerView={1} // Tampilkan 2.5 konten per view
            spaceBetween={16} // Jarak antar slide
            centeredSlides={false} // Tidak di tengah, mulai dari kiri
            breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
            }}
            loop={false} // Tidak berulang
              >
                {[...Array(5)].map((_, i) => (
                  <SwiperSlide key={i}>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                      {/* Image Section */}
                      <div className="bg-blue-500 h-[180px]">
                        <Image
                          src={HirringServiceQuality}
                          alt="Hiring Service"
                          width={0}
                          height={0}
                          className="object-cover w-full h-auto"
                        />
                      </div>
                      {/* Card Content */}
                      <div className="p-3 pt-14 md:p-4">
                        {/* Date */}
                        <div className="inline-block bg-blue-100 text-blue-500 md:px-3 px-3 py-1 rounded-lg text-sm mb-4">
                          16 Jun 2024
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-500 text-sm font-medium">
                          LOWONGAN PEKERJAAN
                        </h3>
                        <h2 className="text-blue-900 text-xl font-bold mb-4">
                          Service Quality
                        </h2>

                        {/* Qualifications */}
                        <div className="mb-4">
                          <h4 className=" font-semibold mb-2">KUALIFIKASI</h4>
                          <ul className="text-gray-600 text-sm list-disc list-inside">
                            <li>Pria & wanita maksimal 25-30 tahun</li>
                            <li>Pendidikan minimal SMA</li>
                            <li>Berpengalaman di bidangnya</li>
                          </ul>
                        </div>

                        {/* Action Link */}
                        <Link
                          replace
                          href="/karir"
                          className="inline-block text-blue-500 hover:text-blue-600 font-semibold text-sm underline underline-offset-8 decoration-yellow-500 text-right w-full"
                        >
                          SELENGKAPNYA
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom Scrollbar */}
              <div className="absolute bottom-2 md:bottom-3 right-10 w-[75%] md:w-[92%] h-2 bg-gray-300 rounded-lg swiper-scrollbar-2">
                <div className="swiper-scrollbar-drag bg-[#818891] h-2 rounded-lg w-[80%]"></div>
              </div>
              <div className="flex justify-between pt-3 md:pt-0">
                <div className="swiper-button-prev-custom">
                  <ArrowLeftOutlined className="py-2 px-2  bg-black text-white rounded-2xl" />
                </div>
                <div className="swiper-button-next-custom">
                  <ArrowRightOutlined className="py-2 px-2  bg-black text-white rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[300px] relative">
        <div className="mx-auto ">
            <HeroFooter />
        </div>
      </section>
    </main>
  );
}