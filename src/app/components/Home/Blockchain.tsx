/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Blockchain = () => {
  return (
    <>
      <section
        className="p-10 md:px-44 md:py-32 min-h-screen mx-auto"
        id="Blockchain"
      >
        {/* Section 1 */}
        <section
          className=" flex items-center justify-center justify-items-center min-h-screen"
          id="CekSertifikat"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-8 ">
              <div className="flex gap-2">
                <Image
                  src={"/svg/Blockchain.svg"}
                  alt="Blockchain"
                  width={70}
                  height={70}
                  className="items-start"
                />
                <h1 className="text-black text-3xl lg:text-4xl xl:text-5xl w-3/4 md:w-7/12">
                  Sertifikasi Blockchain
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Buat Sertifikat Anda tahan manipulasi di blockchain.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Manfaatkan kekuatan blockchain dengan kendali privasi penuh
                  dan kebebasan dari ketergantungan vendor.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Sertifikasi satu atau jutaan Sertifikat dengan solusi yang
                  mudah diintegrasikan.
                </h1>

                <Link href={"/"}>
                  <div className="mt-4 bg-green-700 rounded-md w-full md:w-7/12 hover:bg-green-600 duration-300">
                    <h1 className="text-sm text-white font-normal text-center p-4">
                      Cek Sertifikatmu
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="flex items-start">
              <Image
                src={"/img/Blockchain_1.png"}
                alt="Blockchain"
                width={400}
                height={400}
                className="ml-0 md:ml-40"
              />
            </div>
          </div>
        </section>

        <div className="w-1/12 mx-auto border border-red-600 mb-28"></div>

        {/* Section 2 */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" ">
              <Image
                src={"/img/Blockchain_2.png"}
                alt="Blockchain 2"
                width={280}
                height={280}
                className="ml-0 md:ml-20 mb-0 md:mb-20 "
              />
            </div>
            <div className="flex flex-col gap-8 mt-10 md:mt-0">
              <div className="flex flex-col gap-2 w-full md:w-3/4">
                <h1 className="text-black text-xl lg:text-2xl font-bold">
                  Buat Sertifikat Anda Tahan Manipulasi dan Cegah Risiko
                  Penipuan Sertifikat
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Bisnis Anda tidak harus bergantung pada solusi PDF sederhana
                  yang mudah dipalsukan dan didistribusikan ulang secara online.
                </h1>
              </div>

              <div className="flex flex-col gap-2 ml-3 w-full md:w-8/12">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Verifikasi sidik jari digital Sertifikat Anda di lebih dari
                  100.000 node blockchain.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Manfaatkan kekuatan blockchain dengan kendali privasi penuh
                  dan kebebasan dari ketergantungan vendor.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Pisahkan sertifikasi Sertifikat Anda dari teks Sertifikat
                  untuk melindungi diri Anda dari risiko umum yang ada pada
                  penampil PDF yang ada.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-8 mt-10 md:mt-0 ml-0 md:ml-20">
              <div className="flex flex-col gap-2">
                <h1 className="text-black text-xl font-bold lg:text-2xl">
                  Amankan Privasi Sertifikat Anda Sepenuhnya
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Tidak ada Sertifikat yang harus meninggalkan perangkat Anda
                  atau diunggah ke cloud secara default – tidak untuk
                  pengarsipan atau verifikasi.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Manfaatkan solusi privasi-dari-desain yang memungkinkan semua
                  Sertifikat diproses secara lokal di perangkat Anda.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Hanya sidik jari digital unik dari Sertifikat Anda yang
                  dikontrol oleh blockchain, tetapi Sertifikat Anda tetap berada
                  di perangkat Anda.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Tidak mungkin untuk menguraikan konten Sertifikat dari sidik
                  jari digitalnya.
                </h1>
              </div>
            </div>

            <div className="mt-10 md:mt-0">
              <Image
                src={"/img/Blockchain_3.png"}
                alt="Blockchain 2"
                width={240}
                height={240}
                className="ml-0 md:ml-20 mb-0 md:mb-20 "
              />
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" ">
              <Image
                src={"/img/Blockchain_4.png"}
                alt="Blockchain 2"
                width={280}
                height={280}
                className="ml-0 md:ml-20 mb-0 md:mb-20 "
              />
            </div>
            <div className="flex flex-col gap-8 mt-10 md:mt-0 ml-0 md:ml-20">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="text-black text-xl font-bold lg:text-2xl">
                  Sertifikat Langsung di dalam Lanskap IT Anda
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Solusi paling modular tidak memerlukan perangkat lunak
                  tambahan dan dapat dengan mudah diintegrasikan ke dalam
                  lanskap IT Anda yang ada.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5 w-full md:w-3/4">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Perbarui sistem yang ada dengan API sederhana namun kuat.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Cukup tambahkan tombol "sertifikasi" dalam UI yang sudah ada.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Pustaka JS, CLI, HTTP Proxy... pilihannya sudah tersedia.
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-8 mt-10 md:mt-0 ml-0 md:ml-20">
              <div className="flex flex-col gap-2">
                <h1 className="text-black text-xl lg:text-2xl font-bold">
                  Bekali Sertifikat Anda dengan Kepercayaan yang Terverifikasi 
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Verifikasi Sertifikat Anda tidak memerlukan alat yang tidak
                  dikenal. Semua orang harus dapat memverifikasi Sertifikat Anda
                  dengan hanya satu atau dua klik dan di mana saja.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Tambahkan ke situs web yang ada untuk Sertifikasi yang dapat
                  dilakukan dengan hanya satu klik dalam semua skenario offline.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Verifikasi Sertifikat dapat dilakukan pada platform
                  terdesentralisasi yang memanfaatkan node blockchain yang luas.
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Sematkan verifikasi pada situs web Anda atau buat situs Anda
                  sendiri.
                </h1>
                <a href="/#CekSertifikat">
                  <div className="ml-4 mt-4 cursor-pointer bg-green-700 rounded-md w-11/12 hover:bg-green-600 duration-300">
                    <h1 className="text-sm text-white font-normal text-center p-3">
                      Hindari penipuan ijazah: Sertifikasi ijazah untuk lembaga
                      pendidikan
                    </h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="">
              <Image
                src={"/img/Blockchain_5.png"}
                alt="Blockchain 2"
                width={380}
                height={380}
                className="ml-30 w-52 sm:w-2/4 md:w-3/4 xl:ml-48  aspect-square object-cover mx-auto justify-center items-center flex"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blockchain;
