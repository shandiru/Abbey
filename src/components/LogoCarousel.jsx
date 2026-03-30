"use client";
import React from "react";

const partners = [
  { name: "Hussle", image: "hussle.png", link: "https://www.hussle.com/gyms-in-leicester/progress-works-gym-gym-details" },
  { name: "Wellhub", image: "/wellhub.png", link: "https://wellhub.com/en-us/" },
  { name: "Cybex", image: "/cybex.avif", link: null },
  { name: "Life Fitness", image: "/LifeFitness.png", link: null },
  { name: "Panatta", image: "/panatta-copy.png", link: null },
];

export default function LogoCarousel() {
  const logoClass = "w-32 h-32 flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300";

  return (
    <section className="bg-white dark:bg-[#1E293B] border-y border-gray-200 dark:border-[#3D4B5E] py-12 px-4 transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Title */}
        <div className="flex items-center gap-6">
          <h2 className="text-[#0F172A] dark:text-white text-4xl font-bold">
            Partners
          </h2>
          <div className="h-16 w-px bg-gray-200 dark:bg-[#3D4B5E] hidden md:block" />
        </div>

        {/* Logos */}
        <div className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-4">
          {partners.map((partner, index) =>
            partner.link ? (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${logoClass} rounded-xl border border-gray-200 dark:border-[#3D4B5E] hover:border-[#3B82F6]/50 bg-gray-50 dark:bg-[#0F172A] transition-colors duration-200`}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="object-contain max-w-[80%] max-h-[80%] opacity-70 hover:opacity-100 transition-opacity" 
                />
              </a>
            ) : (
              <div
                key={index}
                className={`${logoClass} rounded-xl border border-gray-200 dark:border-[#3D4B5E] bg-gray-50 dark:bg-[#0F172A]`}
              >
                <img 
                  src={partner.image} 
                  alt={partner.name} 
                  className="object-contain max-w-[80%] max-h-[80%] opacity-60" 
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}