import BlogComponent from "../Component/BlogComponent"
import React from 'react'

export default function BlogContainer() {
    const handleChange = (value: string) =>{
        console.log("value", value)
    }
    const options = [
        {label: "General", value: "general"},
        {label: "Berita", value: "berita"},
        {label: "Produk dan Layanan", value: "produklayanan"},
        {label: "teknologi", value: "teknologi"},
        {label: "skill", value: "skill"},
    ]
    // const handleFilterOptions = (vals:any) => {
    //     console.log("vals", vals)
    // }
  return (
     <BlogComponent options={options}/>
  )
}
