/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Header() {
  return (
    <>
      <section className="min-h-screen bg-[url('https://tlcnesia.id/wp-content/uploads/2023/04/Slide-ke-3.png')] bg-cover">
        <div className="bg-black bg-opacity-60 px-20 py-16">
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
            <Link href={"#"}>
              <h1 className="text-md mt-4 mb-4 text-center text-black mx-auto p-2 bg-yellow-500 rounded-3xl w-full sm:w-6/12 md:w-3/12 lg:w-3/12 font-bold">
                Test Talent Personality
              </h1>
            </Link>
            <iframe
              src="https://www.youtube.com/embed/FxbIa4Rk0bI?si=17F-d3mgiYjvTzHc"
              className="w-full md:w-3/4 mx-auto h-48 md:h-96 rounded-3xl"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}