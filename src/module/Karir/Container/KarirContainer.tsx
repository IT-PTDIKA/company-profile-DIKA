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
        tangalKarir: "31 Des 2024",
        pekerjaan: "Merhant Delivery & Survey",
        lokasi: "Kediri",
        gambar: KarirMerchantDeliverySurvey
    },
    {
        tangalKarir: "31 Des 2024",
        pekerjaan: "Relationship Officer",
        lokasi: "Jakarta",
        gambar: KarirRelationShipOfficer
    },
    {
        tangalKarir: "31 Des 2024",
        pekerjaan: "Agent Desk Collection Staff",
        lokasi: "Jakarta",
        gambar: KarirAgentDeskCollection
    },
    {
        tangalKarir: "31 Des 2024",
        pekerjaan: "Admin Validasi",
        lokasi: "Jakarta",
        gambar: KarirAdminValidasi
    },
    {
        tangalKarir: "31 Des 2024",
        pekerjaan: "Marketing",
        lokasi: "Jakarta",
        gambar: KarirMarketing
    },
    {
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
    console.log("detailJobs", detailJobs)
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
