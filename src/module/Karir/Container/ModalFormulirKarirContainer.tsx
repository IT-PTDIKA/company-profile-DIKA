"use client"
import React, {useState} from 'react'
import FormulirKarirCompoent from '../Component/ModalFormulirKarirCompoent'
interface IProps {
  onClose: () => void
  selectedDetailJobs: any
}
export default function ModalFormulirKarirContainer(props: IProps) {
  const {onClose, selectedDetailJobs} = props
  const [loading, setLoading] = useState<boolean>(false)
  const [statusResult, setStatusResult] = useState<boolean>(false)
  const handleSubmit = (vals:any) =>{
    
    console.log("vals", vals)
    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    },500)
    if(loading){
      setStatusResult(false)
    } else{
      setStatusResult(true)
    }
  }
  let initialValues = {
    code_lowongan: selectedDetailJobs?.kode_lowongan,
    nama_lengkap: "",
    email: "",
    phone: "",
    pesan: "",
  }
  return (
    <FormulirKarirCompoent handleSubmit={handleSubmit} onClose={onClose} initialValues={initialValues} loading={loading} statusResult={statusResult}/>
  )
}
