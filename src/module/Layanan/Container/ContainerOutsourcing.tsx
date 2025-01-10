import ComponentOutsourcing from '../Component/ComponentOutsourcing'
import PeopleOutSourchingFive from '../../../assets/image/peopleOutsourcingFive.png'
import PeopleOutSourchingFour from '../../../assets/image/peopleOutsourcingFour.png'
import PeopleOutSourchingOne from '../../../assets/image/peopleOutsourcing.png'
import PeopleOutSourchingThree from '../../../assets/image/peopleOutsourcingThree.png'
import PeopleOutSourchingTwo from '../../../assets/image/peopleOutsourcingTwo.png'
import React from 'react'

export default function ContainerOutsourcing() {
    const dataOursourcing = [
        {
            title: "Sales Outsourcing",
            description: "Melakukan alih daya dari pekerjaan penjualan baik melalui Job Supply ataupun Labor Supply sesuai dengan kebutuhan klien.",
            jobsTitle: ["Exahibition", "Canvassing", "Telemarketing", "Mobile Sales"],
            image: PeopleOutSourchingOne,
        },
        {
            title: "Human Resources Outsourching",
            description: "Melakukan sebagian dari fungsi HRD mulai dari perekrutan hingga payroll yang didukung sumber daya yang cukup.",
            jobsTitle: ["Recruitment", "Payrol", "Training", "Labor Supply"],
            image: PeopleOutSourchingTwo

        },
        {
            title: "IT Outsourching",
            description: "Kami siap bantu bisnis Anda dalam mengatasi tantangan teknologi baru dengan meningkatkan produktivitas melalui tim profesional yang adaptif.",
            jobsTitle: ["Corporate Bootcamp", "In-House Programming", "QA", "IT Solution"],
            image: PeopleOutSourchingThree
        },
        {
            title: "Collection Outsourching",
            description: "Pekerjaan penagihan yang telah didukung oleh sistem penagihan dan tenaga kerja desk dan field collection.",
            jobsTitle: ["Desk Collection", "Field Collection"],
            image: PeopleOutSourchingFour
        },
        {
            title: "Operation Outsourching",
            description: "Tenaga kerja untuk Operation Back Office yang sudah disertai KPI dan SOP yang jelas.",
            jobsTitle: ["Distribution", "Data Input", "Call Center", "Surveyor"],
            image: PeopleOutSourchingFive
        },
    ]
  return (
    <ComponentOutsourcing dataOutsourcing={dataOursourcing}/>
  )
}
