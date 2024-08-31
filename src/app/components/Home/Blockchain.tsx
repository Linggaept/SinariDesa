import Image from "next/image";
import Link from "next/link";
import { IoMdCheckmarkCircle } from "react-icons/io";
const Blockchain = () => {
  return (
    <>
      <section className="p-10 md:p-32">
        {/* Section 1 */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2">
                <Image
                  src={"/svg/Blockchain.svg"}
                  alt="Blockchain"
                  width={70}
                  height={70}
                  className="items-start"
                />
                <h1 className="text-black text-3xl lg:text-5xl w-3/4 md:w-7/12">
                  Blockchain Certification
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Make your Certificate tamper-proof on the blockchain
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Benefit from the power of blockchain with full privacy control
                  and vendor independence
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1 ">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Certify one or millions of Sertificate with an
                  easy-to-integrate solution
                </h1>

                <Link href={"/"}>
                  <div className="mt-4 bg-green-700 rounded-md w-full md:w-7/12 hover:bg-green-600 duration-300">
                    <h1 className="text-sm text-white font-normal text-center p-4 ">
                      Check Your Sertifikat
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" ">
              <Image
                src={"/img/Blockchain_1.png"}
                alt="Blockchain"
                width={400}
                height={400}
                className="ml-0 md:ml-20 mb-0 md:mb-20 "
              />
            </div>
          </div>
        </section>

        <div className="w-1/12 mx-auto border border-red-600 mb-28"></div>

        {/* Section 2 */}
        <section>
          <div className="w-full mx-auto">
            <div className="flex-col flex mb-10">
              <h1 className="text-sm text-green-700 ml-0 md:ml-20 underline">
                How your organization can benefit
              </h1>
              <h1 className="text-2xl font-normal text-black ml-0 md:ml-20 ">
                Profit from the unique advantages of our blockchain
                certifications
              </h1>
            </div>
          </div>
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
              <div className="flex flex-col gap-2">
                <h1 className="text-black text-xl lg:text-2xl">
                  Make your Sertificate tamper-proof and prevent Sertificate
                  fraud risks
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Your business shouldn’t rely on simple PDF solutions that have
                  been hacked and manipulated time after time.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Certify the digital fingerprints of your documents on +10’000
                  blockchain nodes
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Benefit from blockchain’s superior security that has no single
                  point of failure and is virtually impossible to hack
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Separate the certification of your documents from the document
                  itself to protect yourself against the common vulnerabilities
                  of virtually all PDF viewers
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
                  Stay in full control of your privacy
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  No document should leave your device and be uploaded to the
                  cloud by default – neither for certifying nor for verifying.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Benefit from our privacy-by-design solution where all
                  documents can be locally processed on your device
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Only the unique digital fingerprints of your Sertificate are
                  certified on the blockchain, but your Sertificate won’t leave
                  your device
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  It is impossible to derive the content of a Sertificate from
                  its digital fingerprint
                </h1>
              </div>
            </div>

            <div className=" ">
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
              <div className="flex flex-col gap-2">
                <h1 className="text-black text-xl font-bold lg:text-2xl">
                  Certify right within your existing IT landscape
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  The most intuitive solution doesn’t add any additional
                  software but can be easily integrated into your existing IT
                  landscape.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Upgrade your existing software with our powerful, yet simple
                  API
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Simply add a “certify” button right in your existing software
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  JS Library, CLI, HTTP Proxy… the choice is yours and readily
                  availables
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
                <h1 className="text-black text-xl lg:text-2xl">
                  Equip your Sertificate with verifiable trust 
                </h1>
                <h1 className="text-black text-sm lg:text-sm">
                  Because the verification of your Sertificate shouldn’t require
                  an instruction manual. Everyone should be enabled to verify
                  your sertificate with just a few clicks and within seconds.
                </h1>
              </div>

              <div className="flex flex-col gap-2 px-5">
                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Allow for intuitive verifications of your Sertificate that can
                  be done with just a few clicks and within seconds
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Add unparalleled reliability with a powerful verification tool
                  that spots the change of one single pixel and everything
                  beyond
                </h1>

                <h1 className="flex items-start gap-2 text-sm lg:text-sm">
                  <span className="mt-1">
                    <IoMdCheckmarkCircle className="text-green-700" />
                  </span>
                  Embed our verification tool in your website and make it your
                  own
                </h1>

                <Link href={"/"}>
                  <div className="mt-4 bg-green-700 rounded-md w-full hover:bg-green-600 duration-300">
                    <h1 className="text-sm text-white font-normal text-center p-4 ">
                      Avoid diploma fraud: Diploma certification for education
                      institutions
                    </h1>
                  </div>
                </Link>
              </div>
            </div>

            <div className=" ">
              <Image
                src={"/img/Blockchain_5.png"}
                alt="Blockchain 2"
                width={380}
                height={380}
                className="ml-0 md:ml-20 "
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Blockchain;
