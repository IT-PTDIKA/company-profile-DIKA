import AppSystemCallCenter from "../../../assets/image/appsistemcallcenter.png"
import AppSystemDeskCollection from "../../../assets/image/appdeskcollection.png"
import AppSystemHadir from "../../../assets/image/aplikasiHadir.png"
import AppSystemProlog from "../../../assets/image/appprolog.png"
import AppSystemSales from "../../../assets/image/sistemsales.png"
import AppSystemTelemarketing from "../../../assets/image/apptelemarketing.png"
import ComponentTeknologi from '../Component/ComponentTeknologi'
import React from 'react'

export default function ContainerTeknologi() {
  const dataOursourcing = [
        {
            title: "Aplikasi Hadir",
            description: "Aplikasi Hadir. Platform ini dibangun untuk melaksanakan absensi secara real time dengan teknologi face recognition dan geo tagging untuk melacak lokasi, dilengkapi juga dengan fitur pengajuan izin, sakit atau cuti melalui sistem aplikasi mobile.",
            jobsTitle: [],
            image: AppSystemHadir,
        },
        {
            title: "Sistem Sales",
            description: "Sistem berupa dashboard untuk memantau performance tim sales berbagai produk.",
            jobsTitle: [],
            image: AppSystemSales

        },
        {
            title: "Aplikasi Prolog",
            description: "Prolog merupakan aplikasi project management yang memungkinkan penggunanya mengatur proyek, sehingga alur kerja dapat berjalan dengan lebih teratur dan terjadwal.",
            jobsTitle: [],
            image: AppSystemProlog
        },
        {
            title: "Sistem Desk Collection",
            description: "Sistem yang mendukung pekerjaan Desk Collection yang terhubung dengan telepon yang dapat merecord seluruh kegiatan agent.",
            jobsTitle: [],
            image: AppSystemDeskCollection
        },
         {
            title: "Sistem Telemarketing",
            description: "Membantu telemarketer untuk memudahkan mereka untuk mencapai target penjualan. Aplikasi telemarketing kami juga memberikan fleksibilitas bagi para penggunanya.",
            jobsTitle: [],
            image: AppSystemTelemarketing
        },
        {
            title: "Sistem Call Center",
            description: "Membantu perusahaan untuk meningkatkan kecepatan respons dari pelanggan. Dengan aplikasi call center ini, layanan kepada customer akan menjadi lebih efektif.",
            jobsTitle: [],
            image: AppSystemCallCenter
        },
    ]
  return (
    <ComponentTeknologi dataOutsourcing={dataOursourcing}/>
  )
}
