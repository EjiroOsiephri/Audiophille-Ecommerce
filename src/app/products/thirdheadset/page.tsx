import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThirdHeadPhoneComponent from "@/components/Headphones/ThirdHeadPhoneComponent";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";
import ThirdGalleryComponent from "@/components/Headphones/ThirdGalleryComponent";

export default function Thirdheadset() {
  return (
    <div>
      <Navbar />
      <ThirdHeadPhoneComponent />
      <ThirdGalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
