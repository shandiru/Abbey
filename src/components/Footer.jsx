import React from 'react';
import { Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';

const PHONE = "07737 985510";
const PHONE_TEL = "tel:+447737985510";
const EMAIL = "info@abbeytyres.co.uk"; // Replace with your actual email if different

const UniqueFooter = () => {
  const openingHours = [
    { day: "Mon - Fri", time: "8:30 AM – 5:30 PM" },
    { day: "Saturday", time: "8:30 AM – 1:30 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  const handleNavClick = (e, path) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/' + path;
      }
    }
  };

  return (
    <footer className="bg-[#1E293B] dark:bg-[#1E293B] pt-20 pb-10 relative overflow-hidden border-t border-[#3D4B5E]">
      {/* Background watermark text */}
      <div className="absolute bottom-[-8%] left-0 w-full pointer-events-none select-none overflow-hidden">
        <h2 className="text-[15vw] font-black text-white/[0.02] uppercase leading-none tracking-tighter whitespace-nowrap">
          Abbey Tyres
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Abbey Tyres Logo"
                className="w-full h-full rounded-xl border border-[#3D4B5E]"
              />
            </div>
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8">
              Your local experts in Nottingham for quality tyres, professional MOT testing, and reliable vehicle servicing.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-[#3D4B5E] flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 group"
              >
                <Facebook size={16} className="text-[#CBD5E1] group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg border border-[#3D4B5E] flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 group"
              >
                <Instagram size={16} className="text-[#CBD5E1] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" />
              Quick Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '#services' },
              
                { name: 'Customer Reviews', path: '#reviews' },
                { name: 'Contact Us', path: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-[#CBD5E1] hover:text-white transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight
                      size={12}
                      className="text-[#3B82F6] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" />
              Contact Info
            </h4>
            <ul className="space-y-5 text-[#CBD5E1] text-sm">
              <li className="flex flex-col">
                <span className="text-[#3B82F6] font-bold text-[10px] mb-1 uppercase tracking-wider">Location</span>
                123 Abbey Rd., London NW6 4DN<br />
United Kingdom
               
              </li>
              <li className="flex flex-col">
                <span className="text-[#3B82F6] font-bold text-[10px] mb-1 uppercase tracking-wider">Phone</span>
                <a href={PHONE_TEL} className="hover:text-white transition-colors">{PHONE}</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[#3B82F6] font-bold text-[10px] mb-1 uppercase tracking-wider">Email</span>
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors text-[13px]">{EMAIL}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" />
              Opening Hours
            </h4>
            <div className="space-y-3">
              {openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#3D4B5E] pb-2">
                  <span className="text-[#CBD5E1] text-sm">{item.day}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                    item.time === 'Closed'
                      ? 'text-[#FF4B4B] bg-red-900/20 border border-red-900/30'
                      : 'text-white bg-[#3B82F6]/10 border border-[#3B82F6]/30'
                  }`}>
                    {item.time}
                  </span>
                </div>
              ))}
              <p className="text-[10px] text-[#CBD5E1]/60 italic mt-4 flex items-center gap-2">
                <Clock size={11} className="text-[#3B82F6]" />
                Walk-ins welcome for tyre repairs.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#3D4B5E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CBD5E1]/50 text-[10px] uppercase tracking-widest font-medium">
            © 2026 Abbey Tyres. All rights reserved.
          </p>
          <p className="text-[#CBD5E1]/50 text-[10px] uppercase tracking-widest font-medium">
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#3B82F6] text-[#3B82F6]/70 transition-colors"
            >
              Ansely
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-5 text-[10px] uppercase tracking-widest font-bold">
            {['Terms', 'Privacy'].map((link, i) => (
              <a
                key={i}
                href={`/${link.toLowerCase()}`}
                className="text-[#CBD5E1]/40 hover:text-[#3B82F6] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;