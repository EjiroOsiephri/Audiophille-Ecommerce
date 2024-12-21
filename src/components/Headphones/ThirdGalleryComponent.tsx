import Image from "next/image";
import Link from "next/link";

import img1 from "../../../public/Bitmap (11).png"; // Replace with the correct path
import img2 from "../../../public/Bitmap (10).png";
import img3 from "../../../public/Bitmap (12).png";
import product1 from "../../../public/image-removebg-preview(48).png";
import product2 from "../../../public/image-removebg-preview(41) (1).png";
import product3 from "../../../public/image-removebg-preview(38).png";

const ThirdGalleryComponent = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-10">
      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20">
        {/* Left: Two Small Images */}
        <div className="md:col-span-2 grid grid-rows-2 gap-16">
          <Image
            src={img2}
            alt="Gallery Image 2"
            layout="responsive"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <Image
            src={img1}
            alt="Gallery Image 1"
            layout="responsive"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>

        {/* Right: Large Image */}
        <div className="md:col-span-3">
          <Image
            src={img3}
            alt="Gallery Image 3"
            layout="responsive"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* You May Also Like Section */}
      <div>
        <h2 className="text-center text-2xl text-[#000000] font-bold uppercase mb-10">
          You May Also Like
        </h2>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[product1, product2, product3].map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg p-6 "
            >
              <div className="relative p-6 bg-gray-100 rounded-lg w-40 h-40 flex items-center justify-center">
                <Image
                  src={product}
                  alt={`Product ${index + 1}`}
                  layout="intrinsic"
                  width={130}
                  height={130}
                  className="rounded-lg"
                />
              </div>
              <h3 className="mt-4 text-[#000000] text-lg font-semibold uppercase text-center">
                {index === 0
                  ? "XX99 MARK I"
                  : index === 1
                  ? "XX59"
                  : "ZX9 SPEAKER"}
              </h3>
              <Link
                href="#"
                className="mt-4 px-4 py-2 bg-[#D87D4A] text-white text-sm font-bold uppercase rounded-md hover:bg-[#f09c6a]"
              >
                See Product
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdGalleryComponent;
