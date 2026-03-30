
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';

const PHONE = "07737 985510";
const PHONE_TEL = "tel:+447737985510";
const EMAIL = "info@abbeytyres.co.uk";

const UniqueFooter = () => {
  const navigate = useNavigate(); // Initialize navigation

  const openingHours = [
    { day: "Mon - Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 5:00 PM" },
    { day: "Sunday", time: "10:00 AM – 4:00 PM" },
  ];

  const handleNavClick = (path) => {
    if (path.startsWith('#')) {
      // If we are on a different page (like Privacy), go home first then scroll
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(path);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(path);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Use navigate for internal routes to prevent reload
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E293B] pt-20 pb-10 relative overflow-hidden border-t border-[#3D4B5E]">
      <div className="absolute bottom-[-8%] left-0 w-full pointer-events-none select-none overflow-hidden text-center">
        <h2 className="text-[15vw] font-black text-white/[0.02] uppercase leading-none tracking-tighter whitespace-nowrap">
          Abbey Tyres
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <img src="/logo.png" alt="Logo" className="w-40 mb-6 rounded-xl border border-[#3D4B5E]" />
            <p className="text-[#CBD5E1] text-sm leading-relaxed mb-8">
              Professional tyre services and MOT testing in Nottingham.
            </p>
            
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" /> Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '#services' },
                { name: 'Reviews', path: '#reviews' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="text-[#CBD5E1] hover:text-white transition-all flex items-center gap-2 group text-sm bg-transparent border-none cursor-pointer"
                  >
                    <ArrowRight size={12} className="text-[#3B82F6] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" /> Contact
            </h4>
            <ul className="space-y-4 text-[#CBD5E1] text-sm">
              <li className="flex flex-col">
                <span className="text-[#3B82F6] font-bold text-[10px] uppercase">Location</span>
               146 Prestwold Rd, Leicester LE5 0EX, United Kingdom
              </li>
              <li className="flex flex-col">
                <span className="text-[#3B82F6] font-bold text-[10px] uppercase">Phone</span>
                <a href={PHONE_TEL} className="hover:text-white">{PHONE}</a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-4 h-0.5 bg-[#3B82F6]" /> Hours
            </h4>
            <div className="space-y-3">
              {openingHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-[#3D4B5E] pb-2">
                  <span className="text-[#CBD5E1] text-sm">{item.day}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${item.time === 'Closed' ? 'text-[#FF4B4B] bg-red-900/20' : 'text-white bg-[#3B82F6]/10'}`}>
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-[#3D4B5E] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#CBD5E1]/50 text-[10px] uppercase tracking-widest">
            © 2026 Abbey Tyres. Powered by <a href="https://ansely.co.uk" className="text-[#3B82F6]">Ansely</a>
          </p>
          <div className="flex gap-5">
            <button onClick={() => handleNavClick('/privacy')} className="text-[#CBD5E1]/40 hover:text-[#3B82F6] text-[10px] uppercase font-bold bg-transparent">Privacy</button>
            <button onClick={() => handleNavClick('/terms')} className="text-[#CBD5E1]/40 hover:text-[#3B82F6] text-[10px] uppercase font-bold bg-transparent">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UniqueFooter;