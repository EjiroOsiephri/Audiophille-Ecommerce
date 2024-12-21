import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FirstHeadPhoneComponent from "@/components/Headphones/FirstHeadPhoneComponent";
import GalleryComponent from "@/components/GalleryComponents";

export default function Firstheadset() {
  return (
    <div>
      <Navbar />
      <FirstHeadPhoneComponent />
      <GalleryComponent />
      <Footer />
    </div>
  );
}
