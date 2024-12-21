import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/image-removebg-preview(47).png";
import imagetwo from "../../../public/image-removebg-preview(41) (1).png";
import imagethree from "../../../public/image-removebg-preview(48).png";

const HeadphonesComponent = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-black tracking-[0.15em] text-white py-14 mb-10 text-center">
        <h1 className="text-3xl font-bold uppercase">Headphones</h1>
      </header>

      {/* Product Section */}
      <section className="px-6 md:px-20 py-16 space-y-24">
        {/* XX99 Mark II Headphones */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-[350px] md:w-1/2 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
            <Image
              src={imageone}
              alt="XX99 Mark II Headphones"
              width={500}
              height={350}
              className="rounded-lg"
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full max-w-lg flex flex-col md:text-left text-center md:items-start items-center md:pl-6">
            <p className="uppercase font-bold text-[#D87D4A] tracking-[0.87em] text-sm mb-4 md:mb-0">
              New Product
            </p>
            <h2 className="text-2xl text-[#000000] font-bold uppercase mt-4">
              XX99 Mark II Headphones
            </h2>
            <p className="text-gray-600 mt-4">
              The XX99 Mark II headphones redefine the pinnacle of pristine
              audio. These headphones combine unparalleled style, comfort, and
              sound quality.
            </p>
            <Link
              href="/products/firstheadset"
              className="inline-block mt-6 py-2 px-6 bg-[#D87D4A] text-white uppercase text-sm font-bold rounded-lg hover:bg-[#f09c6a]"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* XX99 Mark I Headphones */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="relative w-full h-[350px] md:w-1/2 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
            <Image
              src={imagetwo}
              alt="XX99 Mark I Headphones"
              width={500}
              height={350}
              className="rounded-lg"
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full max-w-lg flex flex-col md:text-left text-center md:items-start items-center md:pl-6">
            <h2 className="text-2xl text-[#000000] font-bold uppercase mt-4">
              XX99 Mark I Headphones
            </h2>
            <p className="text-gray-600 mt-4">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles
              and music lovers alike.
            </p>
            <Link
              href="/products/secondheadset"
              className="inline-block mt-6 py-2 px-6 bg-[#D87D4A] text-white uppercase text-sm font-bold rounded-lg hover:bg-[#f09c6a]"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* XX59 Headphones */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-[350px] md:w-1/2 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
            <Image
              src={imagethree}
              alt="XX59 Headphones"
              width={500}
              height={350}
              className="rounded-lg"
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
            />
          </div>
          <div className="md:w-1/2 w-full max-w-lg flex flex-col md:text-left text-center md:items-start items-center md:pl-6">
            <h2 className="text-2xl text-[#000000] font-bold uppercase mt-4">
              XX59 Headphones
            </h2>
            <p className="text-gray-600 mt-4">
              Enjoy your audio anywhere and customize it to your specific needs
              with the XX59 headphones. Perfect for all situations on the go.
            </p>
            <Link
              href="/products/thirdheadset"
              className="inline-block mt-6 py-2 px-6 bg-[#D87D4A] text-white uppercase text-sm font-bold rounded-lg hover:bg-[#f09c6a]"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeadphonesComponent;
