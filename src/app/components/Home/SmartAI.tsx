import Link from "next/link";
import Image from "next/image";

const SmartAI = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col p-10 md:py-20 md:px-44 gap-10">
          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="text-4xl font-bold text-black">
              Belajar Cerdas dengan AI{" "}
              <span className="text-indigo-600">Sinari Desa</span>
            </h1>
            <h1 className="text-gray-600 text-md">
              AI SINARI DESA menggabungkan kecerdasan buatan yang kuat dengan
              antarmuka yang intuitif untuk mengungkap wawasan kunci dari
              Pelajaran atau materi dalam hitungan detik
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
            <div className="flex flex-col gap-5 w-10/12">
              <div className="flex md:w-6/12 w-10/12 ">
                <h1 className="text-3xl font-bold">
                  <span className="text-indigo-600">Belajar</span> Mudah di{" "}
                  <span className="text-indigo-600">Ujung Jari Anda</span>
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                <div className="bg-indigo-600 p-4 border-l-8 border-indigo-800">
                  <h1 className="text-md text-white font-normal">
                    <span className="font-bold">
                      Peringkasan dengan Satu Klik
                    </span>{" "}
                    - Teknologi AI kami dapat membantu anda belajar yang singkat
                    dengan satu klik.
                  </h1>
                </div>
                <div className="flex flex-col gap-5 ml-6">
                  <h1>
                    <span className="font-bold text-black">
                      Kontrol Kustomisasi
                    </span>{" "}
                    - Sesuaikan jenis ringkasan, bahasa, dan parameter lainnya
                    sesuai kebutuhan Anda.
                  </h1>
                  <h1>
                    <span className="font-bold text-black">
                      Alat Kolaborasi
                    </span>{" "}
                    - Bagikan ringkasan dan diskusikan wawasan kunci dengan
                    anggota tim.
                  </h1>
                  <h1>
                    <span className="font-bold text-black">
                      Akses Cross-Platform
                    </span>{" "}
                    - Aplikasi web memungkinkan akses universal ke dokumen dan
                    ringkasan Anda di mana saja.
                  </h1>
                </div>

                <Link href={"/"}>
                  <div className="bg-indigo-600 rounded-md w-full md:w-7/12 hover:bg-indigo-500 duration-300">
                    <h1 className="text-sm text-white font-normal text-center p-4 ">
                      Coba Gratis Sekarang
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className="">
              <Image 
                src={"/img/Ai.png"}
                alt="Smart AI"
                width={500}
                height={500}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default SmartAI;
