import EarphonesComponent from "@/components/Earphones/EarphonesComponent";
import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Earphones() {
  return (
    <div>
      <Navbar />
      <EarphonesComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
