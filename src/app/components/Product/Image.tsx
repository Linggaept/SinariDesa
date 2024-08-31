import Image from "next/image";

const Images = () => {
  return (
    <>
      <div className="w-full ">
        <Image
          src={"/img/product/flashdisk.png"}
          alt="Flashdisk"
          width={1000}
          height={1000}
          className="rounded-3xl"
        />
      </div>
    </>
  );
};

export default Images;
