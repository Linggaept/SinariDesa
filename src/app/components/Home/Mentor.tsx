import Image from "next/image";
import { CgEditBlackPoint } from "react-icons/cg";

const Mentor = () => {
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
        "CEO - Sinari Desa, SkillUpKids",
        "DPO Himtekk 2024",
        "International Certified Coach NLP, from NFNLP - Horton, FLORIDA - USA.",
      ],
    },
    {
      img: "Mentor_2",
      name: "Grishandy Rifqi Ardiyanto",
      role: [
        "Master Trainer & Assesor BNSP RI",
        "Master Trainer NeoNLP & HRM Malaysia",
        "International Certified Trainer & Professional Coach from NF-NLP USA.",
        "Dewan Penasehat TLCNESIA (Sertifikasi)",
      ],
    },
    {
      img: "Mentor_3",
      name: "Lingga Eka Praditya Tama",
      role: [
        "Guru Besar & Certified Public Speaker from IPSA",
        "Dewan Penasehat @speakersionalist.id by TLCNESIA",
        "International Certified Trainer & Professional Coach from NF-NLP USA.",
        "Dewan Penasehat TLCNESIA (Sertifikasi)",
      ],
    },
    {
      img: "Mentor_4",
      name: "M. Gusbayu Aji",
      role: [
        "Founder & CEO Ekosistem @tlcnesia.id",
        "MBA in Business Communication",
        "Certified Public Communicator Based on NFNLP USA",
        "Master Trainer ASEAN Digital Literacy",
        "Certified Pro Trainer by BNSP RI",
        "Leadership & Communication Facilitator",
      ],
    },
    {
      img: "Mentor_5",
      name: "Afrian Dicky Prasetya",
      role: [
        "Chief Commercial Officer (CCO) of @tlcnesia.id",
        "Mentor Data Visualization, Digital Marketing BNSP, & Certified Office Master from U.S.A",
        "Co-Founder Digital Platform juruze.id",
      ],
    },
    {
      img: "Mentor_6",
      name: "Azhar Surya Pratama S. Kom",
      role: [
        "Chief Operation Officer (COO) & HR @tlcnesia.id",
        "Penulis 8 Buku & Mentor Kepenulisan Non Ilmiah",
        "Short Course Mini MBA ITB Program & Event Organizer Enthutiast",
      ],
    },
  ];

  return (
    <>
      <section className="p-10 md:p-32 scroll-mt-14 md:scroll-mt-0" id="Mentor">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-red-800 text-center mb-32">
            Dewan Penasihat, Pelatih Utama, & Mentor
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="flex flex-col mx-auto gap-5 w-full"
              >
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
