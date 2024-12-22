import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";
import FirstEarphoneComponent from "@/components/Earphones/FirstEarphonesComponent";
import FirstEarphoneGalleryComponent from "@/components/Earphones/FirstEarphoneGalleryComponent";

export default function firstearphones() {
  return (
    <div>
      <Navbar />
      <FirstEarphoneComponent />
      <FirstEarphoneGalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
