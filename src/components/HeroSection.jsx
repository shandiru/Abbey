import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock, FaShieldAlt, FaCoffee } from "react-icons/fa";

const HeroSection = () => {
  const stats = [
    { 
      title: "CCTV 24 Hours", 
      desc: "Vehicle is secure with our comprehensive monitoring",
      icon: <FaShieldAlt className="h-6 w-6 text-[#3B82F6]" /> 
    },
    { 
      title: "Coffee & Tea In-House", 
      desc: "Relax with complimentary refreshments while we service",
      icon: <FaCoffee className="h-6 w-6 text-[#3B82F6]" /> 
    },
    { 
      title: "24/7 Service", 
      desc: "Emergency tyre services available around the clock",
      icon: <FaClock className="h-6 w-6 text-[#3B82F6]" /> 
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-white dark:bg-[#0F172A] transition-colors duration-300 pt-20"
      id="home"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      
      {/* Blue glow effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6 text-left" data-aos="fade-right">
           

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight text-black dark:text-white mt-10 md:mt-0">
              <span className="text-[#3B82F6]">Abbey Tyres</span>
            </h1>

            <p className="text-xl text-gray-800 dark:text-[#CBD5E1] font-medium">
              Professional Tyre Services
            </p>

            <p className="text-lg text-gray-600 dark:text-[#CBD5E1]/80 max-w-lg leading-relaxed">
              Quality tyres, expert fitting, and exceptional service - available 24/7 .
            </p>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up">
              <a
                href="tel:+447737985510"
                className="inline-flex items-center justify-center gap-2 text-sm bg-[#3B82F6] hover:bg-blue-600 text-white h-11 rounded-lg px-6 font-semibold transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.5)]"
              >
                <FaPhone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-sm border border-gray-300 dark:border-[#3D4B5E] text-gray-700 dark:text-[#CBD5E1] hover:text-white h-11 rounded-lg px-6 font-semibold transition-all duration-300 hover:bg-[#3B82F6] hover:border-[#3B82F6]"
              >
                View Services
              </a>
            </div>

            <div
              className="flex items-start gap-3 p-3 rounded-lg transition hover:bg-gray-100 dark:hover:bg-[#1E293B] w-fit"
              data-aos="zoom-in"
            >
              <FaMapMarkerAlt className="h-5 w-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-black dark:text-white">Location</p>
                <p className="text-sm text-gray-600 dark:text-[#CBD5E1]">
                   123 Abbey Rd., London NW6 4DN, UK
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VIDEO CONTENT */}
          <div className="relative w-full" data-aos="fade-left">
            <div className="aspect-video sm:aspect-[4/3] w-full relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#3D4B5E] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)] hover:border-[#3B82F6]/50">
              <video
                className="object-cover absolute inset-0 h-full w-full"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-[#0F172A]/40" />
            </div>
          </div>

        </div>

        {/* STATS SECTION */}
        <div className="mt-16 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-3xl w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] hover:border-[#3B82F6]/50 p-6 rounded-xl shadow-sm transition-all duration-300 hover:shadow-[0_8px_24px_rgba(59,130,246,0.1)] dark:hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)] min-h-[110px]"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center justify-center mb-3 w-10 h-10 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                  {stat.icon}
                </div>
                <p className="text-black dark:text-white font-bold text-sm text-center">{stat.title}</p>
                <p className="text-xs text-gray-500 dark:text-[#CBD5E1]/60 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;