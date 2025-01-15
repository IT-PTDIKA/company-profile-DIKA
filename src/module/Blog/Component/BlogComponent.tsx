"use client"

import {Button, Input, Select} from "antd"

import Blogger from "@/assets/image/blogger.png"
import CardBlog from "@/components/CardBlog"
import HeroFooter from "@/components/HeroFooter"
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import TentangKami from "../../../assets/image/informasiperusahaan.png"

interface IProps {
  options: any[]
  // handleChange: (_value: string) => void
  // handleFilterOptions: (_value: any, _vals:any) => void
} 
export default function BlogComponent(props: IProps) {
  const {options} = props
  const blog = [
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "Berita",
      index: 1
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "Produk dan Layanan",
      index: 2
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "Teknologi",
      index: 3
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "Skill",
      index: 4
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "General",
      index: 5
    },
    {
      gambarBlog: Blogger,
      titleBlog : "5 Alasan Bisnis Besar Mengandalkan Outsourcing",
      descriptionBlog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      dateBlog: "27 November 2024",
      kategoriBlog: "Berita",
      index: 6
    }
  ]
  return (
    <main>
      <HeroSection title={"Jelajahi Berbagai Informasi Outsourcing, dari Manfaat Bisnis Hingga Tren Terkini"} heading="" description={""} image={TentangKami}/>
      <section className="min-h-screen py-6 px-11">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 space-y-6">
            <div className="rounded-lg shadow">
              <div className="space-y-6">
                <Input
                  prefix={<SearchOutlined />}
                  placeholder="Search post, keywords..."
                  className="rounded-lg"
                />
                
                <Select
                  defaultValue="Paling Baru"
                  style={{ width: '100%' }}
                  // onChange={handleChange}
                  options={[
                    {
                      label: 'Paling Baru',
                      value: 'Paling Baru'
                    },
                    {
                      label: 'Paling Lama',
                      value: 'Paling Lama'
                    }
                  ]}
                />
                <Button
                  size="large"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blog.map((item:any, index:number) => (
               <div key={index}>
                 <CardBlog dateBlog={item?.dateBlog} titleBlog={item?.titleBlog} descriptionBlog={item?.descriptionBlog} gambarBlog={item?.gambarBlog} kategoriBlog={item?.kategoriBlog}/>
               </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="h-[300px] relative">
        <div className="mx-auto ">
            <HeroFooter />
        </div>
      </section>
    </main>
  )
}
