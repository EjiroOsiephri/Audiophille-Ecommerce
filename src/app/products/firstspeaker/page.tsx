import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FirstSpeakerComponent from "@/components/Speakers/FirstSpeakersPhoneComponent";
import FirstSpeakerGalleryComponent from "@/components/Speakers/FirstSpeakerGalleryComponent";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";

export default function Firstspeaker() {
  return (
    <div>
      <Navbar />
      <FirstSpeakerComponent />
      <FirstSpeakerGalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
