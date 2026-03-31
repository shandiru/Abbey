import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Service";
import LogoCarousel from "../components/LogoCarousel";
import Review from "../components/Review";
import ContactSection from "../components/Contact";
import FindUs from "../components/Findus";
import Gallery from "../components/gallery";
const Home = () => {
  return (
    <div>
     <HeroSection />
      <ServicesSection />
      <LogoCarousel />
      <Review />
      <Gallery />
      <ContactSection />
      <FindUs />

    </div>
  )
}

export default Home
