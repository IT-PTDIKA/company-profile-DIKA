"use client"

import React, {useState} from 'react'

import KarirAdminValidasi from "../../../assets/image/kariradminvalidasi.png"
import KarirAgentDeskCollection from "../../../assets/image/kariragentdeskcollection.png"
import KarirComponent from '../Component/KarirComponent'
import KarirMarketing from "../../../assets/image/karirmarketing.png"
import KarirMerchantDeliverySurvey from "../../../assets/image/karirmerchantdeliverysurvey.png"
import KarirRelationShipOfficer from "../../../assets/image/karirrelationshipofficer.png"
import Karirtelemarketing from "../../../assets/image/karirtelemarketing.png"
import ModalDetailKarirContainer from './ModalDetailKarirContainer'

export default function KarirContainer() {
const dataKarir = [
    {   
        kode_lowongan: "D1K4FNKM85",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Merhant Delivery & Survey",
        lokasi: "Kediri",
        gambar: KarirMerchantDeliverySurvey
    },
    {
        kode_lowongan: "D1K4P4R30F",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Relationship Officer",
        lokasi: "Jakarta",
        gambar: KarirRelationShipOfficer
    },
    {   
        kode_lowongan: "D1K4854DC5",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Agent Desk Collection Staff",
        lokasi: "Jakarta",
        gambar: KarirAgentDeskCollection
    },
    {
        kode_lowongan: "D1K4VAP4DV4",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Admin Validasi",
        lokasi: "Jakarta",
        gambar: KarirAdminValidasi
    },
    {
        kode_lowongan: "D1K4PJSM6",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Marketing",
        lokasi: "Jakarta",
        gambar: KarirMarketing
    },
    {
        kode_lowongan: "D1K484RTMM",
        tangalKarir: "31 Des 2024",
        pekerjaan: "Telemarketing",
        lokasi: "Yogyakarta",
        gambar: Karirtelemarketing
    },
]  
    const [openDetail, setOpenDetail] = useState<boolean>(false)
    const [detailJobs, setDetailJobs] = useState<any>()
    const handleCloseJobs = () =>{
        setOpenDetail(true)
    }
    return (
    <>
        <KarirComponent dataKarir={dataKarir} selectedDetailJobs={setDetailJobs} handleOpenModaDetailJobs={()=>{
            handleCloseJobs()
          
        }}/>
        {openDetail && (
            <ModalDetailKarirContainer onClose={()=>{
                setOpenDetail(false)
                setDetailJobs(undefined)
            }} selectedDetailJobs={detailJobs}/>
        )}
    </>
  )
}
