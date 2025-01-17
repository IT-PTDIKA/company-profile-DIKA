import {Button} from "antd"
import Image from 'next/image'
import Modal from '@/components/Modal'
import React from 'react'

interface IProps {
  selectedDetailJobs: any;
  onClose: () => void;
  handleOpenFormKarir: () => void;
}
export default function ModalDetailKarirComponent(props: IProps) {
const {onClose, selectedDetailJobs, handleOpenFormKarir} = props
  return (
    <Modal open onCancel={onClose} title={selectedDetailJobs?.pekerjaan} width={500} footer={null}>
      <section className='h-auto w-full'>
          <Image alt='Jobs Detail' className=" object-contain rounded-lg" width={0} height={0} src={selectedDetailJobs?.gambar}/>

          <div className="mt-3 text-center">
            <Button size="large" type="default" className="bg-[#0C2543] text-white font-bold text-center w-1/2  py-2" onClick={()=>{
              handleOpenFormKarir()
            }}>Lamar Sekarang</Button>
          </div>
      </section>
    </Modal>
  )
}
