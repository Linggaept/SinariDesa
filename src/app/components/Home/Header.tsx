/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section data-aos="fade-up" className="overflow-hidden mt-10 bg-red-300" id="home">
        <div className="bg-[url('/img/Wpp.jpg')] bg-cover bg-center">
          <div className="bg-gray-700 bg-opacity-60 px-10 md:px-20 py-16">
            <div className="flex flex-col gap-6">
              <h1 className="text-md md:text-lg font-normal text-white text-center w-full mx-auto">
                Selamat Datang di Ekosistem Tumbuh Sinari Desa
              </h1>
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center w-full mx-auto">
                The Center Of Village Inovation
              </h1>
              <h1 className="text-lg md:text-3xl font-normal text-white text-center w-8/12 mx-auto">
                "Dari Desa Untuk Dunia"
              </h1>

              <Link
                href={"https://www.16personalities.com/id/tes-kepribadian"}
                target="_blank"
                className="w-full sm:w-6/12 md:w-3/12 lg:w-3/12 mx-auto"
              >
                <h1 className="text-md mt-4 mb-4 text-center text-black mx-auto p-2 bg-yellow-500 rounded-3xl  font-bold hover:bg-yellow-400 duration-300">
                  Test Talent Personality
                </h1>
              </Link>

              <iframe
                src="https://www.youtube.com/embed/otWe8hGoTas?si=wiUCmiGEqhWwyi78"
                className="w-full md:w-1/2 mx-auto h-48 md:h-96 rounded-3xl"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
