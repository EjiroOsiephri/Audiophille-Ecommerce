import Link from "next/link";
import Image from "next/image";
import image from "../../public/Bitmap.png";

export default function FeaturedProduct() {
  return (
    <section className="relative bg-[#0E0E0E] text-white py-20">
      <div className="container mx-auto px-6 lg:px-40 flex flex-col md:flex-row items-center md:items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-gray-400 tracking-widest text-sm mb-4">
            New Product
          </p>
          <h1 className="text-5xl font-bold tracking-wide mb-4 leading-snug">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/products/xx99-mark-ii"
            className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-semibold py-3 px-8 uppercase tracking-widest rounded-md transition-all duration-300"
          >
            See Product
          </Link>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center relative">
          <Image
            src={image}
            alt="XX99 Mark II Headphones"
            className="w-full max-w-sm md:max-w-md  rounded-[50%] object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
