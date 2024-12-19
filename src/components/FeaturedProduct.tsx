import Link from "next/link";
import Image from "next/image";
import image from "../../public/Bitmap.png";

export default function FeaturedProduct() {
  return (
    <section className="relative bg-[#0E0E0E] text-white py-0 md:py-0">
      {/* Mobile Layout */}
      <div className="block md:hidden text-center px-6 flex items-center justify-center relative h-[calc(100vh-80px)]">
        {/* Added height to mobile container */}
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src={image}
            alt="XX99 Mark II Headphones"
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="relative z-10 max-w-md">
          <p className="uppercase text-gray-400 tracking-widest text-sm mb-4">
            New Product
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-wide mb-4 leading-snug">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/products/xx99-mark-ii"
            className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-semibold py-3 px-8 uppercase tracking-widest rounded-md transition-all duration-300 inline-block"
          >
            See Product
          </Link>
        </div>
      </div>
      {/* Desktop Layout */}
      <div className="hidden md:flex container mx-auto px-6 lg:px-40 items-center h-[600px]">
        <div className="w-full md:w-1/2 pr-12">
          <p className="uppercase text-gray-400 tracking-widest text-sm mb-4">
            New Product
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-4 leading-snug">
            XX99 Mark II <br /> Headphones
          </h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/products/xx99-mark-ii"
            className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white font-semibold py-3 px-8 uppercase tracking-widest rounded-md transition-all duration-300 inline-block"
          >
            See Product
          </Link>
        </div>

        <div className="w-full md:w-1/2 relative h-full">
          <div
            className="absolute inset-y-0 right-0 w-[80%] max-w-[600px] h-full bg-center bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${image.src})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle, transparent, #0E0E0E 70%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
