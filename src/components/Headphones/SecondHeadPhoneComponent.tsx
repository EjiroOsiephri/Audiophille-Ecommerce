import Image from "next/image";
import Link from "next/link";
import imageone from "../../../public/Group 3.png";

const SecondHeadPhoneComponent = () => {
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
          <p className="uppercase text-[#D87D4A] font-bold tracking-[0.7em] text-sm mb-4">
            New Product
          </p>
          <h1 className="text-3xl font-bold text-[#000000] uppercase mb-6">
            XX99 Mark I Headphones
          </h1>
          <p className="text-gray-600 mb-6">
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <p className="text-2xl  text-[#000000] font-bold mb-6">$ 1,750</p>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button className="px-4 py-2 font-bold text-gray-500 hover:bg-gray-100">
                -
              </button>
              <span className="px-4  text-[#000000] py-2">1</span>
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
          <h2 className="text-2xl font-bold uppercase  text-[#000000] mb-6">
            Features
          </h2>
          <p className="text-gray-600 mb-6">
            As the headphones all others are measured against, the XX99 Mark I
            demonstrates over five decades of audio expertise, redefining the
            critical listening experience. This pair of closed-back headphones
            are made of industrial, aerospace-grade materials to emphasize
            durability at a relatively light weight of 11 oz
          </p>
          <p className="text-gray-600">
            From the handcrafted microfiber ear cushions to the robust metal
            headband with inner damping element, the components work together to
            deliver comfort and uncompromising sound. Its closed-back design
            delivers up to 27 dB of passive noise cancellation, reducing
            resonance by reflecting sound to a dedicated absorber. For
            connectivity, a specially tuned cable is included with a balanced
            gold connector.zer allows you to experience your audio world on your
            terms.
          </p>
        </div>

        {/* In the Box */}
        <div className="md:w-1/3">
          <ul className="space-y-2">
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span>
              Headphone Unit
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">2x</span>
              Replacement Earcups
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span> User
              User Manual
            </li>
            <li className="text-gray-600">
              <span className="text-[#D87D4A] mr-6 font-bold">1x</span> 3.5mm
              3.5mm 5mm Audio Cable
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondHeadPhoneComponent;
