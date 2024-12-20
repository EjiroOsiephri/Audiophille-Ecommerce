import AboutUs from "@/components/AboutUs";
import CategorySection from "@/components/CategorySection";
import HeadphonesComponent from "@/components/Headphones/HeadphonesComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Headphones() {
  return (
    <div>
      <Navbar />
      <HeadphonesComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
