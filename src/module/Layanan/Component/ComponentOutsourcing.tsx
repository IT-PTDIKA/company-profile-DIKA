"use client"

import CardLayanan from "@/components/CardLayanan";
import React from 'react'

interface IProps {
    dataOutsourcing: any[]
}
export default function ComponentOutsourcing({dataOutsourcing}: IProps) {
    return (
    <CardLayanan dataOutsourcing={dataOutsourcing}/>
    )
}
