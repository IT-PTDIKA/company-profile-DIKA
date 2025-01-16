import Adira from "../../../assets/image/adira.png"
import BankBRI from "../../../assets/image/bankBri.png"
import BankBTN from "../../../assets/image/bankBTPN.png"
import ClientsComponent from '../Component/ClientsComponent'
import Gopay from "../../../assets/image/gopay.png"
import React from 'react'
import Shoope from "../../../assets/image/shoppe.png"
import Zyrex from "../../../assets/image/zyrex.png"
import bankMandiri from "../../../assets/image/mandiri.png"
import canon from "../../../assets/image/canon.png"
import chubb from "../../../assets/image/chubb.png"
import colliers from "../../../assets/image/colliers.png"
import efishery from "../../../assets/image/eFishery.png"
import grap from "../../../assets/image/grab.png"
import myRepublic from "../../../assets/image/MyRepublic.png"
import ruangguru from "../../../assets/image/ruangguru.png"
import sayurBox from "../../../assets/image/Sayur_Box.png"
import schneider from "../../../assets/image/Schneider.png"
import tiketcom from "../../../assets/image/tiketcom.png"
import xl from "../../../assets/image/xl.png"

export default function ClientsContainer() {
    let clients:any = [
        {
            image: BankBRI,
            alt: 'Bank BRI'    
        },
        {
            image: BankBTN,
            alt: 'Bank BTN'    
        },
        {
            image: Gopay,
            alt: 'Gopay'    
        },
        {
            image: Shoope,
            alt: 'Shoppe'    
        },
        {
            image: canon,
            alt: 'Cannon'    
        },
        {
            image: chubb,
            alt: 'Chubb'    
        },
        {
            image: colliers,
            alt: 'Colliers'    
        },
        {
            image: efishery,
            alt: 'Efishery'    
        },
        {
            image: grap,
            alt: 'Grap'    
        },
        {
            image: myRepublic,
            alt: 'myRepublic'    
        },
        {
            image: ruangguru,
            alt: 'Ruang Guru'    
        },
        {
            image: sayurBox,
            alt: 'Sayur Box'    
        },
        {
            image: schneider,
            alt: 'Schneider'    
        },
        {
            image: tiketcom,
            alt: 'Tiketcom'    
        },
        {
            image: Adira,
            alt: 'Adira'    
        },
        {
            image: bankMandiri,
            alt: 'mandiri'    
        },
        {
            image: Zyrex,
            alt: 'Zyrex Mandiri Buana'    
        },
        {
            image: xl,
            alt: 'XL Axita'    
        },
        {
            image: colliers,
            alt: 'Colliers'    
        },
        {
            image: efishery,
            alt: 'Efishery'    
        },
        {
            image: grap,
            alt: 'Grap'    
        },
        {
            image: myRepublic,
            alt: 'myRepublic'    
        },
        {
            image: ruangguru,
            alt: 'Ruang Guru'    
        },
        {
            image: sayurBox,
            alt: 'Sayur Box'    
        }
    ]
  return (
    <ClientsComponent dataClients={clients}/>
  )
}
