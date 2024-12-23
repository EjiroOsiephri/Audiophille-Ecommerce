import Link from "next/link";
import Image from "next/image";
import speaker from "../../public/image-removebg-preview(38).png";
import earphone from "../../public/image-removebg-preview(42).png";
import headphone from "../../public/image-removebg-preview(41).png";

const categories = [
  {
    name: "HEADPHONES",
    imageSrc: headphone,
    link: "/headphones",
  },
  {
    name: "SPEAKERS",
    imageSrc: speaker,
    link: "/speakers",
  },
  {
    name: "EARPHONES",
    imageSrc: earphone,
    link: "/earphones",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className="relative text-center bg-gray-100 pt-20 pb-8 px-8 rounded-lg shadow-md"
            >
              {/* Image Wrapper */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 flex items-center justify-center">
                <Image
                  src={category.imageSrc}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                />
              </div>

              {/* Category Name */}
              <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wider">
                {category.name}
              </h3>

              {/* Shop Link */}
              <Link
                href={category.link}
                aria-label={`Shop for ${category.name}`}
                className="text-gray-500 hover:text-orange-500 font-medium uppercase tracking-widest flex items-center justify-center"
              >
                SHOP <span className="ml-1 text-orange-500">&gt;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
