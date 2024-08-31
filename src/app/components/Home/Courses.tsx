import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Courses() {
  return (
    <>
      <section className="w-full">
        <div className="w-3/4 mx-auto p-10 md:p-20">
          <h1 className="text-green-700 font-bold text-xl md:text-3xl text-center mb-20">
            Pilihan Kursus Terbaru
          </h1>
          <div className="flex flex-col md:grid md:grid-cols-2 md:items-start items-center">
            <div className="">
              <h1>test</h1>
            </div>
            <div className="flex flex-col gap-10 text-center md:text-left">
              <h1 className="text-green-700 font-bold text-2xl lg:text-5xl">
                Level Up Public Speaking Practitioner (CPA)
              </h1>
              <h1 className="text-gray-800 font-normal text-xs md:text-sm">
                Program Certified Public Speaking Practitioner” Anda akan
                belajar dan membedah Seni Berbicara yang Powerful (Level Up)
              </h1>
              <h1 className="text-yellow-600 font-normal text-xs md:text-sm">
                Kursus ini sangat cocok diikuti oleh Dosen, Mahasiswa, Guru,
                Karyawan, dan siapapun yang ingin "Naik Level"
              </h1>
              <Link href={"#"}>
                <div className="flex md:items-start items-center md:justify-start justify-center">
                  <div className="bg-green-700 p-4 rounded-3xl w-3/4 cursor-pointer hover:bg-green-600 hover:shadow-xl hover:shadow-green-600 duration-300 animate-bounce">
                    <h1 className="text-white text-xs md:text-md font-bold text-center">
                      Daftar Sekarang dan Ambil Promo
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
