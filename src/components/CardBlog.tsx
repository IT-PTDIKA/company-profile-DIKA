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
        <div className="bg-white p-2 rounded-lg shadow overflow-hidden cursor-pointer border-solid border-[#DADEE0] border-2 dark:bg-white" onClick={()=> router.push("/detailblog")}>
            <div className="aspect-video relative dark:bg-white">
                <Image
                    alt="Blog Post"
                    src={gambarBlog}
                    className="object-contain cursor-pointer rounded-md"
                    width={0}
                    height={0}
                />
            </div>
            <div className="p-1 md:p-4 cursor-pointer">
                <h2 className="text-sm md:text-lg font-bold  text-gray-800 mb-2 cursor-pointer">
                    {titleBlog !=="" ? titleBlog : ""}
                </h2>
                <p className="text-gray-600 mb-3  text-left break-words truncate">
                    {descriptionBlog !== "" ? descriptionBlog : ""}
                </p>
                <div className="text-sm text-gray-500 h-16 ">
                    {dateBlog !== "" ? dateBlog : ""} <span className='text-xl'>·</span> {kategoriBlog !== "" ? kategoriBlog : ""}
                </div>
            </div>
        </div>
    </>
  )
}
