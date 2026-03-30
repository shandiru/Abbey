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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.8581191161184!2d-1.1065411!3d52.6444763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761400aa7670d%3A0x1cddabef20bd4583!2sSAFSAH%20TYRES%20LTD%20T%2FA%20ABBEY%20TYRES!5e0!3m2!1sen!2slk!4v1774891989230!5m2!1sen!2slk"
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
