import ModalDetailKarirComponent from '../Component/ModalDetailKarirComponent';
import React, { useState } from 'react'
import ModalFormulirKarirContainer from './ModalFormulirKarirContainer';

interface IProps {
  selectedDetailJobs: any;
  onClose: () => void
}
export default function ModalDetailKarirContainer(props: IProps) {
  const {selectedDetailJobs, onClose} = props
  const [modalFormKarir, setModalFormKarir] = useState<boolean>(false)
  const handleOpenModalKarir = () =>{
    setModalFormKarir(true)
  }
  return (
    <>
      <ModalDetailKarirComponent onClose={onClose} selectedDetailJobs={selectedDetailJobs} handleOpenFormKarir={handleOpenModalKarir}/>
      {modalFormKarir && (
        <ModalFormulirKarirContainer onClose={() => {
          setModalFormKarir(false)
          onClose()
        }} selectedDetailJobs={selectedDetailJobs}/>
      )}
    </>
  )
}
