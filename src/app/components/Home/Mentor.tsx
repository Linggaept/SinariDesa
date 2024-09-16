"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { CgEditBlackPoint } from "react-icons/cg";

const Mentor = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  interface mentor {
    img: string;
    name: string;
    role: string[];
  }
  const mentors: mentor[] = [
    {
      img: "Mentor_1",
      name: "Rachmat Fachrurrozi",
      role: [
        "Founder &CEO - Sinari Desa, SkillUpKids",
        "Master Trainer & Assesor SkillUpKids",
        "DPO Himtekk 2024",
      ],
    },
    {
      img: "Mentor_2",
      name: "Grishandy Rifqi Ardiyanto",
      role: [
        "Master Trainer & Assesor SkillUpKids",
        "Master Mentor SkillUpKids",
        "Dewan Penasehat Sinari Desa (Sertifikasi)",
      ],
    },
    {
      img: "Mentor_3",
      name: "Lingga Eka Praditya Tama",
      role: [
        "Guru Besar & Certified Public Speaker from SkillUpKids",
        "Dewan Penasehat Sinari Desa (Sertifikasi)",
        "Senior Mentor SkillUpKids",
      ],
    },
    {
      img: "Mentor_4",
      name: "M. Gusbayu Aji",
      role: [
        "Certified Public Communicator on Sinari Desa",
        "Master Trainer SkillUpKids Digital Literacy",
        "Leadership & Communication",
      ],
    },
    {
      img: "Mentor_5",
      name: "Afrian Dicky Prasetya",
      role: [
        "Chief Commercial Officer (CCO) of Sinari Desa",
        "Mentor Data Visualization & Certified Office Master Sinari Desa",
        "Digital Marketing Expert",
      ],
    },
    {
      img: "Mentor_6",
      name: "Azhar Surya Pratama S. Kom",
      role: [
        "Chief Operation Officer (COO) & HR Sinari Desa",
        "Mentor Data Visualization & Certified Office Master Sinari Desa",
        "Master Mentor & Certified Public Speaker from SkillUpKids",
      ],
    },
  ];

  return (
    <>
      <section
        className="p-10 md:p-32 scroll-mt-14 md:scroll-mt-0"
        id="Mentor"
        data-aos="fade-up"
      >
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-red-800 text-center mb-32">
            Dewan Penasihat, Pelatih Utama, & Mentor
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex flex-col mx-auto gap-5 w-full">
                <div className="mx-auto bg-red-800 p-2 rounded-full">
                  <Image
                    src={`/img/${mentor.img}.jpg`}
                    alt="Belajar di desa"
                    width={180}
                    height={180}
                    className="rounded-full object-cover object-top aspect-square"
                  />
                </div>
                <div className="mx-auto">
                  <h1 className="text-2xl text-black">{mentor.name}</h1>
                </div>

                <div className="flex flex-col gap-2 mt-4 text-left">
                  {mentor.role.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-start gap-2">
                      <CgEditBlackPoint className="text-red-800 w-3 h-3 mt-1.5" />
                      <span className="text-gray-700 w-11/12">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentor;
