"use client"

import InformasiPerusahaanComponent from '../Component/InformasiPerusahaanComponent'
import React from 'react'

export default function InformasiPerusahaanContainer() {
  const handleSubmit = (vals: any) =>
  {
    console.log("vals", vals)
  }
  return (
   <InformasiPerusahaanComponent handleSubmit={handleSubmit}/>
  )
}
