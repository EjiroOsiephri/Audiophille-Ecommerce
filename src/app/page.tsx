import Image from "next/image";
import Navbar from "@/components/Navbar";
import FeaturedProduct from "@/components/FeaturedProduct";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedProduct />
    </div>
  );
}
