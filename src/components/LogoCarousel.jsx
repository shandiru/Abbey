

const tyreBrands = [
  { name: "Goodyear", image: "/brand-1.png" },
  { name: "Bridgestone", image: "/brand-2.png" },
  { name: "Michelin", image: "/brand-3.png" },
  { name: "BFGoodrich", image: "/brand-4.png" },
  { name: "Pirelli", image: "/brand-5.png" },
  { name: "Continental", image: "/brand-6.png" },
];

export default function LogoCarousel() {
  const logoClass = "w-32 h-20 flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300";

  return (
    <section className="bg-white dark:bg-[#0F172A] border-y border-gray-200 dark:border-[#3D4B5E] py-12 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        
        {/* Title Section */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <div className="text-center lg:text-left">
            <h2 className="text-[#0F172A] dark:text-white text-2xl font-black uppercase tracking-tight">
              Premium <span className="text-[#3B82F6]">Tyre Brands</span>
            </h2>
          </div>
          <div className="h-12 w-px bg-gray-200 dark:bg-[#3D4B5E] hidden lg:block" />
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
          {tyreBrands.map((brand, index) => (
            <div
              key={index}
              className={`${logoClass} rounded-xl border border-gray-100 dark:border-[#3D4B5E] bg-gray-50 dark:bg-[#1E293B] hover:border-[#3B82F6]/30 transition-all duration-300`}
            >
              <img 
                src={brand.image} 
                alt={brand.name} 
                className="object-contain max-w-full max-h-full transition-all duration-300" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}