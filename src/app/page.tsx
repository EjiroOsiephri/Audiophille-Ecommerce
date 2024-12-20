import Image from "next/image";
import Navbar from "@/components/Navbar";
import FeaturedProduct from "@/components/FeaturedProduct";
import CategorySection from "@/components/CategorySection";
import ProductPage from "@/components/ProductsPage";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FeaturedProduct />
      <CategorySection />
      <ProductPage />
    </div>
  );
}
