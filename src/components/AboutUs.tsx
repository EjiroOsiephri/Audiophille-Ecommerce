import Image from "next/image";
import human from "../../public/human.png";

const AboutUs = () => {
  return (
    <div>
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

export default AboutUs;
