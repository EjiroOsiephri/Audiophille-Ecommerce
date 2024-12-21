import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecondHeadPhoneComponent from "@/components/Headphones/SecondHeadPhoneComponent";
import SecondGalleryComponent from "@/components/Headphones/SecondGalleryComponents";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";

export default function Secondheadset() {
  return (
    <div>
      <Navbar />
      <SecondHeadPhoneComponent />
      <SecondGalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
