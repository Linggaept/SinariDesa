import Image from "next/image";
import { LiaHandshake } from "react-icons/lia";
import { LiaLaptopSolid } from "react-icons/lia";
import { IoPeopleOutline } from "react-icons/io5";
import { TbAward } from "react-icons/tb";

export default function VisiMisi() {
  return (
    <>
      <section className="min-h-screen flex items-center" id="visi-misi">
        <div className="p-10 md:p-20 items-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-20 w-3/4 mx-auto items-center">
            <div className="">
              <Image
                src={"/img/Visi_misi.jpg"}
                alt="Visi dan Misi"
                width={500}
                height={500}
                className="rounded-3xl ratio-square object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-10">
              <h1 className="text-green-700 font-bold text-3xl md:text-5xl text-center md:text-left">Visi & Misi</h1>
              <h1 className="text-gray-600 font-normal text-xs md:text-xl text-center md:text-left">
                menyetarakan peluang dan keterampilan mereka dengan anak-anak
                muda di perdesaan sehingga mereka mampu bersaing di pasar
                global.
              </h1>
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-center md:text-left">
                <h1 className="flex p-4 bg-green-700 text-white font-normal items-center text-xs md:text-sm rounded-2xl w-46 md:w-56">
                  <span>
                    <LiaHandshake className="w-6 h-6 md:w-10 md:h-10 mr-2" />
                  </span>{" "}
                  As Good Communicator
                </h1>
                <h1 className="flex p-4 bg-green-700 items-center text-white font-normal text-xs md:text-sm rounded-2xl w-46 md:w-56">
                  <span>
                    <LiaLaptopSolid className="w-6 h-6 md:w-10 md:h-10 mr-2" />
                  </span>{" "}
                  Good Emporing Youth Community
                </h1>
                <h1 className="flex p-4 w-full text-center bg-green-700 text-white font-normal items-center text-xs md:text-sm rounded-2xl w-46 md:w-56">
                  <span>
                    <TbAward className="w-6 h-6 md:w-10 md:h-10 mr-2 font-bold text-white" />
                  </span>{" "}
                  Good Literation
                </h1>
                <h1 className="flex p-4 bg-green-700 items-center text-white font-normal text-xs md:text-sm rounded-2xl w-46 md:w-56">
                  <span>
                    <IoPeopleOutline className="w-6 h-6 md:w-10 md:h-10 mr-2" />
                  </span>{" "}
                  Good People & Good Leadership
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
