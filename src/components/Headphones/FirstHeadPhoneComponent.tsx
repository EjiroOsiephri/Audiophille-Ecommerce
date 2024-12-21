import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/image-removebg-preview(47).png";
import human from "../../../public/human.png";

const FirstHeadPhoneComponent = () => {
  return (
    <div className="bg-white px-6 md:px-20 py-10">
      {/* Go Back Link */}
      <div className="mb-6">
        <Link href="/" className="text-gray-500 hover:text-gray-800">
          Go Back
        </Link>
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 bg-gray-100 rounded-lg flex items-center justify-center">
          <Image
            src={imageone}
            alt="XX99 Mark II Headphones"
            width={500}
            height={500}
            style={{ objectFit: "contain" }}
            className="rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <p className="uppercase text-[#D87D4A] font-bold tracking-widest text-sm mb-4">
            New Product
          </p>
          <h1 className="text-3xl font-bold uppercase mb-6">
            XX99 Mark II Headphones
          </h1>
          <p className="text-gray-600 mb-6">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <p className="text-2xl font-bold mb-6">$ 2,999</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-100">
                -
              </button>
              <span className="px-4 py-2">1</span>
              <button className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-100">
                +
              </button>
            </div>
            <button className="px-6 py-2 bg-[#D87D4A] text-white uppercase text-sm font-bold rounded-md hover:bg-[#f09c6a]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row gap-16 mb-20">
        {/* Features */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold uppercase mb-6">Features</h2>
          <p className="text-gray-600 mb-6">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you're taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you'll never miss a beat.
          </p>
          <p className="text-gray-600">
            The advanced Active Noise Cancellation with built-in equalizer
            allows you to experience your audio world on your terms. It lets you
            enjoy your audio in peace but quickly interact with your
            surroundings when needed. Combined with Bluetooth 5.0, compliant
            connectivity, and 37-hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>

        {/* In the Box */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold uppercase mb-6">In the Box</h2>
          <ul className="space-y-2">
            <li className="text-gray-600">
              <span className="text-[#D87D4A] font-bold">1x</span> Headphone
              Unit
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] font-bold">2x</span> Replacement
              Earcups
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] font-bold">1x</span> User Manual
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] font-bold">1x</span> 3.5mm Audio
              Cable
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] font-bold">1x</span> Travel Bag
            </li>
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1 md:col-span-2">
          <Image
            src={human}
            alt="Gallery Image 1"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <Image
            src={human}
            alt="Gallery Image 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstHeadPhoneComponent;
