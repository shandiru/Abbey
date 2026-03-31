import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { img: "/1.jpg" },
  { img: "/2.jpg" },
  { img: "/3.jpg" },
  { img: "/4.jpg" },
  { img: "/5.jpg" },
  { img: "/6.jpg" },
  { img: "/7.jpg" },
  { img: "/8.jpg" },
  { img: "Empire.jpg" },
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToCard = (index) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const cards = scroller.querySelectorAll("[data-card]");
    const targetCard = cards[index];
    if (targetCard) {
      scroller.scrollTo({
        left: targetCard.offsetLeft - scroller.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    scrollToCard(newIndex);
  };

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section 
      className="bg-white dark:bg-[#0F172A] py-16 px-4 transition-colors duration-300" 
      id="gallery"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-bold text-3xl uppercase mb-12 text-[#0F172A] dark:text-white tracking-wider">
          Gallery
        </h2>

        <div className="relative group">
          {/* Left Arrow - Fixed for Mobile/Tablet */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 md:left-4 z-50 top-1/2 -translate-y-1/2 bg-[#3B82F6] text-white rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 border border-white/10 hover:scale-110 active:scale-95"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-6 pb-10">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  data-card
                  className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] px-3 py-3 border border-gray-200 dark:border-[#3D4B5E] rounded-2xl shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#1E293B] snap-start"
                >
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.img}
                      alt={`Gallery item ${idx + 1}`}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-in-out hover:scale-110 pointer-events-none"
                      onClick={() => scrollToCard(idx)}
                      draggable="false"
                    />
                  </div>
                  <p className="mt-4 text-sm font-medium text-gray-500 dark:text-[#CBD5E1]">
                    View Project {idx + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>

        
          <button
            onClick={scrollRight}
            className="absolute right-2 md:right-4 z-50 top-1/2 -translate-y-1/2 bg-[#3B82F6] text-white rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 border border-white/10 hover:scale-110 active:scale-95"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}