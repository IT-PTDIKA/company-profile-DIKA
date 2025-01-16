import React from 'react'
import FormulirKarirCompoent from '../Component/ModalFormulirKarirCompoent'
interface IProps {
  onClose: () => void
  selectedDetailJobs: any
}
export default function ModalFormulirKarirContainer(props: IProps) {
  const {onClose, selectedDetailJobs} = props
  const handleSubmit = (vals:any) =>{
    console.log("vals", vals)
  }
  let initialValues = {
    code_lowongan: selectedDetailJobs?.kode_lowongan,
    nama_lengkap: "",
    email: "",
    phone: "",
    pesan: "",
  }
  return (
    <FormulirKarirCompoent handleSubmit={handleSubmit} onClose={onClose} initialValues={initialValues}/>
  )
}
