import  { useState, useEffect, useMemo } from 'react';

const ExpandingCards = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const TIMER_DURATION = 5000;
  const VISIBLE_COUNT = 3;

  const cards = [
    {
      number: '01',
      title: 'Full Service',
      description: 'A comprehensive inspection and maintenance of all major vehicle systems, including oil change, filters, fluids, and a full mechanical check.',
      image: '/fullservice.png',
     
    },
    {
      number: '02',
      title: 'Half Service',
      description: 'A basic check covering essential items like oil, oil filter, and key fluid levels to keep your vehicle running smoothly between full services.',
      image: '/fullservice.png',
      
    },
    {
      number: '03',
      title: 'Brakes',
      description: 'Full inspection and repair of your braking system, including discs, calipers, and fluid, to ensure safe and responsive stopping power.',
      image: '/brake.png',
     
    },
    {
      number: '04',
      title: 'Brake Pads',
      description: ' Replacement of worn brake pads to maintain effective braking performance and prevent damage to your discs.',
      image: '/Brake Pads.png',
     
    },
    {
      number: '05',
      title: 'Clutches',
      description: 'Diagnosis and replacement of a worn or slipping clutch to restore smooth gear changes and reliable power transfer.',
      image: '/Clutches.png',
      
    },
    {
      number: '06',
      title: 'Exhausts',
      description: 'Inspection, repair, or replacement of exhaust components to reduce emissions, eliminate noise, and maintain engine efficiency.',
      image: "/Exhausts.png",
      
    },
    {
      number: '07',
      title: 'Bearing Work',
      description: 'Detection and replacement of worn wheel or engine bearings to eliminate noise, vibration, and prevent further mechanical damage.',
      image: '/Bearing Work.png',
     
    },
    {
      number: '08',
      title: 'MOT',
      description: 'An official government-required annual test to ensure your vehicle meets the minimum road safety and environmental standards.',
      image: '/mot.png',
     
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleCards = useMemo(() => {
    if (isMobile) return [{ ...cards[activeCard], originalIndex: activeCard }];
    const result = [];
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const index = (activeCard + i) % cards.length;
      result.push({ ...cards[index], originalIndex: index });
    }
    return result;
  }, [activeCard, isMobile, cards]);

  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (TIMER_DURATION / 50));
        return next >= 100 ? 100 : next;
      });
    }, 50);
    const cardTimer = setTimeout(() => {
      setActiveCard((prev) => (prev + 1) % cards.length);
    }, TIMER_DURATION);
    return () => { clearInterval(progressInterval); clearTimeout(cardTimer); };
  }, [activeCard, cards.length]);

  const handleCardClick = (originalIndex) => {
    if (originalIndex !== activeCard) {
      setActiveCard(originalIndex);
      setProgress(0);
    }
  };

  const handlePrevious = () => { setActiveCard((prev) => (prev - 1 + cards.length) % cards.length); setProgress(0); };
  const handleNext = () => { setActiveCard((prev) => (prev + 1) % cards.length); setProgress(0); };

  return (
    <div
      id="services"
      className="w-full min-h-screen scroll-m-20 bg-white dark:bg-[#0F172A] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 transition-colors duration-500"
    >
      {/* Header */}
      <div className="mb-10 md:mb-14 text-center">
      
        <h2 className="text-[#0F172A] dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-widest mt-2">
          Our Services
        </h2>
        <p className="text-[#3D4B5E] dark:text-[#CBD5E1] text-xs mt-2">
          Showing {activeCard + 1} of {cards.length}
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1400px] mb-6 md:mb-0">
        {isMobile ? (
          <div className="relative">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-[#1E293B] border border-[#3D4B5E] rounded-full p-3 shadow-lg hover:border-[#3B82F6] transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-[#1E293B] border border-[#3D4B5E] rounded-full p-3 shadow-lg hover:border-[#3B82F6] transition-colors"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Mobile Card */}
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-[#1E293B] border border-gray-200 dark:border-[#3D4B5E] shadow-xl min-h-[500px] sm:min-h-[600px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 dark:bg-[#3D4B5E]/40 overflow-hidden z-20">
                <div className="absolute left-0 top-0 h-full bg-[#3B82F6] transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-5 h-full">
                <div>
                  <div className="text-5xl font-black text-gray-100 dark:text-white/10">{cards[activeCard].number}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-2">{cards[activeCard].title}</h3>
                </div>
                <p className="text-gray-600 dark:text-[#CBD5E1] text-sm leading-relaxed">{cards[activeCard].description}</p>
                <div className="w-full h-48 sm:h-64 overflow-hidden rounded-xl border border-gray-200 dark:border-[#3D4B5E]">
                  <img src={cards[activeCard].image} alt={cards[activeCard].title} className="w-full h-full object-cover" />
                </div>
                
              </div>
            </div>
          </div>
        ) : (
          <div className="flex gap-4 lg:gap-6 h-[75vh] min-h-[600px] items-stretch">
            {visibleCards.map((card, displayIndex) => {
              const isFirst = displayIndex === 0;
              return (
                <div
                  key={card.originalIndex}
                  onClick={() => handleCardClick(card.originalIndex)}
                  className={`
                    relative overflow-hidden rounded-2xl cursor-pointer
                    transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]
                    bg-white dark:bg-[#1E293B]
                    border hover:shadow-2xl group
                    ${isFirst
                      ? 'flex-[2] border-[#3B82F6]/40 shadow-[0_0_30px_rgba(59,130,246,0.1)]'
                      : 'flex-1 border-gray-200 dark:border-[#3D4B5E] hover:border-[#3B82F6]/30'
                    }
                  `}
                >
                  {isFirst && (
                    <div className="absolute bottom-0 left-0 w-1.5 h-full bg-gray-100 dark:bg-[#3D4B5E]/40 overflow-hidden z-20">
                      <div className="absolute bottom-0 left-0 w-full bg-[#3B82F6] transition-all duration-100 ease-linear" style={{ height: `${progress}%` }} />
                    </div>
                  )}

                  <div className="p-6 lg:p-8 flex flex-col gap-5 h-full relative z-10">
                    <div>
                      <div className={`text-5xl lg:text-6xl font-black transition-all duration-700 ${isFirst ? 'text-[#3B82F6]/20 scale-110' : 'text-gray-100 dark:text-white/10 scale-90'}`}>
                        {card.number}
                      </div>
                      <h3 className={`text-lg lg:text-2xl font-bold transition-colors duration-500 mt-2 ${isFirst ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-[#CBD5E1]'}`}>
                        {card.title}
                      </h3>
                    </div>

                    <div className={`flex-1 flex flex-col justify-between transition-all duration-700 ${isFirst ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                      <p className="text-gray-600 dark:text-[#CBD5E1] text-sm lg:text-base leading-relaxed">{card.description}</p>
                      <div className="w-full h-40 lg:h-48 overflow-hidden rounded-xl border border-gray-200 dark:border-[#3D4B5E] my-4">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                      </div>
                      <div className="text-[9px] lg:text-[10px] font-bold tracking-widest text-[#3B82F6] uppercase">{card.tags}</div>
                    </div>
                  </div>

                  {!isFirst && (
                    <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-0" />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      
      <div className="flex gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => { setActiveCard(i); setProgress(0); }}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${
              activeCard === i ? 'w-8 bg-[#3B82F6]' : 'w-2 bg-gray-200 dark:bg-[#3D4B5E] hover:bg-[#3B82F6]/40'
            }`}
            aria-label={`Go to service ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpandingCards;