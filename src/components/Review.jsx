import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Abbey Tyres did an amazing job. Fast service and very reasonable prices. They kept me informed throughout the process. Highly recommend them for anyone needing new tyres or repairs.",
    name: "Kitti Nangtalar",
    location: "UK",
    avatar: "1.png",
  },
  {
    id: 2,
    quote: "Excellent service on my van. Had a puncture and they sorted it out in no time. One of the few places willing to help on short notice. Very professional team.",
    name: "Jerome Mowat",
    location: "UK",
    avatar: "2.png",
  },
  {
    id: 3,
    quote: "My car needed a full set of tyres. The team at Abbey Tyres provided honest advice and a high standard of work. Will definitely be coming back for future services.",
    name: "Jay J",
    location: "UK",
    avatar: "3.png",
  },
  {
    id: 4,
    quote: "Perfect delivery and top-quality parts. The car feels brand new on the road. Great communication and super impressed with the turnaround time.",
    name: "Phoebe Potkins",
    location: "UK",
    avatar: "4.png",
  },
];

const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5 text-[#3B82F6] fill-[#3B82F6]" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const Review = () => {
  const [paused, setPaused] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 80, behavior: "smooth" });
    }
  };

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white dark:bg-[#0F172A] py-24 px-6 md:px-12 transition-colors duration-300"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Glow accents (visible primarily in dark mode) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3B82F6]/5 dark:bg-[#3B82F6]/8 blur-[140px] rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/3 dark:bg-[#3B82F6]/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14" data-aos="fade-up">
        <div data-aos="fade-right">
          <p className="text-[#3B82F6] uppercase tracking-[5px] text-xs font-semibold mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-black dark:text-white">
            What Our <span className="text-[#3B82F6]">Customers</span> Say
          </h2>
          <p className="text-gray-600 dark:text-[#CBD5E1] text-sm mt-3 max-w-lg">
            At Abbey Tyres, we're committed to honest advice, quality parts, and service you can count on. Don't just take our word for it, here's what our customers think.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("contact")}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-8 md:mt-0 flex items-center gap-2 bg-[#3B82F6] hover:bg-blue-400 text-white font-semibold uppercase px-7 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_24px_rgba(59,130,246,0.5)] text-sm"
        >
          Book Your Service
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Scrolling Rows Container */}
      <div className="flex flex-col gap-6 relative z-10">
        {/* Top Row */}
        <div
          className="flex gap-6 animate-scroll-left"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={`row1-${i}`}
              className="bg-gray-50 dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#3B82F6]/50 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 w-[360px] h-[320px]"
            >
              <StarRating />
              <p className="italic text-gray-700 dark:text-[#CBD5E1] text-[14px] leading-relaxed line-clamp-7 overflow-hidden">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-full object-cover border border-[#3B82F6]/30" />
                <div>
                  <h4 className="text-black dark:text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 dark:text-[#CBD5E1]/60 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          className="flex gap-6 animate-scroll-right"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={`row2-${i}`}
              className="bg-gray-50 dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#3B82F6]/50 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 w-[340px] h-[300px]"
            >
              <StarRating />
              <p className="italic text-gray-700 dark:text-[#CBD5E1] text-[14px] leading-relaxed line-clamp-6 overflow-hidden">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img src={item.avatar} alt={item.name} className="w-9 h-9 rounded-full object-cover border border-[#3B82F6]/30" />
                <div>
                  <h4 className="text-black dark:text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 dark:text-[#CBD5E1]/60 text-xs">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0F172A] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0F172A] to-transparent pointer-events-none z-20" />

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 45s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </section>
  );
};

export default Review;