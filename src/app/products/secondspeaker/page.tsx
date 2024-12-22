import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SecondSpeakerComponent from "@/components/Speakers/SecondSpeakerPhoneComponent";
import SecondSpeakerGalleryComponent from "@/components/Speakers/SecondSpeakerGalleryComponent";
import CategorySection from "@/components/CategorySection";
import AboutUs from "@/components/AboutUs";

export default function Secondspeaker() {
  return (
    <div>
      <Navbar />
      <SecondSpeakerComponent />
      <SecondSpeakerGalleryComponent />
      <CategorySection />
      <AboutUs />
      <Footer />
    </div>
  );
}
