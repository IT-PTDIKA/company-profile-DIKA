"use client"

import Blogger from "@/assets/image/blogger.png"
import { Button } from "antd"
import CardBlog from "@/components/CardBlog"
import Image from "next/image"
import { LeftOutlined } from "@ant-design/icons"
import React from 'react'
import { useRouter } from "next/navigation"

export default function DetailBlogComponent() {
  const router = useRouter()
   const blog = [
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 Nov 2024",
      kategoriBlog: "Berita",
      index: 1
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 Nov 2024",
      kategoriBlog: "Produk dan Layanan",
      index: 2
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 Nov 2024",
      kategoriBlog: "Teknologi",
      index: 3
    }
  ]
  return (
    <main>
      <section className='px-11 py-3 bg-[#FFF]'>
        <div onClick={() => router.push("/blog")} className="text-[#007CCE] pt-20 text-lg md:text-2xl cursor-pointer font-bold"><LeftOutlined className="text-lg md:text-2xl text-[#007CCE]  font-bold" /> Kembali</div>
        <div className=' w-full'></div>
          <h1 className='text-3xl font-bold text-[#0C2543]'>5 Alasan Bisnis Besar Mengandalkan Outsourcing</h1>
          <span className="text-[#747A82] text-sm">27 November 2024 <span className="text-[#747A82] text-sm">.</span>General</span>
          <div className="py-5">
            <Image src={Blogger} alt={"Blogger"} className='object-contain mx-auto h-auto w-full' width={0} height={0}/>
          </div>
          <p className="text-[#0C2543] text-left text-lg">Outsourcing adalah praktik di mana perusahaan mengalihdayakan tugas atau fungsi tertentu kepada pihak ketiga yang lebih ahli di bidangnya. Tujuannya adalah untuk menghemat waktu, biaya, dan sumber daya internal, sehingga perusahaan dapat fokus pada aktivitas inti mereka. Dalam dunia bisnis yang semakin kompleks dan kompetitif, outsourcing menjadi solusi strategis bagi banyak perusahaan besar untuk meningkatkan efisiensi dan mendapatkan akses ke keahlian khusus.
          <br/> <br />
          Berikut adalah lima alasan utama mengapa bisnis besar mempercayakan sebagian operasional mereka kepada penyedia layanan outsourcing seperti PT DIKA!</p> <br />
          <h2 className="font-bold text-xl">1. Efisiensi Biaya dan Percepatan Service</h2>
          <p className="text-[#0C2543] text-left text-lg">Outsourcing memberikan keuntungan dalam efisiensi biaya dan mempercepat penyelesaian pekerjaan. Dengan mengalihdayakan fungsi seperti telemarketing atau customer service ke PT DIKA, perusahaan Anda bisa fokus pada kegiatan strategis lainnya, sementara tugas-tugas tersebut ditangani oleh tim yang berpengalaman dan fokus. Ini memungkinkan perusahaan Anda mencapai hasil lebih cepat tanpa proses internal yang sering kali memakan waktu.</p><br />
          <h2 className="font-bold text-lg">2. Akses ke Talenta Spesialis</h2>
          <p className="text-[#0C2543] text-left text-lg">Outsourcing juga memberi Anda akses ke tim spesialis yang mungkin sulit Anda temukan di dalam perusahaan. PT DIKA memiliki tenaga kerja yang terlatih dan berpengalaman di berbagai bidang, mulai dari teknologi informasi hingga layanan pelanggan. Dengan memanfaatkan keahlian mereka, Anda tidak hanya dapat meningkatkan produktivitas, tetapi juga mempercepat proses inovasi di bisnis Anda.</p><br />
          <h2 className="font-bold text-lg">3. Fokus pada Inti Bisnis</h2>
          <p className="text-[#0C2543] text-left text-lg">Ketika Anda mengalihkan tugas-tugas non-inti kepada penyedia layanan seperti PT DIKA, Anda dapat lebih fokus pada hal-hal yang benar-benar penting bagi bisnis Anda. Tim manajemen Anda dapat menghabiskan lebih banyak waktu untuk merumuskan strategi pengembangan, membangun hubungan dengan pelanggan, dan mengembangkan produk baru. Dengan begitu, Anda tidak hanya meningkatkan efisiensi tetapi juga memperkuat posisi kompetitif Anda di pasar.</p><br />
          <h2 className="font-bold text-lg">4. Fleksibilitas dan Skalabilitas yang Tinggi</h2>
          <p className="text-[#0C2543] text-left text-lg">
          Lingkungan bisnis yang dinamis menuntut perusahaan untuk memiliki fleksibilitas. Dengan outsourcing, Anda dapat dengan mudah menyesuaikan jumlah tenaga kerja sesuai dengan kebutuhan yang berubah-ubah. Jika permintaan meningkat, PT DIKA siap untuk mengerahkan lebih banyak tenaga kerja. Sebaliknya, jika permintaan menurun, Anda bisa mengurangi jumlah tenaga kerja tanpa harus mengeluarkan biaya tetap yang tinggi. Fleksibilitas ini sangat penting untuk bertahan dan tumbuh dalam pasar yang berubah cepat.</p><br />
          <h2 className="font-bold text-lg">5. Mengurangi Risiko dan Meningkatkan Keamanan</h2>
          <p className="text-[#0C2543] text-left text-lg">
          Outsourcing bukan hanya soal efisiensi, tetapi juga tentang manajemen risiko. Dengan menyerahkan beberapa fungsi kepada PT DIKA, Anda dapat merasa tenang karena operasi tersebut dikelola oleh para ahli yang memahami seluk-beluk industri. Dari kepatuhan regulasi hingga standar operasional, Anda dapat mengandalkan pengalaman dan pengetahuan tim PT DIKA untuk mengurangi risiko yang mungkin timbul. Dengan demikian, Anda dapat fokus pada pengembangan bisnis tanpa khawatir akan masalah yang tidak terduga.</p>
          <br />
          <p className="text-[#0C2543] text-left text-lg">Outsourcing bukan sekadar strategi untuk mengurangi biaya; ini adalah langkah cerdas yang dapat membawa banyak manfaat bagi bisnis besar. Dengan PT DIKA sebagai mitra outsourcing Anda, Anda tidak hanya mendapatkan efisiensi dan fleksibilitas, tetapi juga akses ke talenta terbaik dan pengurangan risiko yang signifikan. Pemanfaatan outsourcing dengan bijak akan memberikan keuntungan kompetitif yang nyata.</p>
          <br />
          <p className="text-[#0C2543] text-left text-lg">Ingin tahu lebih banyak tentang bagaimana outsourcing dapat meningkatkan efisiensi bisnis Anda? Hubungi PT DIKA sekarang!</p>
          <div className="py-4 pt-12">
            <h1 className="text-center font-bold text-2xl dark:text-black">Artikel Terkait</h1>
          </div>
          <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {blog?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className={index >= 2 ? 'hidden sm:block' : ''} // Sembunyikan item ke-3 dan seterusnya pada mobile
                  >
                    <CardBlog
                      dateBlog={item?.dateBlog}
                      titleBlog={item?.titleBlog}
                      descriptionBlog={item?.descriptionBlog}
                      gambarBlog={item?.gambarBlog}
                      kategoriBlog={item?.kategoriBlog}
                    />
                  </div>
                ))}
              </div>
          </div>
          <div className="text-center pt-4">
            <Button className="bg-[#0C2543] text-white font-bold py-2 px-3 mt-3 w-1/2 md:w-2/12 text-sm md:text-lg" onClick={()=> router.push("/blog")}>Artikel Lainnya</Button>
          </div>
      </section>
    </main>
  )
}
