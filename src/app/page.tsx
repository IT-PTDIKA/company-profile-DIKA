"use client"

import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react"

import Adira from "../assets/image/adira.png"
import AirAsia from "../assets/image/airasia.png"
import Apple from "../assets/image/apple.png"
import { Autoplay } from 'swiper/modules';
import BUMN from "../assets/image/bumn.png"
import BankBRI from "../assets/image/bankBri.png"
import BankBTN from "../assets/image/bankBTPN.png"
import { Button } from "antd";
import CollectionnOutsourcing from "../assets/image/CollectionOutsourcing.png"
import Garuda from "../assets/image/garuda.png"
import Gopay from "../assets/image/gopay.png"
import HROutsourcing from "../assets/image/HR_Outsourcing.png"
import HeroSection from "@/components/HeroSection";
import HirringServiceQuality from "../assets/image/hirringParther.png"
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

export default function Home() {
  const jobs = [
    {
      title: 'Service Quality',
      imageSrc: '/jobs/service-quality.jpg',
      date: '16 Jun 2024',
      tag: 'DIKA53QU4L',
      qualifications: [
        'Pria & wanita maksimal 25-30 tahun',
        'Pendidikan minimal SMA',
        'Berpengalaman dibidang Hotel',
      ],
    },
    {
      title: 'Surveyor',
      imageSrc: '/jobs/surveyor.jpg',
      date: '16 Jun 2024',
      tag: 'RWTUN5U',
      qualifications: [
        'Pria maksimal 25-30 tahun',
        'Pendidikan minimal SMA',
        'Berpengalaman minimal 1 tahun',
        'Rajin dan bersih',
      ],
    },
  ];
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
      quote: 'I was impresed by the company services, not lorem ipsum is simply free text of used. Neque porro est qui dolorem ipsum quia.'
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
  return (
    <main>
     {/* Hero Section */}
      <HeroSection title={"Solusi Outsourcing Sesuai Kebutuhan Bisnis Anda"} description={"Bersama DIKA, Raih Keunggukan Bisnis dengan Solusi Sumber Daya yang Inovatif."} image={SectionHero}/>
       {/* Services Section */}
      <section className="py-16 bg-white">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            DIKA Siap Melayani Berbagai Kebutuhan Perusahaan Anda
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
            {/* Sales Outsourcing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mb-4">
                <Image src={SalesOutsourcing} alt="SalesOutsourcing" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="font-semibold text-gray-900">Sales</h3>
              <p className="text-gray-600">Outsourcing</p>
            </div>

            {/* Operation Outsourcing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mb-4">
                <Image src={OperatingOutsourcing} alt="OperatingOutsourcing" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="font-semibold text-gray-900">Operation</h3>
              <p className="text-gray-600">Outsourcing</p>
            </div>

            {/* Human Resource Outsourcing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
                <Image src={HROutsourcing} alt="HROutsourcing" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="font-semibold text-gray-900">Human Resource</h3>
              <p className="text-gray-600">Outsourcing</p>
            </div>

            {/* Collection Outsourcing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mb-4">
               <Image src={CollectionnOutsourcing} alt="CollectionOutsourcing" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="font-semibold text-gray-900">Collection</h3>
              <p className="text-gray-600">Outsourcing</p>
            </div>

            {/* IT Outsourcing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20  rounded-full flex items-center justify-center mb-4">
              <Image src={ITOutsourcing} alt="ITOutsourcing" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="font-semibold text-gray-900">IT</h3>
              <p className="text-gray-600">Outsourcing</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Hadir di Berbagai Wilayah Indonesia
          </h2>
          
           {/* Updated map container */}
          <div className="w-full aspect-[2/1] max-h-[80vh] mb-16">
            <Image
              src={PetaDika}
              alt="PetaDika"
              className="object-cover select-none"
              width={0}
              height={0}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Area Coverage */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
               <Image src={PinDika} alt="PinDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-2">50+ Area</h3>
              <p className="text-gray-600">Yang tersebar diseluruh Indonesia</p>
            </div>

            {/* Client Count */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Image src={KerjaSamaDika} alt="KerjaSamaDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-2">100+ Client</h3>
              <p className="text-gray-600">Sudah bekerjasama dengan kami</p>
            </div>
            {/* Client Count */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Image src={KepercayaanDika} alt="KepercayaanDika" width={300} height={100} className="object-contain bg-transparent"/>
              </div>
              <h3 className="text-2xl font-bold text-sky-600 mb-2">100 %</h3>
              <p className="text-gray-600">Terpercaya, Fleksibel, dan Efektif</p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-l from-[#FFFFFF] to-[#1AA4E3] text-white min-h-[600px] overflow-hidden">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Bagaimana DIKA Memberikan Solusi yang Tepat untuk Anda?
              </h1>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-white">Profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-white">Finansial Kuat</span>
                </div>
                <div className="flex items-center gap-2">
                 <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-white">Kinerja Baik</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckOutlined className="mr-2 text-black px-1 py-1 rounded-xl bg-[#FFCC0C]" />
                  <span className="text-2xl text-white">Jangkauan Luas</span>
                </div>
              </div>
              <Button type="default" className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-medium group">
                Pelajari lebih lanjut
                <ArrowRightOutlined className="w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - Team Image */}
            <div className="relative h-[500px] hidden md:block">
              <Image
                src={KlienKami}
                alt="DIKA Professional Team"
                className="object-contain"
                priority
                width={0}
                height={0}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="mx-auto w-full ">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Dipercaya Klien di Berbagai Industri
          </h2>
          <div className="text-center">
            <Button type="default" className="bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-8 py-6 font-medium">Lihat Lebih Banyak <ArrowRightOutlined className="w-5 h-5" /></Button>
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
      <section className="py-16 bg-white">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Yang Mereka Katakan Tentang DIKA
          </h2>
          <Swiper
            className="w-full h-[210px] flex items-center justify-center px-4 hover:cursor-pointer"
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            speed={500}
            modules={[Autoplay]}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <SwiperSlide key={index} className="flex-none w-[250px] h-full">
                <div className="bg-yellow-400 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow h-full flex flex-col justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.quote}
                  </p>
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
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-8">
            <div className="w-full lg:w-1/3">
              <h1 className="text-3xl font-bold text-gray-900 leading-snug">
                Lowongan Pekerjaan <br /> Terbaru
              </h1>
              <Button
                type="default"
                className="mt-6 bg-gradient-to-r from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] text-lg px-6 py-3 rounded-md font-medium flex items-center gap-2"
              >
                Lihat Lebih Banyak <ArrowRightOutlined className="w-5 h-5" />
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 flex-wrap">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl shadow-lg overflow-hidden w-full sm:w-[280px] flex-shrink-0"
                  >
                    {/* Image Section */}
                    <div className="bg-blue-500 h-[180px]">
                      <Image
                        src={HirringServiceQuality} // Ganti path gambar sesuai kebutuhan
                        alt="Hiring Service"
                        width={280}
                        height={180}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    {/* Card Content */}
                    <div className="p-4">
                      {/* Date */}
                      <div className="inline-block bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm mb-4">
                        16 Jun 2024
                      </div>

                      {/* Title */}
                      <h3 className="text-gray-500 text-sm font-medium mb-1">
                        LOWONGAN PEKERJAAN
                      </h3>
                      <h2 className="text-blue-900 text-xl font-bold mb-4">
                        Service Quality
                      </h2>

                      {/* Qualifications */}
                      <div className="mb-4">
                        <h4 className="text-yellow-500 font-semibold mb-2">KUALIFIKASI</h4>
                        <ul className="text-gray-600 text-sm list-disc list-inside">
                          <li>Pria & wanita maksimal 25-30 tahun</li>
                          <li>Pendidikan minimal SMA</li>
                          <li>Berpengalaman di bidangnya</li>
                        </ul>
                      </div>

                      {/* Action Link */}
                      <Link
                        href="#"
                        className="inline-block text-blue-500 hover:text-blue-600 font-semibold text-sm"
                      >
                        SELENGKAPNYA
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}