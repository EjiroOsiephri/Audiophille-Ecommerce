import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FirstHeadPhoneComponent from "@/components/Headphones/FirstHeadPhoneComponent";
import GalleryComponent from "@/components/GalleryComponents";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";

export default function Firstheadset() {
  return (
    <div>
      <Navbar />
      <FirstHeadPhoneComponent />
      <GalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
