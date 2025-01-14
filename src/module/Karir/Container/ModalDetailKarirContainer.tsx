import ModalDetailKarirComponent from '../Component/ModalDetailKarirComponent';
import React from 'react'

interface IProps {
  selectedDetailJobs: any;
  onClose: () => void
}
export default function ModalDetailKarirContainer(props: IProps) {
  const {selectedDetailJobs, onClose} = props
  return (
    <ModalDetailKarirComponent onClose={onClose} selectedDetailJobs={selectedDetailJobs}/>
  )
}
