import  { useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Excellent customer service, very knowledgeable staff, sorted out new tyres within 30 mins for a very reasonable price! Keep up the good work.",
    name: "Mohamed Patel",
    role: "Customer",
    color: "bg-blue-500",
  },
  {
    id: 2,
    quote: "Absolutely wonderful little business to go to! I had been let down by a major online company for some new tyres and they were pivotal to me passing my MOT. I rang Abbey Tyres and they were able to get me in same day for some part worns that would get me through my MOT. While I waited the owner and I chatted away, he was so kind and easy to talk to. The tyres were fitted within 15 minutes and I was away! I definitely recommend and will be returning in future.",
    name: "Lottie Giblin",
    role: "Repeat Client",
    color: "bg-emerald-500",
  },
  {
    id: 3,
    quote: "I drove 50 mins to this guy he had the only part worn tyres in the super rare size I needed. I called every shop in Coventry and Birmingham before I called him. He sold them to me at a fair price, good service — guy was run off his feet but still offered me a drink. Really nice chap and great customer service. Definitely recommend.",
    name: "Dilraj Singh",
    role: "Fleet Manager",
    color: "bg-purple-500",
  },
  {
    id: 4,
    quote: "Excellent service. I took my Mercedes to Abbey Tyres for its wheel issue. They fixed the issue at a courteous, timely, and competitive price.",
    name: "Stephen Mathew",
    role: "Fleet Manager",
    color: "bg-orange-500",
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
      {/* Glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#3B82F6]/5 dark:bg-[#3B82F6]/8 blur-[140px] rounded-full -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/3 dark:bg-[#3B82F6]/5 blur-[120px] rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-14" data-aos="fade-up">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-black dark:text-white">
            What Our <span className="text-[#3B82F6]">Customers</span> Say
          </h2>
          <p className="text-gray-600 dark:text-[#CBD5E1] text-sm mt-3 max-w-lg">
            At Abbey Tyres, we're committed to honest advice, quality parts, and service you can count on.
          </p>
        </div>

       
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
              className="bg-gray-50 dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#3B82F6]/50 hover:shadow-xl transition-all duration-300 w-[360px] h-[320px]"
            >
              <div>
                <StarRating />
                <p className="italic text-gray-700 dark:text-[#CBD5E1] text-[14px] leading-relaxed line-clamp-7 overflow-hidden">
                  "{item.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {/* Initial Letter Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ${item.color}`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 dark:text-[#CBD5E1]/60 text-xs">{item.role}</p>
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
              className="bg-gray-50 dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] rounded-2xl p-6 flex flex-col justify-between shrink-0 hover:border-[#3B82F6]/50 hover:shadow-xl transition-all duration-300 w-[340px] h-[300px]"
            >
              <div>
                <StarRating />
                <p className="italic text-gray-700 dark:text-[#CBD5E1] text-[14px] leading-relaxed line-clamp-6 overflow-hidden">
                  "{item.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {/* Initial Letter Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-sm ${item.color}`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-black dark:text-white font-semibold text-sm">{item.name}</h4>
                  <p className="text-gray-500 dark:text-[#CBD5E1]/60 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-[#0F172A] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-[#0F172A] to-transparent pointer-events-none z-20" />

      
    </section>
  );
};

export default Review;