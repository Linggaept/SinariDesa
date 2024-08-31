"use client"

import Navbar from "@/app/components/Navbar";
import DetailProduct from "@/app/components/Product/DetailProduct";
import BoxOrder from "@/app/components/Product/BoxOrder";
import Images from "@/app/components/Product/Image";
import { useState } from "react";

const Flashdisk = () => {

  const [count, setCount] = useState(1);

  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />

        {/* Flashdisk */}
        <section className="w-full bg-white">
          <div className="w-10/12 mx-auto p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {/* Image */}
              <Images />

              {/* Detail Product */}
              <DetailProduct />

              {/* Order */}
              <BoxOrder setCount={setCount} count={count} />

            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Flashdisk;
