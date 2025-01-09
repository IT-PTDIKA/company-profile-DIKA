"use client"

import { DownOutlined, UpOutlined } from "@ant-design/icons"
import { Dropdown, Space } from "antd"
import React, {useState} from 'react'

import Image from "next/image"
import Link from "next/link"
import LogoDika from "../assets/image/Dika.png"
import type { MenuProps } from 'antd';

interface IProps {
  children: React.ReactNode  
}
export default function Navbar(props: IProps) {
    const {children} = props
    const [arrow, setArrow] = React.useState(true)
    const [arrowTentang, setArrowTentang] =useState(true)
    const onClick: MenuProps['onClick'] = () => {
        setArrow(!arrow)
    };
    const onClickTentang: MenuProps['onClick'] = () => {
        setArrowTentang(!arrowTentang)
    }
    console.log("arrow", arrow)
    const items:MenuProps['items'] = [
        {
            label: <span className="font-medium text-xl text-black">Outsorcing</span>,
            key: '1',
        }, 
        {
            label: <span className="font-medium text-xl text-black">Teknologi</span>,
            key: '2',
        }
    ]
    const tentang:MenuProps['items'] = [
        {
            label: <span className="font-medium text-xl text-black">Informasi Perusahaan</span>,
            key: '1',
        }, 
        {
            label: <span className="font-medium text-xl text-black">Clients</span>,
            key: '2',
        },
        {
            label: <span className="font-medium text-xl text-black">Anti Fraud</span>,
            key: '3',
        },
        {
            label: <span className="font-medium text-xl text-black">Whistleblowing System</span>,
            key: '4',
        }
    ]
  return (
    <>
        <div className='px-3 flex w-auto fixed top-0 left-0 right-0 justify-between items-center bg-gradient-to-br from-sky-400 to-sky-500'>
            <div className='w-1/4'>
                <Image src={LogoDika} className="object-contain " alt="Dika" width={218} height={100}/>
            </div>
            <div className='w-3/4'>
                <ul className='flex gap-14 justify-end text-xl font-medium text-white'>
                    <li><Link href="/">Beranda</Link></li>
                    <li>
                        <Dropdown
                            menu={{items, onClick}}
                            trigger={['hover','click']}
                        >
                            <Space onClick={() => setArrow(!arrow)}>
                                Layanan
                                {arrow ? <DownOutlined /> : <UpOutlined />}
                            </Space>
                        </Dropdown>
                    </li>
                    <li>Karir</li>
                    <li>Blog</li>    
                    <li><Dropdown
                            menu={{items: tentang, onClick: onClickTentang}}
                            trigger={['hover']}
                        >
                            <Space onClick={() => setArrowTentang(!arrowTentang)}>
                                    Tentang Kami
                                     {arrowTentang ? <DownOutlined /> : <UpOutlined/>}
                                </Space>
                        </Dropdown>
                    </li>    
                </ul>   
            </div>
        </div>
        {children}
    </>
  )
}
