"use client";

import Image from "next/image";
import AOS from 'aos';  
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Value() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section data-aos="fade-up" className="min-h-screen flex items-center">
        <div className="md:py-20 px-10 p-5 flex flex-col md:grid xl:grid-cols-2 mx-auto w-3/4 gap-6">
          <div className="flex flex-col gap-8 w-full md:w-3/4 mx-auto">
            <h1 className="text-green-700 font-bold text-2xl md:text-5xl  ">
              Value Utama Sinari Desa
            </h1>
            <h1 className="text-gray-600 font-normal text-xs md:text-xl mt-2 md:mt-10">
              Kesenjangan Signifikan dalam akses pendidikan dan keterampilan
              berkualitas antara anak-anak muda Desa dan Kota, yang menghambat
              potensi mereka untuk berkembang dan bersaing di pasar global.
            </h1>
          </div>
          <div className="flex mt-10 md:mt-0 mx-auto">
            <Image
              src="/img/Value.png"
              alt="Belajar di desa"
              width={500}
              height={500}
              className="rounded-3xl aspect-[12/8] xl:aspect-[16/9] object-cover "
            />
          </div>
        </div>
      </section>
    </>
  );
}
