"use client"

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

interface IProps {
    gambarBlog: string | any,
    titleBlog: string,
    descriptionBlog: string,
    dateBlog: string
    kategoriBlog: string
}
export default function CardBlog(props: IProps) {
    const { gambarBlog, titleBlog, descriptionBlog, dateBlog, kategoriBlog } = props
    const router = useRouter()
  return (
    <>
        <div className="bg-white rounded-lg shadow overflow-hidden cursor-pointer" onClick={()=> router.push("/detailblog")}>
            <div className="aspect-video relative">
                <Image
                    alt="Blog Post"
                    src={gambarBlog}
                    className="object-contain cursor-pointer"
                    width={0}
                    height={0}
                />
            </div>
            <div className="p-4 cursor-pointer">
                <h2 className="text-lg font-bold text-gray-800 mb-2 cursor-pointer">
                    {titleBlog !=="" ? titleBlog : ""}
                </h2>
                <p className="text-gray-600 mb-3">
                    {descriptionBlog !=="" ? descriptionBlog : ""}
                </p>
                <div className="text-sm text-gray-500">
                    {dateBlog !== "" ? dateBlog : ""} <span className='text-xl'>·</span> {kategoriBlog !== "" ? kategoriBlog : ""}
                </div>
            </div>
        </div>
    </>
  )
}
