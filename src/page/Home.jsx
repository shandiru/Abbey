import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Service";
import LogoCarousel from "../components/LogoCarousel";
import Review from "../components/Review";
import ContactSection from "../components/Contact";
import FindUs from "../components/Findus";
const Home = () => {
  return (
    <div>
     <HeroSection />
      <ServicesSection />
      <LogoCarousel />
      <Review />
      <ContactSection />
      <FindUs />

    </div>
  )
}

export default Home
