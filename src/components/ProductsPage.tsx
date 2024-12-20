import Image from "next/image";
import Link from "next/link";
import human from "../../public/human.png";

const ProductPage = () => {
  return (
    <div className="bg-white">
      {/* ZX9 Speaker Section */}
      <section className="bg-[#D87D4A] px-6 py-12 md:py-24 mx-4 md:mx-20 flex flex-col md:flex-row items-center text-white rounded-lg">
        <div className="relative w-full md:w-1/2 h-80">
          <Image
            src="/image-removebg-preview(44).png"
            alt="ZX9 Speaker"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
            className="object-contain rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-4xl font-bold uppercase">ZX9 Speaker</h1>
          <p className="mt-4 text-lg">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/products/zx9-speaker"
            className="inline-block mt-6 py-3 px-8 bg-transparent border border-white text-white uppercase text-sm font-bold rounded-lg transition-colors hover:bg-black hover:text-white"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* ZX7 Speaker Section */}
      <section className="mt-12 px-6 md:px-28 py-16">
        <div className="relative w-full h-64 rounded-lg overflow-hidden">
          <Image
            src="/Bitmap-long.png"
            alt="ZX7 Speaker"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center px-6 md:px-12 bg-black bg-opacity-50 text-white rounded-lg">
            <h2 className="text-2xl font-bold uppercase">ZX7 Speaker</h2>
            <Link
              href="/products/zx7-speaker"
              className="inline-block mt-6 py-3 px-8 bg-transparent border border-white text-white uppercase text-sm font-bold rounded-lg transition-colors hover:bg-black hover:text-white"
            >
              See Product
            </Link>
          </div>
        </div>
      </section>

      {/* YX1 Earphones Section */}
      <section className="mt-12 px-6 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative w-full h-64 bg-black text-white py-16 px-8 rounded-lg">
          <Image
            src="/Group 12.png"
            alt="YX1 Earphones"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
            className="absolute inset-0 object-cover rounded-lg"
          />
          <h2 className="relative text-2xl font-bold uppercase z-10">
            YX1 Earphones
          </h2>
          <Link
            href="/products/yx1-earphones"
            className="relative z-10 inline-block mt-6 py-2 px-6 bg-transparent border border-white text-white uppercase text-sm font-bold rounded-lg transition-colors hover:bg-black hover:text-white"
          >
            See Product
          </Link>
        </div>
        <div className="bg-gray-100 py-16 px-8 rounded-lg flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold uppercase text-[#000000]">
            YX1 Earphones
          </h2>
          <Link
            href="/products/yx1-earphones"
            className="inline-block mt-6 py-2 px-6 bg-transparent border border-black text-black uppercase text-sm font-bold rounded-lg transition-colors hover:bg-black hover:text-white"
          >
            See Product
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="mt-20 px-6 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold uppercase text-[#000000] leading-relaxed">
            Bringing you the <span className="text-[#D87D4A]">best</span> audio
            gear
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed tracking-wide">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={human}
            alt="About Us"
            fill
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 33vw"
            className="object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
