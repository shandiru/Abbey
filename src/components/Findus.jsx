import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FindUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", once: true, mirror: true });
  }, []);

  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-[#0F172A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <span className="text-[#3B82F6] text-xs font-bold uppercase tracking-widest">
            Our Location
          </span>
          
        </div>

        <div
          className="rounded-2xl overflow-hidden border border-gray-200 dark:border-[#3D4B5E] w-full h-[400px] 
                     hover:border-[#3B82F6]/50 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] 
                     transition-all duration-300"
          data-aos="fade-up"
        >
          <iframe
            title="Google Map - Abbey Tyres"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.538862165981!2d-0.18815659999999998!3d51.540017299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a9e1e4775d5%3A0x5af8964eaa9fc081!2s123%20Abbey%20Rd.%2C%20London%20NW6%204DN%2C%20UK!5e0!3m2!1sen!2slk!4v1774885516840!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full grayscale-[20%] contrast-[1.1] dark:invert dark:hue-rotate-180"
          />
        </div>
      </div>
    </section>
  );
};

export default FindUs;