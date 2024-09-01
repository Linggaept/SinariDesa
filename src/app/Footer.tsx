import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="w-full bg-green-700">
        <div className="w-3/4 py-10 px-2 md:p-20 flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 mx-auto gap-10">

          <div className="flex flex-col">
            <h1 className="text-yellow-500 font-bold text-3xl">Get Contact</h1>

            <div className="flex mt-10">
              <h1 className="text-white font-normal text-sm">
                <span></span>
                PT. Sinari Desa
              </h1>
            </div>
            <div className="flex mt-4">
              <h1 className="text-white font-normal text-sm">
                <span></span>
                PT. Sinari Desa
              </h1>
            </div>
            <div className="flex mt-4">
              <h1 className="text-white font-normal text-sm">
                <span></span>
                PT. Sinari Desa
              </h1>
            </div>
          </div>

          <div className="">
            <h1 className="text-yellow-500 font-bold text-3xl mb-10">
              Get in Touch
            </h1>
            <form action="" className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nama"
                className="w-52 md:w-72 rounded-md p-2 text-xs"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-52 md:w-72 rounded-md p-2 text-xs"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-52 md:w-72 rounded-md p-2 text-xs"
              />
              <textarea
                name="deskripsi"
                id="deskripsi"
                className="h-20 rounded-md text-xs w-52 md:w-72"
              ></textarea>
              <button className="bg-yellow-500 text-white  p-2 rounded-md w-52 md:w-72">
                Send
              </button>
            </form>
          </div>

          <div className="">
            <div className="flex flex-col">
              <h1 className="text-yellow-500 font-bold text-3xl mb-10">
                Find Us
              </h1>
              <div className="flex gap-4">
                <div className="bg-blue-600 rounded-full p-3">
                  <FaFacebook className="w-6 h-6 text-white" />
                </div>
                <div className="bg-pink-600 rounded-full p-3">
                  <FaInstagram className="w-6 h-6 text-white" />
                </div>
                <div className="bg-blue-400 rounded-full p-3">
                  <FaTwitter className="w-6 h-6 text-white" />
                </div>
                <div className="bg-red-600 rounded-full p-3">
                  <FaYoutube className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
