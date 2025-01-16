"use client"
import React, {useState} from 'react'
import ModalFormHubungiKamiComponent from '../Component/ModalFormHubungiKamiComponent'
interface IProps {
  onClose: () => void
}
export default function ModalFormHubungiKamiContainer(props: IProps) {
  const {onClose} = props
  const [loading, setLoading] = useState<boolean>(false)
  const [statusResult, setStatusResult] = useState<boolean>(false)
  const handleSubmit = (vals:any) =>{
    console.log("vals", vals)
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500)
    if(loading){
      setStatusResult(false)
    } else{
      setStatusResult(true)
    }
  }
  return (
   <ModalFormHubungiKamiComponent handleSubmit={handleSubmit} onClose={onClose} isLoading={loading} statusResult={statusResult}/>
  )
}
