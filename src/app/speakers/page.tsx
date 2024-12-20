import Navbar from "@/components/Navbar";
import SpeakersComponent from "@/components/Speakers/SpeakersComponent";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Speakers() {
  return (
    <div>
      <Navbar />
      <SpeakersComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
