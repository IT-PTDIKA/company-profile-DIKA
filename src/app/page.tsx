import { Button } from "antd";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Footer>
        <div className='absolute top-0 left-0 w-full h-1 bg-white'>
                <div className='p-8 bg-[#00B8FF] rounded-lg w-9/12'>
                <h1 className='text-3xl mb-3 text-white'>Dapatkan Solusi DIKA!</h1>
                <p className='text-white'>Temukan solusi outsourcing yang meningkatkan efesiensi <br />
                dan pertumbuhan bisnis Anda.
                </p>
                <Button type='default' size='large' className='bg-gradient-to-b from-[#FFDB0C] via-[#FFCC0C] to-[#FFB90C] font-bold text-black rounded-lg p-3 mt-3'>Diskusikan Sekarang</Button>
              </div>
        </div>
      </Footer>
    </div>
  );
}
