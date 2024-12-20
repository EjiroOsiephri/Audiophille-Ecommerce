import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/Group 5.png";

const EarphonesComponent = () => {
  return (
    <div className="bg-gray-50">
      <header className="bg-black tracking-[0.15em] text-white py-14 mb-10 text-center">
        <h1 className="text-3xl font-bold uppercase">Earphones</h1>
      </header>

      {/* Product Section */}
      <section className="px-6 md:px-20 py-16 space-y-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full h-[350px] md:w-1/2 bg-[#F1F1F1] rounded-lg flex items-center justify-center">
            <Image
              src={imageone}
              alt="ZX9-SPEAKER"
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
              YX1 WIRELESS EARPHONES
            </h2>
            <p className="text-gray-600 mt-4">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <Link
              href="/products/ZX9"
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

export default EarphonesComponent;
